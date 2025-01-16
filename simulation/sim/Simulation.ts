import { Person } from "../classes/Person";
import { Location } from "../classes/locations/master/Location";
import { Block } from "../classes/locations/special/Block";

export class Simulation {
    #people: { [key: string] : Person }
    #locations: { [key: string] : Location }
    #dimensions : Block[][]

    constructor(people: { [key: string] : Person }, locations : { [key: string] : Location }, dimensions: Block[][]){
        this.#people = people,
        this.#locations = locations,
        this.#dimensions = dimensions
    }
}