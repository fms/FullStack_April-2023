"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
const options = process.cwd();
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.sendFile('../public/index.html', { root: options });
});
app.listen(port, () => {
    console.log("server is running");
});
