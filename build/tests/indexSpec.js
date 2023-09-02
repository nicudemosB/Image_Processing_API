"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../index"));
var sharp_1 = __importDefault(require("sharp"));
var request = (0, supertest_1.default)(index_1.default);
// describe('Test endpoint response', () => {
//   it('gets the api endpoint', async () => {
//     const response = await request.get('/image');
//     expect(response.status).toBe(404);
//   })
// })
describe('Sharp Module', function () {
    it('should resize an image', function () {
        var inputImage = 'path/to/input/image.jpg';
        var outputImage = 'path/to/output/image.jpg';
        (0, sharp_1.default)(inputImage)
            .resize(200, 200)
            .toFile(outputImage, function (err, info) {
            expect(err).toBeNull();
            expect(info).toBeDefined();
        });
    });
});
