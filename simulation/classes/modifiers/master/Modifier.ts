import { IModifier } from "../../../interfaces/IModifier";
import { Comparable } from "../../../interfaces/Comparable";

import { ModifierData } from "../../../types/objects";
import { ModifierType } from "../../../types/primitives";

export class Modifier implements IModifier {
    private id: string;
    private name: string;
    private desc: string;
    private modifierType: ModifierType;
    private impressionability: number;
    private status: number;

    constructor(
        id: string,
        name: string,
        desc: string,
        modifierType: ModifierType,
        impressionability: number,
        status: number,
    ) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.modifierType = modifierType;
        this.impressionability = impressionability;
        this.status = status;
    }

    // getters

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

    getImpressionability(): number {
        return this.impressionability;
    }

    getStatus(): number {
        return this.status;
    }

    // setters

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

    setImpressionability(impressionability: number): void {
        this.impressionability = impressionability;
    }

    setStatus(status: number): void {
        this.status = status;
    }

    // else

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
