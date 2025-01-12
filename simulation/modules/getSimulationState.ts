import * as fs from "fs";
import * as path from "path";

import { SimulationState } from "../../types";

export function getSimulationState(): SimulationState {
    return JSON.parse(
        fs.readFileSync(path.join(__dirname, "../storage/memory/currentState.json"), "utf-8"),
    ) as SimulationState;
}
