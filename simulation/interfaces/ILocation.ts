import { Person } from "../classes/Person";

import { Rememberable } from "./Rememberable";

import { LocationData } from "../types/objects";
import { Coordinate, LocationType } from "../types/primitives";

export interface ILocation extends Rememberable {
    getID(): string;
    getName(): string;
    getLocationType(): string;
    getCoordinates(): ReadonlyArray<Coordinate>;
    getEntryPoint(): Coordinate;
    getPeople(): string[];

    setID(id: string): void;
    setName(name: string): void;
    setLocationType(locationType: LocationType): void;
    setCoordinates(coordinates: Coordinate[]): void;
    setEntryPoint(entryPoint: Coordinate): void;
    setPeople(name: string[]): void;

    addPerson(person: Person): void;
    removePerson(personID: string): void;

    jsonify(): LocationData;
}
