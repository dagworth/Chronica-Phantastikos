import { Modifier } from "../Modifier";

import { ItemData } from "../../../types/objects";
import { ItemType } from "../../../types/primitives";
import { IntClosedRange } from "type-fest";

export class Item extends Modifier {
    private itemType: ItemType;
    private price: number;
    private weight: number;

    public constructor(
        id: string,
        name: string,
        desc: string,
        impressionability: IntClosedRange<1, 100>,
        status: IntClosedRange<1, 100>,
        condition: IntClosedRange<1, 100>,
        itemType: ItemType,
        price: number,
        weight: number,
    ) {
        super(id, name, desc, "Item", impressionability, status, condition);

        this.itemType = itemType;
        this.price = price;
        this.weight = weight;
    }

    public getItemType(): ItemType {
        return this.itemType;
    }

    public getPrice(): number {
        return this.price;
    }

    public getWeight(): number {
        return this.weight;
    }

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
            ...super.jsonify(),
            itemType: this.getItemType(),
            price: this.getPrice(),
            weight: this.getWeight(),
        };
    }
}
