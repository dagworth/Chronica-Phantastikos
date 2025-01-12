import { Modifier } from "./Modifier";

import { ItemData } from "../types/objects";

export interface Item extends Modifier {
    actual: ItemData;
    perceived: ItemData;
    description: string;
}
