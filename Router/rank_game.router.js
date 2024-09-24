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
router.post('/rank_game/', authMiddleware, async (req, res, next) => {
  const account_id = req.user.id;

  try {
    const userA = await userDataClient.users.findFirst({
      where: {
        id: account_id,
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
    // [{user_id : 1, rankpoint : 987},{user_id : 2, rankpoint : 999}]
    
    const HaveDeckplayer = [];

    for (i = 0; i < Matchlevel.length; i++) {
      const IsExistDeck = await userDataClient.player_deck.findMany({
        where: {
          user_id: Matchlevel[i].user_id,
        },
      });

      if (IsExistDeck.length === 3) {
        HaveDeckplayer.push(Matchlevel[i])
      }
    }

    // 매칭이 가능한 유저가 없을 경우
    if (HaveDeckplayer.length === 0) {
      return res.status(409).json({ message: '대전 가능한 상대가 없습니다.' });
    }

    // 해당 유저들의 리스트에서 랜덤한 대상과의 매치 추첨
    const rankB = HaveDeckplayer[Math.floor((HaveDeckplayer.length) * Math.random())];
    // 랜덤으로 잡은 범위내의 유저의 id와 rankpoint
    // 여기서 오류 한번 더나면 [Math.floor((HaveDeckplayer.length - 1) * Math.random())]; 로 한번 바꿔서 해봐주세요
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

    const scoreA = MyAttackscore + MyMiddlescore + MyDefensescore;
    const scoreB = OpAttackscore + OpMiddlescore + OpDefensescore;
    // 선수 1,2,3 이 있을 때 각 선수들의 스텟을 기반으로 가중치 구현.
    // <포지션 별 가중치가 다르다면 어떨까?> // 기획요소
    // 사실 이게 테이블 상에서 해당 선수가 어떤 포지션인지 전혀 기획되지 않았기 때문에 있지만 의미없는 기획에 가깝다.

    const maxScore = scoreA + scoreB;
    const randomValue = Math.random() * maxScore;

    if (randomValue < scoreA) {
      // 승리
      const pluspoint = Math.floor(
        (rankB.rankpoint - rankA.rankpoint + 150) / 10
      );
      // 매칭 된 유저와의 점수 차이를 비교하여 상대의 점수가 높으면 점수를 많이 받도록 구현
      const updatedRank = await userDataClient.rank.update({
        where: { id: userA.id },
        data: {
          rankpoint: rankA.rankpoint + pluspoint,
          win: rankA.win + 1,
        },
      });
      if (updatedRank.rankpoint < 1100) {
        const updatedTier = await userDataClient.rank.update({
          where: { id: userA.id },
          data: {
            tier: 'Bronze',
          },
        });
      } else if (updatedRank.rankpoint < 1300) {
        const updatedTier = await userDataClient.rank.update({
          where: { id: userA.id },
          data: {
            tier: 'Silver',
          },
        });
      } else if (updatedRank.rankpoint < 1500) {
        const updatedTier = await userDataClient.rank.update({
          where: { id: userA.id },
          data: {
            tier: 'Gold',
          },
        });
      } else if (updatedRank.rankpoint < 1700) {
        const updatedTier = await userDataClient.rank.update({
          where: { id: userA.id },
          data: {
            tier: 'Platinum',
          },
        });
      } else {
        const updatedTier = await userDataClient.rank.update({
          where: { id: userA.id },
          data: {
            tier: 'Diamond',
          },
        });
      }
      return res.status(200).json({
        message: `승리하였습니다 +${pluspoint}
        현재 나의 점수 : ${updatedRank.rankpoint}`,
      });
    } else if (randomValue === scoreA) {
      const updatedRank = await userDataClient.rank.update({
        where: { id: userA.id },
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
        (rankA.rankpoint - rankB.rankpoint + 150) / 10
      );
      // 매칭 된 유저와의 점수 차이를 비교하여 상대의 점수가 높으면 점수를 적게 잃도록 구현
      const updatedRank = await userDataClient.rank.update({
        where: { id: userA.id },
        data: {
          rankpoint: rankA.rankpoint - minuspoint,
          lose: rankA.lose + 1,
        },
      });
      if (updatedRank.rankpoint < 1100) {
        const updatedTier = await userDataClient.rank.update({
          where: { id: userA.id },
          data: {
            tier: 'Bronze',
          },
        });
      } else if (updatedRank.rankpoint < 1300) {
        const updatedTier = await userDataClient.rank.update({
          where: { id: userA.id },
          data: {
            tier: 'Silver',
          },
        });
      } else if (updatedRank.rankpoint < 1500) {
        const updatedTier = await userDataClient.rank.update({
          where: { id: userA.id },
          data: {
            tier: 'Gold',
          },
        });
      } else if (updatedRank.rankpoint < 1700) {
        const updatedTier = await userDataClient.rank.update({
          where: { id: userA.id },
          data: {
            tier: 'Platinum',
          },
        });
      } else {
        const updatedTier = await userDataClient.rank.update({
          where: { id: userA.id },
          data: {
            tier: 'Diamond',
          },
        });
      }
      return res.status(200).json({
        message: `패배하였습니다 -${minuspoint}
        현재 나의 점수 : ${updatedRank.rankpoint}`,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: '게임 플레이에 오류가 발생하였습니다' });
  }
});

export default router;
