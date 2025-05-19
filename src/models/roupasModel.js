var database = require("../database/config");

function selectarroupas(fkpinguim) {
    var instrucaoSql = `
    select * from roupa join PinguimRoupa on FKroupa = idRoupa where FKpinguim = ${fkpinguim};
    `
    return database.executar(instrucaoSql);
}

function updatearroupas(FKroupa, FKpinguim, tipo) {
    var instrucaoSql = `
    update PinguimRoupa pr join Roupa r on pr.FKroupa = r.idRoupa set vestindo = (FKroupa = ${FKroupa}) where FKpinguim = ${FKpinguim} and r.tipo = '${tipo}';
    `

    return database.executar(instrucaoSql);
}

function exibircatalogo(fkpinguim) {
    var instrucaoSql = `
    select * from roupa left join PinguimRoupa on FKroupa = idRoupa and FKpinguim = ${fkpinguim} where preco != 0;
    `
    return database.executar(instrucaoSql);
}

function tirardinheiro(FKpinguim, preco) {
    var instrucaoSql = `
    update pinguim set moedas = (moedas - ${preco}) where idPinguim = ${FKpinguim};
    `
    return database.executar(instrucaoSql);
}

function darroupa(FKpinguim, FKroupa) {
    var instrucaoSql = `
    insert into PinguimRoupa values (${FKpinguim}, ${FKroupa}, default, 0);
    `
    return database.executar(instrucaoSql);
}

module.exports = {
    selectarroupas,
    updatearroupas,
    exibircatalogo,
    tirardinheiro,
    darroupa,
}