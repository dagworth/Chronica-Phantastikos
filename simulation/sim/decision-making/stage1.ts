import { Simulation } from "../Simulation";
import { Person } from "../../classes/Person";
import { Modifier } from "../../classes/modifiers/Modifier";
import { Block } from "../../classes/locations/special/Block";
import { Memory } from "../../classes/Memory";

import { Perception } from "../../types/objects";

import { perceptionBlueprint } from "../../blueprints/Perception";

// function dampen(value: number, magnitude: number): number {
//     if (value < 0) {
//         return -Math.pow(-value, magnitude);
//     } else {
//         return Math.pow(value, magnitude);
//     }
// }

export function stage1(simulation: Simulation): void {
    let people: { [key: string]: Person } = simulation.getPeople();
    Object.keys(people).forEach(person_id => {
        let person: Person = people[person_id];
        let memories: { [key: string]: Memory } = person.getMemories();
        let block: Block = person.getBlock();

        block.getPeople().forEach(other_person => {
            if(other_person.equals(person)) return;

            //the current perception of guy, ignoring what we know about them before
            let current_perception: Perception = { ...perceptionBlueprint };
            
            (other_person.getModifiers() || []).forEach((modifier: Modifier): void => {
                let modifier_id: string = modifier.getID();
                if (modifier_id in memories) {
                    for (const key of Object.keys(current_perception) as (keyof Perception)[]) {
                        //this equation can and probably should be changed later
                        current_perception[key] += memories[modifier_id].getSubjectPerception()[key];
                    }
                } else {
                    let new_memory: Memory = new Memory(modifier_id, { ...perceptionBlueprint }, []);
                    memories[modifier_id] = new_memory;
                }
            });

            //this will be changed with dampen later
            memories[other_person.getID()].setSubjectPerception(current_perception)
        });
    });
}

// let memories: { [key: string]: Memory } = person.memories;
// let location: ILocation = info.locations[info.sim_map[person.location[0]][person.location[1]]];
