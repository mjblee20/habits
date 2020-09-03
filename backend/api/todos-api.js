const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');

router.get('/', (req, res) => {
  Todo.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => console.log(err));
});
