import Product from "../models/Product";
import { IPhone12, IPhone12ProMax, AppleWatch2 } from "../models/Products";

export class ProductFactory {
    static createProduct(model: string, year: number): Product{
        if(model === "iPhone 12"){
            const price = year >= 2022 ? 800.5 : 999;
            return new IPhone12(price);
        }
        if(model === "iPhone 12 Pro Max"){
            const price = year >= 2022 ? 1000 : 1200;
            return new IPhone12ProMax(price);
        }
        if(model === "Apple Watch 2"){
            const price = year >= 2022 ? 1000 : 1100;
            return new AppleWatch2(price);
        }
    }
}