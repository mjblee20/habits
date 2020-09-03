import React from 'react';

import HabitForm from './form/HabitForm';
import HabitList from './list/HabitList';

function Habit(props) {
  return (
    <div>
      <h1> Habit Builder</h1>
      <HabitList habits={props.habits} />

      <HabitForm />
    </div>
  );
}

export default Habit;
