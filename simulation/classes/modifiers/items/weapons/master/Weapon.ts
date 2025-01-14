import { Item } from "../../master/Item";

import { IntClosedRange } from "type-fest";
import { WeaponData } from "../../../../../types/objects";
import { WeaponType } from "../../../../../types/primitives";

export class Weapon extends Item {
    private damage: IntClosedRange<1, 100>;
    private weaponType: WeaponType;
    private attackSpeed: IntClosedRange<1, 100>; // 1 - 100 (Average number of possible hits per 1 minute)

    public constructor(
        id: string,
        name: string,
        desc: string,
        impressionability: IntClosedRange<1, 100>,
        status: IntClosedRange<1, 100>,
        price: number,
        weight: number,
        damage: IntClosedRange<1, 100>,
        weaponType: WeaponType,
        attackSpeed: IntClosedRange<1, 100>,
    ) {
        super(id, name, desc, impressionability, status, "Weapon", price, weight);

        this.damage = damage;
        this.weaponType = weaponType;
        this.attackSpeed = attackSpeed;
    }

    public getDamage(): number {
        return this.damage;
    }

    public getWeaponType(): WeaponType {
        return this.weaponType;
    }

    public getAttackSpeed(): IntClosedRange<1, 100> {
        return this.attackSpeed;
    }

    public setDamage(damage: IntClosedRange<1, 100>): void {
        this.damage = damage;
    }

    public setWeaponType(weaponType: WeaponType): void {
        this.weaponType = weaponType;
    }

    public setAttackSpeed(attackSpeed: IntClosedRange<1, 100>): void {
        this.attackSpeed = attackSpeed;
    }

    public override jsonify(): WeaponData {
        return {
            ...super.jsonify(),
            damage: this.getDamage(),
            weaponType: this.getWeaponType(),
            attackSpeed: this.getAttackSpeed(),
        };
    }
}
