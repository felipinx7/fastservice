// models/cardapio.js
const db = require('../config/db');

const getCardapio = async () => {
  const [rows] = await db.execute('SELECT * FROM cardapio');
  return rows;
};

const getItem = async (id) => {
  const [rows] = await db.execute('SELECT * FROM cardapio WHERE id_item = ?', [id]);
  return rows[0];
};

const addItem = async (nome_item, categoria_item, preco, ingredientes) => {
  const [result] = await db.execute(
    'INSERT INTO cardapio (nome_item, categoria_item, preco, ingredientes) VALUES (?, ?, ?, ?)',
    [nome_item, categoria_item, preco, ingredientes]
  );
  return result.insertId;
};

const updateItem = async (id, nome_item, categoria_item, preco, ingredientes) => {
  await db.execute(
    'UPDATE cardapio SET nome_item = ?, categoria_item = ?, preco = ?, ingredientes = ? WHERE id_item = ?',
    [nome_item, categoria_item, preco, ingredientes, id]
  );
};

const deleteItem = async (id) => {
  await db.execute('DELETE FROM cardapio WHERE id_item = ?', [id]);
};

module.exports = { getCardapio, getItem, addItem, updateItem, deleteItem };
