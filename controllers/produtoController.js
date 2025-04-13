const produtoService = require('../services/produtoService');

const getAllProdutos = async (req, res) => {
  try {
    const produtos = await produtoService.getAllProdutos();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const createProduto = async (req, res) => {
  try {
    const result = await produtoService.createProduto(req.body);
    res.status(201).json({
      id: result.insertId,
      ...req.body,
      data_atualizado: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const updateProduto = async (req, res) => {
  try {
    const {id} = req.params;
    await produtoService.updateProduto(id, req.body);
    res.status(200).json({
      id,
      ...req.body,
      data_atualizado: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const deleteProduto = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await produtoService.deleteProduto(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({message: 'Produto não encontrado'});
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = {
  getAllProdutos,
  createProduto,
  updateProduto,
  deleteProduto,
};