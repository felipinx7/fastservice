import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { hbs } from "./config/express.config";
import { pathConfig } from "./config/path.config";
import bcrypt from 'bcryptjs';
import multer, { DiskStorageOptions, FileFilterCallback } from 'multer';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join('public/css,js/uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// Middleware
app.use('/public', express.static(pathConfig.publicPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(pathConfig.publicPath));

// Handlebars Configuration
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

// Routes
app.get('/cadastrar-prato', (req: Request, res: Response) => {
    res.render('balconista');
});

app.get('/cardapio', (req: Request, res: Response) => {
    res.render('balconista');
});

app.post('/cadastrar-prato', upload.single('foto'), async (req: Request, res: Response) => {
    try {
        const { nome, categoria, preco } = req.body;
        const foto = req.file ? req.file.filename : null;

        const pratoNovo = await prisma.cardapio.create({
            data: { nome, categoria, preco: parseFloat(preco), foto },
        });

        res.redirect('/cardapio');
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao cadastrar o prato');
    }
});

app.get('/', (req: Request, res: Response) => {
    res.render('login');
});

app.get('/balconista', (req: Request, res: Response) => {
    res.render('balconista');
});

app.get('/pratos-cadastrados', async (req: Request, res: Response) => {
    try {
        const pratos = await prisma.cardapio.findMany();
        res.json(pratos);
    } catch (error) {
        console.error('Erro ao buscar pratos:', error);
        res.status(500).json({ erro: 'Erro ao buscar pratos do cardápio' });
    }
});

app.delete('/remover-prato', async (req: Request, res: Response): Promise<any> => {
    const { id } = req.body;
    console.log('id:', id)

    try {
        const prato = await prisma.cardapio.findUnique({ where: { id } });

        if (!prato) {
            return res.status(404).json({ erro: 'Prato não encontrado' });
        }

        await prisma.cardapio.delete({ where: { id } });
        res.status(200).json({ sucesso: 'Prato removido com sucesso' });
    } catch (error) {
        console.error('Erro ao remover prato:', error);
        res.status(500).json({ erro: 'Erro ao remover prato' });
    }
});

app.get('/ADM', (req: Request, res: Response) => {
    res.render('balconista');
});

app.get('/views/cadastrar.hbs', (req: Request, res: Response) => {
    res.render('cadastrar');
});

app.post('/cadastrar', async (req: Request, res: Response): Promise<any> => {
    const { email, senha } = req.body;

    try {
        const emailExistente = await prisma.balconista.findUnique({ where: { email } });

        if (emailExistente) {
            return res.json({ erro: 'Este email já está em uso.' });
        }

        const novoBalconista = await prisma.balconista.create({
            data: { email, senha },
        });

        res.json({ sucesso: 'Cadastro realizado com sucesso!' });
    } catch (error) {
        console.error('Erro ao realizar o cadastro:', error);
        res.json({ erro: 'Erro no cadastro. Tente novamente mais tarde.' });
    }
});

app.post('/login', async (req: Request, res: Response): Promise<any> => {
    const { email, senha } = req.body;

    try {
        const balconista = await prisma.balconista.findUnique({ where: { email } });

        if (!balconista) {
            return res.json({ erro: 'Email não encontrado.' });
        }

        if (senha.trim() !== balconista.senha.trim()) {
            return res.json({ erro: 'Senha incorreta.' });
        }

        res.json({ sucesso: 'Login realizado com sucesso!' });
    } catch (error) {
        res.json({ erro: 'Erro no login. Tente novamente mais tarde.' });
    }
});

app.get('/avaliacao', (req: Request, res: Response) => {
    res.render('menu');
});

app.post('/avaliacao', async (req: Request, res: Response): Promise<any> => {
    const { nome, sobrenome, avaliacao, estrelas } = req.body;

    try {
        await prisma.avaliacao.create({
            data: { nome, sobrenome, avaliacao, estrelas: parseInt(estrelas, 10) },
        });

        res.redirect('/menu');
    } catch (error) {
        console.error('Erro ao salvar a avaliação:', error);
        res.status(500).send('Erro ao salvar a avaliação');
    }
});

app.get('/todasavaliacao', async (req: Request, res: Response) => {
    try {
        const todasavaliacao = await prisma.avaliacao.findMany();
        res.json(todasavaliacao);
    } catch (error) {
        console.error('Erro ao buscar avaliações:', error);
        res.status(500).json({ erro: 'Erro ao buscar avaliações' });
    }
});

app.get('/fast-service', (req: Request, res: Response) => {
    res.render('fast-service');
});

app.get('/menu', (req: Request, res: Response) => {
    res.render('menu');
});

app.get('/card', (req: Request, res: Response) => {
    console.log('Rota /card acessada');
    res.render('pratos');
});

app.post('/add', async (req: Request, res: Response) => {
    try {
        await prisma.pedido.create({
            data: { prato: req.body.prato, descricao: req.body.descricao },
        });

        res.redirect('/');
    } catch (error) {
        console.error('Erro ao adicionar prato:', error);
        res.send('Houve um erro: ' + error);
    }
});

// Start Server
app.listen(8081, () => {
    console.log('Servidor Rodando em http://localhost:8081');
});
