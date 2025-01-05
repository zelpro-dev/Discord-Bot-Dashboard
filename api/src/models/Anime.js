const { Schema, model } = require('mongoose');

const animeSchema = new Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    watchUrl: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 }
  },
  { timestamps: true }
);

module.exports = model('Anime', animeSchema);