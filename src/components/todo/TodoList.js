import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './TodoList.css';

function TodoList(props) {
  return (
    <div className='task-list-container'>
      {props.taskList === null ? (
        <p>Loading...</p>
      ) : (
          <ul className='todo-list-container'>
            {props.taskList.data.map((task, index) => {
              return (
                <li key={index}>
                  <button type='submit' className='todo-item' value={task._id} onClick={props.removeTask}>
                    {task.task}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
    </div>
  );
}

export default TodoList;