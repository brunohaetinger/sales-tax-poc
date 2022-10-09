import Product from "../models/Product";
import { CategoryFactory } from "./categoryFactory";

export class ProductFactory {
    static createProduct(model: string, year: number): Product{
        const category = CategoryFactory.createCategory(model);
        
        if(model === "iPhone 12"){
            const price = year >= 2022 ? 800.5 : 999;
            return new Product(model, category, price);
        }
        if(model === "iPhone 12 Pro Max"){
            const price = year >= 2022 ? 1000 : 1200;
            return new Product(model, category, price);
        }
        if(model === "Apple Watch 2"){
            const price = year >= 2022 ? 1000 : 1100;
            return new Product(model, category, price);
        }
    }
}