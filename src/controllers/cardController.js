var cardModel = require("../models/cardModel");

function salvarPartida(req, res) {
    var fkpinguim = req.body.fkpinguim
    var resultado = req.body.resultado;
    var pontosPlayer = req.body.pontosPlayer;
    var pontosMaquina = req.body.pontosMaquina;
    var xp = 0;
    var moedas = 0;

    if (resultado == "V") {
        xp = 300
        moedas = 250
    } else if (resultado == "D") {
        xp = 75
        moedas = 0
    } else {
        xp = 150
        moedas = 100
    }

    cardModel.salvarPartida(fkpinguim, resultado, pontosPlayer, pontosMaquina, xp, moedas).then((resultado) => {
        res.status(201).json(resultado);
    });
}

function selecinardadosgrafico(req, res) {
    var fkpinguim = req.params.fkpinguim;

    cardModel.selecinardadosgrafico(fkpinguim).then((resultado) => {
        res.status(201).json(resultado);
    });
}

module.exports = {
    salvarPartida,
    selecinardadosgrafico,
};