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

function checarroupas(req, res) {
    var fkpinguim = req.params.fkpinguim;

    roupasModel.checarroupas(fkpinguim).then((resultado) => {
        res.status(201).json(resultado);
    });
}

function upload(req, res) {

    var idPinguim = req.params.idPinguim

    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
        const buffer = Buffer.concat(chunks);

        roupasModel.upload(buffer, idPinguim).then((resultado) => {
            res.status(201).json(resultado);
        });
    });
}

module.exports = {
    selectarroupas,
    updatearroupas,
    exibircatalogo,
    tirardinheiro,
    checarroupas,
    upload,
};