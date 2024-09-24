import { PrismaClient as GameDataClient } from '../../../prisma/game/generated/GameDataClient/index.js';
import { PrismaClient as UserDataClient } from '../../../prisma/user/generated/UserDataClient/index.js';
export const gameDataClient = new GameDataClient({
  log: ['query', 'info', 'warn', 'error'],

  errorFormat: 'pretty',
});
export const userDataClient = new UserDataClient({
  log: ['info', 'warn', 'error'],

  errorFormat: 'pretty',
});
