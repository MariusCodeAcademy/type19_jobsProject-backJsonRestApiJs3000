const express = require('express');
const { dbQueryWithData } = require('../helper');

const jobsRouter = express.Router();

// routes
// GET /jobs grazina visas darbo vietas
jobsRouter.get('/', async (req, res) => {
  // gauti is db visus darbus ir atsiusti juos kaip atsakyma

  const sql = 'SELECT * FROM jobs';

  const [dataArr, errorJeiYr] = await dbQueryWithData(sql);

  if (errorJeiYr) {
    console.log('errorJeiYr ===', errorJeiYr);
    return res.status(500).json('bad bad thing happen');
  }

  console.log('dataArr ===', dataArr);

  return res.json(dataArr);
});

// GET /jobs/:id grazina viena darbo vieta
jobsRouter.get('/:jobId', async (req, res) => {
  // gauti is db visus darbus ir atsiusti juos kaip atsakyma
  const { jobId } = req.params;
  const sql = 'SELECT * FROM jobs WHERE id = ?';

  const [dataArr, errorJeiYr] = await dbQueryWithData(sql, [jobId]);

  if (errorJeiYr) {
    console.log('errorJeiYr ===', errorJeiYr);
    return res.status(500).json('bad bad thing happen');
  }

  console.log('dataArr ===', dataArr);

  if (dataArr.length === 0) {
    return res.status(404).end();
  }

  return res.json(dataArr[0]);
});

module.exports = jobsRouter;
