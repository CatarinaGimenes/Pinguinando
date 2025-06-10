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

function validar(req, res) {
	var nome = req.params.nome;

	pinguimModel.validar(nome).then((resultado) => {
		res.status(201).json(resultado);
	});
}

function moedar(req, res) {
	var idPinguim = req.params.idPinguim;

	pinguimModel.moedar(idPinguim).then((resultado) => {
		res.status(201).json(resultado);
	});
}

function obterImagem(req, res) {
    const idPinguim = req.params.idPinguim;

    pinguimModel.obterImagem(idPinguim)
        .then((resultado) => {
            if (resultado.length == 0 || !resultado[0].foto) {
                return res.status(404).end();
            }

            const imagemBuffer = resultado[0].foto;

            res.setHeader('Content-Type', 'image/png');
            res.send(imagemBuffer);
        })
        .catch((erro) => {
            console.error("Erro ao buscar imagem:", erro);
            res.status(500).end();
        });
}

module.exports = {
	cadastrar,
	logar,
	validar,
	moedar,
	obterImagem,
};
