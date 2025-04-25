const express = require('express');
const {
  addMovie,
  getMovies,
  updateMovie,
  deleteMovie
} = require('../controllers/movieController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, addMovie)
  .get(protect, getMovies);

router.route('/:id')
  .patch(protect, updateMovie)
  .delete(protect, deleteMovie);

module.exports = router;
