const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const hbs = require('./config/express.config');
const pathConfig = require('./config/path.config');
const app = express();
const pedidos = require('./models/pedidos');
const Balconista = require('./models/balconista');
const bcrypt = require('bcryptjs');




// Middleware
app.use('/public', express.static(pathConfig.publicPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(pathConfig.publicPath));

// Configuração do Handlebars
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

// Rota de cadastro
app.get('/cadastrar', function (req, res) {
    res.render('cadastrar');
});

// Cadastro de balconista

app.get('/cadastrar', function (req, res) {
    res.render('cadastrar');
});
// Cadastro de balconista
app.post('/cadastrar', async function (req, res) {
    const { email, senha } = req.body;

    try {
        // Verifica se o email já está cadastrado
        const emailExistente = await Balconista.findOne({ where: { email } });

        if (emailExistente) {
            return res.json({ erro: 'Este email já está em uso.' });  // Retorna mensagem caso o email já exista
        }

        // Criação do novo usuário
        const novoBalconista = await Balconista.create({ email, senha });

        // Resposta de sucesso
        res.json({ sucesso: 'Cadastro realizado com sucesso!' });

        // Redirecionamento após o cadastro
        // Se você quer redirecionar para a página de login após o cadastro, você pode usar o res.redirect:
        // res.redirect('/logar');
    } catch (error) {
        // Captura e loga o erro real
        console.error('Erro ao realizar o cadastro:', error);

        // Mensagem de erro genérica para o cliente
        res.json({ erro: 'Erro no cadastro. Tente novamente mais tarde.' });
    }
});


app.get('/logar', function (req, res) {
    res.render('login');
});

// Login de pedidos
app.post('/login', async function (req, res) {
    const { email, senha } = req.body;

    try {
        const balconista = await Balconista.findOne({ where: { email } });

        // Verifica se o email não existe
        if (!balconista) {
            return res.json({ erro: 'Email não encontrado.' });
        }

        // Comparando a senha fornecida com a armazenada no banco (agora sem bcrypt)
        if (senha !== balconista.senha) {
            return res.json({ erro: 'Senha incorreta.' });
        }

        // Login bem-sucedido
        res.json({ sucesso: 'Login realizado com sucesso!' });
        // res.redirect('/dashboard');  // Aqui você pode redirecionar para outra página após o login

    } catch (error) {
        res.json({ erro: 'Erro no login. Tente novamente mais tarde.' });
    }
});


// Rota para página ADM
app.get('/ADM', function (req, res) {
    res.render('balconista');
});

// Rota para Fast Service
app.get('/fast-service', function (req, res) {
    res.render('fast-service');
});

// Rota para o menu
app.get('/menu', function (req, res) {
    res.render('menu');
});

// Conexão com o banco de dados
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

// Página inicial
app.get('/', (req, res) => {
    res.render('index');
});

// Rota para card
app.get('/card', function (req, res) {
    console.log("Rota /card acessada");
    res.render('pratos');
});

// Adicionar pedido
app.post('/add', function (req, res) {
    pedidos.create({
        prato: req.body.prato,
        descricao: req.body.descricao, // Corrigido: alterei de 'descriçao' para 'descricao'
    }).then(function () {
        res.redirect('/');
    }).catch(function (erro) {
        console.error("Erro ao adicionar prato:", erro);
        res.send("Houve um erro: " + erro);
    });
});


// Iniciando o servidor na porta 8081
app.listen(8081, function () {
    console.log("Servidor Rodando");
});
