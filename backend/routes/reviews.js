import express from 'express';
const router = express.Router();
 import {createReview} from './../controllers/reviewController.js';
import {count} from './../controllers/reviewController.js';

// router.post('/:tourId',createReview);
router.post('/:tourId',count);


export default router;

