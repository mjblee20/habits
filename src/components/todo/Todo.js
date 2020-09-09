import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Todo() {
  const [taskList, setTaskList] = useState(null);
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
      .post('/api/todos', {
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

  const removeTask = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    axios
      .delete('/api/todos/delete-task', {
        id: e.target.value,
      })
      .then(function () {
        alert('task successfully removed');
        window.location.reload();
      })
      .catch(function () {
        alert('could not remove task');
      });
  };

  return (
    <div>
      <h1>To-Do List</h1>
      {taskList === null ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {taskList.data.map((task, index) => {
            return (
              <li key={index}>
                <span>{task.task}</span>
                <span>{task.priority}</span>
                {/* TODO: when clicked remove item */}
                <button type='submit' name='btn' value={task._id} onClick={removeTask}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <form onSubmit={addTask}>
        <input onChange={(e) => setTask(e.target.value)} type='text' placeholder='New Task' />
        <input onChange={(e) => setPrior(e.target.value)} type='number' min='1' max='9' placeholder='5' />
        <input type='submit' />
      </form>
    </div>
  );
}

export default Todo;
