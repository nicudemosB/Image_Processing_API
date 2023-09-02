import supertest from "supertest";
import app from '../index';
import sharp, { OutputInfo } from 'sharp';

const request = supertest(app);

// describe('Test endpoint response', () => {
//   it('gets the api endpoint', async () => {
//     const response = await request.get('/image');
//     expect(response.status).toBe(404);
//   })
// })

describe('Sharp Module', () => {
  it('should resize an image', () => {
    const inputImage = 'path/to/input/image.jpg';
    const outputImage = 'path/to/output/image.jpg';

    sharp(inputImage)
    .resize(200, 200)
    .toFile(outputImage, (err: Error | null, info: OutputInfo) => {
      expect(err).toBeNull();
      expect(info).toBeDefined()
    })
  })
})