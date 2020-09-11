import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './HabitList.css';

function HabitList() {
  const [habits, setHabits] = useState(null);

  useEffect(() => {
    axios
      .get('https://habit-server.herokuapp.com/api/habits/')
      .then((habits) => setHabits(habits))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='habit-list-container'>
      <h1>List of Habits In Progress</h1>
      {habits === null ? (
        <p>Loading...</p>
      ) : habits.data.length === 0 ? (
        <p>No habit available</p>
      ) : (
        <>
          <h2>Current Habit List</h2>
          <ol>
            {habits.data.map((habit, index) => (
              <li key={index} id={habit.id}>
                oldHabit: {habit.oldHabit} - newHabit: {habit.newHabit}
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}

export default HabitList;
