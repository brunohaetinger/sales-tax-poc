import Category from "./Category";

class Product {
    model: string;
    category: Category;
    price: number;
     
    constructor(model: string, category: Category, price: number){
        this.model = model;
        this.category = category;
        this.price = price;
    }
};

export default Product;