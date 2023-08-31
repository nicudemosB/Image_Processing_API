"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// import express from 'express';
var imageController_1 = require("../controllers/imageController");
var imageController_2 = require("../controllers/imageController");
var router = (0, express_1.Router)();
// triggering image processing
router.get('/resize', imageController_1.resizeImage);
router.get('/image-info', imageController_2.getImageInfo);
router.post('/process-image', imageController_2.processImage);
exports.default = router;
