import { CategoryFactory } from "../services/categoryFactory";
import Category from "./Category";

abstract class Product {
    model: string;
    category: Category;

    constructor(model: string){
        this.model = model;
        this.category = CategoryFactory.createCategory(model);
    }

    abstract getPrice(year: number): number;
};

export default Product;