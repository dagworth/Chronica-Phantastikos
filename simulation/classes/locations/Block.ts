import { Coordinates } from "../../../types";

export class Block {
    #coords: Coordinates;

    constructor(coords: Coordinates) {
        this.#coords = [coords[0], coords[1]];
    }

    get coords(): Coordinates {
        return this.#coords;
    }

    set coords(coords: Coordinates) {
        this.#coords = [coords[0], coords[1]];
    }
}
