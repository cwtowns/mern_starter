import express from 'express';
import * as Movies from './movie-ctrl';

const router = express.Router()

//router.post('/movie', MovieCtrl.createMovie)
router.get('/movie', Movies.getMovies)
router.post('/movie', Movies.createMovie)

export default router;