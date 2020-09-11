import React from 'react';

import HabitForm from '../components/habit/HabitForm';
import HabitList from '../components/habit/HabitList';

import './Habit.css';

function Habit() {
  return (
    <div className='habit-container'>
      <div className='habit-title-container'>
        <h1 className='habit-title'> Habit Builder</h1>
      </div>

      <div className='habit-body-container'>
        {/* TODO: Habit Score List */}
        {/* TODO: Habit implementation intentions/goals */}

        {/* TODO: Little pop tips on making better goals for changing a habit */}
        <HabitList />

        <HabitForm />
      </div>
    </div>
  );
}

export default Habit;
