import express from 'express';
import { gameDataClient } from '../src/utils/prisma/index.js';
import { userDataClient } from '../src/utils/prisma/index.js';
import authMiddleware from '../src/middlewares/auth.middleware.js';

const router = express.Router();

/** 카드팩 등록 API **/
router.post('/pack', authMiddleware, async (req, res) => {
  const { type, price } = req.body;

  try {
    const isExistPack = await gameDataClient.packs.findFirst({
      where: {
        type,
      },
    });

    if (isExistPack) {
      return res.status(409).json({ message: '이미 존재하는 카드팩입니다.' });
    }

    // packs 테이블에 아이템을 추가합니다.
    const newPack = await gameDataClient.packs.create({
      data: {
        type,
        price,
      },
    });

    return res
      .status(201)
      .json({ message: '카드팩이 성공적으로 등록되었습니다.', newPack });
  } catch (error) {
    console.error('카드팩 등록 중 에러 발생:', error);
    return res
      .status(500)
      .json({ message: '카드팩 등록 중 에러가 발생하였습니다.' });
  }
});

/** 카드팩 목록 조회 API **/
router.get('/packs', authMiddleware, async (req, res) => {
  try {
    const packs = await gameDataClient.packs.findMany({
      select: {
        type: true,
        price: true,
      },
    });

    return res.status(200).json(packs);
  } catch (error) {
    console.error('카드팩 조회 중 에러 발생:', error);
    return res
      .status(500)
      .json({ message: '카드팩 조회 중 에러가 발생하였습니다.' });
  }
});

/** 카드팩 수정 API **/
router.put('/packs/:id', authMiddleware, async (req, res) => {
  const packId = parseInt(req.params.id, 10);
  const { type, price } = req.body;

  try {
    const existingPack = await gameDataClient.packs.findUnique({
      where: {
        id: packId,
      },
    });

    if (!existingPack) {
      return res.status(404).json({ message: '존재하지 않는 카드팩입니다.' });
    }

    const updatedPack = await gameDataClient.packs.update({
      where: {
        id: packId,
      },
      data: {
        type,
        price,
      },
    });

    return res
      .status(200)
      .json({ message: '카드팩이 정상적으로 수정되었습니다.', updatedPack });
  } catch (error) {
    console.error('카드팩 수정 중 에러 발생:', error);
    return res
      .status(500)
      .json({ message: '카드팩 수정 중 에러가 발생하였습니다.' });
  }
});

/** 선수 카드 상세 조회 API **/
router.get('/player/:id', async (req, res) => {
  const playerId = parseInt(req.params.id, 10);

  try {
    const player = await gameDataClient.player.findFirst({
      where: { id: playerId },
      select: {
        id: true,
        name: true,
        speed: true,
        shootpower: true,
        goal_finish: true,
        defense: true,
        stamina: true,
      },
    });

    if (!player) {
      return res
        .status(404)
        .json({ message: '존재하지 않는 선수 카드입니다.' });
    }

    return res.status(200).json(player);
  } catch (error) {
    console.error('선수 카드 상세 조회 중 에러 발생:', error);
    return res
      .status(500)
      .json({ message: '선수 카드 상세 조회 중 에러가 발생하였습니다.' });
  }
});

