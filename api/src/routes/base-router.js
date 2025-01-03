const express = require('express');
const authRoutesHandler = require('./auth');
const ticketRoutesHandler = require('./tickets');
const dashboardRoutesHandler = require('./dashboard');

const router = express.Router();

router.use('/auth', authRoutesHandler);
router.use('/tickets', ticketRoutesHandler);
router.use('/dashboard', dashboardRoutesHandler);

module.exports = router;