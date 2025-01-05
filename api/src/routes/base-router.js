const express = require('express');
const authRoutesHandler = require('./auth');
const dashboardRoutesHandler = require('./dashboard');

const router = express.Router();

router.use('/auth', authRoutesHandler);
router.use('/dashboard', dashboardRoutesHandler);

module.exports = router;