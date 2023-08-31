import { Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';
//handles getting image info
export const getImageInfo = (req: Request, res: Response) => {
  
};

// handles processing image 
export const processImage = (req: Request, res: Response) => {
  
}

const resizeImage = async (req: Request, res: Response) => {
    const imagePath = path.join(__dirname, '../images/encenadaport.jpg');
    const outputImagePath = path.join(__dirname, '../images/resized-sample.jpg');

    try {
        await sharp(imagePath).resize(300, 200).toFile(outputImagePath);
        res.json({ message: 'Image resized successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Image resizing failed' });
    }
};

export { resizeImage };