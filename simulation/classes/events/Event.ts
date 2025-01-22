import { IEvent } from "../../interfaces/IEvent";

import { Block } from "../locations/special/Block";
import { Person } from "../Person";

import { EventData } from "../../types/objects";
import { IntClosedRange } from "type-fest";
import { Coordinate, EventType } from "../../types/primitives";

export abstract class Event implements IEvent {
    private discreteness: IntClosedRange<0, 100>;
    private visibility: IntClosedRange<0, 100>;
    private eventType: EventType;
    private block: Block[];
    private participants: Person[];

    constructor(
        discreteness: IntClosedRange<0, 100>,
        visibility: IntClosedRange<0, 100>,
        eventType: EventType,
        block: Block[],
        participants: Person[],
    ) {
        this.discreteness = discreteness;
        this.visibility = visibility;
        this.eventType = eventType;
        this.block = [...block];
        this.participants = [...participants];
    }

    getDiscreteness(): IntClosedRange<0,100> {
        return this.discreteness;
    }

    getVisibility(): IntClosedRange<0,100> {
        return this.visibility;
    }

    getEventType(): EventType {
        return this.eventType;
    }

    getBlocks(): ReadonlyArray<Block> {
        return [...this.block];
    }

    getCoordinates(): Coordinate[] {
        return [...this.getBlocks().map((block: Block): Coordinate => block.getCoords())];
    }

    getParticipants(): ReadonlyArray<Person> {
        return [...this.participants];
    }

    abstract noticed(dood: Person): void;

    abstract finished(): void;

    jsonify(): EventData {
        return {
            discreteness: this.getDiscreteness(),
            visibility: this.getVisibility(),
            eventType: this.getEventType(),
            coordinates: this.getCoordinates(),
            participants: this.getParticipants().map((person: Person): string => person.getID()),
        }
    }

    equals(event: Event): boolean {
        return event.getDiscreteness() === this.getDiscreteness()
        && event.getVisibility() === this.getVisibility()
        && event
            .getBlocks()
            .filter((block: Block, i: number): boolean => !block.equals(this.getBlocks()[i]))
            .length === 0
        && event
            .getParticipants()
            .filter((person: Person, i: number): boolean => !person.equals(this.getParticipants()[i]))
            .length === 0;
    }
}
