const express = require('express');
const router = express.Router();

const Habit = require('../models/Habit');

router.get('/', (req, res) => {
  Habit.find()
    .then((habits) => res.json(habits))
    .catch((err) => console.log(err));
});

router.post('/', (req, res) => {
  const { newHabit, oldHabit } = req.body;
  const habitBuild = new Habit({
    newHabit: newHabit,
    oldHabit: oldHabit,
  });
  habitBuild
    .save()
    .then(() =>
      res.json({
        message: 'New habit successfully added',
      })
    )
    .catch((err) =>
      res.status(400).json({
        error: err,
        message: 'Error creating habit item',
      })
    );
});

module.exports = router;
