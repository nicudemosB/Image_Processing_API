"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes/routes"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var port = 3000;
// middleware
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/api', routes_1.default);
app.use('/image-info', routes_1.default);
// This is the route handler for the default home page
app.get('/image', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'public', 'encenadaport.jpg'));
});
// starting Express server 
// app.listen(port, () => {
//   console.log(`server started at http://localhost:${port}`);
// });
// const PORT = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
exports.default = app;
