var database = require("../database/config");

function cadastrar(nome, senha) {
    var instrucaoSql = `
    INSERT INTO pinguim (nome, senha, moedas, agente_secreto) VALUES ('${nome}', '${senha}', 1000, 0);
    `

    return database.executar(instrucaoSql);
}

function inserirRoupa(FKpinguim, FKroupa, vestindo) {
    var instrucaoSql = `
    INSERT INTO PinguimRoupa (FKpinguim, FKroupa, vestindo) VALUES (${FKpinguim}, ${FKroupa}, ${vestindo}), (${FKpinguim}, 510, 1);
    `

    return database.executar(instrucaoSql);
}

function logar(nome, senha) {
    var instrucaoSql = `
    select idPinguim, nome, senha from pinguim where nome = '${nome}' and senha = '${senha}';
    `

    return database.executar(instrucaoSql);
}

function validar(nome) {
    var instrucaoSql = `
    select nome from pinguim where nome = '${nome}';
    `
    return database.executar(instrucaoSql);
}

function moedar(idPinguim) {
    var instrucaoSql = `
    select moedas from pinguim where idPinguim = ${idPinguim};
    `
    return database.executar(instrucaoSql);
}

function obterImagem(idPinguim) {
    const instrucaoSql = `
        SELECT foto FROM pinguim WHERE idPinguim = ?
    `;
    return database.execute(instrucaoSql, [idPinguim]);
}

module.exports = { 
    cadastrar, 
    inserirRoupa, 
    logar, 
    validar, 
    moedar,
    obterImagem
};