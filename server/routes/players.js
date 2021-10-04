import express from 'express';
import PlayersController from '../controllers/PlayersController'

const playersRouter = express.Router();
const players = new PlayersController();

playersRouter.post('/', players.create);

playersRouter.get('/', players.getAll);

playersRouter.get('/:name', players.getByName);

playersRouter.patch('/:name', players.updateByName);

export default playersRouter;
