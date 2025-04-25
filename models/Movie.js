const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  genre: { type: String, required: true },
  year: { type: Number, required: true },
  watched: { type: Boolean, default: false }
});

module.exports = mongoose.model('Movie', movieSchema);
