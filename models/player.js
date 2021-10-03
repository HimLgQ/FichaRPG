import mongoose, { Schema } from 'mongoose';

const PlayerSchema = new Schema({
    nome: { type: String, required: true, trim: true, unique: true },
    raca: { type: String, required: true, trim: true },
    pericias: {
        fisico: {
            arremessar: { type: Number, default: 1, required: true, min: 1, max: 19 },
            briga: { type: Number, default: 1, required: true, min: 1, max: 19 },
            escalar: { type: Number, default: 1, required: true, min: 1, max: 19 },
            esquivar: { type: Number, default: 1, required: true, min: 1, max: 19 },
            furtividade: { type: Number, default: 1, required: true, min: 1, max: 19 },
            nadar: { type: Number, default: 1, required: true, min: 1, max: 19 },
            saltar: { type: Number, default: 1, required: true, min: 1, max: 19 }
        },
        ciencias: {
            arquelogia: { type: Number, default: 1, required: true, min: 1, max: 19 },
            astronomia: { type: Number, default: 1, required: true, min: 1, max: 19 },
            biologia: { type: Number, default: 1, required: true, min: 1, max: 19 },
            quimica: { type: Number, default: 1, required: true, min: 1, max: 19 },
            farmacia: { type: Number, default: 1, required: true, min: 1, max: 19 },
            analisarEspecia: { type: Number, default: 1, required: true, min: 1, max: 19 },
            medicina: { type: Number, default: 1, required: true, min: 1, max: 19 }
        },
        geral: {
            artes: { type: Number, default: 1, required: true, min: 1, max: 19 },
            cultura: { type: Number, default: 1, required: true, min: 1, max: 19 },
            politica: { type: Number, default: 1, required: true, min: 1, max: 19 },
            financas: { type: Number, default: 1, required: true, min: 1, max: 19 },
            historia: { type: Number, default: 1, required: true, min: 1, max: 19 },
            lingua: { type: Number, default: 1, required: true, min: 1, max: 19 },
        },
        tecnologia: {
            tecnologiaCultural: { type: Number, default: 1, required: true, min: 1, max: 19 },
            craft: { type: Number, default: 1, required: true, min: 1, max: 19 },
            craft: { type: Number, default: 1, required: true, min: 1, max: 19 },
            navegacao: { type: Number, default: 1, required: true, min: 1, max: 19 },
            repEletrica: { type: Number, default: 1, required: true, min: 1, max: 19 },
            repMecanica: { type: Number, default: 1, required: true, min: 1, max: 19 },
        },
        sociais: {
            barganha: { type: Number, default: 1, required: true, min: 1, max: 19 },
            intimidar: { type: Number, default: 1, required: true, min: 1, max: 19 },
            labia: { type: Number, default: 1, required: true, min: 1, max: 19 },
            persuasao: { type: Number, default: 1, required: true, min: 1, max: 19 },
            psicologia: { type: Number, default: 1, required: true, min: 1, max: 19 },
            charme: { type: Number, default: 1, required: true, min: 1, max: 19 },
        },
        armas: {
            corpoACorpo: { type: Number, default: 1, required: true, min: 1, max: 19 },
            pistolas: { type: Number, default: 1, required: true, min: 1, max: 19 },
            riflesDeAssalto: { type: Number, default: 1, required: true, min: 1, max: 19 },
            snipers: { type: Number, default: 1, required: true, min: 1, max: 19 },
            shotguns: { type: Number, default: 1, required: true, min: 1, max: 19 },
        },
        percepcao: {
            intuicao: { type: Number, default: 1, required: true, min: 1, max: 19 },
            escutar: { type: Number, default: 1, required: true, min: 1, max: 19 },
            encontrar: { type: Number, default: 1, required: true, min: 1, max: 19 },
        },
        atributos: {
            for: { type: Number, default: 1, required: true, min: 1, max: 19 },
            con: { type: Number, default: 1, required: true, min: 1, max: 19 },
            des: { type: Number, default: 1, required: true, min: 1, max: 19 },
            int: { type: Number, default: 1, required: true, min: 1, max: 19 },
            tam: { type: Number, default: 1, required: true, min: 1, max: 19 },
            pow: { type: Number, default: 1, required: true, min: 1, max: 19 },
            apa: { type: Number, default: 1, required: true, min: 1, max: 19 },
            sor: { type: Number, default: 1, required: true, min: 1, max: 19 },
        }
    },
    resistencias: {
        perfurante: { type: Number, default: 0, required: true },
        corte: { type: Number, default: 0, required: true },
        brusco: { type: Number, default: 0, required: true },
        elemental: { type: Number, default: 0, required: true },
        veneno: { type: Number, default: 0, required: true },
        morte: { type: Number, default: 0, required: true },
        magia: { type: Number, default: 0, required: true },
    },
    status:
    {
        vidaAtual: { type: Number, default: 0, required: true, min: 0, max: 999 },
        vidaMaxima: { type: Number, default: 0, required: true, min: 0, max: 999 },
        sanidadeAtual: { type: Number, default: 0, required: true, min: 0, max: 999 },
        sanidadeMaxima: { type: Number, default: 0, required: true, min: 0, max: 999 },
        magiaAtual: { type: Number, default: 0, required: true, min: 0, max: 999 },
        magiaMaxima: { type: Number, default: 0, required: true, min: 0, max: 999 },
        fadigaAtual: { type: Number, default: 0, min: 0, max: 999 },
        fadigaMaxima: { type: Number, default: 0, min: 0, max: 999 },
    },
    anotacoes: { type: String, default: ' ', required: true },
    lins: { type: Number, default: 0, required: true },
    conexoes: { type: [String], default: [], required: true },
    habilidades: [
        {
            nome: { type: String, required: true },
            descricao: { type: String, required: true }
        }
    ],
    itens: {
        type: [{
            id: { type: [Schema.Types.ObjectId], required: true },
            quantidade: { type: [Number], default: 1, min: 1, required: true },
        }], default: []
    }
});

const Player = mongoose.model('Player', PlayerSchema, "players");

export default Player;