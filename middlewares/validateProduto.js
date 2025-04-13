const validateProduto = (req, res, next) => {
  const {nome, descricao, preco} = req.body;

  if (!nome || !descricao || !preco) {
    return res.status(400).json({
      message: 'Todos os campos são obrigatórios',
    });
  }

  if (typeof preco !== 'number') {
    return res.status(400).json({
      message: 'Preço deve ser um número',
    });
  }

  if (preco <= 0) {
    return res.status(400).json({
      message: 'Preço deve ser maior que zero',
    });
  }

  if (nome.trim() === '' || descricao.trim() === '') {
    return res.status(400).json({
      message: 'Nome e descrição não podem estar vazios',
    });
  }

  if (nome.length > 100) {
    return res.status(400).json({
      message: 'Nome não pode ter mais que 100 caracteres',
    });
  }

  if (descricao.length > 255) {
    return res.status(400).json({
      message: 'Descrição não pode ter mais que 255 caracteres',
    });
  }

  next();
};

module.exports = validateProduto;