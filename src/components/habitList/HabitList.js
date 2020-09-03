import React from 'react';

function habitList(props) {
  return (
    <div>
      <h1>My Project</h1>
      {props.habits === null ? (
        <p>Loading...</p>
      ) : props.habits.length === 0 ? (
        <p>No habit available</p>
      ) : (
        <>
          <h2>Available habits</h2>
          <ol>
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

export default habitList;