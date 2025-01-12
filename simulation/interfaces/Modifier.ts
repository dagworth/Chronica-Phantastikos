import { Storageable } from "./Storageable";

// Modifies a person (injected)
export interface Modifier extends Storageable {
    id: string;
    name: string;
    impressionable: number; // likelihood of being noticed (1-100)
    status: number; // how high of a status symbol the modifier item is (1-100)
}
