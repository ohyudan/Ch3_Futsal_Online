import express from 'express';
import { PrismaClient as UsersDataClient } from '../prisma/user/generated/UserDataClient/index.js';
import { updateRankings } from '../src/utills/Rank_Sort.js';
const user_Data_Prisma = new UsersDataClient({
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: 'pretty',
});

const router = express.Router();
/** 유저 랭킹 조회하기 GET
 *오유단
 */
router.get(`/ranking`, async (req, res, next) => {
  try {
    const rankings = await user_Data_Prisma.rank.findMany({
      orderBy: {
        rankpoint: 'desc',
      },
    });
    res.status(200).json(rankings);
  } catch (err) {
    res.status(404).json({ message: `${err.message}` });
  }
});
/** 유저 랭킹 단일 조회 GET
 * 오유단
 */
router.get(`/ranking/:user_id`, async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const player_rank = await user_Data_Prisma.rank.findUnique({
      where: { user_id: +user_id },
      select: {
        rank: true,
        tier: true,
        rankpoint: true,
        win: true,
        draw: true,
        lose: true,
      },
    });
    return res.status(200).json({ player_rank });
  } catch (err) {
    return res.status(404).json({ err: `${err.message}` });
  }
});
/** 랭킹 정렬 및 업데이트
 * 오유단
 * JWT
 */
router.post(`/ranking/refresh`, async (req, res, next) => {
  try {
    // 계정 확인 추가
    updateRankings();
    console.log('랭킹 업데이트');
    return res
      .status(200)
      .json({ message: '랭킹이 정렬 및 업데이트 되었습니다.' });
  } catch (err) {
    console.log('랭킹 업데이트 실패');
    return res.status(500).json({ message: `랭킹 업데이트에 실패했습니다.` });
  }
});

export default router;
