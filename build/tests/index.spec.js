"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
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
