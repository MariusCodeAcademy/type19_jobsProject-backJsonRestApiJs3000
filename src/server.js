require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mysql = require('mysql2/promise');
const { dbConfig } = require('./config');
const jobsRouter = require('./routes/jobsRoutes');

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  res.json('Hello World');
});

// routes

app.use('/jobs', jobsRouter);

app.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${PORT}`);
});
