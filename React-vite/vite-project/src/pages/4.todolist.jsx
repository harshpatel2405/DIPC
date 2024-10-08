// import React, { useState } from 'react';
// import '../../css_files/todolist.css';

// const ToDoList = () => {
//   const [todos, setTodos] = useState(() => {
//     // Initialize state from localStorage if available
//     const savedTodos = localStorage.getItem('todos');
//     return savedTodos ? JSON.parse(savedTodos) : []; // Return parsed todos or an empty array
//   });

//   const [newTodo, setNewTodo] = useState('');

//   // Function to add a new todo
//   const addTodo = () => {
//     if (newTodo.trim()) {
//       const updatedTodos = [...todos, newTodo.trim()]; // Create a new array with the new todo
//       setTodos(updatedTodos); // Update the state
//       localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Save to localStorage
//       setNewTodo(''); // Clear the input field
//     }
//   };

//   // Function to remove a todo
//   const removeTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index); // Filter out the removed todo
//     setTodos(updatedTodos); // Update the state
//     localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Update localStorage
//   };

//   return (
//     <div className="todo-list">
//       <h1>To-Do List</h1>
//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)} // Update the input value
//         placeholder="Add a new task"
//       />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => removeTodo(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ToDoList;


import React, { useState } from 'react';
import '../../css_files/todolist.css';

const ToDoList = () => {
  const [todos, setTodos] = useState([]); // Initialize with an empty array
  const [newTodo, setNewTodo] = useState(''); // State for new todo input

  // Function to add a new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]); // Add new todo
      setNewTodo(''); // Clear input
    }
  };

  // Function to remove a todo
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Remove todo by index
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} // Update input
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
