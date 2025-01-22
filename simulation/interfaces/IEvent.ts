import { Person } from "../classes/Person";

import { Comparable } from "./Comparable";
import { Rememberable } from "./Rememberable";

import { Block } from "../classes/locations/special/Block";

import { EventData } from "../types/objects";
import { IntClosedRange } from "type-fest";
import { EventType } from "../types/primitives";

export interface IEvent extends Rememberable, Comparable {
    getDiscreteness(): IntClosedRange<0, 100>;
    getVisibility(): IntClosedRange<0, 100>;
    getEventType(): EventType;
    getBlocks(): ReadonlyArray<Block>;
    getParticipants(): ReadonlyArray<Person>;

    noticed(guy: Person): void;
    finished(): void;

    jsonify(): EventData;
}
