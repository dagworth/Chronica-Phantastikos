import { Location } from "./locations/master/Location";
import { Memory } from "./Memory";
import { Block } from "./locations/special/Block";
import { Modifier } from "./modifiers/master/Modifier";

import { Rememberable } from "../interfaces/Rememberable";

import { IndividualStatistics, PersonData, WriteableMemory } from "../types/objects";
import { Coordinate, Gender, Race, Statistic } from "../types/primitives";

export class Person implements Rememberable {
    protected id: string;
    protected name: string;
    protected race: Race;
    protected gender: Gender;
    protected age: number;

    protected block: Block;
    protected location: Location | null;

    protected statistics: IndividualStatistics;
    protected memories: { [memoryID: string]: Memory };
    protected modifiers: Modifier[];

    protected logs: string[] = [];

    constructor(
        id: string,
        name: string,
        race: Race,
        gender: Gender,
        age: number = 0,

        block: Block,
        location: Location,

        statistics: IndividualStatistics,
        memories: { [memoryID: string]: Memory } = {},
        modifiers: Modifier[] = [],
    ) {
        this.id = id;
        this.name = name;
        this.race = race;
        this.gender = gender;
        this.age = age;

        this.block = block;
        this.location = location;

        this.statistics = statistics;
        this.memories = memories;
        this.modifiers = modifiers;
        this.location = location;
    }

    // getters

    getID(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getRace(): Race {
        return this.race;
    }

    getGender(): Gender {
        return this.gender;
    }

    getAge(): number {
        return this.age;
    }

    getBlock(): Block {
        return this.block;
    }

    getLocation(): Location | null {
        return this.location;
    }

    getCoords(): Coordinate {
        return this.getBlock().getCoords();
    }

    getStatistics(): IndividualStatistics {
        return { ...this.statistics };
    }

    getMemories(): { [memoryID: string]: Memory } {
        return { ...this.memories };
    }

    getModifiers(): Modifier[] {
        return [...this.modifiers];
    }

    getLogs(): string[] {
        return [...this.logs];
    }

    // setters

    setID(id: string): void {
        this.id = id;
    }

    setName(name: string): void {
        this.name = name;
    }

    setRace(race: Race): void {
        this.race = race;
    }

    setGender(gender: Gender): void {
        this.gender = gender;
    }

    setAge(age: number): void {
        this.age = age;
    }

    setBlock(block: Block): void {
        if (this.getBlock().equals(block)) return;

        if (!block.isAtLocation(this.getLocation())) this.setLocation(block.getLocation());

        if (this.getBlock().hasPerson(this)) this.getBlock().removePerson(this, block);

        block.addPerson(this);

        this.block = block;
    }

    setLocation(location: Location | null): void {
        if (location == null) {
            this.location = null;
            return;
        }

        if (!location.hasBlock(this.getBlock())) {
            this.setBlock(location.getEntryPoint());
        }

        const changedLocation: boolean =
            this.getLocation() == null ? true : !this.getLocation()?.equals(location);

        if (changedLocation) {
            this.location = location;
        }

        if (!location.hasPerson(this)) location.addPerson(this);
    }

    setStatistics(Statistics: IndividualStatistics): void {
        this.statistics = { ...Statistics };
    }

    setMemories(memories: { [memoryID: string]: Memory }): void {
        this.memories = { ...memories };
    }

    setModifiers(modifiers: Modifier[]): void {
        this.modifiers = [...modifiers];
    }

    setLogs(logs: string[]): void {
        this.logs = [...logs];
    }

    // updaters

    changeStat(stat: Statistic, newValue: number): void {
        this.statistics[stat] = newValue;
    }

    ageUp(): void {
        this.age++;
    }

    jsonify(): PersonData {
        return {
            id: this.getID(),
            name: this.getName(),
            race: this.getRace(),
            gender: this.getGender(),
            age: this.getAge(),

            coords: this.getCoords(),
            stats: { ...this.getStatistics() },
            memories: Object.fromEntries(
                Object.entries(this.getMemories()).map((el: [string, Memory]): [string, WriteableMemory] => [
                    el[0],
                    el[1].jsonify(),
                ]),
            ),
            modifiers: [...this.getModifiers()],
        };
    }
}
