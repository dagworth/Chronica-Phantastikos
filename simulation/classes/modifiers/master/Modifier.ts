import { IModifier } from "../../../interfaces/IModifier";
import { ModifierData } from "../../../types/objects";
import { ModifierType } from "../../../types/primitives";

export class Modifier implements IModifier {
    protected id: string;
    protected name: string;
    protected desc: string;
    protected modifierType: ModifierType;
    protected impressionable: number;
    protected status: number;

    constructor(
        id: string,
        name: string,
        desc: string,
        modifierType: ModifierType,
        impressionable: number,
        status: number,
    ) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.modifierType = modifierType;
        this.impressionable = impressionable;
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

    getImpressionable(): number {
        return this.impressionable;
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

    setImpressionable(impressionable: number): void {
        this.impressionable = impressionable;
    }

    setStatus(status: number): void {
        this.status = status;
    }

    // else

    jsonify(): ModifierData {
        return {
            id: this.getID(),
            name: this.getName(),
            desc: this.getDesc(),
            modifierType: this.getModifierType(),
            impressionable: this.getImpressionable(),
            status: this.getStatus(),
        };
    }
}
