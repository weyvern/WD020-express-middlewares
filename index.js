import express from 'express';
import usersRouter from './routes/usersRouter.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/sync', (req, res) => {
  console.log(req.body);
  throw new Error('Oops sync');
});

app.get('/async', async (req, res, next) => {
  try {
    throw new Error('Oops async');
  } catch (error) {
    next(error);
  }
});

app.use('/users', usersRouter);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
