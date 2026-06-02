import { Router } from 'express';
import { getMovies, createMovie } from '../controllers/movieController.js';

const router = Router();

router.get('/movies', getMovies);
router.post('/movies', createMovie);

export default router;