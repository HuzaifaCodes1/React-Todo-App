import React, { useState } from 'react';
import './App.css';
import './Checkbox.css'; // Make sure to import your Checkbox styles if needed

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                className="check"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
                id={`check-${index}`}
              />
              <label htmlFor={`check-${index}`} className="label">
                <svg width="45" height="45" viewBox="0 0 95 95">
                  <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                  <g transform="translate(0,-952.36222)">
                    <path
                      d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"
                      stroke="black"
                      strokeWidth="3"
                      fill="none"
                    ></path>
                  </g>
                </svg>
                <span>{todo.text}</span>
              </label>
            </div>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

