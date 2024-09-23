import express from 'express';
import { PrismaClient as PlayerDataClient } from '../prisma/game/generated/GameDataClient/index.js';
import { PrismaClient as UsersDataClient } from '../prisma/user/generated/UserDataClient/index.js';
const router = express.Router();

const player_Data_Prisma = new PlayerDataClient({
  log: ['query', 'info', 'warn', 'error'],

  errorFormat: 'pretty',
});
const user_Data_Prisma = new UsersDataClient({
  log: ['query', 'info', 'warn', 'error'],

  errorFormat: 'pretty',
});

/** 덱 확인 및 찾기
 * 오유단
 * @param req :Number
 * @returns 결과
 */
const serch_deck = async (user_id) => {
  const result = {};
  const deck_account_id = await user_Data_Prisma.player_deck.findMany({
    where: { user_id: +user_id },
    select: {
      player_id: true,
      id: true,
    },
  });
  // 덱이 없을 경우
  if (deck_account_id.length === 0) {
    result.message = '해당 유저는 덱이 없습니다.';
    result.bool = false;
    return result;
  }
  const players_name = {};
  // 선수 이름 검색
  for (let i = 0; i < deck_account_id.length; i++) {
    const player = await player_Data_Prisma.player.findUnique({
      where: { id: deck_account_id[i].player_id },
      select: {
        name: true,
      },
    });
    players_name[`선수${i + 1}`] = player.name;
  }
  result.message = players_name;
  result.bool = true;
  result.deck_ids = deck_account_id.map((value) => value.id);
  result.deck_player = deck_account_id.map((value) => value.player_id);
  return result;
};

/** 팀원 조회하기
 * 오유단
 */
router.get(`/getMyDeck/:user_id`, async (req, res, next) => {
  const { user_id } = req.params;
  serch_deck(user_id)
    .then((result) => {
      if (result.bool === true) {
        return res.status(201).json(result.message);
      } else {
        return res.status(400).json(result.message);
      }
    })
    .catch((err) => {
      return res.status(404).json({ message: err.message });
    });
});

/** 팀원 방출하기
 * 오유단 JWT
 *
 * 플레이어 중복시 처리?
 */
router.post(`/outMyDeck/:user_id/:player_id`, async (req, res, next) => {
  const { user_id, player_id } = req.params;

  //JWT
  try {
    const user_data = await serch_deck(user_id);
    // 덱 검사 1
    if (user_data.bool === false) {
      return res.status(404).json(result.message);
    }

    //덱 검사 2
    if (user_data.deck_player.includes(+player_id)) {
      const index = user_data.deck_player.indexOf(+player_id);
      const userdeck = await user_Data_Prisma.player_deck.delete({
        where: { id: +user_data.deck_ids[index] },
      });
      return res.status(201).json({
        message: `${user_data.message[`선수${index + 1}`]}이(가) 팀에서 나갔습니다.`,
      });
    } else {
      return res.status(404).json({ message: `덱에 없는 선수입니다.` });
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});
export default router;
