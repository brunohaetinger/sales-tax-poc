import Category from "../models/Category";

export class CategoryFactory {
    static createCategory(model: string): Category{
        if(model === "iPhone 12"){
            return new Category("Smartphone")
        }
        if(model === "iPhone 12 Pro Max"){
            return new Category("Smartphone")
        }
        if(model === "Apple Watch 2"){
            return new Category("Wearable")
        }
        
    }
}