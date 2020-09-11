import React, { useState } from 'react';
import axios from 'axios';

import './HabitForm.css';

function Form() {
  const [newHabit, setNewHabit] = useState('');
  const [oldHabit, setOldHabit] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    if (newHabit === '') {
      alert('Please fill the newHabit field');
    }
    if (oldHabit === '') {
      alert('Please fill the oldHabit field');
    }
    axios
      .post('https://habit-server.herokuapp.com/api/habits/', {
        oldHabit: oldHabit,
        newHabit: newHabit,
      })
      .then(function () {
        alert('Habit created successfully');
        window.location.reload();
      })
      .catch(function () {
        alert('Could not creat habit. Please try again');
      });
  };

  return (
    <div className='habit-form-container'>
      <h1>Add New Habit</h1>
      <form onSubmit={submitForm}>
        <input onChange={(e) => setNewHabit(e.target.value)} type='text' placeholder='Enter your new habit' />
        <input onChange={(e) => setOldHabit(e.target.value)} type='text' placeholder='Enter your old habit' />
        <input type='submit' />
      </form>
    </div>
  );
}

export default Form;
