const express = require("express");
const router = express.Router();
const authController = require("../controllers/Produtos/produtoController");

router.post("/oauth/code", authController.returnToken);

module.exports = router;