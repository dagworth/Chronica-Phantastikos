import { Person } from "../simulation/classes";

import { ILocation } from "./interfaces/ILocation";

import { LocationData, PersonData } from "./objects";

export type SimulationState = {
    persons: { [id: string]: PersonData };
    locations: { [id: string]: LocationData };
};

export type CurrentSimulationInfo = {
    people: { [key: string]: Person };
    locations: { [key: string]: ILocation };
    sim_map: string[][];
};
