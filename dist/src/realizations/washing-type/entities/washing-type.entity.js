"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WashingTypeEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const abstract_base_entity_1 = require("../../abstract-base-entity");
const washing_entity_1 = require("../../washing/entities/washing.entity");
const typeorm_1 = require("typeorm");
let WashingTypeEntity = class WashingTypeEntity extends abstract_base_entity_1.AbstractBaseEntity {
};
exports.WashingTypeEntity = WashingTypeEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WashingTypeEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => washing_entity_1.WashingEntity, (washing) => washing.washingType),
    __metadata("design:type", Array)
], WashingTypeEntity.prototype, "washings", void 0);
exports.WashingTypeEntity = WashingTypeEntity = __decorate([
    (0, typeorm_1.Entity)('WashingType')
], WashingTypeEntity);
//# sourceMappingURL=washing-type.entity.js.map