import { RangedWeapon } from "./master/RangedWeapon";

import { IntClosedRange } from "type-fest";
import { BowData } from "../../../../../types/objects";

export class Bow extends RangedWeapon {
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
        ammo: number,
        range: 1 | 2,
        projectilesFiredPerShot: 1 | 2 | 3,
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
            ammo,
            range,
            projectilesFiredPerShot,
            "Bow",
        );
    }

    public override jsonify(): BowData {
        return { ...super.jsonify() } as BowData;
    }
}
