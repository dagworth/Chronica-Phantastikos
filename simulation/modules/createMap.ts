import { Block } from "../classes/locations/special/Block";

import { getLocations } from "./getLocations";

import { LocationData } from "../../types";

export function createMap(l: number): ReadonlyArray<ReadonlyArray<Block>> {
    const map: Block[][] = [];

    for (let i: number = 0; i < Math.floor(l); i++) {
        const row: Block[] = [];
        for (let j: number = 0; j < Math.floor(l); j++) row.push(new Block([i, j], "", null));
    }

    const locations: ReadonlyArray<LocationData> = Object.values(getLocations());

    for (let i: number = 0; i < locations.length; i++) {
        locations[i].locationCoordinates.forEach((coords: [number, number]) => {
            map[coords[0]][coords[1]].locationID = locations[i];
        });
    }
}
