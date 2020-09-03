import React from 'react';

function HabitList(props) {
  return (
    <div>
      <h1>ListBit</h1>
      {props.habits === null ? (
        <p>Loading...</p>
      ) : props.habits.length === 0 ? (
        <p>No habit available</p>
      ) : (
        <>
          <h2>Available habits</h2>
          <ol>
            {console.log(props.habits)}
            {props.habits.data.map((habit, index) => (
              <li key={index}>
                newHabit: {habit.newHabit} - oldHabit: {habit.oldHabit}
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}

export default HabitList;
