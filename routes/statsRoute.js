const express = require('express');

const router = express.Router();

const {
  postStats,
  renderAllStats,
} = require('../controllers/statsController');

router.post('/', postStats);
router.get('/', renderAllStats);

module.exports = router;
