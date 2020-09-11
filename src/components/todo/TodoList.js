import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './TodoList.css';

function TodoList() {
  const [taskList, setTaskList] = useState(null);

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
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='task-list-container'>
      {taskList === null ? (
        <p>Loading...</p>
      ) : (
        <ul className='todo-list-container'>
          {taskList.data.map((task, index) => {
            return (
              // TODO: Smaller item and allow editing
              <li key={index}>
                {/* <input type='text' onChange={(e) => setTask(e.target.value)} value={task.task} /> */}
                <button type='submit' className='todo-item' value={task._id} onClick={removeTask}>
                  {task.task}
                </button>
                {/* <button type='submit' name='update-btn' value={task._id} onClick={updateTask}>
                      Edit
                    </button> */}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
