import { Modifier } from "../classes/modifiers/master/Modifier";

import {
    AgeGroup,
    Coordinate,
    Gender,
    ItemType,
    LocationType,
    ModifierType,
    Race,
    WeaponType,
} from "./primitives";

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

    coords: Coordinate;
    stats: IndividualStatistics;
    memories: { [key: string]: WriteableMemory };
    modifiers: ReadonlyArray<Modifier>;
};

export type BlockData = {
    coords: Coordinate;
    locationID: string;
    people: string[];
};

export type LocationData = {
    id: string;
    name: string;
    locationType: LocationType;

    blocks: BlockData[];
    entryPoint: Coordinate;

    people: string[];
};

export type ModifierData = {
    id: string;
    name: string;
    desc: string;
    modifierType: ModifierType;
    impressionable: number;
    status: number;
};

export type ItemData = ModifierData & {
    itemType: ItemType;
    price: number;
    weight: number;
};

export type WeaponData = ItemData & {
    damage: number;
    weaponType: WeaponType;
};
