import { Person } from "../classes/Person";
import { Block } from "../classes/locations/special/Block";

import { Rememberable } from "./Rememberable";
import { Comparable } from "./Comparable";

import { LocationData } from "../types/objects";
import { Coordinate, LocationType } from "../types/primitives";

export interface ILocation extends Rememberable, Comparable {
    getID(): string;
    getName(): string;
    getLocationType(): string;
    getCoordinates(): ReadonlyArray<Coordinate>;
    getBlocks(): ReadonlyArray<Block>;
    getEntryPoint(): Block;
    getPeople(): Person[];

    setID(id: string): void;
    setName(name: string): void;
    setLocationType(locationType: LocationType): void;
    setBlocks(coordinates: ReadonlyArray<Block>): void;
    setEntryPoint(entryPoint: Block): void;
    setPeople(name: Person[]): void;

    addPerson(person: Person): void;
    removePerson(personID: Person, newBlock: Block): void;

    jsonify(): LocationData;
}
