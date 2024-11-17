const db = require('./db');

const Cardapio = db.sequelize.define('Cardapio', {
    nome: {  
        type: db.Sequelize.STRING
    },
    categoria: {
        type: db.Sequelize.TEXT
    },
    preco:{
        type: db.Sequelize.INTEGER
    },
    foto:{
        type: db.Sequelize.STRING
    }
});

// Cardapio.sync({force: true})

module.exports = Cardapio;
