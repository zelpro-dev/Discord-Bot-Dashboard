const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    id: { type: String, required: true },
    username: { type: String },
    avatarHash: { type: String, default: null },
    accessToken: { type: String },
    refreshToken: { type: String },
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);