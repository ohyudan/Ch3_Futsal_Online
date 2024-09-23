import express from 'express';
import { gameDataClient } from '../src/utils/prisma/index.js';

const router = express.Router();

/** 선수 추가하기
 * // 관리자 계정일 때만 추가해야될 것같음. JWT 미구현
 *오유단
 */
router.post(`/newPlayer`, async (req, res, next) => {
  const { name, speed, shootpower, goal_finish, defense, stamina } = req.body;
  try {
    const player = await gameDataClient.player.create({
      data: {
        name,
        speed,
        shootpower,
        goal_finish,
        defense,
        stamina,
      },
    });
    return res.status(201).json({ data: player });
  } catch (err) {
    return res.status(400).json({ err: `올바르지 않은 값입니다.` });
  }
});
export default router;
