import cors from 'cors';
import express from 'express';



export default function createServer() {
  const app = express();
  
  app.use(express.static("public"));
  app.use(express.json());
  return app;
}
