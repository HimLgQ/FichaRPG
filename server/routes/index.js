import express from 'express';
import playersRouter from './players';

const serverRouter = express.Router();

serverRouter.use('/players', playersRouter);

export default serverRouter;
