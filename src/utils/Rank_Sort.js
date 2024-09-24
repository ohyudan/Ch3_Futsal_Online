import { userDataClient } from './prisma/index.js';

/** 랭킹 정렬 및 업데이트
 * 오유단
 * 십만개의 데이터가 있으면 십만개의 프로미스를 생성할 수 있음
 * -> 추후 수정 필요할 수 있음 수만개의 데이터가 있다면 어떻게 작동할 지 예상이 안됨
 */
export async function updateRankings() {
  //정렬한 값을 받고
  const rankings = await userDataClient.rank.findMany({
    orderBy: {
      rankpoint: 'desc',
    },
  });

  //map으로 업데이트 준비
  const updatePromises = rankings.map((ranking, index) => {
    return userDataClient.rank.update({
      where: { id: ranking.id }, // 각 랭킹의 고유 ID로 업데이트
      data: {
        rank: index + 1,
      },
    });
  });

  // update 실행 및 끝날 때까지 대기
  await Promise.all(updatePromises);
}
