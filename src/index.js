import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import router from './routes.js';
import errorHandler from './middlewares/errorHandler.js';

const server = express();

dotenv.config();

server.use(cors());
server.use(bodyParser.json());
server.use(router);
server.use(errorHandler);

server.listen(process.env.PORT, () => {
  console.log(`Listening on localhost:${process.env.PORT}`);
})
