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
}