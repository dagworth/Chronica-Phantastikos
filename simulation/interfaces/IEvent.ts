import { Person } from "../classes/Person";
import { Comparable } from "./Comparable";
import { Rememberable } from "./Rememberable";

export interface IEvent extends Rememberable, Comparable {
    getDiscreteness(): number;
    getVisibility(): number;
    getParticipants(): string[];

    noticed(guy: Person): void;
    finished(): void;
}
