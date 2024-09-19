import express from 'express';
import deck from './Router/deck.router.js';
import player from './Router/player.router.js';
import rank from './Router/rank.router.js';
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({ test: 'test' });
});
app.use('/api', [deck, player, rank]);

app.listen(PORT, () => {
  console.log(`${PORT}으로 서버가 열렸습니다.`);
});
