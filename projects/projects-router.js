const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/:id', async (req, res) => {
  res.send("hello from projects router")
});

router.post('/', async (req, res) => {
  
});

module.exports = router;