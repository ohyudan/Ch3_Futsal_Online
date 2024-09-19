import express from 'express';
import { PrismaClient as UsersDataClient } from '../prisma/user/generated/userDataClient/index.js';

const user_Data_Prisma = new UsersDataClient({
  log: ['query', 'info', 'warn', 'error'],

  errorFormat: 'pretty',
});

const router = express.Router();
/** 유저 랭킹 조회하기 GET
 *오유단
 * 전체 검사
 */
router.get(`/ranking`, async (req, res, next) => {});

export default router;
