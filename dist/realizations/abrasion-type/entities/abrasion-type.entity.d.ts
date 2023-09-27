import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { ConditionEntity } from 'src/realizations/condition/entities/condition.entity';
export declare class AbrasionTypeEntity extends AbstractBaseEntity {
    name: string;
    conditions: ConditionEntity[];
}
