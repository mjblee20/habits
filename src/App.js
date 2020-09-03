import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HabitList from './components/habitList/HabitList';

const App = function () {
  const [habits, setHabits] = useState(null);

  const [newHabit, setNewHabit] = useState('');
  const [oldHabit, setOldHabit] = useState('');
  useEffect(() => {
    axios
      .get('/api/habits')
      .then((habits) => setHabits(habits))
      .catch((err) => console.log(err));
  }, []);

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
    <div>
      <HabitList habits={habits} />

      <form onSubmit={submitForm}>
        <input onChange={(e) => setNewHabit(e.target.value)} type='text' placeholder='Enter your new habit' />
        <input onChange={(e) => setOldHabit(e.target.value)} type='text' placeholder='Enter your old habit' />
        <input type='submit' />
      </form>
    </div>
  );
};
export default App;
