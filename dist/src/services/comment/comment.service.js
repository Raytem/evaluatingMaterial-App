"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const functionality_level_1 = require("../../enums/functionality-level");
let CommentService = class CommentService {
    getWaterproofFunctionComment(calculatedWaterproofFunction) {
        const cwf = calculatedWaterproofFunction;
        let materialBlottingPressure_lvl = functionality_level_1.FunctionalityLevel.UNDEFINED;
        let waterproof_lvl = functionality_level_1.FunctionalityLevel.UNDEFINED;
        let materialBlottingTime_lvl = functionality_level_1.FunctionalityLevel.UNDEFINED;
        let waterproofRealizationCriteria_lvl = functionality_level_1.FunctionalityLevel.UNDEFINED;
        let dynamicWaterproofCriteria_lvl = functionality_level_1.FunctionalityLevel.UNDEFINED;
        if (cwf.materialBlottingPressure_base >= 3 &&
            cwf.materialBlottingPressure_base <= 8) {
            materialBlottingPressure_lvl = functionality_level_1.FunctionalityLevel.MIN;
        }
        else if (cwf.materialBlottingPressure_base > 8 &&
            cwf.materialBlottingPressure_base <= 50) {
            materialBlottingPressure_lvl = functionality_level_1.FunctionalityLevel.LOW;
        }
        else if (cwf.materialBlottingPressure_base > 50 &&
            cwf.materialBlottingPressure_base <= 98) {
            materialBlottingPressure_lvl = functionality_level_1.FunctionalityLevel.AVERAGE;
        }
        else if (cwf.materialBlottingPressure_base > 98 &&
            cwf.materialBlottingPressure_base <= 200) {
            materialBlottingPressure_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        }
        else if (cwf.materialBlottingPressure_base > 200) {
            materialBlottingPressure_lvl = functionality_level_1.FunctionalityLevel.EXTRA_HIGH;
        }
        if (cwf.waterproof_base >= 3 && cwf.waterproof_base <= 8) {
            waterproof_lvl = functionality_level_1.FunctionalityLevel.MIN;
        }
        else if (cwf.waterproof_base > 8 && cwf.waterproof_base <= 50) {
            waterproof_lvl = functionality_level_1.FunctionalityLevel.LOW;
        }
        else if (cwf.waterproof_base > 50 && cwf.waterproof_base <= 98) {
            waterproof_lvl = functionality_level_1.FunctionalityLevel.AVERAGE;
        }
        else if (cwf.waterproof_base > 98 && cwf.waterproof_base <= 200) {
            waterproof_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        }
        else if (cwf.waterproof_base > 200) {
            waterproof_lvl = functionality_level_1.FunctionalityLevel.EXTRA_HIGH;
        }
        if (cwf.materialBlottingTime_base >= 5 &&
            cwf.materialBlottingTime_base <= 10) {
            materialBlottingTime_lvl = functionality_level_1.FunctionalityLevel.MIN;
        }
        else if (cwf.materialBlottingTime_base > 10 &&
            cwf.materialBlottingTime_base <= 30) {
            materialBlottingTime_lvl = functionality_level_1.FunctionalityLevel.LOW;
        }
        else if (cwf.materialBlottingTime_base > 30 &&
            cwf.materialBlottingTime_base <= 60) {
            materialBlottingTime_lvl = functionality_level_1.FunctionalityLevel.AVERAGE;
        }
        else if (cwf.materialBlottingTime_base > 60 &&
            cwf.materialBlottingTime_base <= 480) {
            materialBlottingTime_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        }
        else if (cwf.materialBlottingTime_base > 480) {
            materialBlottingTime_lvl = functionality_level_1.FunctionalityLevel.EXTRA_HIGH;
        }
        if (cwf.waterproofRealizationCriteria_base >= 0.3 &&
            cwf.waterproofRealizationCriteria_base <= 0.37) {
            waterproofRealizationCriteria_lvl = functionality_level_1.FunctionalityLevel.MIN;
        }
        else if (cwf.waterproofRealizationCriteria_base > 0.37 &&
            cwf.waterproofRealizationCriteria_base <= 0.62) {
            waterproofRealizationCriteria_lvl = functionality_level_1.FunctionalityLevel.LOW;
        }
        else if (cwf.waterproofRealizationCriteria_base > 0.62 &&
            cwf.waterproofRealizationCriteria_base <= 0.8) {
            waterproofRealizationCriteria_lvl = functionality_level_1.FunctionalityLevel.AVERAGE;
        }
        else if (cwf.waterproofRealizationCriteria_base > 0.8 &&
            cwf.waterproofRealizationCriteria_base <= 0.9) {
            waterproofRealizationCriteria_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        }
        else if (cwf.waterproofRealizationCriteria_base > 0.9 &&
            cwf.waterproofRealizationCriteria_base <= 1) {
            waterproofRealizationCriteria_lvl = functionality_level_1.FunctionalityLevel.EXTRA_HIGH;
        }
        if (cwf.dynamicWaterproofCriteria_base >= 0.3 &&
            cwf.dynamicWaterproofCriteria_base <= 0.37) {
            dynamicWaterproofCriteria_lvl = functionality_level_1.FunctionalityLevel.MIN;
        }
        else if (cwf.dynamicWaterproofCriteria_base > 0.37 &&
            cwf.dynamicWaterproofCriteria_base <= 0.62) {
            dynamicWaterproofCriteria_lvl = functionality_level_1.FunctionalityLevel.LOW;
        }
        else if (cwf.dynamicWaterproofCriteria_base > 0.62 &&
            cwf.dynamicWaterproofCriteria_base <= 0.8) {
            dynamicWaterproofCriteria_lvl = functionality_level_1.FunctionalityLevel.AVERAGE;
        }
        else if (cwf.dynamicWaterproofCriteria_base > 0.8 &&
            cwf.dynamicWaterproofCriteria_base <= 0.9) {
            dynamicWaterproofCriteria_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        }
        else if (cwf.dynamicWaterproofCriteria_base > 0.9 &&
            cwf.dynamicWaterproofCriteria_base <= 1) {
            dynamicWaterproofCriteria_lvl = functionality_level_1.FunctionalityLevel.EXTRA_HIGH;
        }
        const materialBlottingPressure_comment = cwf.materialBlottingPressure_base
            ? `- по показателю Рп ${materialBlottingPressure_lvl} уровень водозащиты\n`
            : '';
        const waterproof_comment = cwf.waterproof_base
            ? `- по показателю В ${waterproof_lvl} уровень водозащиты\n`
            : '';
        const materialBlottingTime_comment = cwf.materialBlottingTime_base
            ? `- по показателю tп ${materialBlottingTime_lvl} уровень водозащиты\n`
            : '';
        const waterproofRealizationCriteria_comment = cwf.waterproofRealizationCriteria_base
            ? `- по показателю Кв ${waterproofRealizationCriteria_lvl} уровень водозащиты\n`
            : '';
        const dynamicWaterproofCriteria_comment = cwf.dynamicWaterproofCriteria_base
            ? `- по показателю Квд ${dynamicWaterproofCriteria_lvl} уровень водозащиты\n`
            : '';
        const resComment = materialBlottingPressure_comment +
            waterproof_comment +
            materialBlottingTime_comment +
            waterproofRealizationCriteria_comment +
            dynamicWaterproofCriteria_comment;
        return resComment;
    }
    getHomeostasisFunctionComment(calculatedHomeostasisFunction) {
        const chf = calculatedHomeostasisFunction;
        let waterPermeability_lvl = functionality_level_1.FunctionalityLevel.UNDEFINED;
        let waterPermeabilityDynamicCriteria_lvl = functionality_level_1.FunctionalityLevel.UNDEFINED;
        let totalThermalResistance_lvl = functionality_level_1.FunctionalityLevel.UNDEFINED;
        if (chf.waterPermeability_base >= 600 &&
            chf.waterPermeability_base <= 3000) {
            waterPermeability_lvl = functionality_level_1.FunctionalityLevel.MIN;
        }
        else if (chf.waterPermeability_base > 3000 &&
            chf.waterPermeability_base <= 6000) {
            waterPermeability_lvl = functionality_level_1.FunctionalityLevel.LOW;
        }
        else if (chf.waterPermeability_base > 6000 &&
            chf.waterPermeability_base <= 12000) {
            waterPermeability_lvl = functionality_level_1.FunctionalityLevel.AVERAGE;
        }
        else if (chf.waterPermeability_base > 12000 &&
            chf.waterPermeability_base <= 20000) {
            waterPermeability_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        }
        else if (chf.waterPermeability_base > 20000 &&
            chf.waterPermeability_base <= 26000) {
            waterPermeability_lvl = functionality_level_1.FunctionalityLevel.EXTRA_HIGH;
        }
        if (chf.waterPermeabilityDynamicCriteria_base >= 0 &&
            chf.waterPermeabilityDynamicCriteria_base <= 1) {
            waterPermeabilityDynamicCriteria_lvl = functionality_level_1.FunctionalityLevel.MIN;
        }
        else if (chf.waterPermeabilityDynamicCriteria_base > 1 &&
            chf.waterPermeabilityDynamicCriteria_base <= 2.1) {
            waterPermeabilityDynamicCriteria_lvl = functionality_level_1.FunctionalityLevel.LOW;
        }
        else if (chf.waterPermeabilityDynamicCriteria_base > 2.1 &&
            chf.waterPermeabilityDynamicCriteria_base <= 5.5) {
            waterPermeabilityDynamicCriteria_lvl = functionality_level_1.FunctionalityLevel.AVERAGE;
        }
        else if (chf.waterPermeabilityDynamicCriteria_base > 5.5 &&
            chf.waterPermeabilityDynamicCriteria_base <= 8.9) {
            waterPermeabilityDynamicCriteria_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        }
        else if (chf.waterPermeabilityDynamicCriteria_base > 8.9 &&
            chf.waterPermeabilityDynamicCriteria_base <= 15) {
            waterPermeabilityDynamicCriteria_lvl = functionality_level_1.FunctionalityLevel.EXTRA_HIGH;
        }
        if (chf.totalThermalResistance_relativeValuation < 0.8) {
            totalThermalResistance_lvl = functionality_level_1.FunctionalityLevel.INSUFFICIENT;
        }
        else if (chf.totalThermalResistance_relativeValuation >= 0.8 &&
            chf.totalThermalResistance_relativeValuation <= 1.2) {
            totalThermalResistance_lvl = functionality_level_1.FunctionalityLevel.SUFFICIENT;
        }
        else if (chf.totalThermalResistance_relativeValuation > 1.2) {
            totalThermalResistance_lvl = functionality_level_1.FunctionalityLevel.OVERSUPPLY;
        }
        const waterPermeability_comment = chf.waterPermeability_base
            ? `- по показателю WVPc ${waterPermeability_lvl} уровень гомеостаза\n`
            : '';
        const waterPermeabilityDynamicCriteria_comment = chf.waterPermeabilityDynamicCriteria_base
            ? `- по показателю Kвпп ${waterPermeabilityDynamicCriteria_lvl} уровень гомеостаза \n`
            : '';
        const totalThermalResistance_comment = chf.totalThermalResistance_relativeValuation
            ? `- по показателю Rсум ${totalThermalResistance_lvl} уровень теплового сопротивления \n`
            : '';
        const resComment = waterPermeability_comment +
            waterPermeabilityDynamicCriteria_comment +
            totalThermalResistance_comment;
        return resComment;
    }
    getReliabilityFunctionComment(calculatedReliabilityFunction) {
        const crf = calculatedReliabilityFunction;
        let relativeBlottingPressureAfterLoad_lvl = functionality_level_1.FunctionalityLevel.UNDEFINED;
        let relativeWaterResistanceAfterLoad_lvl = functionality_level_1.FunctionalityLevel.UNDEFINED;
        let relativeBlottingTimeAfterLoad_lvl = functionality_level_1.FunctionalityLevel.UNDEFINED;
        let waterproofRealizationCriteriaAfterLoad_lvl = functionality_level_1.FunctionalityLevel.UNDEFINED;
        if (crf.relativeBlottingPressureAfterLoad_base >= 0.37 &&
            crf.relativeBlottingPressureAfterLoad_base <= 0.62) {
            relativeBlottingPressureAfterLoad_lvl = functionality_level_1.FunctionalityLevel.LOW;
        }
        else if (crf.relativeBlottingPressureAfterLoad_base > 0.62 &&
            crf.relativeBlottingPressureAfterLoad_base <= 0.8) {
            relativeBlottingPressureAfterLoad_lvl = functionality_level_1.FunctionalityLevel.AVERAGE;
        }
        else if (crf.relativeBlottingPressureAfterLoad_base > 0.8 &&
            crf.relativeBlottingPressureAfterLoad_base <= 1) {
            relativeBlottingPressureAfterLoad_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        }
        if (crf.relativeBlottingTimeAfterLoad_base >= 0.37 &&
            crf.relativeBlottingTimeAfterLoad_base <= 0.62) {
            relativeBlottingTimeAfterLoad_lvl = functionality_level_1.FunctionalityLevel.LOW;
        }
        else if (crf.relativeBlottingTimeAfterLoad_base > 0.62 &&
            crf.relativeBlottingTimeAfterLoad_base <= 0.8) {
            relativeBlottingTimeAfterLoad_lvl = functionality_level_1.FunctionalityLevel.AVERAGE;
        }
        else if (crf.relativeBlottingTimeAfterLoad_base > 0.8 &&
            crf.relativeBlottingTimeAfterLoad_base <= 1) {
            relativeBlottingTimeAfterLoad_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        }
        if (crf.relativeWaterResistanceAfterLoad_base >= 0.37 &&
            crf.relativeWaterResistanceAfterLoad_base <= 0.62) {
            relativeWaterResistanceAfterLoad_lvl = functionality_level_1.FunctionalityLevel.LOW;
        }
        else if (crf.relativeWaterResistanceAfterLoad_base > 0.62 &&
            crf.relativeWaterResistanceAfterLoad_base <= 0.8) {
            relativeWaterResistanceAfterLoad_lvl = functionality_level_1.FunctionalityLevel.AVERAGE;
        }
        else if (crf.relativeWaterResistanceAfterLoad_base > 0.8 &&
            crf.relativeWaterResistanceAfterLoad_base <= 1) {
            relativeWaterResistanceAfterLoad_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        }
        if (crf.waterproofRealizationCriteriaAfterLoad_base >= 0.37 &&
            crf.waterproofRealizationCriteriaAfterLoad_base <= 0.62) {
            waterproofRealizationCriteriaAfterLoad_lvl = functionality_level_1.FunctionalityLevel.LOW;
        }
        else if (crf.waterproofRealizationCriteriaAfterLoad_base > 0.62 &&
            crf.waterproofRealizationCriteriaAfterLoad_base <= 0.8) {
            waterproofRealizationCriteriaAfterLoad_lvl = functionality_level_1.FunctionalityLevel.AVERAGE;
        }
        else if (crf.waterproofRealizationCriteriaAfterLoad_base > 0.8 &&
            crf.waterproofRealizationCriteriaAfterLoad_base <= 1) {
            waterproofRealizationCriteriaAfterLoad_lvl = functionality_level_1.FunctionalityLevel.HIGH;
        }
        const relativeBlottingPressureAfterLoad_comment = crf.relativeBlottingPressureAfterLoad_base
            ? `- по показателю Рпо ${relativeBlottingPressureAfterLoad_lvl} уровень надежности\n`
            : '';
        const relativeWaterResistanceAfterLoad_comment = crf.relativeBlottingTimeAfterLoad_base
            ? `- по показателю Во ${relativeWaterResistanceAfterLoad_lvl} уровень надежности\n`
            : '';
        const relativeBlottingTimeAfterLoad_comment = crf.relativeBlottingTimeAfterLoad_base
            ? `- по показателю tпо ${relativeBlottingTimeAfterLoad_lvl} уровень надежности\n`
            : '';
        const waterproofRealizationCriteriaAfterLoad_comment = crf.waterproofRealizationCriteriaAfterLoad_base
            ? `- по показателю Kво ${waterproofRealizationCriteriaAfterLoad_lvl} уровень надежности`
            : '';
        const resComment = relativeBlottingPressureAfterLoad_comment +
            relativeWaterResistanceAfterLoad_comment +
            relativeBlottingTimeAfterLoad_comment +
            waterproofRealizationCriteriaAfterLoad_comment;
        return resComment;
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)()
], CommentService);
//# sourceMappingURL=comment.service.js.map