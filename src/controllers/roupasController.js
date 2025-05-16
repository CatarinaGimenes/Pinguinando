var roupasModel = require("../models/roupasModel");

function selectarroupas(req, res) {
    var fkpinguim = req.params.fkpinguim;

    roupasModel.selectarroupas(fkpinguim).then((resultado) => {
        res.status(201).json(resultado);
    });
}

module.exports = {
    selectarroupas,
};