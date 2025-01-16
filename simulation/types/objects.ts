import { Modifier } from "../classes/modifiers/master/Modifier";

import { IntClosedRange } from "type-fest";
import {
    AgeGroup,
    Coordinate,
    Gender,
    ItemType,
    LocationType,
    MeleeWeaponType,
    ModifierType,
    Race,
    RangedWeaponType,
    WeaponType,
} from "./primitives";
import { ReplaceKeys } from "../../lib/types/types";

export type RaceStatistics = {
    intelligence: number;
    trusting: number;
    strength: number;
    beauty: number;
    spite: number;
    confidence: number;
    violence: number;
    jealousy: number;
    charisma: number;
    ambition: number;
    endurance: number;
    pride: number;
    lifeSpan: number;
    muscularity: number;
}; 

export type CharacterStatistics = Omit<
    Omit<RaceStatistics, "muscularity">,
    "beauty"
>;

export type VisibleStatistics = {
    muscularity: number;
    beauty: number; 
};

export type IndividualStatistics = CharacterStatistics & VisibleStatistics;

export type Perception = CharacterStatistics & VisibleStatistics;

export type WriteableMemory = {
    subjectID: string;
    subjectPerceptionModifiers: Perception;
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
    attackSpeed: IntClosedRange<1, 100>;
};

export type MeleeWeaponData = WeaponData & { meleeWeaponType: MeleeWeaponType };

export type SwordData = MeleeWeaponData & {
    sharpness: IntClosedRange<1, 100>;
    length: IntClosedRange<1, 100>;
};

export type AxeData = MeleeWeaponData & {
    sharpness: IntClosedRange<1, 100>;
};

export type PickaxeData = MeleeWeaponData & {
    pointedness: IntClosedRange<1, 100>;
};

export type SpearData = MeleeWeaponData & {
    pointedness: IntClosedRange<1, 100>;
    length: IntClosedRange<1, 200>;
};

export type RangedWeaponData = WeaponData & {
    ammo: number;
    range: IntClosedRange<1, 3>;
    projectilesFiredPerShot: IntClosedRange<1, 10>;
    rangedWeaponType: RangedWeaponType;
};

export type BowData = ReplaceKeys<
    ReplaceKeys<RangedWeaponData, "range", 1 | 2>,
    "projectilesFiredPerShot",
    1 | 2 | 3
>;
