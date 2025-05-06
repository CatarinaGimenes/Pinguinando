var express = require("express");
var router = express.Router();

var pinguimController = require("../controllers/pinguimController");
var cardController = require("../controllers/cardController");

router.post("/cadastrar", function (req, res) {
    pinguimController.cadastrar(req, res);
})

router.post("/logar", function (req, res) {
    pinguimController.logar(req, res);
})

router.post("/salvarPartida", function (req, res) {
    cardController.salvarPartida(req, res);
})

module.exports = router;