import { CategoryFactory } from "../services/categoryFactory";
import Category from "./Category";

class Product {
    model: string;
    category: Category;
    price: number

    constructor(model: string, price: number){
        this.model = model;
        this.price = price;
        this.category = CategoryFactory.createCategory(model);
    }
};

export default Product;