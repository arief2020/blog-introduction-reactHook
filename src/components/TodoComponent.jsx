import React, { useReducer, useState } from 'react';

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default function TodoComponent() {
  const [text, setText] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: 'ADD_TODO', payload: text });
    setText('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <button
              type="button"
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() =>
                dispatch({ type: 'TOGGLE_TODO', payload: todo.id })
              }
            >
              {todo.text}
            </button>
            <button
              type="button"
              onClick={() =>
                dispatch({ type: 'DELETE_TODO', payload: todo.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
