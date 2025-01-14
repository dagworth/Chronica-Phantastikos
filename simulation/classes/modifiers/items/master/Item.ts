import { Modifier } from "../../master/Modifier";

import { ItemData } from "../../../../types/objects";
import { ItemType, ModifierType } from "../../../../types/primitives";

export class Item extends Modifier {
    private itemType: ItemType;
    private price: number;
    private weight: number;

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
    ) {
        super(id, name, desc, modifierType, impressionability, status);
        this.itemType = itemType;
        this.price = price;
        this.weight = weight;
    }

    // getters

    public getItemType(): ItemType {
        return this.itemType;
    }

    public getPrice(): number {
        return this.price;
    }

    public getWeight(): number {
        return this.weight;
    }

    // setters

    public setItemType(itemType: ItemType): void {
        this.itemType = itemType;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    // else

    public override jsonify(): ItemData {
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
        };
    }
}
