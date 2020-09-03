const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model('Todo', todoSchema);
