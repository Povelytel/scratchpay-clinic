import { PORT } from './config';
import express from 'express';
import cors from 'cors';

import RootRouter from './root.router';

import { routeNotFound, errorHandler } from './middleware/errorHandler';

const app = express();

const originCors = ['https://frontend-dev.lvlmethod.lampawork.com', 'https://admin-levlmethod.lampawork.com'];

// 3000 and 3001 for front-end
if (process.env.NODE_ENV !== 'production') {
  originCors.push('http://localhost:3000', 'http://localhost:3001', 'http://localhost:4000');
}

app.use(
  cors({
    origin: originCors,
    methods: 'OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', new RootRouter().router);

app.use([routeNotFound, errorHandler]);

app.listen(PORT, () => console.info('Server listening on port ' + PORT));

// for testing cron normal in comment
// const cron = require('./cron');
