var database = require("../database/config");

function salvarPartida(fkpinguim, resultado, pontosPlayer, pontosMaquina, xp, moedas) {
    var instrucaoSql = `
    INSERT INTO partida (FKpinguim, resultado, pontosPLAYER, pontosMAQUINA, XP, moedas) VALUES (${fkpinguim}, '${resultado}', ${pontosPlayer}, ${pontosMaquina}, ${xp}, ${moedas});
    `

    return database.executar(instrucaoSql);
}


function selecinardadosgrafico(fkpinguim) {
    var instrucaoSql = `
    select * from partida where FKpinguim = ${fkpinguim};
    `
    return database.executar(instrucaoSql);
}

function atualizardinheiro(idPinguim, dinheiro) {
    var instrucaoSql = `
    update pinguim set moedas = (moedas + ${dinheiro}) where idPinguim = ${idPinguim};
    `
    return database.executar(instrucaoSql);
}

function checarXP(fkpinguim) {
    var instrucaoSql = `
    select sum(XP) as XP from partida where FKpinguim = ${fkpinguim};
    `
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarPartida,
    selecinardadosgrafico,
    atualizardinheiro,
    checarXP,
}
