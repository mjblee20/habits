import React, { useState } from 'react';
import axios from 'axios';

function form() {
  const [newHabit, setNewHabit] = useState('');
  const [oldHabit, setOldHabit] = useState('');

  function submitForm() {
    if (newHabit === '') {
      alert('Please fill the username field');
      return;
    }
    if (oldHabit === '') {
      alert('Please fill the email field');
      return;
    }
    axios
      .post('/api/habits', {
        newHabit: newHabit,
        oldHabit: oldHabit,
      })
      .then(function () {
        alert('Habit created successfully');
        window.location.reload();
      })
      .catch(function () {
        alert('Could not creat habit. Please try again');
      });
  }

  return (
    <form onSubmit={submitForm}>
      <input onChange={(e) => setNewHabit(e.target.value)} type='text' placeholder='Enter your new habit' />
      <input onChange={(e) => setOldHabit(e.target.value)} type='text' placeholder='Enter your old habit' />
      <input type='submit' />
    </form>
  );
}

export default form;
