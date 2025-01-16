import { Weapon } from "../../master/Weapon";

import { Material, MeleeWeaponType } from "../../../../../../types/primitives";
import { MeleeWeaponData } from "../../../../../../types/objects";
import { IntClosedRange } from "type-fest";

export class MeleeWeapon extends Weapon {
    private meleeWeaponType: MeleeWeaponType;
    private material: Material;

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
        meleeWeaponType: MeleeWeaponType,
        material: Material,
        condition: IntClosedRange<1, 100>,
    ) {
        super(id, name, desc, impressionability, status, price, weight, damage, "Melee", attackSpeed, condition);

        this.meleeWeaponType = meleeWeaponType;
        this.material = material;
    }

    public getMeleeWeaponType(): MeleeWeaponType {
        return this.meleeWeaponType;
    }

    public getMaterial(): Material {
        return this.material;
    }

    public setMeleeWeaponType(meleeWeaponType: MeleeWeaponType): void {
        this.meleeWeaponType = meleeWeaponType;
    }

    public setMaterial(material: Material): void {
        this.material = material;
    }

    public override jsonify(): MeleeWeaponData {
        return {
            ...super.jsonify(),
            meleeWeaponType: this.getMeleeWeaponType(),
        };
    }
}
