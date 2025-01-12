import { ILocation } from "../../../types/interfaces/ILocation";

import { Coordinate } from "../../../types/primitives";

export class Block {
    #coords: Coordinate; // The Coordinates represented by the block
    #locationID: string; // The location that the Block is apart of
    #location: ILocation | null;

    constructor(coords: Coordinate, locationID: string, location: ILocation | null) {
        this.#coords = [coords[0], coords[1]];
        this.#locationID = locationID;
        this.#location = location;
    }

    // Getters

    getCoords(): Coordinate {
        return [...this.#coords];
    }

    getLocationID(): string {
        return this.#locationID;
    }

    getLocation(): ILocation | null {
        return this.#location;
    }

    // Setters

    set coords(coords: Coordinate) {
        this.#coords = [coords[0], coords[1]];
    }

    set locationID(locationID: string) {
        this.#locationID = locationID;
    }

    set location(location: ILocation | null) {
        this.#location = location;
    }
}
