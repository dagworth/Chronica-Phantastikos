import { Location } from "./Location";
import { Person } from "../../Person";

import { Rememberable } from "../../../interfaces/Rememberable";
import { Comparable } from "../../../interfaces/Comparable";

import { BlockData } from "../../../types/objects";
import { Coordinate } from "../../../types/primitives";

export class Block implements Rememberable, Comparable {
    protected coords: Coordinate; // The Coordinates represented by the block
    protected location: Location | null;

    protected people: Person[];

    private locationID: string; // The location that the Block is apart of

    constructor(coords: Coordinate, location: Location | null, people: Person[]) {
        this.coords = [coords[0], coords[1]];
        this.location = location;

        this.people = [...people];

        this.locationID = location == null ? "" : location.getID();
    }

    public getCoords(): Coordinate {
        return [...this.coords];
    }

    public getLocation(): Location | null {
        return this.location;
    }

    public getPeople(): Person[] {
        return [...this.people];
    }

    public getLocationID(): string {
        return this.locationID;
    }

    public getPeopleIDs(): string[] {
        return [...this.getPeople().map((person: Person): string => person.getID())];
    }

    public getOtherBlocks(): Block[] {
        return (
            this.getLocation()
                ?.getBlocks()
                .filter((block: Block): boolean => !block.equals(this)) || []
        );
    }

    public setCoords(coords: Coordinate) {
        this.coords = [coords[0], coords[1]];
    }

    public setLocationID(locationID: string) {
        this.locationID = locationID;
    }

    public setLocation(location: Location | null) {
        this.location = location;
    }

    public setPeople(people: Person[]) {
        this.people = [...people];
    }

    public addPerson(person: Person) {
        if (this.hasPerson(person)) return;
        person.setBlock(this);
    }

    public removePerson(person: Person, newBlock: Block) {
        this.setPeople(this.getPeople().filter((p: Person): boolean => p.getID() !== person.getID()));
        person.setBlock(newBlock);
    }

    public hasPerson(person: Person) {
        return this.getPeople().filter((p: Person): boolean => p.getID() === person.getID()).length >= 1;
    }

    public isAtLocation(location: Location | null) {
        return this.getLocation() == null ? location == null : this.getLocation()?.equals(location);
    }

    public equals(block: Block): boolean {
        return this.getCoords()[0] === block.getCoords()[0] && this.getCoords()[1] === block.getCoords()[1];
    }

    public jsonify(): BlockData {
        return {
            coords: this.getCoords(),
            locationID: this.getLocationID(),
            people: [...this.getPeople().map((person: Person): string => person.getID())],
        };
    }
}
