import { Item } from "../../master/Item";

import { WeaponData } from "../../../../../types/objects";
import { ItemType, ModifierType, WeaponType } from "../../../../../types/primitives";

export class Weapon extends Item {
    private damage: number;
    private weaponType: WeaponType;

    public constructor(
        id: string,
        name: string,
        desc: string,
        modifierType: ModifierType,
        impressionability: number,
        status: number,
        itemType: ItemType,
        price: number,
        weight: number,
        damage: number,
        weaponType: WeaponType,
    ) {
        super(id, name, desc, modifierType, impressionability, status, itemType, price, weight);

        this.damage = damage;
        this.weaponType = weaponType;
    }

    public getDamage(): number {
        return this.damage;
    }

    public getWeaponType(): WeaponType {
        return this.weaponType;
    }

    public setDamage(damage: number): void {
        this.damage = damage;
    }

    public setWeaponType(weaponType: WeaponType): void {
        this.weaponType = weaponType;
    }

    public override jsonify(): WeaponData {
        return {
            id: this.getID(),
            name: this.getName(),
            desc: this.getDesc(),
            modifierType: this.getModifierType(),
            impressionable: this.getImpressionability(),
            status: this.getStatus(),
            itemType: this.getItemType(),
            price: this.getPrice(),
            weight: this.getWeight(),
            damage: this.getDamage(),
            weaponType: this.getWeaponType(),
        };
    }
}
