const db = require('./db');

const Balconista = db.sequelize.define('balconista', {
    email: {
        type: db.Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    senha: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
});


module.exports = Balconista;
