import { Person } from "../classes/Person";

export interface IEvent {
    discreteness: number;
    visibility: number;
    participants: Person[];

    noticed(guy: Person): void;
    finished(): void;
}
