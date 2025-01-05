const express = require('express');
const Anime = require('../../models/Anime');

const router = express.Router();

router.use('/@me', require('./@me'));

router.get('/animes', async (req, res) => {
  console.log('GET /animes');
  console.log(req.user);
  if (!req.user) {
    return res.status(401).json({ error: 'Not Authenticated' });
  }
  const animes = await Anime.find();
  res.json(animes);
});

router.post('/animes', async (req, res) => {
  console.log('POST /animes');
  if (!req.user) {
    return res.status(401).json({ error: 'Not Authenticated' });
  }
  const { name, description, watchUrl } = req.body;
  try {
    const newAnime = new Anime({
      userId: req.user.id,
      name: name,
      description: description,
      watchUrl: watchUrl,
    });
    await newAnime.save();
    res.status(201).json(newAnime);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/*
   const animeData = {
  userId: '12345',
  name: 'Naruto',
  description: 'A story about a ninja',
  watchUrl: 'http://example.com/naruto',
  rating: 5
};

fetch('http://localhost:3080/animes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(animeData)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
*/

module.exports = router;