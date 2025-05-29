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

router.post("/atualizardinheiro", function (req, res) {
    cardController.atualizardinheiro(req, res);
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

router.post("/updatearroupas", function (req, res) {
    roupasController.updatearroupas(req, res);
})

router.get("/exibircatalogo/:fkpinguim", function (req, res) {
    roupasController.exibircatalogo(req, res);
})

router.post("/tirardinheiro", function (req, res) {
    roupasController.tirardinheiro(req, res);
})

router.get("/moedar/:idPinguim", function (req, res) {
    pinguimController.moedar(req, res);
})

router.get("/checarroupas/:fkpinguim", function (req, res) {
    roupasController.checarroupas(req, res);
})

module.exports = router;