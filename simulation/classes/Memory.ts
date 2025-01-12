import { Rememberable } from "../interfaces/Rememberable";

import { PerceptionModifiers, WriteableMemory } from "../types/objects";

export class Memory implements Rememberable {
    #subjectID: string;
    #subjectPerceptionModifiers: PerceptionModifiers;
    #associations: string[];

    constructor(subjectID: string, subjectPerceptionModifiers: PerceptionModifiers, associations: string[]) {
        this.#subjectID = subjectID;
        this.#subjectPerceptionModifiers = subjectPerceptionModifiers;
        this.#associations = associations;
    }

    // getters

    getSubjectID(): string {
        return this.#subjectID;
    }

    getSubjectPerceptionModifiers(): PerceptionModifiers {
        return this.#subjectPerceptionModifiers;
    }

    getAssociations(): string[] {
        return this.#associations;
    }

    // setters

    setSubjectID(subjectID: string): void {
        this.#subjectID = subjectID;
    }

    setSubjectPerceptionModifiers(subjectPerceptionModifiers: PerceptionModifiers): void {
        this.#subjectPerceptionModifiers = subjectPerceptionModifiers;
    }

    setAssociations(associations: string[]): void {
        this.#associations = associations;
    }

    // transformations

    jsonify(): WriteableMemory {
        return {
            subjectID: this.getSubjectID(),
            subjectPerceptionModifiers: this.getSubjectPerceptionModifiers(),
            associations: this.getAssociations(),
        };
    }
}
