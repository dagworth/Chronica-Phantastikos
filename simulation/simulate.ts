import { Simulation } from "./sim/Simulation";
import { Modifier } from "./classes/modifiers/master/Modifier";

import { input } from "../lib/System";
import { getRandomElement } from "../lib/Array";

import { Coordinate, Gender, Race } from "./types/primitives";

import { lastNames, maleFirstNames, femaleFirstNames } from "./data/names/getter";
import { weapons } from "./data/weapons/weapons";
import { genders, races } from "./types/bases";
import { IndividualStatistics, RaceStatistics } from "./types/objects";
import { Memory } from "./classes/Memory";
import { dwarfStats, elfStats, humanStats, orcStats } from "./data";

const map_size: number = 15;
const people_count: number = 10;

const simulation: Simulation = new Simulation({},{},[map_size, map_size])

for(let i: number = 0; i < people_count; i++){
    const gender: Gender = getRandomElement(genders) as Gender;
    const race: Race = getRandomElement(races) as Race;
    const raceStats: RaceStatistics = {
        ...((m_race: Race): RaceStatistics => {
            switch (m_race) {
                case "Dwarf":
                    return dwarfStats;
                case "Human":
                    return humanStats;
                case "Elf":
                    return elfStats;
                case "Orc":
                    return orcStats;
                default:
                    return humanStats;
            }
        })(race),
    };

    const firstName: string = gender === "M" ?
        getRandomElement(maleFirstNames) as string :
        getRandomElement(femaleFirstNames) as string;
    const lastName: string = getRandomElement(lastNames) as string;
    const age: number = Math.floor(Math.random() * raceStats.lifeSpan);
    const spawnLocation: Coordinate = [Math.floor(Math.random() * map_size), Math.floor(Math.random() * map_size)]
    const modifiers: Modifier[] = [getRandomElement(weapons) as Modifier];
    const memories: { [memoryID: string]: Memory } = {};
    const statistics: IndividualStatistics = { ...raceStats };

    const keys: ReadonlyArray<keyof RaceStatistics> = Object.keys(statistics) as (keyof RaceStatistics)[];
    for (let i: number = 0; i < keys.length; i++) {
        statistics[keys[i]] += (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 8);
    }

    simulation.makePerson(firstName, lastName, age, race, gender, spawnLocation, statistics, memories, modifiers);
}

while (String(input("Next step?: ")) !== "no") {
    
}
