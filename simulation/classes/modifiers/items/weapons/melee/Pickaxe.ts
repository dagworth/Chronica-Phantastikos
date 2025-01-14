import { MeleeWeapon } from "./master/MeleeWeapon";

import { IntClosedRange } from "type-fest";
import { Material } from "../../../../../types/primitives";
import { PickaxeData } from "../../../../../types/objects";

export class Pickaxe extends MeleeWeapon {
    public pointedness: IntClosedRange<1, 100>;

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
        pointedness: IntClosedRange<1, 100>,
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
            "Pickaxe",
            material,
        );

        this.pointedness = pointedness;
    }

    public getPointedness(): IntClosedRange<1, 100> {
        return this.pointedness;
    }

    public setPointedness(pointedness: IntClosedRange<1, 100>): void {
        this.pointedness = pointedness;
    }

    public override jsonify(): PickaxeData {
        return {
            ...super.jsonify(),
            pointedness: this.getPointedness(),
        };
    }
}
