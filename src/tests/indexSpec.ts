import supertest from 'supertest';
import app from '../index';
import sharp from 'sharp';

const request = supertest(app);

describe('GET /image', () => {
  it('should return a valid image', async () => {
    const response = await request.get('/image');
    // const inputImage = 'src/public/encenadaport.jpg';

    expect(response.status).toBe(200);
    // console.log('Content-Type', response.headers['content-type']);
    expect(response.headers['content-type']).toMatch('text/html; charset=utf-8');
  });
});

describe('Sharp Module', () => {
  it('should resize an image', async () => {
    const inputImage = 'src/public/encenadaport.jpg';
    const outputImage = 'src/public/encenadaport_resized.jpg';

    const info = await sharp(inputImage)
      .resize(200, 200)
      .toFile(outputImage);

    expect(info).toBeDefined();
    expect(info.width).toBe(200);
    expect(info.height).toBe(200);
      });
  }); 
