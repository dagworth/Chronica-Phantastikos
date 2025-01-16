import { LocationData, PersonData } from "../simulation/types/objects";

export type SimulationState = {
    people: { [id: string]: PersonData };
    locations: { [id: string]: LocationData };
};