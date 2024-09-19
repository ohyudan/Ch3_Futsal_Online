import express from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import authMiddleware from '../src/middlewares/auth.middleware.js';

const router = express.Router();
const prisma = new PrismaClient();

// 게임 플레이 api
// 0. 플레이어의 덱 정보 확인
// 0-1. 플레이어의 덱이 완성되어 있는가
// 1. 플레이어 끼리 매칭(랭크 점수 데비)
// 1-1. 매칭 레벨 안에 상대 가능한 플레이어가 있는가..?
// 2. 매칭 후 플레이
// 2-1 . 선수들의 정보 확인
// 2-2 . 선수 포지션 별 스텟 가중치 적용
// 3. 플레이 후 승패에 따른 점수 변동
router.post('/play/:account_id', authMiddleware, async (req, res) => {
  const account_id = parseInt(req.params.account_id, 10);

  try {
    const userA = await prisma.users.findFirst({
      where: {
        account: +account_id,
      },
    });

    const TeamA = await prisma.player_deck.findFirst({
      where: {
        user_id: userA.id,
      },
    });

    if (!TeamA.player_id) {
      return res.status(409).json({ message: '덱을 작성하고 플레이 해주세요' });
    }

    // const TeamA = player_deck.userA_id

    // const userB = findrandom{}

    // 플레이어의rankpoint +-100선에서 랜덤 플레이어 매칭
    // if (rankpoint +-100유저가 없다) {200으로 늘리기? or 랭킹에 맞는 플레이어가 없음 err?}

    // const TeamB = player_deck.userB_id

    // const playerA1 = { spd,pow,fin,def,sta }
    // const playerA2 = { spd,pow,fin,def,sta }
    // const playerA3 = { spd,pow,fin,def,sta }
    // const playerB1 = { spd,pow,fin,def,sta }
    // const playerB2 = { spd,pow,fin,def,sta }
    // const playerB3 = { spd,pow,fin,def,sta }
    // 선수 1,2,3 이 있을 때 각 선수들의 스텟을 기반으로 가중치 구현.. <포지션 별 가중치가 다르다면 어떨까?>

    // A 유저 팀과 B 유저 팀의 총 점수
    // const scoreA =
    // const scoreB =

    // // 최대 점수는 두 팀의 총 점수의 합으로 하시면 됩니다!
    // const maxScore = scoreA + scoreB;

    // const randomValue = Math.random() * maxScore;

    // if (randomValue < scoreA) {
    //     // A 유저 승리 처리
    //     userA.rankpoint+
    //     Math.floor((RpB - RpA + 150)/10) ..
    //     // B 유저의 점수를 낮출 것인가? no
    // } else {
    //     // B 유저 승리 처리
    //     userA.rankpoint-
    //     Math.floor((RpA - RpB + 150)/10) ..
    //     // B 유저의 점수를 올릴 것인가? no
    // }
  } catch (error) {
    return res
      .status(500)
      .json({ message: '게임 플레이에 오류가 발생하였습니다' });
  }
});

export default router;
