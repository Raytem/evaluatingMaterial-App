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
exports.AbrasionTypeEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const abstract_base_entity_1 = require("../../abstract-base-entity");
const condition_entity_1 = require("../../condition/entities/condition.entity");
const typeorm_1 = require("typeorm");
let AbrasionTypeEntity = class AbrasionTypeEntity extends abstract_base_entity_1.AbstractBaseEntity {
};
exports.AbrasionTypeEntity = AbrasionTypeEntity;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AbrasionTypeEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => condition_entity_1.ConditionEntity, (condition) => condition.abrasionType),
    __metadata("design:type", Array)
], AbrasionTypeEntity.prototype, "conditions", void 0);
exports.AbrasionTypeEntity = AbrasionTypeEntity = __decorate([
    (0, typeorm_1.Entity)('AbrasionType')
], AbrasionTypeEntity);
//# sourceMappingURL=abrasion-type.entity.js.map