var database = require("../database/config");

function salvarPartida(fkpinguim, resultado, pontosPlayer, pontosMaquina, xp) {
    var instrucaoSql = `
    INSERT INTO partida (FKpinguim, resultado, pontosPLAYER, pontosMAQUINA, XP) VALUES (${fkpinguim}, '${resultado}', ${pontosPlayer}, ${pontosMaquina}, ${xp});
    `

    return database.executar(instrucaoSql);
}

module.exports = { salvarPartida };