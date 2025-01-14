import { Rememberable } from "../interfaces/Rememberable";

import { foldt } from "../../lib/Array";

import { PerceptionModifiers, WriteableMemory } from "../types/objects";
import { Statistic } from "../types/primitives";

export class Memory implements Rememberable {
    private subjectID: string;
    private subjectPerceptionModifiers: PerceptionModifiers;
    private associations: string[];

    constructor(subjectID: string, subjectPerceptionModifiers: PerceptionModifiers, associations: string[]) {
        this.subjectID = subjectID;
        this.subjectPerceptionModifiers = { ...subjectPerceptionModifiers };
        this.associations = [...associations];
    }

    getSubjectID(): string {
        return this.subjectID;
    }

    getSubjectPerceptionModifiers(): PerceptionModifiers {
        return { ...this.subjectPerceptionModifiers };
    }

    getAssociations(): string[] {
        return [...this.associations];
    }

    setSubjectID(subjectID: string): void {
        this.subjectID = subjectID;
    }

    setSubjectPerceptionModifiers(subjectPerceptionModifiers: PerceptionModifiers): void {
        this.subjectPerceptionModifiers = subjectPerceptionModifiers;
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
                Object.keys(this.getSubjectPerceptionModifiers()).map(
                    (key: string): boolean =>
                        this.getSubjectPerceptionModifiers()[key as Statistic] ===
                        memory.getSubjectPerceptionModifiers()[key as Statistic],
                ),
            )
        );
    }

    jsonify(): WriteableMemory {
        return {
            subjectID: this.getSubjectID(),
            subjectPerceptionModifiers: this.getSubjectPerceptionModifiers(),
            associations: this.getAssociations(),
        };
    }
}
