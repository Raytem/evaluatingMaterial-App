"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app) {
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Evaluating Material App')
        .setDescription('The program being developed is designed to assess the level of functionality of materials for waterproof clothing and to store data on materials of various structures that have passed the evaluation procedure in whole or in part.')
        .addSecurity('basic', {
        type: 'http',
        scheme: 'basic',
        description: 'Enter the email address in the "username" field and the password in the "password" field.',
    })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api', app, document, {
        customSiteTitle: 'Evaluating material API',
        customCss: '.swagger-ui .topbar { display: none } .swagger-ui { max-width: 1100px; margin: 0 auto; }',
    });
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.config.js.map