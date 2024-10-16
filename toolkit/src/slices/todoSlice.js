import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteTodo, fetchTodos, updateTodo } from "../utils/auth";

export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
    try {
        const response1 = await fetchTodos();
        return response1.data;
    } catch (error) {
        console.error(error, "Error fetching todos");
        throw new Error('Failed to fetch data');
    }
});

export const removeTodo = createAsyncThunk("removeTodo", async (id) => {
    try {
        await deleteTodo(id);
        return id;
    } catch (error) {
        console.error("Error deleting todo:", error);
        throw new Error('Failed to delete todo');
    }
});

export const modifyTodo = createAsyncThunk("updateTodo", async ({ id, data }) => {
    try {
        const response = await updateTodo(id, data);
        return response.data;
    } catch (error) {
        console.error("Error updating todo:", error);
        throw new Error('Failed to update todo');
    }
});


const initialState = {
    isLoading: false,
    error: null,
    data: []
}

const handlePending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodo.pending, handlePending)
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchTodo.rejected, handleRejected)
            .addCase(removeTodo.pending, handlePending)
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = state.data.filter(todo => todo.id !== action.payload);
            })
            .addCase(removeTodo.rejected, handleRejected)
            .addCase(modifyTodo.pending, handlePending)
            .addCase(modifyTodo.fulfilled, (state, action) => {
                state.isLoading = false;
                const index = state.data.findIndex(todo => todo.id === action.payload.id);
                if (index !== -1) {
                    state.data[index] = action.payload;
                }
            })
            .addCase(modifyTodo.rejected, handleRejected);

    }
})

export default todoSlice.reducer;
