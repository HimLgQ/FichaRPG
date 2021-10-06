import express from 'express';
import serverRouter from './server/routes';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const Router = express.Router();
const url = process.env.URL || 'http://localhost:4000';

Router.use('/api', serverRouter);

Router.get('/', async function (req, res, next) {
    const result = await axios.get(url + '/api/players')
    const players = result.data;

    res.render('index', { players });
});

Router.patch('/players/:name', async function (req, res, next) {
    const result = await axios.patch(url + `/api/players/${req.params.name}`, req.body);

    res.json(result.data)
});

export default Router;