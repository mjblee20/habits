import React, { useState } from 'react';
import axios from 'axios';

import './Todo.css';
import TodoList from '../components/todo/TodoList';

function Todo() {
  const [task, setTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    axios
      .post('https://habit-server.herokuapp.com/api/todos/', {
        task: task,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateTask = (e) => {
    e.preventDefault();
    axios
      .put('https://habit-server.herokuapp.com/api/todos/update/' + e.target.value)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='todo-container'>
      <div className='todo-title-container'>
        <h1>To-Do List</h1>
      </div>

      <div className='todo-body-container'>
        <TodoList />
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
