import express from 'express';
import { gameDataClient } from '../src/utils/prisma/index.js';
import { userDataClient } from '../src/utils/prisma/index.js';
import authMiddleware from '../src/middlewares/auth.middleware.js';

const router = express.Router();

// 게임 플레이 api
// 0. 플레이어의 덱 정보 확인
// 0-1. 플레이어의 덱이 완성되어 있는가
// 1. 플레이어 끼리 매칭(랭크 점수)
// 1-1. 매칭 레벨 안에 상대 가능한 플레이어가 있는가..?
// 2. 매칭 후 플레이
// 2-1 . 선수들의 정보 확인
// 2-2 . 선수 포지션 별 스텟 가중치 적용
// 2-3 . 적용된 가중치를 통한 플레이 진행
// 3. 플레이 후 승패에 따른 점수 변동
router.post('/play/:id', authMiddleware, async (req, res, next) => {
  const { id } = req.params;

  try {
    const userA = await userDataClient.users.findFirst({
      where: {
        id: +id,
      },
    });

    const deckA = await userDataClient.player_deck.findMany({
      where: {
        user_id: userA.id,
      },
      select: {
        player_id: true,
      },
    });
    // deckA : [{'player_id':1},{'player_id':2},{'player_id':3}]

    // 팀을 만들지 않았을 경우
    if (deckA.length !== 3) {
      return res.status(409).json({ message: '덱이 작성되지 않았습니다.' });
    }

    const rankA = await userDataClient.rank.findFirst({
      where: {
        user_id: userA.id,
      },
    });

    if (!rankA) {
      const rankA = await userDataClient.rank.create({
        user_id: userA.id,
        rankpoint: 1000,
        win: 0,
        draw: 0,
        lose: 0,
      });
    }
    // rank못찾으면 create 해야하는지?
    // create에 있는 값들을 제외하면 나머지 값에 의한 변동값
    // 만약 유저 생성할 때 랭크를 같이 생성하면 안해도 되는거고, 아니면 여기서 해야해

    // 비슷한 rank점수를 가지고 있는 플레이어와 잡아주기
    // 자신의 랭크점수 +-100 안의 유저들의 리스트 생성
    const Matchlevel = await userDataClient.rank.findMany({
      where: {
        AND: [
          { rankpoint: { lt: rankA.rankpoint + 100 } },
          { rankpoint: { gt: rankA.rankpoint - 100 } },
        ],
        NOT: { user_id: userA.id },
      },
      select: {
        user_id: true,
        rankpoint: true,
      },
    });

    // 매칭이 가능한 유저가 없을 경우
    if (Matchlevel.length === 0) {
      return res.status(409).json({ message: '대전 가능한 상대가 없습니다.' });
    }

    // 해당 유저들의 리스트에서 랜덤한 대상과의 매치 추첨
    const rankB = Matchlevel[Math.floor(Matchlevel.length * Math.random())];
    // 랜덤으로 잡은 범위내의 유저의 id와 rankpoint    
    // ex) rankB = {user_id : 1, rankpoint : 987}

    const deckB = await userDataClient.player_deck.findMany({
      where: {
        user_id: rankB.user_id,
      },
      select: {
        player_id: true,
      },
    });
    // deckB : [{'player_id':1},{'player_id':2},{'player_id':3}]

    const Myattack = await gameDataClient.player.findFirst({
      where: {
        id: deckA[0].player_id,
      },
      select: {
        speed: true,
        shootpower: true,
        goal_finish: true,
        defense: true,
        stamina: true,
      },
    });
    // Myattack = {speed: true, shootpower: true, goal_finish: true, defense: true, stamina: true},

    const Mymiddle = await gameDataClient.player.findFirst({
      where: {
        id: deckA[1].player_id,
      },
      select: {
        speed: true,
        shootpower: true,
        goal_finish: true,
        defense: true,
        stamina: true,
      },
    });

    const Mydefense = await gameDataClient.player.findFirst({
      where: {
        id: deckA[2].player_id,
      },
      select: {
        speed: true,
        shootpower: true,
        goal_finish: true,
        defense: true,
        stamina: true,
      },
    });

    const OpAttack = await gameDataClient.player.findFirst({
      where: {
        id: deckB[0].player_id,
      },
      select: {
        speed: true,
        shootpower: true,
        goal_finish: true,
        defense: true,
        stamina: true,
      },
    });

    const OpMiddle = await gameDataClient.player.findFirst({
      where: {
        id: deckB[1].player_id,
      },
      select: {
        speed: true,
        shootpower: true,
        goal_finish: true,
        defense: true,
        stamina: true,
      },
    });

    const Opdefense = await gameDataClient.player.findFirst({
      where: {
        id: deckB[2].player_id,
      },
      select: {
        speed: true,
        shootpower: true,
        goal_finish: true,
        defense: true,
        stamina: true,
      },
    });

    const Myattackscore =
      Myattack.speed * 0.2 +
      Myattack.shootpower * 0.25 +
      Myattack.goal_finish * 0.3 +
      Myattack.defense * 0.1 +
      Myattack.stamina * 0.15;

    const Mymiddlescore =
      Mymiddle.speed * 0.2 +
      Mymiddle.shootpower * 0.15 +
      Mymiddle.goal_finish * 0.15 +
      Mymiddle.defense * 0.2 +
      Mymiddle.stamina * 0.3;

    const Mydefensescore =
      Mydefense.speed * 0.2 +
      Mydefense.shootpower * 0.1 +
      Mydefense.goal_finish * 0.1 +
      Mydefense.defense * 0.4 +
      Mydefense.stamina * 0.2;

    const OpAttackscore =
      OpAttack.speed * 0.2 +
      OpAttack.shootpower * 0.25 +
      OpAttack.goal_finish * 0.3 +
      OpAttack.defense * 0.1 +
      OpAttack.stamina * 0.15;

    const OpMiddlescore =
      OpMiddle.speed * 0.2 +
      OpMiddle.shootpower * 0.15 +
      OpMiddle.goal_finish * 0.15 +
      OpMiddle.defense * 0.2 +
      OpMiddle.stamina * 0.3;

    const Opdefensescore =
      Opdefense.speed * 0.2 +
      Opdefense.shootpower * 0.1 +
      Opdefense.goal_finish * 0.1 +
      Opdefense.defense * 0.4 +
      Opdefense.stamina * 0.2;

    const scoreA = Myattackscore + Mymiddlescore + Mydefensescore;
    const scoreB = OpAttackscore + OpMiddlescore + Opdefensescore;
    // 선수 1,2,3 이 있을 때 각 선수들의 스텟을 기반으로 가중치 구현.. <포지션 별 가중치가 다르다면 어떨까?> // 기획요소

    const maxScore = scoreA + scoreB;
    const randomValue = Math.random() * maxScore;

    if (randomValue < scoreA) {
      // 승리
      const pluspoint = Math.floor(
        (rankB.rankpoint - rankA.rankpoint + 150) / 10
      );
      // 매칭 된 유저와의 점수 차이를 비교하여 상대의 점수가 높으면 점수를 많이 받도록 구현
      const updatedRankpoint = await gameDataClient.rank.update({
        where: { id: userA.id },
        data: {
          rankpoint: rankA.rankpoint + pluspoint,
          win: rankA.win + 1,
        },
      });
      return res.status(200).json({
        message: `승리하였습니다 +${pluspoint}
                                            현재 나의 점수 : ${updatedRankpoint.rankpoint}`,
      });
    } else {
      // 패배
      const minuspoint = Math.floor(
        (rankA.rankpoint - rankB.rankpoint + 150) / 10
      );
      // 매칭 된 유저와의 점수 차이를 비교하여 상대의 점수가 높으면 점수를 적게 잃도록 구현
      const updatedRankpoint = await gameDataClient.rank.update({
        where: { id: userA.id },
        data: {
          rankpoint: rankA.rankpoint - minuspoint,
          lose: rankA.lose + 1,
        },
      });
      return res.status(200).json({
        message: `패배하였습니다 -${minuspoint}
        현재 나의 점수 : ${updatedRankpoint.rankpoint}`,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: '게임 플레이에 오류가 발생하였습니다' });
  }
});

export default router;
