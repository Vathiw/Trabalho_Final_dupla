const connection = require('../configs/database');

const getAllProdutos = async () => {
  const [rows] = await connection.execute(
      'SELECT * FROM produtos ORDER BY data_atualizado DESC',
  );
  return rows;
};

const createProduto = async (produto) => {
  const {nome, descricao, preco} = produto;
  const [result] = await connection.execute(
      'INSERT INTO produtos (nome, descricao, preco) VALUES (?, ?, ?)',
      [nome, descricao, preco],
  );
  return result;
};

const updateProduto = async (id, produto) => {
  const {nome, descricao, preco} = produto;
  const [result] = await connection.execute(
      'UPDATE produtos SET nome = ?, descricao = ?, preco = ? WHERE id = ?',
      [nome, descricao, preco, id],
  );
  return result;
};

const deleteProduto = async (id) => {
  const [result] = await connection.execute(
      'DELETE FROM produtos WHERE id = ?',
      [id],
  );
  return result;
};

module.exports = {
  getAllProdutos,
  createProduto,
  updateProduto,
  deleteProduto,
};