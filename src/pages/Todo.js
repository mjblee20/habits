import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Todo.css';
import TodoList from '../components/todo/TodoList';
import TodoForm from '../components/todo/TodoForm';

function Todo() {
  const [taskList, setTaskList] = useState(null);
  const [task, setTask] = useState('');

  useEffect(() => {
    getTask();
  }, []);

  const getTask = () => {
    axios
      .get('https://habit-server.herokuapp.com/api/todos/')
      .then((tasks) => {
        console.log(tasks);
        setTaskList(tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeTask = (e) => {
    axios
      .delete('https://habit-server.herokuapp.com/api/todos/delete/' + e.target.value)
      .then(function (response) {
        console.log(response);
        getTask();
        setTask('');
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
        var form = document.getElementById("todo-form");
        form.reset();
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
        <TodoForm getTask={getTask} task={task} setTask={setTask} />
        {/* <div className='task-form-container'>
          <form onSubmit={addTask}>
            <input
              className='task-input'
              onChange={(e) => setTask(e.target.value)}
              type='text'
              placeholder='New Task'
            />
            <input className='task-add-btn' value='+' type='submit' />
          </form>
        </div> */}
        <TodoList getTask={getTask} removeTask={removeTask} taskList={taskList} />
      </div>
    </div>
  );
}

export default Todo;
