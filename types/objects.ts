import { Modifier } from "./interfaces/Modifier";

import { AgeGroup, Coordinate, Gender, ItemType, LocationType, Race } from "./primitives";

export type ItemData = {
    type: ItemType;
    price: number; // how many gold coins does it cost to buy the item
    weight: number; // weight of the item in Kg
};

export type CharacterStatistics = {
    intelligence: number;
    trusting: number;
    strength: number;
    spite: number;
    confidence: number;
    violence: number;
    jealousy: number;
    charisma: number;
    ambition: number;
    endurance: number;
    pride: number;
    lifeSpan: number;
};

export type VisibleStatistics = {
    muscularity: number;
    beauty: number;
    ageGroup: AgeGroup;
};

export type IndividualStatistics = CharacterStatistics & VisibleStatistics;

export type PerceptionModifiers = CharacterStatistics & VisibleStatistics;

export type WriteableMemory = {
    subjectID: string;
    subjectPerceptionModifiers: PerceptionModifiers;
    associations: ReadonlyArray<string>;
};

export type PersonData = {
    id: string;
    name: string;
    race: Race;
    gender: Gender;
    age: number;

    location: Coordinate;
    stats: IndividualStatistics;
    memories: { [key: string]: WriteableMemory };
    modifiers: ReadonlyArray<Modifier>;
};

export type LocationData = {
    id: string;
    name: string;
    locationType: LocationType;

    coordinates: Coordinate[];
    entryPoint: Coordinate;

    people: string[];
};
