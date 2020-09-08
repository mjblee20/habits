import React from 'react';

import NavBar from './components/nav/NavBar';
import Habit from './components/habit/Habit';
import Todo from './components/todo/Todo';

import './App.css';

const App = function () {
  return (
    <>
      <NavBar />
      <div className='main-body'>
        <Habit />
        <Todo />
      </div>
      {/*  */}
    </>
  );
};

export default App;
