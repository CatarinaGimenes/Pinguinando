var database = require("../database/config");

function selectarroupas(fkpinguim) {
    var instrucaoSql = `
    select * from PinguimRoupa where FKpinguim = ${fkpinguim};
    `
    return database.executar(instrucaoSql);
}

module.exports = {
    selectarroupas,
}