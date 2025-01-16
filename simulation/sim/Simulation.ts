import { Person } from "../classes/Person";
import { Location } from "../classes/locations/master/Location";
import { Block } from "../classes/locations/special/Block";
import { Memory } from "../classes/Memory";
import { Modifier } from "../classes/modifiers/master/Modifier";

import { PersonData, LocationData, IndividualStatistics } from "../types/objects";
import { SimulationState } from "../../types/sim_mgmt";
import { Coordinate, Gender, Race } from "../types/primitives";

export class Simulation {
    #people: { [key: string]: Person };
    #locations: { [key: string]: Location };
    #map: Block[][];

    private static id: string = "00000";

    constructor(
        people: { [key: string]: Person },
        locations: { [key: string]: Location },
        dimensions: [number, number]
    ) {
        this.#people = people;
        this.#locations = locations;
        this.#map = [];

        for (let i: number = 0; i < dimensions[0]; i++) {
            const row: Block[] = [];
            for (let j: number = 0; j < dimensions[1]; j++) {
                row.push(new Block([i, j], null, []));
            }
            this.#map.push(row);
        }
    }

    public getPeople(): { [key: string]: Person } {
        return this.#people;
    }

    public getLocations(): { [key: string]: Location } {
        return this.#locations;
    }

    public getMap(): Block[][] {
        return this.#map;
    }

    public getNextID(): string {
        Simulation.id = String(Number.parseInt(Simulation.id) + 1).padStart(5, '0')
        return Simulation.id;
    }

    public makePerson(
        firstName: string,
        lastName: string,
        age: number,
        race: Race,
        gender: Gender,
        spawnLocation: Coordinate,
        statistics: IndividualStatistics,
        memories: { [memoryID: string]: Memory },
        modifiers: Modifier[],
    ): void {
        let block: Block = this.#map[spawnLocation[0]][spawnLocation[1]]
        let new_person: Person = new Person(this.getNextID(), `${firstName} ${lastName}`, race, gender, age, block, statistics, memories, modifiers)
        block.addPerson(new_person)
    }

    public currentState(): SimulationState {
        return {
            people: Object.fromEntries(
                Object.entries(this.getPeople()).map((el: [string, Person]): [string, PersonData] => [
                    el[0],
                    el[1].jsonify(),
                ]),
            ),
            locations: Object.fromEntries(
                Object.entries(this.getLocations()).map((el: [string, Location]): [string, LocationData] => [
                    el[0],
                    el[1].jsonify(),
                ]),
            ),
        };
    }

    nextStep(): void {}
}
