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

module.exports = {
    selectarroupas,
    updatearroupas,
};