/** 선수 뽑기 API **/
router.post('/gacha/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const itemsToPurchase = req.body;
  try {
    // 유효성 검사
    const user = await userDataClient.users.findFirst({
      where: { id: +id },
    });

    if (!user) {
      return res.status(403).json({ message: '내 계정이 아닙니다.' });
    }

    let totalCost = 0;
    for (const pack of itemsToPurchase) {
      const { type, count } = pack;
      const packInfo = await gameDataClient.packs.findFirst({
        where: { type },
        select: { price: true },
      });

      if (!packInfo) {
        return res.status(404).json({ message: '존재하지 않는 팩입니다.' });
      }

      if (isNaN(count) || count <= 0) {
        return res
          .status(400)
          .json({ message: '카드팩 구매 개수(count)는 1 이상 입력해주세요.' });
      }

      totalCost += packInfo.price * count;
    }

    if (user.cash < totalCost) {
      return res.status(400).json({ message: '잔고가 부족합니다.' });
    }

    // 가챠 랜덤 요소
    const packResult = [];
    for (const pack of itemsToPurchase) {
      const { type, count } = pack;
      if (type === 'normal') {
        for (let i = 0; i < count; i++) {
          const randomNum = Math.floor(Math.random() * 100);
          let drawResult = 0;
          if (randomNum < 23) {
            drawResult = 1; //'C등급 player 1 id';
          } else if (randomNum >= 23 && randomNum < 46) {
            drawResult = 2; //'C등급 player 2 id';
          } else if (randomNum >= 46 && randomNum < 62) {
            drawResult = 3; //'B등급 player 1 id';
          } else if (randomNum >= 62 && randomNum < 78) {
            drawResult = 4; //'B등급 player 2 id';
          } else if (randomNum >= 78 && randomNum < 87) {
            drawResult = 5; //'A등급 player 1 id';
          } else if (randomNum >= 87 && randomNum < 96) {
            drawResult = 6; //'A등급 player 2 id';
          } else if (randomNum >= 96 && randomNum < 98) {
            drawResult = 7; //'S등급 player 1 id';
          } else {
            drawResult = 8; //'S등급 player 2 id';
          }
          packResult.push(drawResult);
        }
      }

      if (type === 'special') {
        for (let i = 0; i < count; i++) {
          const randomNum = Math.floor(Math.random() * 100);
          let drawResult = 0;
          if (randomNum < 18) {
            drawResult = 1; //'C등급 player 1 id';
          } else if (randomNum >= 18 && randomNum < 36) {
            drawResult = 2; //'C등급 player 2 id';
          } else if (randomNum >= 36 && randomNum < 53) {
            drawResult = 3; //'B등급 player 1 id';
          } else if (randomNum >= 53 && randomNum < 70) {
            drawResult = 4; //'B등급 player 2 id';
          } else if (randomNum >= 70 && randomNum < 82) {
            drawResult = 5; //'A등급 player 1 id';
          } else if (randomNum >= 82 && randomNum < 94) {
            drawResult = 6; //'A등급 player 2 id';
          } else if (randomNum >= 94 && randomNum < 97) {
            drawResult = 7; //'S등급 player 1 id';
          } else {
            drawResult = 8; //'S등급 player 2 id';
          }
          packResult.push(drawResult);
        }
      }
    }

    // 인벤토리에서 보유 중인 선수 확인 후, 업데이트 or 생성
    await userDataClient.$transaction(async (userDataClient) => {
      for (const newPlayer of packResult) {
        const isExistPlayer = await userDataClient.inventory.findFirst({
          where: {
            user_id: +id,
            player_id: +newPlayer,
          },
        });

        if (isExistPlayer) {
          await userDataClient.inventory.update({
            where: {
              id: isExistPlayer.id,
              user_id: +id,
              player_id: +newPlayer,
            },
            data: {
              count: isExistPlayer.count + 1,
            },
          });
        } else {
          await userDataClient.inventory.create({
            data: {
              user_id: +id,
              player_id: +newPlayer,
              count: 1,
            },
          });
        }
      }

      // 캐시 차감
      await userDataClient.users.update({
        where: { id: +id },
        data: { cash: { decrement: totalCost } },
      });
    });
    // 캐시 차감 결과 조회
    const upDatedUser = await userDataClient.users.findUnique({
      where: { id: +id },
      select: { cash: true },
    });

    const pickedPlayer = [];
    for (const newPlayer of packResult) {
      const findPlayer = await gameDataClient.player.findMany({
        where: {
          id: newPlayer,
        },
      });
      pickedPlayer.push(findPlayer);
    }

    // gacha 결과값 res return
    return res.status(200).json({
      message: '카드팩 구매에 성공했습니다.',
      cash: upDatedUser.cash,
      pickedPlayer: pickedPlayer,
    });
  } catch (error) {
    console.error('아이템 구매 중 에러 발생:', error);
    return res
      .status(500)
      .json({ message: '아이템 구매 중 에러가 발생하였습니다.' });
  }
});

export default router;
