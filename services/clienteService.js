const connection = require('../configs/database');

const getAllClientes = async () => {
  const [rows] = await connection.execute('SELECT * FROM clientes');
  return rows;
};

const createCliente = async (cliente) => {
  const {nome, sobrenome, email, idade} = cliente;
  const [result] = await connection.execute(
      'INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)',
      [nome, sobrenome, email, idade],
  );
  return result;
};

const updateCliente = async (id, cliente) => {
  const {nome, sobrenome, email, idade} = cliente;
  const [result] = await connection.execute(
      'UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?',
      [nome, sobrenome, email, idade, id],
  );
  return result;
};

const deleteCliente = async (id) => {
  const [result] = await connection.execute(
      'DELETE FROM clientes WHERE id = ?',
      [id],
  );
  return result;
};

module.exports = {
  getAllClientes,
  createCliente,
  updateCliente,
  deleteCliente,
};
