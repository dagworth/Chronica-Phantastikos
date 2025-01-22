import { Person } from "../../Person";
import { Block } from "./Block";

import { ILocation } from "../../../interfaces/ILocation";

import { BlockData, LocationData } from "../../../types/objects";
import { Coordinate, LocationType } from "../../../types/primitives";

export class Location implements ILocation {
    private id: string;
    private name: string;
    private locationType: LocationType;

    private blocks: Block[];
    private entryPoint: Block;

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

    public getID(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getLocationType(): LocationType {
        return this.locationType;
    }

    public getBlocks(): ReadonlyArray<Block> {
        return [...this.blocks];
    }

    public getCoordinates(): Coordinate[] {
        return [...this.getBlocks()].map((block: Block): Coordinate => block.getCoords());
    }

    public getEntryPoint(): Block {
        return this.entryPoint;
    }

    public getPeople(): Person[] {
        return [...this.people];
    }

    public setID(id: string): void {
        this.id = id;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setLocationType(locationType: LocationType): void {
        this.locationType = locationType;
    }

    public setBlocks(blocks: ReadonlyArray<Block>): void {
        this.blocks = [...blocks];
    }

    public setEntryPoint(entryPoint: Block): void {
        this.entryPoint = entryPoint;
    }

    public setPeople(people: Person[]): void {
        this.people = [...people];
    }

    public addPerson(person: Person): void {
        this.people.push(person);
        person.setLocation(this);
    }

    public removePerson(person: Person, newBlock: Block): void {
        this.setPeople(this.getPeople().filter((p: Person): boolean => p.getID() !== person.getID()));
        person.setBlock(newBlock);
    }

    public hasPerson(person: Person): boolean {
        return this.getPeople()
            .map((p: Person): string => p.getID())
            .includes(person.getID());
    }

    public hasBlock(block: Block): boolean {
        return (
            this.getCoordinates().filter(
                (coords: Coordinate): boolean =>
                    coords[0] === block.getCoords()[0] && coords[1] === block.getCoords()[1],
            ).length >= 1
        );
    }

    public equals(location: Location | null): boolean {
        return location == null ? false : this.getID() === location.getID();
    }

    public jsonify(): LocationData {
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
