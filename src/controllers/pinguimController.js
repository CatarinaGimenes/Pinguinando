var pinguimModel = require("../models/pinguimModel");

function cadastrar(req, res) {
	var nome = req.body.nome;
	var senha = req.body.senha;
	var cor = req.body.cor;

	pinguimModel.cadastrar(nome, senha).then((resultado) => {
		pinguimModel.inserirRoupa(resultado.insertId, cor, true).then((resultado2) => {
			res.status(201).json(resultado2);
		})
	});
}

function logar(req, res) {
	var nome = req.body.nome;
	var senha = req.body.senha;

	pinguimModel.logar(nome, senha).then((resultado) => {
		res.status(201).json(resultado);
	});
}

module.exports = {
	cadastrar,
	logar,
};
