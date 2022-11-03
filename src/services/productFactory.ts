import Product from "../models/Product";
import { IPhone12, IPhone12ProMax, AppleWatch2 } from "../models/Products";

export class ProductFactory {
    static createProduct(model: string): Product{
        if(model === "iPhone 12"){
            return new IPhone12();
        }
        if(model === "iPhone 12 Pro Max"){
            return new IPhone12ProMax();
        }
        if(model === "Apple Watch 2"){
            return new AppleWatch2();
        }
    }
}