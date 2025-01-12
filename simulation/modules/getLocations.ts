import * as fs from "fs";
import * as path from "path";

import { LocationData, SimulationState } from "../../types";

export function getLocations(): { [id: string]: LocationData } {
    return (
        JSON.parse(
            fs.readFileSync(path.join(__dirname, "../storage/memory/currentState.json"), "utf-8"),
        ) as SimulationState
    ).locations;
}
