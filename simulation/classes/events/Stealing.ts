import { Event } from "./Event";
import { Block } from "../locations/special/Block";
import { Person } from "../Person";
import { Item } from "../modifiers/items/Item";

import { CharacterStatistics, IndividualStatistics } from "../../types/objects";
import { Stats } from "fs";

export class Stealing extends Event {
    private victimToItemMap: Map<Person, Item> = new Map<Person, Item>();
    private victims: Person[];
    private targets: Item[];
    private thief: Person;
    private bystanders: Person[] = [];

    constructor(thief: Person, blocks: Block[], participants: Person[], victimToItemMap: Map<Person, Item>) {
        super(85, 0, "Stealing", blocks, participants);

        this.thief = thief;
        this.victims = [...Array.from(victimToItemMap.keys())];
        this.targets = [...Array.from(victimToItemMap.values()).flat(2)];

        for (let i: number = 0; i < this.victims.length; i++) {
            this.victimToItemMap.set(this.victims[i], this.targets[i]);
        }
    }

    getVictims(): ReadonlyArray<Person> {
        return [...this.victims];
    }

    getTargets(): ReadonlyArray<Item> {
        return [...this.targets];
    }

    getThief(): Person {
        return this.thief;
    }

    getVictimToItemMap(): Map<Person, Item> = new Map<

    getDamagePrice(): number[] {
        return [...this.getTargets().map((target: Item): number => target.getPrice())]
    }

    noticed(guy: Person): void {
        let stats: IndividualStatistics = guy.getStatistics();
        let bystander_index: number =
            Math.random() * Math.pow(stats.justice, 4) +
            Math.random() * Math.pow(stats.trusting, 2);
            
        bystander_index*=stats.confidence;
        if(bystander_index > 50000000){
            this.bystanders.push(guy);
            return;
        }
    }

    finished(): void {
        victimToItemMap.forEach(person => {
            
        });
    }
}
