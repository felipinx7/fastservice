const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const hbs = require('./config/express.config');
const pathConfig = require('./config/path.config');
const app = express();
const pedidos = require('./models/pedidos');
const Balconista = require('./models/balconista');
const Cardapio = require('./models/cardapio')
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');


// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public/css,js/uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

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
app.get('/cadastrar-prato', function (req, res) {
    res.render('balconista');
});
app.get("/cardapio", function(req, res){
    res.render("balconista")
})
app.post('/cadastrar-prato', upload.single('foto'), async (req, res) => {
    try {
        const { nome, categoria, preco } = req.body;
        const foto = req.file ? req.file.filename : null;  

        // Cria o novo prato no banco de dados
        const pratoNovo = await Cardapio.create({ nome, categoria, preco, foto });

        res.redirect('/cardapio');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao cadastrar o prato');
    }
});

// Rota para buscar os pratos do cardápio
app.get('/pratos-cadastrados', async (req, res) => {
    try {
        const pratos = await Cardapio.findAll();
        res.json(pratos);
    } catch (error) {
        console.error("Erro ao buscar pratos:", error);
        res.status(500).json({ erro: 'Erro ao buscar pratos do cardápio' });
    }
});
// Rota para remover um prato pelo nome
app.delete('/remover-prato', async (req, res) => {
    const { nome } = req.body; // Espera o nome do prato no corpo da requisição

    try {
        // Encontre e remova o prato com o nome fornecido
        const prato = await Cardapio.findOne({ where: { nome } });

        if (!prato) {
            return res.status(404).json({ erro: 'Prato não encontrado' });
        }

        await prato.destroy(); // Remove o prato do banco de dados
        res.status(200).json({ sucesso: 'Prato removido com sucesso' });
    } catch (error) {
        console.error('Erro ao remover prato:', error);
        res.status(500).json({ erro: 'Erro ao remover prato' });
    }
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
