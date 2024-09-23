import express from 'express';
import { gameDataClient } from '../src/utils/prisma/index.js';
import { userDataClient } from '../src/utils/prisma/index.js';
import authMiddleware from '../src/middlewares/auth.middleware.js';

const router = express.Router();

// 강화 api
// 1. 강화 대상 선택
// 1-1. 대상이 강화가 가능한가?
// 2. 강화 실행
// 2-2. 확률은?
// 3. 강화 결과
// 성공, 실패
router.post('/refine/:id', authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  const { player_id } = req.body;

  try {
    const target = await userDataClient.inventory.findFirst({
      where: {
        user_id: +id,
        player_id: +player_id,
      },
    });

    const player = await gameDataClient.player.findFirst({
      where: {
        id: +player_id,
      },
    });

    const refinedplayer = await gameDataClient.player.findFirst({
      where: {
        name: player.name,
        level: player.level + 1,
      },
    });

     // 카운트 2 이상, 강화 최대일 떄, 인벤토리에 해당 카드가 없을 때.
    if (target.count < 2) {
      return res
        .status(409)
        .json({ m: '강화를 하는데는 같은 카드가 2장 필요해요' });
    } else if (player.level === 5) {
      return res.status(409).json({ m: '이미 강화 수치가 최대에요' });
    } else if (!target) {
      return res.status(409).json({ m: '강화할 카드가 없어요' });
    }

    // level은 강화 단계가 될건데, 테이블에 추가 컬럼을 넣어서 하는게 가장 좋을 것 같다.
    // 5강이 맥스, 강화 레벨이 올라가면 확률이 줄어드는 방식
    // +1 > 80% > +2 > 60% > +3 > 40% > +4 > 20% > +5
    const refinepercent = 5 - player.level; //지금은 없는 수치

    if (Math.random * 5 > refinepercent) {
      // 강화 성공
      const succeseinven = await userDataClient.inventory.update(
        {
          id,
          user_id: +id,
          player_id: refinedplayer.id,
          count: +1,
        },
        {
          id,
          user_id: +id,
          player_id: +player_id,
          count: -2,
        }
      );
      // 그냥 update만 써도 되는지는 모르겠네요 0일때는 create나 delete 시켜줘야 하는지 모르겠음 if문 써서 하면 금방이긴 하니까
      return res.status(201).json({ m: '강화성공' });
    } else {
      // 강화 실패
      const failedinven = await userDataClient.inventory.update({
        id,
        user_id: +id,
        player_id: +player_id,
        count: -1,
      });
      return res.status(201).json({ m: '강화실패' });
    }
  } catch (error) {
    next(err);
  }
});
