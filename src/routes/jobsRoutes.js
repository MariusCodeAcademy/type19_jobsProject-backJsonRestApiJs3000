const express = require('express');

const jobsRouter = express.Router();

// routes
// GET /jobs grazina visas darbo vietas
jobsRouter.get('/', async (req, res) => {
  // gauti is db visus darbus ir atsiusti juos kaip atsakyma
  res.json('get all job adds');
});

module.exports = jobsRouter;
