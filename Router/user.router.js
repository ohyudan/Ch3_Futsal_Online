import express from 'express';
import { user_Data_Prisma } from '../src/utils/Rank_Sort.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import authMiddleware from '../src/middlewares/auth.middleware.js';

const router = express.Router();

// 회원가입 API
router.post('/sign-up', async (req, res, next) => {
  try {
    const { account, password, passwordCheck, name } = req.body;

    // 아이디가 이미 있는지 확인하는 함수
    const isExistAccount = await user_Data_Prisma.users.findFirst({
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
    await user_Data_Prisma.users.create({
      data: {
        account,
        password: hashedPassword,
        name,
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

  const user = await user_Data_Prisma.users.findFirst({ where: { account } });

  // 아이디가 존재하지 않을때 발생하는 오류
  if (!user) {
    return res.status(404).json({ message: '존재하지 않는 아이디입니다.' });
  }

  // 비밀번호가 일치하지 않을때 발생하는 오류
  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: '비밀번호가 일치하지 않습니다' });
  }

  // jwt 토큰 발급
  const token = jwt.sign({ id: user.id }, 'turtle-secret-key');
  res.header('authorization', `Bearer ${token}`);

  return res.status(200).json({ message: '로그인에 성공했습니다.' });
});

// 캐시구매 API
router.post('/buy_cash/:id', authMiddleware, async (req, res, next) => {
  const { id } = req.params;
  const { cash } = req.body;

  try {
    const user = await user_Data_Prisma.users.findFirst({
      where: {
        id: +id,
      },
    });
    if (!user) {
      return res.status(403).json({ message: '내 계정이 아닙니다.' });
    }

    await user_Data_Prisma.users.update({
      where: { id: +id },
      data: { cash: { increment: cash } },
    });

    const updatedUsers = await user_Data_Prisma.users.findUnique({
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

export default router;
