import { Storageable } from "./Storageable";
import { Comparable } from "./Comparable";

import { ModifierData } from "../types/objects";
import { ModifierType } from "../types/primitives";

// Modifies a person (injected)
/*
    id: string;
    name: string;
    desc: string;
    modifierType: ModifierType;
    impressionable: number; // likelihood of being noticed (1-100)
    status: number; // how high of a status symbol the modifier item is (1-100)
*/
export interface IModifier extends Storageable, Comparable {
    getID(): string;
    getName(): string;
    getModifierType(): ModifierType;
    getDesc(): string;
    getImpressionability(): number;
    getStatus(): number;

    setID(id: string): void;
    setName(name: string): void;
    setModifierType(modifierType: ModifierType): void;
    setDesc(desc: string): void;
    setImpressionability(impressionable: number): void;
    setStatus(status: number): void;

    jsonify(): ModifierData;
}
