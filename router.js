import express from 'express';
import serverRouter from './server/routes';
import axios from 'axios';

const Router = express.Router();

Router.use('/api', serverRouter);

Router.get('/', async function (req, res, next) {
    const url = 'http://' + req.headers.host;
    const result = await axios.get(url + '/api/players')
    const players = result.data;

    res.render('index', { players });
});

export default Router;