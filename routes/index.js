import express from 'express';
import {
    homePage,
    aboutPage,
    tripsPage,
    tripDetailsPage,
    testimonialsPage
} from '../controllers/pageController.js';

import { testimonialsPost } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', homePage);

router.get('/about', aboutPage)

router.get('/testimonials', testimonialsPage);

router.post('/testimonials', testimonialsPost);

router.get('/trips', tripsPage);

router.get('/trip/:tripSlug', tripDetailsPage);

export default router;