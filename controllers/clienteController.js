const clienteService = require('../services/clienteService');

const getAllClientes = async (req, res) => {
  try {
    const clientes = await clienteService.getAllClientes();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const createCliente = async (req, res) => {
  try {
    const result = await clienteService.createCliente(req.body);
    res.status(201).json({id: result.insertId, ...req.body});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const updateCliente = async (req, res) => {
  try {
    const {id} = req.params;
    await clienteService.updateCliente(id, req.body);
    res.status(200).json({id, ...req.body});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

const deleteCliente = async (req, res) => {
  try {
    const {id} = req.params;
    await clienteService.deleteCliente(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = {
  getAllClientes,
  createCliente,
  updateCliente,
  deleteCliente,
};