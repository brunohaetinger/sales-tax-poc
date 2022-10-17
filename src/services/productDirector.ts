import Category from "../models/Category";
import { ProductBuilder } from "./productBuilder";

export class ProductDirector {
    static makeIPhone12(builder: ProductBuilder): void {
        builder.setModel("iPhone 12").setCategory(new Category("Smartphone"));
    }

    static makeIPhone12ProMax(builder: ProductBuilder): void {
        builder.setModel("iPhone 12 Pro Max").setCategory(new Category("Smartphone"));
    }

    static makeAppleWatch2(builder: ProductBuilder): void {
        builder.setModel("Apple Watch 2").setCategory(new Category("Wearable"));
    }
}