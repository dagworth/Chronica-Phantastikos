import { Rememberable } from "../interfaces/Rememberable";

import { foldt } from "../../lib/Array";

import { Perception, WriteableMemory } from "../types/objects";
import { Statistic } from "../types/primitives";

export class Memory implements Rememberable {
    private subjectID: string;
    private subjectPerception: Perception;
    private associations: string[];

    constructor(subjectID: string, subjectPerception: Perception, associations: string[]) {
        this.subjectID = subjectID;
        this.subjectPerception = { ...subjectPerception };
        this.associations = [...associations];
    }

    getSubjectID(): string {
        return this.subjectID;
    }

    getSubjectPerception(): Perception {
        return { ...this.subjectPerception };
    }

    getAssociations(): string[] {
        return [...this.associations];
    }

    setSubjectID(subjectID: string): void {
        this.subjectID = subjectID;
    }

    setSubjectPerception(subjectPerception: Perception): void {
        this.subjectPerception = subjectPerception;
    }

    setAssociations(associations: string[]): void {
        this.associations = associations;
    }

    equals(memory: Memory): boolean {
        return (
            this.getSubjectID() === memory.getSubjectID() &&
            foldt(
                (b1: boolean, b2: boolean): boolean => b1 && b2,
                this.getAssociations().map(
                    (association: string, i: number): boolean => association === memory.getAssociations()[i],
                ),
            ) &&
            foldt(
                (b1: boolean, b2: boolean): boolean => b1 && b2,
                Object.keys(this.getSubjectPerception()).map(
                    (key: string): boolean =>
                        this.getSubjectPerception()[key as Statistic] ===
                        memory.getSubjectPerception()[key as Statistic],
                ),
            )
        );
    }

    jsonify(): WriteableMemory {
        return {
            subjectID: this.getSubjectID(),
            subjectPerceptionModifiers: this.getSubjectPerception(),
            associations: this.getAssociations(),
        };
    }
}
