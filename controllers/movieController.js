const Movie = require('../models/Movie');

exports.addMovie = async (req, res) => {
  const { title, genre, year, watched } = req.body;
  const movie = await Movie.create({ user: req.user._id, title, genre, year, watched });
  res.status(201).json(movie);
};

exports.getMovies = async (req, res) => {
  const { watched, genre } = req.query;
  const filter = { user: req.user._id };

  if (watched !== undefined) filter.watched = watched === 'true';
  if (genre) filter.genre = genre;

  const movies = await Movie.find(filter);
  res.json(movies);
};

exports.updateMovie = async (req, res) => {
  const movie = await Movie.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    req.body,
    { new: true }
  );
  res.json(movie);
};

exports.deleteMovie = async (req, res) => {
  await Movie.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  res.json({ message: 'Movie deleted' });
};
