var database = require("../database/config");

function salvarPartida(fkpinguim, resultado, pontosPlayer, pontosMaquina, xp, moedas) {
    var instrucaoSql = `
    INSERT INTO partida (FKpinguim, resultado, pontosPLAYER, pontosMAQUINA, XP, moedas) VALUES (${fkpinguim}, '${resultado}', ${pontosPlayer}, ${pontosMaquina}, ${xp}, ${moedas});
    `

    return database.executar(instrucaoSql);
}

module.exports = { salvarPartida };