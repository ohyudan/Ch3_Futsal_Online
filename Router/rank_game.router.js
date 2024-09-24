import express from 'express';
import { gameDataClient } from '../src/utils/prisma/index.js';
import { userDataClient } from '../src/utils/prisma/index.js';
import authMiddleware from '../src/middlewares/auth.middleware.js';
import { match_ } from '../src/utils/match.js';
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
router.post('/rank_game/', authMiddleware, async (req, res, next) => {
  const account_id = req.account.id;

  try {
    const opponent_player = await match_(account_id);
    if (typeof opponent_player === 'string') {
      return res.status(403).json({ message: '대전 가능한 상대가 없습니다.' });
    }
    console.log('내 상대는 ' + opponent_player.user_id + '입니다.');
    const deckA = await userDataClient.player_deck.findMany({
      where: {
        user_id: account_id,
      },
      select: {
        player_id: true,
      },
    });

    const deckB = await userDataClient.player_deck.findMany({
      where: {
        user_id: opponent_player.user_id,
      },
      select: {
        player_id: true,
      },
    });
    const rankA = await userDataClient.rank.findUnique({
      where: { user_id: account_id },
      select: {
        id: true,
        user_id: true,
        rankpoint: true,
        win: true,
        draw: true,
        lose: true,
      },
    });

    // deckB : [{'player_id':1},{'player_id':2},{'player_id':3}]

    const MyAttack = await gameDataClient.player.findFirst({
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
    // MyAttack = {speed: true, shootpower: true, goal_finish: true, defense: true, stamina: true},

    const MyMiddle = await gameDataClient.player.findFirst({
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

    const MyDefense = await gameDataClient.player.findFirst({
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

    const OpDefense = await gameDataClient.player.findFirst({
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

    const MyAttackscore =
      MyAttack.speed * 0.2 +
      MyAttack.shootpower * 0.25 +
      MyAttack.goal_finish * 0.3 +
      MyAttack.defense * 0.1 +
      MyAttack.stamina * 0.15;

    const MyMiddlescore =
      MyMiddle.speed * 0.2 +
      MyMiddle.shootpower * 0.15 +
      MyMiddle.goal_finish * 0.15 +
      MyMiddle.defense * 0.2 +
      MyMiddle.stamina * 0.3;

    const MyDefensescore =
      MyDefense.speed * 0.2 +
      MyDefense.shootpower * 0.1 +
      MyDefense.goal_finish * 0.1 +
      MyDefense.defense * 0.4 +
      MyDefense.stamina * 0.2;

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

    const OpDefensescore =
      OpDefense.speed * 0.2 +
      OpDefense.shootpower * 0.1 +
      OpDefense.goal_finish * 0.1 +
      OpDefense.defense * 0.4 +
      OpDefense.stamina * 0.2;

    const scoreA = Math.floor(MyAttackscore + MyMiddlescore + MyDefensescore);
    const scoreB = Math.floor(OpAttackscore + OpMiddlescore + OpDefensescore);
    // 선수 1,2,3 이 있을 때 각 선수들의 스텟을 기반으로 가중치 구현.
    // <포지션 별 가중치가 다르다면 어떨까?> // 기획요소
    // 사실 이게 테이블 상에서 해당 선수가 어떤 포지션인지 전혀 기획되지 않았기 때문에 있지만 의미없는 기획에 가깝다.

    const maxScore = scoreA + scoreB;
    const randomValue = Math.floor(Math.random() * maxScore);

    if (randomValue < scoreA) {
      //승리

      const pluspoint = Math.floor(
        (opponent_player.rankpoint - rankA.rankpoint + 150) / 10
      );

      // 매칭 된 유저와의 점수 차이를 비교하여 상대의 점수가 높으면 점수를 많이 받도록 구현
      const updatedRank = await userDataClient.rank.update({
        where: { user_id: account_id },
        data: {
          rankpoint: rankA.rankpoint + pluspoint,
          win: rankA.win + 1,
        },
      });
      if (updatedRank.rankpoint < 1100) {
        const updatedTier = await userDataClient.rank.update({
          where: { user_id: account_id },
          data: {
            tier: 'Bronze',
          },
        });
      } else if (updatedRank.rankpoint < 1300) {
        const updatedTier = await userDataClient.rank.update({
          where: { user_id: account_id },
          data: {
            tier: 'Silver',
          },
        });
      } else if (updatedRank.rankpoint < 1500) {
        const updatedTier = await userDataClient.rank.update({
          where: { user_id: account_id },
          data: {
            tier: 'Gold',
          },
        });
      } else if (updatedRank.rankpoint < 1700) {
        const updatedTier = await userDataClient.rank.update({
          where: { user_id: account_id },
          data: {
            tier: 'Platinum',
          },
        });
      } else {
        const updatedTier = await userDataClient.rank.update({
          where: { user_id: account_id },
          data: {
            tier: 'Diamond',
          },
        });
      }
      return res.status(200).json({
        message: `승리하였습니다 +${pluspoint} `,
        message2: `현재 나의 점수 : ${updatedRank.rankpoint}`,
      });
    } else if (randomValue === scoreA) {
      const updatedRank = await userDataClient.rank.update({
        where: { user_id: account_id },
        data: {
          draw: rankA.draw + 1,
        },
      });
      return res.status(200).json({
        message: `무승부하였습니다`,
      });
    } else {
      // 패배
      const minuspoint = Math.floor(
        (rankA.rankpoint - opponent_player.rankpoint + 150) / 10
      );

      // 매칭 된 유저와의 점수 차이를 비교하여 상대의 점수가 높으면 점수를 적게 잃도록 구현
      const updatedRank = await userDataClient.rank.update({
        where: { user_id: account_id },
        data: {
          rankpoint: rankA.rankpoint - minuspoint,
          lose: rankA.lose + 1,
        },
      });
      if (updatedRank.rankpoint < 1100) {
        const updatedTier = await userDataClient.rank.update({
          where: { user_id: account_id },
          data: {
            tier: 'Bronze',
          },
        });
      } else if (updatedRank.rankpoint < 1300) {
        const updatedTier = await userDataClient.rank.update({
          where: { user_id: account_id },
          data: {
            tier: 'Silver',
          },
        });
      } else if (updatedRank.rankpoint < 1500) {
        const updatedTier = await userDataClient.rank.update({
          where: { user_id: account_id },
          data: {
            tier: 'Gold',
          },
        });
      } else if (updatedRank.rankpoint < 1700) {
        const updatedTier = await userDataClient.rank.update({
          where: { user_id: account_id },
          data: {
            tier: 'Platinum',
          },
        });
      } else {
        const updatedTier = await userDataClient.rank.update({
          where: { user_id: account_id },
          data: {
            tier: 'Diamond',
          },
        });
      }
      return res.status(200).json({
        message: `패배하였습니다 -${minuspoint}`,
        message2: `현재 나의 점수 : ${updatedRank.rankpoint}`,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: '게임 플레이에 오류가 발생하였습니다' });
  }
});

export default router;
