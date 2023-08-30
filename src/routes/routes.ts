import { Router } from 'express';
import { getImageInfo, processImage } from '../controllers/imageController';

const router = Router();

router.get('/image-info', getImageInfo);
router.post('/process-image', processImage);

export default router; 