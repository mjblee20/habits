import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Todo.css';

function Todo() {
  const [taskList, setTaskList] = useState(null);
  const [task, setTask] = useState('');

  useEffect(() => {
    axios
      .get('https://habit-server.herokuapp.com/api/todos/')
      .then((tasks) => {
        console.log(tasks);
        setTaskList(tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    axios
      .post('https://habit-server.herokuapp.com/api/todos/', {
        task: task,
      })
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateTask = (e) => {
    axios
      .put('https://habit-server.herokuapp.com/api/todos/update/' + e.target.value)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeTask = (e) => {
    axios
      .delete('https://habit-server.herokuapp.com/api/todos/delete/' + e.target.value)
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='todo-container'>
      <div className='todo-title-container'>
        <h1>To-Do List</h1>
      </div>

      <div className='todo-body-container'>
        <div className='task-list-container'>
          {taskList === null ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {taskList.data.map((task, index) => {
                return (
                  <li key={index}>
                    {/* <input type='text' onChange={(e) => setTask(e.target.value)} value={task.task} /> */}
                    <span>{task.task}</span>
                    {/* <button type='submit' name='update-btn' value={task._id} onClick={updateTask}>
                      Edit
                    </button> */}
                    <button type='submit' name='delete-btn' value={task._id} onClick={removeTask}>
                      X
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className='task-form-container'>
          <form onSubmit={addTask}>
            <input onChange={(e) => setTask(e.target.value)} type='text' placeholder='New Task' />
            <input type='submit' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Todo;
