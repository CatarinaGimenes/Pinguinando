var database = require("../database/config");

function selectarroupas(fkpinguim) {
    var instrucaoSql = `
    select * from roupa join PinguimRoupa on FKroupa = idRoupa where FKpinguim = ${fkpinguim};
    `
    return database.executar(instrucaoSql);
}

module.exports = {
    selectarroupas,
}