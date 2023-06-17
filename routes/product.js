import express from 'express';
import { getAll, getOneById } from '../controllers/product.js';

const router = express.Router();

router.route('/')
    .get(getAll);

router.route('/:id')
    .get(getOneById)

export default router;