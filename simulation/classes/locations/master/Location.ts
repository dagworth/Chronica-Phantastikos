import { Person } from "../../Person";
import { Block } from "../special/Block";

import { ILocation } from "../../../interfaces/ILocation";
import { Comparable } from "../../../interfaces/Comparable";

import { BlockData, LocationData } from "../../../types/objects";
import { Coordinate, LocationType } from "../../../types/primitives";

export class Location implements ILocation, Comparable {
    protected id: string;
    protected name: string;
    protected locationType: LocationType;

    protected blocks: Block[];
    protected entryPoint: Block;

    private people: Person[];

    constructor(
        id: string,
        name: string,
        locationType: LocationType,

        blocks: Block[],
        entryPoint: Block,
    ) {
        this.id = id;
        this.name = name;
        this.locationType = locationType;

        this.blocks = [...blocks];
        this.entryPoint = entryPoint;

        this.people = [...this.blocks].map((block: Block): Person[] => block.getPeople()).flat(1);
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

    getBlocks(): ReadonlyArray<Block> {
        return [...this.blocks];
    }

    getCoordinates(): Coordinate[] {
        return [...this.getBlocks()].map((block: Block): Coordinate => block.getCoords());
    }

    getEntryPoint(): Block {
        return this.entryPoint;
    }

    getPeople(): Person[] {
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

    setBlocks(blocks: ReadonlyArray<Block>): void {
        this.blocks = [...blocks];
    }

    setEntryPoint(entryPoint: Block): void {
        this.entryPoint = entryPoint;
    }

    setPeople(people: Person[]): void {
        this.people = [...people];
    }

    // else

    addPerson(person: Person): void {
        this.people.push(person);
        person.setLocation(this);
    }

    removePerson(person: Person, newBlock: Block): void {
        this.setPeople(this.getPeople().filter((p: Person): boolean => p.getID() !== person.getID()));
        person.setBlock(newBlock);
    }

    hasPerson(person: Person): boolean {
        return this.getPeople()
            .map((p: Person): string => p.getID())
            .includes(person.getID());
    }

    hasBlock(block: Block): boolean {
        return (
            this.getCoordinates().filter(
                (coords: Coordinate): boolean =>
                    coords[0] === block.getCoords()[0] && coords[1] === block.getCoords()[1],
            ).length >= 1
        );
    }

    equals(location: Location | null): boolean {
        return location == null ? false : this.getID() === location.getID();
    }

    jsonify(): LocationData {
        return {
            id: this.getID(),
            name: this.getName(),

            locationType: this.getLocationType(),
            blocks: this.getBlocks().map((block: Block): BlockData => block.jsonify()),
            entryPoint: this.getEntryPoint().getCoords(),

            people: this.getPeople().map((person: Person): string => person.getID()),
        };
    }
}
