var roupasModel = require("../models/roupasModel");

function selectarroupas(req, res) {
    var fkpinguim = req.params.fkpinguim;

    roupasModel.selectarroupas(fkpinguim).then((resultado) => {
        res.status(201).json(resultado);
    });
}

function updatearroupas(req, res) {
    var FKroupa = req.body.FKroupa;
    var FKpinguim = req.body.FKpinguim;
    var tipo = req.body.tipo;

    roupasModel.updatearroupas(FKroupa, FKpinguim, tipo).then((resultado) => {
        res.status(201).json(resultado);
    });
}

function exibircatalogo(req, res) {
    var fkpinguim = req.params.fkpinguim;

    roupasModel.exibircatalogo(fkpinguim).then((resultado) => {
        res.status(201).json(resultado);
    });
}

function tirardinheiro(req, res) {
    var FKroupa = req.body.FKroupa;
    var FKpinguim = req.body.FKpinguim;
    var preco = req.body.preco;

    roupasModel.tirardinheiro(FKpinguim, preco).then((resultado) => {
        roupasModel.darroupa(FKpinguim, FKroupa).then((resultado2) => {
            res.status(201).json(resultado2);
        })
    });
}

module.exports = {
    selectarroupas,
    updatearroupas,
    exibircatalogo,
    tirardinheiro,
};