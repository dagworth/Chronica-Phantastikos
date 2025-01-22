import { IModifier } from "../../../interfaces/IModifier";

import { IntClosedRange } from "type-fest";
import { ModifierData } from "../../../types/objects";
import { ModifierType } from "../../../types/primitives";

export class Modifier implements IModifier {
    private id: string;
    private name: string;
    private desc: string;
    private modifierType: ModifierType;
    private impressionability: IntClosedRange<1, 100>;
    private status: IntClosedRange<1, 100>;
    private condition: IntClosedRange<1, 100>;

    constructor(
        id: string,
        name: string,
        desc: string,
        modifierType: ModifierType,
        impressionability: IntClosedRange<1, 100>,
        status: IntClosedRange<1, 100>,
        condition: IntClosedRange<1, 100>,
    ) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.modifierType = modifierType;
        this.impressionability = impressionability;
        this.status = status;
        this.condition = condition;
    }

    getID(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getDesc(): string {
        return this.desc;
    }

    getModifierType(): ModifierType {
        return this.modifierType;
    }

    getImpressionability(): IntClosedRange<1, 100> {
        return this.impressionability;
    }

    getStatus(): IntClosedRange<1, 100> {
        return this.status;
    }

    getCondition(): IntClosedRange<1, 100> {
        return this.condition;
    }

    setID(id: string): void {
        this.id = id;
    }

    setName(name: string): void {
        this.name = name;
    }

    setDesc(desc: string): void {
        this.desc = desc;
    }

    setModifierType(modifierType: ModifierType): void {
        this.modifierType = modifierType;
    }

    setImpressionability(impressionability: IntClosedRange<1, 100>): void {
        this.impressionability = impressionability;
    }

    setStatus(status: IntClosedRange<1, 100>): void {
        this.status = status;
    }

    setCondition(condition: IntClosedRange<1, 100>): void {
        this.condition = condition;
    }

    equals(modifier: Modifier): boolean {
        return this.getID() === modifier.getID();
    }

    jsonify(): ModifierData {
        return {
            id: this.getID(),
            name: this.getName(),
            desc: this.getDesc(),
            modifierType: this.getModifierType(),
            impressionable: this.getImpressionability(),
            status: this.getStatus(),
        };
    }
}
