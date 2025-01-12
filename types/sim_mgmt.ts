import { Person } from "../simulation/classes/Person";
import { ILocation } from "../simulation/interfaces/ILocation";

import { LocationData, PersonData } from "../simulation/types/objects";

export type SimulationState = {
    persons: { [id: string]: PersonData };
    locations: { [id: string]: LocationData };
};

export type CurrentSimulationInfo = {
    people: { [key: string]: Person };
    locations: { [key: string]: ILocation };
    sim_map: string[][];
};
