import { userDataClient } from './prisma/index.js';

export const match_ = async (userId) => {
  const myrankpoint = await userDataClient.rank.findUnique({
    where: { user_id: +userId },
    select: {
      rankpoint: true,
    },
  });

  const matchLevel1 = await userDataClient.rank.findMany({
    where: {
      rankpoint: {
        gte: myrankpoint.rankpoint - 100,
        lte: myrankpoint.rankpoint + 100,
      },
      NOT: { user_id: userId },
    },
    select: {
      user_id: true,
      tier: true,
      rankpoint: true,
      win: true,
      draw: true,
      lose: true,
    },
    take: 10,
  });

  const matchLevel2 = await Promise.all(
    matchLevel1.map(async (value) => {
      const usersdeckCount = await userDataClient.player_deck.count({
        where: { user_id: value.user_id },
      });
      if (usersdeckCount === 3) {
        return value;
      }
      return null;
    })
  );

  const filteredMatchLevel2 = matchLevel2.filter(Boolean);

  if (filteredMatchLevel2.length === 0) {
    const result = '대전 가능한 상대가 없습니다.';
    return result;
  }
  let random_Int = Math.floor(
    Math.random() * (filteredMatchLevel2.length - 0) + 0
  );
  const result = filteredMatchLevel2[random_Int];
  return result;
};
