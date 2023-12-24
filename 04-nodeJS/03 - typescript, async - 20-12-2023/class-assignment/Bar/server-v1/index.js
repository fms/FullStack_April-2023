"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const options = process.cwd();
const port = 3000;
app.use(express_1.default.static("public"));
app.get("/", (req, res) => {
    res.sendFile("/index.html", { root: options });
});
app.get("/title", (req, res) => {
    res.sendFile("/public/title.html", { root: options });
});
app.listen(port, () => {
    console.log("Now live on port 3000");
});
