// controllers/cardapioController.js
const Cardapio = require('../models/cardapio');

// Obter todo o cardápio
const getCardapio = async (req, res) => {
  try {
    const items = await Cardapio.getCardapio();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao obter cardápio', error: err.message });
  }
};

// Obter item do cardápio
const getItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Cardapio.getItem(id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao obter item', error: err.message });
  }
};

// Adicionar item ao cardápio
const addItem = async (req, res) => {
  const { nome_item, categoria_item, preco, ingredientes } = req.body;
  try {
    const itemId = await Cardapio.addItem(nome_item, categoria_item, preco, ingredientes);
    res.status(201).json({ message: 'Item adicionado', id: itemId });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao adicionar item', error: err.message });
  }
};

// Atualizar item do cardápio
const updateItem = async (req, res) => {
  const { id } = req.params;
  const { nome_item, categoria_item, preco, ingredientes } = req.body;
  try {
    await Cardapio.updateItem(id, nome_item, categoria_item, preco, ingredientes);
    res.json({ message: 'Item atualizado' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar item', error: err.message });
  }
};

// Deletar item do cardápio
const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    await Cardapio.deleteItem(id);
    res.json({ message: 'Item deletado' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao deletar item', error: err.message });
  }
};

module.exports = { getCardapio, getItem, addItem, updateItem, deleteItem };
