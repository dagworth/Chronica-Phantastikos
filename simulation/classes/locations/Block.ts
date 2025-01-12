import { Coordinates } from "../../../types";
import { ILocation } from "./ILocation";

export class Block {
    #coords: Coordinates; // The Coordinates represented by the block
    #locationID: string; // The location that the Block is apart of
    #location: ILocation | null;

    constructor(coords: Coordinates, locationID: string, location: ILocation | null) {
        this.#coords = [coords[0], coords[1]];
        this.#locationID = locationID;
        this.#location = location;
    }

    // Getters

    get coords(): Coordinates {
        return [...this.#coords];
    }

    get locationID(): string {
        return this.#locationID;
    }

    get location(): ILocation | null {
        return this.#location;
    }

    // Setters

    set coords(coords: Coordinates) {
        this.#coords = [coords[0], coords[1]];
    }

    set locationID(locationID: string) {
        this.#locationID = locationID;
    }

    set location(location: ILocation | null) {
        this.#location = location;
    }
}
