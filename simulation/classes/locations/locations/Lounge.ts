import { Location } from "./master/Location";

import { Coordinate } from "../../../../types/primitives";

export class Lounge extends Location {
    constructor(
        id: string,
        name: string,

        coordinates: Coordinate[],
        entryPoint: Coordinate,

        people: string[],
    ) {
        super(id, name, "Lounge", coordinates, entryPoint, people);
    }
}
