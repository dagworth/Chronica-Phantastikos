import { Storageable } from "./Storageable";
import { Comparable } from "./Comparable";

import { ModifierData } from "../types/objects";
import { ModifierType } from "../types/primitives";
import { IntClosedRange } from "type-fest";

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
    getImpressionability(): IntClosedRange<1, 100>;
    getStatus(): IntClosedRange<1, 100>;

    setID(id: string): void;
    setName(name: string): void;
    setModifierType(modifierType: ModifierType): void;
    setDesc(desc: string): void;
    setImpressionability(impressionable: IntClosedRange<1, 100>): void;
    setStatus(status: IntClosedRange<1, 100>): void;

    jsonify(): ModifierData;
}
