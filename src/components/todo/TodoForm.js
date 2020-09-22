import React from 'react';
import axios from 'axios';

import './TodoForm.css';

function TodoForm(props) {
  const addTask = (e) => {
    e.preventDefault();
    axios
      .post('https://habit-server.herokuapp.com/api/todos/', {
        task: props.task,
      })
      .then(function (response) {
        console.log(response);
        props.getTask();
        document.getElementById('todo-form').reset();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='task-form-container'>
      <form onSubmit={addTask} id='todo-form'>
        <input
          className='task-input'
          onChange={(e) => props.setTask(e.target.value)}
          type='text'
          placeholder='New Task'
          id="todo-input"
        />
        <input className='task-add-btn' value='+' type='submit' />
      </form>
    </div>
  );
}

export default TodoForm;
