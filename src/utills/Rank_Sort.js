import { PrismaClient as UsersDataClient } from '../prisma/user/generated/GameDataClient/index.js';

const prisma = new UsersDataClient({
  log: ['query', 'info', 'warn', 'error'],

  errorFormat: 'pretty',
});
