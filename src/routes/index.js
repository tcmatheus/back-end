const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/Produtos/produtoController");

router.get("/produtos", produtoController.getProdutos);
router.get("/produtos/:id", produtoController.getProduto);
router.put("/produtos/:id", produtoController.updateProduto);
router.post("/produtos", produtoController.createProduto);
router.post("/produtos/situacoes", produtoController.updateSituacao);
router.delete("/produtos/:id", produtoController.deleteProduto);

module.exports = router;