import Player from '../models/player'

const handleError = (err, res) => {
    if (err.name === "ValidationError")
        res.status(400).send(err.message)
    else if (err.code === 11000)
        res.status(400).send("Já existe um jogador com este nome")
    else
        res.status(500).send(err)
}

export default class PlayersController {
    async create(req, res) {
        try {
            const player = await Player.create(req.body)
            res.status(201).json(player)
        } catch (err) {
            handleError(err, res)
        }
    }

    async getAll(req, res) {
        try {
            const players = await Player.find()
            res.status(201).json(players)
        } catch (err) {
            handleError(err, res)
        }
    }

    async getByName(req, res) {
        try {
            const player = await Player.findOne({ nome: req.params.name })
            res.status(201).json(player)
        } catch (err) {
            handleError(err, res)
        }
    }
}