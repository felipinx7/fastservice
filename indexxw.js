const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const hbs = require('./config/express.config');
const pathConfig = require('./config/path.config');
const app = express();
const post = require('./models/pedidos')

app.use('/public', express.static(pathConfig.publicPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(pathConfig.publicPath))

// CONFIG HANDLE BARS
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

// CONFIG BODY PARSE
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ROTAS
app.get('/cadastrar', function (req, res) {
    res.render('cadastrar')
})
app.post("/login", function(req, res){
    res.send("O formulário, foi recebido!!")
})