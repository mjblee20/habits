import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './components/nav/NavBar';
import Habit from './pages/Habit';
import Todo from './pages/Todo';
import Home from './pages/Home';
import './App.css';

const App = function () {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/habits' component={Home} />
        <Route path='/habit' component={Habit} />
        <Route path='/todo' component={Todo} />
        <Redirect to='/habits' />
      </Switch>
    </Router>
  );
};

export default App;
