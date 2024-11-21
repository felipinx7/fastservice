import { create } from 'express-handlebars'
import { pathConfig } from "./path.config";

export const hbs = create({
    extname: '.hbs', 
    defaultLayout: false, 
    partialsDir: pathConfig.viewsPath,
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
    },
});

