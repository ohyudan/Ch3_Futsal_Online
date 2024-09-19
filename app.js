import express from 'express';
import cookieParser from 'cookie-parser';
import UsersRouter from './Router/user.router.js';
import ErrorHandlingMiddleware from './src/middlewares/error-handling.middleware.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());

app.use('/api', [UsersRouter]);
app.use(ErrorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(PORT, '포트 Test');
});
