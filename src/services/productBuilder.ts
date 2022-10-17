import Category from "../models/Category";
import Product from "../models/Product";

export class ProductBuilder {
    private product: Product = null;

    constructor(){
        this.product = new Product();
    }

    setCategory(category: Category): ProductBuilder{
        this.product.category = category
        return this;
    }

    setModel(model: string): ProductBuilder{
        this.product.model = model;
        return this;
    }


    build(): Product {
        return this.product;
    }
}