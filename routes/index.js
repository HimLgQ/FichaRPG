import express from 'express';
import PlayersController from '../controllers/PlayersController'

const router = express.Router();
const player = new PlayersController();

router.get('/', function (req, res, next) {
    res.render('index', { title: 'RPG' });
});

router.post('/players', async function (req, res, next) {
    await player.create(req, res, next)
})

export default router;
