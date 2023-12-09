"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express_1 = require("express");
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
const express = require("express");
const path_1 = require("path");
<<<<<<< HEAD
var path = require("path");
=======
>>>>>>> 6b12b9e5dc5ea685df0dd123fa1c0b056a6eeba8
const fs = require("fs");
dotenv.config();
require('events').EventEmitter.defaultMaxListeners = 0;
const connectMongoDB = require('./helperfunction/db');
const httpsOptions = {
<<<<<<< HEAD
    key: fs.readFileSync("./src/ssl/pharmascare.key"),
    cert: fs.readFileSync('./src/ssl/pharmascare_certificate.crt'),
=======
    key: fs.readFileSync('/etc/letsencrypt/live/pharmascare.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/pharmascare.com/fullchain.pem'),
>>>>>>> 6b12b9e5dc5ea685df0dd123fa1c0b056a6eeba8
};
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
        httpsOptions
    });
    connectMongoDB();
    app.use((0, express_1.json)({ limit: '500mb' }));
    app.use((0, express_1.urlencoded)({ extended: true, limit: '50mb' }));
    app.setGlobalPrefix('api');
    app.use('/public', express.static((0, path_1.join)(__dirname, '..', 'public')));
    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(process.env.PORT);
    console.log('Project is running at: ', process.env.PORT);
}
bootstrap();
require('events').EventEmitter.defaultMaxListeners = 0;
//# sourceMappingURL=main.js.map