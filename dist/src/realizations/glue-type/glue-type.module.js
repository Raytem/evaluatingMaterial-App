"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlueTypeModule = void 0;
const common_1 = require("@nestjs/common");
const glue_type_service_1 = require("./glue-type.service");
const glue_type_controller_1 = require("./glue-type.controller");
const typeorm_1 = require("@nestjs/typeorm");
const glue_type_entity_1 = require("./entities/glue-type.entity");
const pagination_module_1 = require("../../services/pagination/pagination.module");
const pagination_service_1 = require("../../services/pagination/pagination.service");
let GlueTypeModule = class GlueTypeModule {
};
exports.GlueTypeModule = GlueTypeModule;
exports.GlueTypeModule = GlueTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [pagination_module_1.PaginationModule, typeorm_1.TypeOrmModule.forFeature([glue_type_entity_1.GlueTypeEntity])],
        controllers: [glue_type_controller_1.GlueTypeController],
        providers: [glue_type_service_1.GlueTypeService, pagination_service_1.PaginationService],
        exports: [glue_type_service_1.GlueTypeService],
    })
], GlueTypeModule);
//# sourceMappingURL=glue-type.module.js.map