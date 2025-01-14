export type Gender = "M" | "F";

export type Race = "Elf" | "Orc" | "Human" | "Dwarf";

export type Statistic =
    | "intelligence"
    | "trusting"
    | "strength"
    | "beauty"
    | "spite"
    | "confidence"
    | "violence"
    | "jealousy"
    | "charisma"
    | "endurance"
    | "pride"
    | "lifeSpan";

export type Coordinate = Readonly<[number, number]>;

export type AgeGroup = "infant" | "toddler" | "child" | "teenager" | "young adult" | "middle-aged" | "senior";

export type ItemType = "clothes" | "weapon" | "food" | "drink" | "other";

export type LocationType = "Lounge";

export type ModifierType = "Item" | "BodyPart";
