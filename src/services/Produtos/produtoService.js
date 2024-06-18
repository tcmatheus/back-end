const axios = require("axios");
const axiosInstance = require("../../config/axiosConfig");

//const API_URL = "https://www.bling.com.br/Api/v3"
const API_URL = process.env.API_URL;

const getProdutos = async () => {
  try {
    const response = await axiosInstance.get(`${API_URL}/produtos`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao ler produto: ${error.message}`);
  }
};

const getProduto = async (id) => {
  try {
    const response = await axiosInstance.get(`${API_URL}/produtos/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao ler produto: ${error.message}`);
  }
};

const updateProduto = async (id, produto) => {
  try {
    const response = await axiosInstance.put(
      `${API_URL}/produtos/${id}`,
      produto
    );
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao atualizar produto: ${error.message}`);
  }
};

const updateSituacao = async (situacao) => {
  try {
    const response = await axiosInstance.post(
      `${API_URL}/produtos/situacoes`,
      situacao
    );
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao postar situação: ${error.message}`);
  }
};

const createProduto = async (produto) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/produtos`, produto);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error(`Erro ao criar produto: ${error.response.data}`);
    }
  }
};

const deleteProduto = async (id) => {
  try {
    const response = await axiosInstance.delete(`${API_URL}/produtos/` + id);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao deletar produto: ${error.message}`);
  }
};

module.exports = {
  getProdutos,
  getProduto,
  updateSituacao,
  updateProduto,
  createProduto,
  deleteProduto,
};
