import jwt from 'jsonwebtoken';
import { userDataClient } from '../utils/prisma/index.js';
import dotenv from 'dotenv';

dotenv.config();
// 인증 미들웨어
export default async function (req, res, next) {
  try {
    const authorization = req.headers.authorization;
    if (!authorization)
      throw new Error('요청한 사용자의 토큰이 존재하지 않습니다.');

    const [tokenType, token] = authorization.split(' ');
    if (tokenType !== 'Bearer')
      throw new Error('토큰 타입이 Bearer 형식이 아닙니다.');

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY); //env 추가
    const id = decodedToken.id;

    const user = await userDataClient.users.findFirst({
      where: { id: +id },
    });
    if (!user) {
      throw new Error('토큰 사용자가 존재하지 않습니다.');
    }

    if (!(process.env.ADMIN == user.account)) {
      throw new Error('관리자가 아닙니다.');
    }
    req.account = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: '토큰이 만료되었습니다.' });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: '토큰이 조작되었습니다.' });
    }
    return res.status(400).json({ message: error.message });
  }
}
