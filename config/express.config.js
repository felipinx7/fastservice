const { create } = require('express-handlebars');
const pathConfig = require('./path.config');

const hbs = create({
    extname: '.hbs', 
    defaultLayout: false, 
    partialsDir: pathConfig.viewsPath,
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
    },
});

module.exports = hbs;
