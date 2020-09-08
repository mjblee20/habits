import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Todo() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState('');
  const [priority, setPrior] = useState(5);

  useEffect(() => {
    axios
      .get('/api/todos')
      .then((tasks) => {
        console.log(tasks);
        setTaskList(tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addTask = () => {
    axios
      .post('/api/habits', {
        task: task,
        priority: priority,
      })
      .then(function () {
        alert('New task created successfully');
        window.location.reload();
      })
      .catch(function () {
        alert('Could not creat task. Please try again');
      });
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>{}</ul>
      <form onSubmit={addTask}>
        <input onChange={(e) => setTask(e.target.value)} type='text' placeholder='New Task' />
        <input onChange={(e) => setPrior(e.target.value)} type='number' min='1' max='9' placeholder='5' />
        <input type='submit' />
      </form>
    </div>
  );
}

export default Todo;
