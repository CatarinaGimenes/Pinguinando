var express = require("express");
var router = express.Router();

var pinguimController = require("../controllers/pinguimController");

router.post("/cadastrar", function (req, res) {
    pinguimController.cadastrar(req, res);
})

router.post("/logar", function (req, res) {
    pinguimController.logar(req, res);
})

module.exports = router;