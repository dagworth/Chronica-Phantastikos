import { Weapon } from "../../master/Weapon";

import { IntClosedRange } from "type-fest";
import { RangedWeaponType } from "../../../../../../types/primitives";
import { RangedWeaponData } from "../../../../../../types/objects";

export class RangedWeapon extends Weapon {
    private ammo: number;
    private range: IntClosedRange<1, 3>; // how many blocks away a shot can be fired
    private projectilesFiredPerShot: IntClosedRange<1, 10>;
    private rangedWeaponType: RangedWeaponType;

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
        ammo: number,
        range: IntClosedRange<1, 3>,
        projectilesFiredPerShot: IntClosedRange<1, 10>,
        rangedWeaponType: RangedWeaponType,
    ) {
        super(id, name, desc, impressionability, status, price, weight, damage, "Ranged", attackSpeed);

        this.ammo = ammo;
        this.range = range;
        this.projectilesFiredPerShot = projectilesFiredPerShot;
        this.rangedWeaponType = rangedWeaponType;
    }

    public getAmmo(): number {
        return this.ammo;
    }

    public getRange(): IntClosedRange<1, 3> {
        return this.range;
    }

    public getProjectilesFiredPerShot(): IntClosedRange<1, 10> {
        return this.projectilesFiredPerShot;
    }

    public getRangedWeaponType(): RangedWeaponType {
        return this.rangedWeaponType;
    }

    public setAmmo(ammo: number): void {
        this.ammo = ammo;
    }

    public setRange(range: IntClosedRange<1, 3>): void {
        this.range = range;
    }

    public setProjectilesFiredPerShot(projectilesFiredPerShot: IntClosedRange<1, 10>): void {
        this.projectilesFiredPerShot = projectilesFiredPerShot;
    }

    public setRangedWeaponType(rangedWeaponType: RangedWeaponType): void {
        this.rangedWeaponType = rangedWeaponType;
    }

    public override jsonify(): RangedWeaponData {
        return {
            ...super.jsonify(),
            ammo: this.ammo,
            range: this.range,
            projectilesFiredPerShot: this.projectilesFiredPerShot,
            rangedWeaponType: this.rangedWeaponType,
        };
    }
}
