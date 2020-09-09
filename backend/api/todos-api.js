const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');

// READ
router.route('/').get((req, res) => {
  Todo.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => console.log(err));
});

// CREATE
router.route('/').post((req, res) => {
  const { task, priority } = req.body;

  const todoItem = new Todo({
    task: task,
    priority: priority,
  });

  todoItem
    .save()
    .then(() => {
      res.json({
        message: 'New to-do task successfully added',
      });
    })
    .catch((err) =>
      res.status(400).json({
        error: err,
        message: 'Error creating todo task',
      })
    );
});

// UPDATE
router.route('/update').put((req, res) => {
  res.send('put');
});

// DELETE
router.route('/delete/:id').delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id, (err) => {
    if (!err) {
      res.json({ msg: 'success' });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
