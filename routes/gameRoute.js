const express = require('express');

const router = express.Router();

const {
  renderCatGame,
  renderDogGame,
} = require('../controllers/gameController');

router.get('/cats', renderCatGame);

router.get('/dogs', renderDogGame);

module.exports = router;
