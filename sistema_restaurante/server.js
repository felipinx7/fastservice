// server.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cardapioRoutes = require('./routes/cardapioRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');  // Pode ser criado de forma semelhante
const balconistaRoutes = require('./routes/balconistaRoutes'); // Pode ser criado de forma semelhante

dotenv.config();

// Configuração para aceitar JSON no corpo das requisições
app.use(express.json());

// Rotas
app.use('/api/cardapio', cardapioRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/balconistas', balconistaRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
