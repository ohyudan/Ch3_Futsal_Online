import express from 'express';
import { userDataClient } from '../src/utils/prisma/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import authMiddleware from '../src/middlewares/auth.middleware.js';
import { gameDataClient } from '../src/utils/prisma/index.js';
import { match_ } from '../src/utils/match.js';
const router = express.Router();

// 회원가입 API
router.post('/sign-up', async (req, res, next) => {
  try {
    const { account, password, passwordCheck, name } = req.body;
    // 아이디가 이미 있는지 확인하는 함수
    const isExistAccount = await userDataClient.users.findFirst({
      where: {
        account,
      },
    });

    // 아이디가 유효한지 확인하는 함수
    function isValidId(account) {
      // 영어 소문자와 숫자만 허용
      const regex = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{1,15}$/;
      return regex.test(account);
    }

    // 이미 아이디가 존재할때 발생하는 오류
    if (isExistAccount) {
      return res.status(400).json({ message: '이미 존재하는 아이디입니다.' });
    }

    // 아이디가 isValidId함수를 통과하지 못했을때 (올바르지 않을때) 발생하는 오류
    if (!isValidId(account)) {
      return res.status(400).json({ message: '잘못된 아이디입니다.' });
    }

    // 비밀번호와 비밀번호확인이 다를경우 발생하는 오류
    if (!password === passwordCheck) {
      return res
        .status(400)
        .json({ message: '비밀번호와 비밀번호 확인이 다릅니다.' });
    }

    // 비밀번호가 6자 이상이 아닐때 발생하는 오류
    if (password.length < 5) {
      return res
        .status(400)
        .json({ message: '비밀번호가 6자 이상이 아닙니다.' });
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    // 테이블에 데이터 추가
    const user = await userDataClient.users.create({
      data: {
        account,
        password: hashedPassword,
        name,
      },
    });

    await userDataClient.rank.create({
      data: {
        user_id: user.id,
        rank: null, // 테이블에서 별도 작업을 해서 rankpoint에 의해 order by 되는 값이 되어야 함
        tier: 'Bronze',
        win: 0,
        draw: 0,
        lose: 0,
      },
    });
    return res.status(201).json({ message: `회원가입이 완료되었습니다.` });
  } catch (err) {
    next(err);
  }
});

// 로그인 API
router.post('/sign-in', async (req, res, next) => {
  const { account, password } = req.body;

  const user = await userDataClient.users.findFirst({ where: { account } });

  // 아이디가 존재하지 않을때 발생하는 오류
  if (!user) {
    return res.status(404).json({ message: '존재하지 않는 아이디입니다.' });
  }

  // 비밀번호가 일치하지 않을때 발생하는 오류
  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: '비밀번호가 일치하지 않습니다' });
  }

  // jwt 토큰 발급
  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY); //env로 변경
  res.header('authorization', `Bearer ${token}`);

  return res.status(200).json({ message: '로그인에 성공했습니다.' });
});

// 캐시구매 API
router.post('/buy_cash/:id', authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  const { cash } = req.body;

  try {
    const user = await userDataClient.users.findFirst({
      where: {
        id: +id,
      },
    });
    if (!user) {
      return res.status(403).json({ message: '내 계정이 아닙니다.' });
    }

    await userDataClient.users.update({
      where: { id: +id },
      data: { cash: { increment: cash } },
    });

    const updatedUsers = await userDataClient.users.findUnique({
      where: { id: +id },
      select: { cash: true },
    });

    return res.status(200).json({
      message: `${cash}캐시가 충전되었습니다.
                         현재 보유중인 캐시는 ${updatedUsers.cash}캐시 입니다.`,
    });
  } catch (err) {
    next(err);
  }
});

// 내 선수 확인 API
router.get('/myInventory/:id', authMiddleware, async (req, res, next) => {
  const userId = parseInt(req.params.id, 10);

  try {
    const myPlayers = await userDataClient.inventory.findMany({
      where: {
        user_id: userId,
      },
      select: {
        player_id: true,
        count: true,
      },
    });

    const response = [];
    for (const myPlayer of myPlayers) {
      const playerInformation = await gameDataClient.player.findUnique({
        where: {
          id: myPlayer.player_id,
        },
        select: {
          name: true,
        },
      });

      if (playerInformation) {
        playerInformation.count = myPlayer.count;
        response.push(playerInformation);
      }
    }

    return res.status(201).json(response);
  } catch (err) {
    next(err);
  }
});

// 팀원 추가 API
router.post('/inMyDeck/:id', authMiddleware, async (req, res, next) => {
  const userId = parseInt(req.params.id, 10);
  const { player_id } = req.body;

  try {
    const playerDeck = await userDataClient.player_deck.findMany({
      where: {
        user_id: userId,
      },
      select: {
        id: true,
      },
    });

    const playerDuplicate = await userDataClient.player_deck.findMany({
      where: {
        user_id: userId,
        player_id: player_id,
      },
      select: {
        id: true,
      },
    });

    if (Object.values(playerDeck).length >= 3) {
      return res.status(401).json({
        message: '덱에는 선수를 3명까지만 추가할 수 있습니다.',
      });
    } else if (Object.values(playerDuplicate).length >= 1) {
      return res
        .status(401)
        .json({ message: '덱에는 중복 선수를 추가할 수 없습니다.' });
    } else {
      const inventoryPlayer = await userDataClient.inventory.findFirst({
        where: {
          user_id: userId,
          player_id: player_id,
        },
        select: {
          count: true,
          id: true,
        },
      });

      if (!inventoryPlayer) {
        return res
          .status(400)
          .json({ message: '선수를 보유하고 있지 않습니다.' });
      } else {
        await userDataClient.player_deck.create({
          data: {
            user_id: userId,
            player_id: +player_id,
          },
        });

        await userDataClient.inventory.update({
          where: {
            id: inventoryPlayer.id,
          },
          data: {
            count: {
              decrement: 1,
            },
          },
        });

        await userDataClient.inventory.deleteMany({
          where: {
            id: inventoryPlayer.id,
            count: {
              equals: 0,
            },
          },
        });
      }

      return res.status(201).json({ message: '선수를 덱에 추가하였습니다.' });
    }
  } catch (err) {
    next(err);
  }
});

// 대전 가능 상대 조회 API
router.get('/ready_user', authMiddleware, async (req, res, next) => {
  try {
    const result = await match_(req.account.id);
    if (typeof result === 'string') {
      return res.status(403).json({ message: '대전 가능한 상대가 없습니다.' });
    }
    return res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});
export default router;
