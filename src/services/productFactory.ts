import Product from "../models/Product";
import { ProductBuilder } from "./productBuilder";
import { ProductDirector } from "./productDirector";

export class ProductFactory {
    static createProduct(model: string): Product{
        const productBuilder = new ProductBuilder();
            
        if(model === "iPhone 12"){
            ProductDirector.makeIPhone12(productBuilder); 
        }
        if(model === "iPhone 12 Pro Max"){
            ProductDirector.makeIPhone12ProMax(productBuilder); 
        }
        if(model === "Apple Watch 2"){
            ProductDirector.makeAppleWatch2(productBuilder); 
        }

        return productBuilder.build(); 
    }
}