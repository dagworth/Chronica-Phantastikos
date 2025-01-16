import { MeleeWeapon } from "./master/MeleeWeapon";

import { IntClosedRange } from "type-fest";
import { AxeData } from "../../../../../types/objects";
import { Material } from "../../../../../types/primitives";

export class Sword extends MeleeWeapon {
    private sharpness: IntClosedRange<1, 100>; // 1 - 100

    public constructor(
        id: string,
        name: string,
        desc: string,
        impressionability: IntClosedRange<1, 100>,
        status: IntClosedRange<1, 100>,
        condition: IntClosedRange<1, 100>,
        price: number,
        weight: number,
        damage: IntClosedRange<1, 100>,
        attackSpeed: IntClosedRange<1, 100>,
        material: Material,
        sharpness: IntClosedRange<1, 100>,
    ) {
        super(
            id,
            name,
            desc,
            impressionability,
            status,
            condition,
            price,
            weight,
            damage,
            attackSpeed,
            "Sword",
            material,
        );

        this.sharpness = sharpness;
    }

    public getSharpness(): IntClosedRange<1, 100> {
        return this.sharpness;
    }

    public setSharpness(sharpness: IntClosedRange<1, 100>): void {
        this.sharpness = sharpness;
    }

    public override jsonify(): AxeData {
        return {
            ...super.jsonify(),
            sharpness: this.getSharpness(),
        };
    }
}
