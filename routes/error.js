const express = require('express');
const router = express.Router();
const errorController = require('../controllers/errorcontroller');

router.get('/', errorController.fallo)

module.exports = router;