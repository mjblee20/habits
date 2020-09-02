const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitSchema = new Schema({
  oldHabit: {
    type: String,
    required: true,
  },
  newHabit: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Habit', habitSchema);
