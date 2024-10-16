import Cookies from 'js-cookie';
import axios from 'axios';

// Base URL 
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export const fetchTodos = () => api.get('/todos');

export const deleteTodo = (id) => api.delete(`/posts/${id}`);

export const updateTodo = (id, data) => api.put(`/posts/${id}`, data);

// Function to set tokens in cookies
export const setTokens = (accessToken, refreshToken, csrfToken) => {
    Cookies.set('accessToken', accessToken, {
        secure: true,
        sameSite: 'Strict',
    });
    Cookies.set('refreshToken', refreshToken, {
        secure: true,
        sameSite: 'Strict',
        httpOnly: true,
    });
    Cookies.set('csrfToken', csrfToken, {
        secure: true,
        sameSite: 'Strict',
    });
};

export const getAccessToken = () => Cookies.get('accessToken');

export const getCsrfToken = () => Cookies.get('csrfToken');

export const removeTokens = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    Cookies.remove('csrfToken');
};


// Function to refresh the access token using a refresh token
export const refreshToken = async () => {
    try {
        const csrfToken = getCsrfToken();
        const response = await axios.post(
            `${BASE_URL}/refresh-token`,
            {},
            {
                headers: { 'X-CSRF-Token': csrfToken },
                withCredentials: true,
            }
        );
        setTokens(response.data.accessToken, response.data.refreshToken, csrfToken);
        return response.data.accessToken;
    } catch (error) {
        removeTokens();
        throw error;
    }
};


// Request interceptor to add tokens to headers
api.interceptors.request.use(
    config => {
        const accessToken = getAccessToken();
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
            config.headers['X-CSRF-Token'] = getCsrfToken();
        }
        return config;
    },
    error => Promise.reject(error)
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const newAccessToken = await refreshToken();
                api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);
