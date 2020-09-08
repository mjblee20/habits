const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// MongoDB
const connection = process.env.MONGODB_URI;
mongoose
  .connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log('Database Connected Successfully'))
  .catch((err) => console.log(err));

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// APIs
const habits = require('./api/habits-api');
app.use('/api/habits', habits);
const todos = require('./api/todos-api');
app.use('/api/todos', todos);

// Serve Static Files
app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
