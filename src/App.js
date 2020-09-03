import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Habit from './components/habit/Habit';

const App = function () {
  const [habits, setHabits] = useState(null);

  useEffect(() => {
    axios
      .get('/api/habits')
      .then((habits) => setHabits(habits))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Habit habits={habits} />
    </div>
  );
};

export default App;
