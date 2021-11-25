import { Router } from 'express';
import authentication from '../middlewares/authentication.js';

const usersRouter = Router();

const getUsers = (req, res) => {
  res.send('Imagine this is an users array');
};

usersRouter.use(authentication);
usersRouter.get('/', getUsers);

export default usersRouter;
