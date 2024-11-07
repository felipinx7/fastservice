const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_startup', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports ={
    Sequelize: Sequelize,
    sequelize: sequelize
}