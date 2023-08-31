import { Router } from 'express';
// import express from 'express';
import { resizeImage } from '../controllers/imageController';
import { getImageInfo, processImage } from '../controllers/imageController';

const router = Router();

// triggering image processing
router.get('/resize', resizeImage);
router.get('/image-info', getImageInfo);
router.post('/process-image', processImage);

export default router; 