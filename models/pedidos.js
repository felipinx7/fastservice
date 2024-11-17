const db = require('./db');

const pedidos = db.sequelize.define('Pratos', {
    prato: {  
        type: db.Sequelize.STRING
    },
    descriçao: {
        type: db.Sequelize.TEXT
    },
});


module.exports = pedidos;
