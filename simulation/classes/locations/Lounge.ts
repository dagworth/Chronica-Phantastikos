import { Location } from "./special/Location";
import { Block } from "./special/Block";
export class Lounge extends Location {
    constructor(
        id: string,
        name: string,

        blocks: Block[],
        entryPoint: Block,
    ) {
        super(id, name, "Lounge", blocks, entryPoint);
    }
}
