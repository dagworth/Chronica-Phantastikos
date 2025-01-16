import { MeleeWeapon } from "./master/MeleeWeapon";

import { IntClosedRange } from "type-fest";
import { Material } from "../../../../../types/primitives";
import { SpearData } from "../../../../../types/objects";

export class Spear extends MeleeWeapon {
    public pointedness: IntClosedRange<1, 100>;
    public length: IntClosedRange<1, 200>; // in cm

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
        pointedness: IntClosedRange<1, 100>,
        length: IntClosedRange<1, 200>,
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
            "Spear",
            material,
        );

        this.pointedness = pointedness;
        this.length = length;
    }

    public getPointedness(): IntClosedRange<1, 100> {
        return this.pointedness;
    }

    public getLength(): IntClosedRange<1, 200> {
        return this.length;
    }

    public setPointedness(pointedness: IntClosedRange<1, 100>): void {
        this.pointedness = pointedness;
    }

    public setLength(length: IntClosedRange<1, 200>): void {
        this.length = length;
    }

    public override jsonify(): SpearData {
        return {
            ...super.jsonify(),
            pointedness: this.getPointedness(),
            length: this.getLength(),
        };
    }
}
