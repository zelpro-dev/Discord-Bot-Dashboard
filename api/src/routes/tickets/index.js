const express = require('express');

const router = express.Router();

router.get('/guilds', (req, res) => {
    res.status(200).send('Success');
});

router.get('/guild:id', (req, res) => {
    const { id: guildId } = req.params;

    res.send(`Getting tickets for guild ${guildId}`);
});

router.post('/', (req, res) => {
    

    res.send('POST: Tickets route');
});

module.exports = router;