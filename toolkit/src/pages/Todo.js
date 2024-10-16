import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo, modifyTodo, removeTodo } from '../slices/todoSlice'

export const Todo = () => {
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todoStore)
    useEffect(() => {
        dispatch(fetchTodo())
    }, [])
    const handleDelete = (id) => {
        dispatch(removeTodo(id));
    };
    const handleUpdate = (id) => {
        dispatch(modifyTodo({
            id,
            data: {
                id: id,
                title: 'foo',
                body: 'bar',
                userId: 1,
            }
        }));
    };
    return (
        <div>Todo
            {
                todo.error && !todo.isLoading && <p>Error................ {todo.error}</p>
            }
            {
                todo.isLoading && !todo.error && <h1>loading................</h1>
            }
            {
                !todo.isLoading && !todo.error && todo.data.length > 0 && todo.data.map((item, index) => (
                    <div key={index}>
                        <h6>{item.title}</h6>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                        <button onClick={() => handleUpdate(item.id)}>Update</button>
                        <h3>----------</h3>
                    </div>
                ))
            }
        </div>
    )
}
