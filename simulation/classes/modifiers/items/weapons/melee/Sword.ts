import { MeleeWeapon } from "./master/MeleeWeapon";

import { IntClosedRange } from "type-fest";
import { SwordData } from "../../../../../types/objects";
import { Material } from "../../../../../types/primitives";

export class Sword extends MeleeWeapon {
    private sharpness: IntClosedRange<1, 100>; // 1 - 100
    private length: IntClosedRange<1, 100>; // 1 - 100

    public constructor(
        id: string,
        name: string,
        desc: string,
        impressionability: IntClosedRange<1, 100>,
        status: IntClosedRange<1, 100>,
        price: number,
        weight: number,
        damage: IntClosedRange<1, 100>,
        attackSpeed: IntClosedRange<1, 100>,
        material: Material,
        sharpness: IntClosedRange<1, 100>,
        length: IntClosedRange<1, 100>,
    ) {
        super(
            id,
            name,
            desc,
            impressionability,
            status,
            price,
            weight,
            damage,
            attackSpeed,
            "Sword",
            material,
        );

        this.sharpness = sharpness;
        this.length = length;
    }

    public getSharpness(): IntClosedRange<1, 100> {
        return this.sharpness;
    }

    public getLength(): IntClosedRange<1, 100> {
        return this.length;
    }

    public setSharpness(sharpness: IntClosedRange<1, 100>): void {
        this.sharpness = sharpness;
    }

    public setLength(length: IntClosedRange<1, 100>): void {
        this.length = length;
    }

    public override jsonify(): SwordData {
        return {
            ...super.jsonify(),
            sharpness: this.getSharpness(),
            length: this.getLength(),
        };
    }
}
