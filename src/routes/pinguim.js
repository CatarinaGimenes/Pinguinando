var express = require("express");
var router = express.Router();

var pinguimController = require("../controllers/pinguimController");
var cardController = require("../controllers/cardController");
var roupasController = require("../controllers/roupasController");

router.post("/cadastrar", function (req, res) {
    pinguimController.cadastrar(req, res);
})

router.post("/logar", function (req, res) {
    pinguimController.logar(req, res);
})

router.post("/salvarPartida", function (req, res) {
    cardController.salvarPartida(req, res);
})

router.get("/selecionardadosgrafico/:fkpinguim", function (req, res) {
    cardController.selecinardadosgrafico(req, res);
})

router.get("/validar/:nome", function (req, res) {
    pinguimController.validar(req, res);
})

router.get("/selectarroupas/:fkpinguim", function (req, res) {
    roupasController.selectarroupas(req, res);
})

module.exports = router;