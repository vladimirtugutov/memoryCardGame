const express = require('express');

const router = express.Router();

const {
  authRender,
} = require('../controllers/authController');

router.get('/', authRender);

module.exports = router;
