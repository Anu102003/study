// App.js
import React, { useReducer, useState } from 'react';

// Define the initial state
const initialState = {
  todos: [],
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, { text: action.payload, completed: false }] };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'REMOVE_TODO':
      return { todos: state.todos.filter((_, index) => index !== action.payload) };
    default:
      return state;
  }
};

// App component using useReducer
const Reducer2 = () => {
  // useReducer returns the current state and a dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: index })}
            />
            {todo.text}
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: index })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default Reducer2;
