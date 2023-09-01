import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  // Function to add a task to the list
  function add() {
    if (input.trim() !== '') { // Check if input is not empty
      setTasks([...tasks, input]);
      setInput(''); // Clear the input field
    }
  }

  // Function to delete a task from the list
  function deleteTask(task) {
    setTasks(tasks.filter(t => t !== task));
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <p>To-Do List</p>
      <div>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={add}>Add Todo</button>
      </div>
      <ul>
        {tasks.length > 0 && tasks.map((task, index) => (
          <li style={{ display: 'flex', justifyContent: 'space-between' }} key={index}>
            <span>{task}</span>
            <button onClick={() => deleteTask(task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
