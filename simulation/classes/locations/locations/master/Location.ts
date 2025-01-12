import { Person } from "../../../Person";

import { ILocation } from "../../../../../types/interfaces/ILocation";

import { LocationData } from "../../../../../types/objects";
import { Coordinate, LocationType } from "../../../../../types/primitives";

export class Location implements ILocation {
    protected id: string;
    protected name: string;
    protected locationType: LocationType;

    protected coordinates: Coordinate[];
    protected entryPoint: Coordinate;

    protected people: string[];

    constructor(
        id: string,
        name: string,
        locationType: LocationType,

        coordinates: Coordinate[],
        entryPoint: Coordinate,

        people: string[],
    ) {
        this.id = id;
        this.name = name;
        this.locationType = locationType;

        this.coordinates = [...coordinates].map((coord: Coordinate): Coordinate => [...coord]);
        this.entryPoint = [...entryPoint];

        this.people = [...people];
    }

    // getters

    getID(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getLocationType(): LocationType {
        return this.locationType;
    }

    getCoordinates(): Coordinate[] {
        return [...this.coordinates].map((coord: Coordinate): Coordinate => [...coord]);
    }

    getEntryPoint(): Coordinate {
        return [...this.entryPoint];
    }

    getPeople(): string[] {
        return [...this.people];
    }

    // setters

    setID(id: string): void {
        this.id = id;
    }

    setName(name: string): void {
        this.name = name;
    }

    setLocationType(locationType: LocationType): void {
        this.locationType = locationType;
    }

    setCoordinates(coordinates: Coordinate[]): void {
        this.coordinates = [...coordinates].map((coord: Coordinate): Coordinate => [...coord]);
    }

    setEntryPoint(entryPoint: Coordinate): void {
        this.entryPoint = [...entryPoint];
    }

    setPeople(people: string[]): void {
        this.people = [...people];
    }

    // updaters

    addPerson(person: Person): void {
        this.people.push(person.getID());
        person.setLocation(this.getEntryPoint());
    }

    removePerson(personID: string): void {
        this.people = this.getPeople().filter((pID: string): boolean => pID !== personID);
    }

    // transformations

    jsonify(): LocationData {
        return {
            id: this.getID(),
            name: this.getName(),

            locationType: this.getLocationType(),
            coordinates: this.getCoordinates(),
            entryPoint: this.getEntryPoint(),

            people: this.getPeople(),
        };
    }
}
