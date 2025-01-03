const express = require('express');

const router = express.Router();   

router.get('/', (req, res) => {
    if (req.user) {
        const { accessTolen, refreshToken, ...user } = req.user;

        res.status(200).json(req.user)
    } else {
        res.status(401).json({ error: 'Not logged in' });
    }
});

module.exports = router;