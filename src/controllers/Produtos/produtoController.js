const produtoService = require("../../services/Produtos/produtoService");

const getProdutos = async (req, res) => {
  try {
    const produtos = await produtoService.getProdutos();
    res.status(200).send(produtos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getProduto = async (req, res) => {
  try {
    const produto = await produtoService.getProduto(req.params.id);
    res.status(200).send(produto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProduto = async (req, res) => {
  try {
    const produtoId = req.params.id;
    const produtoData = req.body;
    const updatedProduto = await produtoService.updateProduto(produtoId, produtoData);
    res.status(200).send(updatedProduto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateSituacao = async (req, res) => {
  try {
    const situacao = req.body;
    const novaSituacao = await produtoService.updateSituacao(situacao);
    res.status(201).send(novaSituacao);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createProduto = async (req, res) => {
  try {
    const produto = req.body;
    const novoProduto = await produtoService.createProduto(produto);
    res.status(201).send(novoProduto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduto = async (req, res) => {
  try {
    const produto = req.params.id;
    const response = await produtoService.deleteProduto(produto);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getProdutos, getProduto, updateSituacao, updateProduto, createProduto, deleteProduto };
