import express from 'express';

import deck from '../Router/deck.router.js';
import player from '../Router/player.router.js';
import rank from '../Router/rank.router.js';
import cookieParser from 'cookie-parser';
import UsersRouter from '../Router/user.router.js';
import GatchaRouter from '../Router/gatcha.router.js';
import ErrorHandlingMiddleware from './middlewares/error-handling.middleware.js';
import gamerouter from '../Router/game.router.js';
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', [deck, player, rank, gamerouter]);

app.use(cookieParser());

app.use('/api', [UsersRouter, GatchaRouter]);
app.use(ErrorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(PORT, '포트 Test');
});
