var cardModel = require("../models/cardModel");

function salvarPartida(req, res) {
    var fkpinguim = req.body.fkpinguim
    var resultado = req.body.resultado;
    var pontosPlayer = req.body.pontosPlayer;
    var pontosMaquina = req.body.pontosMaquina;
    var xp = 0;

    if (resultado == "V") {
        xp = 40
    } else if (resultado == "D") {
        xp = 0
    } else {
        xp = 20
    }

    cardModel.salvarPartida(fkpinguim, resultado, pontosPlayer, pontosMaquina, xp).then((resultado) => {
        res.status(201).json(resultado);
    });
}

module.exports = {
    salvarPartida,
};