const db = require('./db');

const post = db.sequelize.define('Pratos', {
    prato: { // alterado para 'prato'
        type: db.Sequelize.STRING
    },
    descriçao: {
        type: db.Sequelize.TEXT
    },
});

module.exports = post;
