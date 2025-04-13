const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const validateCliente = require('../middlewares/validateCliente');

router.get('/', clienteController.getAllClientes);
router.post('/', validateCliente, clienteController.createCliente);
router.put('/:id', validateCliente, clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;
