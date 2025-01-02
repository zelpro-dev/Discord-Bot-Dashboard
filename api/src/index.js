const express = require('express');
const mongoose = require('mongoose');
const baseRouter = require('./routes/base-router');
const baseMiddleware = require('./middlewares/base-middleware');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

app.use(cookieParser());
app.use('/', baseMiddleware)
app.use('/', baseRouter)

const PORT = 3001; 

if (!process.env.MONGODB_URI) {
    throw new Error('Missing MONGODB_URI in .env');
}

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT} (http://localhost:${PORT})`);
    });
});