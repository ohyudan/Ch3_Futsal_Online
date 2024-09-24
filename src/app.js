import express from 'express';

import deck from '../Router/deck.router.js';
import player from '../Router/player.router.js';
import rank from '../Router/rank.router.js';
import cookieParser from 'cookie-parser';
import UsersRouter from '../Router/user.router.js';
import GachaRouter from '../Router/gacha.router.js';
import ErrorHandlingMiddleware from './middlewares/error-handling.middleware.js';
import rank_game from '../Router/rank_game.router.js';
import custom_game from '../Router/custom_game.router.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', [deck, player, custom_game, rank, rank_game]);

app.use(cookieParser());

app.use('/api', [UsersRouter, GachaRouter]);
app.use(ErrorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(PORT, '포트 Test');
});
