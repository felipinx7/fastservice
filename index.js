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


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.render('login')
})
app.get('/views/cadastrar', function(req, res){
    res.render('cadastrar')
})

app.get('/balconista1', function(req, res){
    res.render('balconista1')
})
app.get('/fast-service', function(req, res){
    res.render('fast-service')
})

const sequelize = new Sequelize('db_startup', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/card', function(req, res) {
    console.log("Rota /card acessada");
    res.render('pratos'); 
});


app.post('/add', function(req, res) {
    post.create({
        prato: req.body.prato,
        descriçao: req.body.descriçao
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        console.error("Erro ao adicionar prato:", erro); 
        res.send("Houve um erro: " + erro)
    });
});


app.post('/login', function(req, res){
    post.create({
        usuario: req.body.username,
        senha: req.body.password
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro: " + erro)
    })
    
})

app.listen(8081, function() {
    console.log("Servidor Rodando");
});
