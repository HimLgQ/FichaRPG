import Player from "../models/player";
import _ from "lodash";

const handleError = (err, res) => {
    console.log(err);
    if (err.name === "ValidationError") res.status(400).send(err.message);
    else if (err.code === 11000)
        res.status(400).send("Já existe um jogador com este nome");
    else res.status(500).send(err);
};

export default class PlayersController {
    async create(req, res) {
        try {
            const player = await Player.create(req.body);
            res.status(201).json(player);
        } catch (err) {
            handleError(err, res);
        }
    }

    async getAll(req, res) {
        try {
            const players = await Player.find();
            const result = players.map((player) => {
                const player_ = new Player(player);
                return player_.toObject({ virtuals: true });
            });
            // console.log(result);
            res.status(200).json(result);
        } catch (err) {
            handleError(err, res);
        }
    }

    async getByName(req, res) {
        try {
            const player = await Player.findOne({ nome: req.params.name });
            res.status(200).json(player);
        } catch (err) {
            handleError(err, res);
        }
    }

    async updateByName(req, res) {
        try {
            // console.log(req.body)
            const player = await Player.findOne({ nome: req.params.name });
            const changes = { $set: _.merge(player, req.body) };
            const update = await Player.updateOne(
                { nome: req.params.name },
                changes,
                { new: true }
            );
            // console.log(update);
            if (!update || !update?.matchedCount)
                res.status(404).send("Jogador não encontrado");
            else if (!update?.modifiedCount)
                res.status(202).send("Campo não modificado ou não encontrado");
            else res.status(200).json(update);
        } catch (err) {
            handleError(err, res);
        }
    }
}
