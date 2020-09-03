import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <>
      <h1>My Project</h1>
      {habits === null ? (
        <p>Loading...</p>
      ) : habits.length === 0 ? (
        <p>No habit available</p>
      ) : (
        <>
          <h2>Available habits</h2>
          <ol>
            {habits.data.map((habit, index) => (
              <li key={index}>
                newHabit: {habit.newHabit} - oldHabit: {habit.oldHabit}
              </li>
            ))}
          </ol>
        </>
      )}

      <form onSubmit={submitForm}>
        <input onChange={(e) => setNewHabit(e.target.value)} type='text' placeholder='Enter your new habit' />
        <input onChange={(e) => setOldHabit(e.target.value)} type='text' placeholder='Enter your old habit' />
        <input type='submit' />
      </form>
    </>
  );
};
export default App;
