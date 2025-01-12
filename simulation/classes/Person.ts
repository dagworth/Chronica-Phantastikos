import { Memory } from "./Memory";

import { Rememberable } from "../interfaces/Rememberable";
import { Modifier } from "../interfaces/Modifier";

import { IndividualStatistics, PersonData, WriteableMemory } from "../types/objects";
import { Coordinate, Gender, Race, Statistic } from "../types/primitives";

export class Person implements Rememberable {
    #id: string;
    #name: string;
    #race: Race;
    #gender: Gender;
    #age: number;
    #location: Coordinate;

    #statistics: IndividualStatistics;
    #memories: { [memoryID: string]: Memory };
    #modifiers: Modifier[];

    #logs: string[] = [];

    constructor(
        id: string,
        name: string,
        race: Race,
        gender: Gender,
        age: number = 0,

        location: Coordinate,
        statistics: IndividualStatistics,
        memories: { [memoryID: string]: Memory } = {},
        modifiers: Modifier[] = [],
    ) {
        this.#id = id;
        this.#name = name;
        this.#race = race;
        this.#gender = gender;
        this.#age = age;

        this.#location = location;
        this.#statistics = statistics;
        this.#memories = memories;
        this.#modifiers = modifiers;
        this.#location = location;
    }

    // setters

    setID(id: string) {
        this.#id = id;
    }

    setName(name: string) {
        this.#name = name;
    }

    setRace(race: Race) {
        this.#race = race;
    }

    setGender(gender: Gender) {
        this.#gender = gender;
    }

    setAge(age: number) {
        this.#age = age;
    }

    setLocation(coords: Coordinate) {
        this.#location = [...coords];
    }

    setStatistics(Statistics: IndividualStatistics) {
        this.#statistics = { ...Statistics };
    }

    setMemories(memories: { [memoryID: string]: Memory }) {
        this.#memories = { ...memories };
    }

    setModifiers(modifiers: Modifier[]) {
        this.#modifiers = [...modifiers];
    }

    setLogs(logs: string[]) {
        this.#logs = [...logs];
    }

    // getters

    getID(): string {
        return this.#id;
    }

    getName(): string {
        return this.#name;
    }

    getRace(): Race {
        return this.#race;
    }

    getGender(): Gender {
        return this.#gender;
    }

    getAge(): number {
        return this.#age;
    }

    getLocation(): Coordinate {
        return [...this.#location];
    }

    getStatistics(): IndividualStatistics {
        return { ...this.#statistics };
    }

    getMemories(): { [memoryID: string]: Memory } {
        return { ...this.#memories };
    }

    getModifiers(): Modifier[] {
        return [...this.#modifiers];
    }

    getLogs(): string[] {
        return [...this.#logs];
    }

    // updaters

    changeStat(stat: Statistic, newValue: number) {
        this.#statistics[stat] = newValue;
    }

    ageUp(): void {
        this.#age++;
    }

    jsonify(): PersonData {
        return {
            id: this.#id,
            name: this.#name,
            race: this.#race,
            gender: this.#gender,
            age: this.#age,

            location: [...this.#location],
            stats: { ...this.#statistics },
            memories: Object.fromEntries(
                Object.entries(this.#memories).map((el: [string, Memory]): [string, WriteableMemory] => [
                    el[0],
                    el[1].jsonify(),
                ]),
            ),
            modifiers: [...this.#modifiers],
        };
    }
}
