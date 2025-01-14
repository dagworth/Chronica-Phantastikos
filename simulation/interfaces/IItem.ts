import { IModifier } from "./IModifier";

import { ItemData } from "../types/objects";

export interface IItem extends IModifier {
    actual: ItemData;
    perceived: ItemData;
    description: string;
}
