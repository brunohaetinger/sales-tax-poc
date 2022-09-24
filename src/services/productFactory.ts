import Category from "../models/Category";
import Product from "../models/Product";
import { productWithPriceMock } from "../tests/mocks/mocks";

export class ProductFactory {
    static createProduct(model: string, year: number): Product{
        const productMock = Object.values(productWithPriceMock).find(prod => prod.model === model && prod.year === year);
        if(!productMock){
            throw Error("Product model doesn't exist");
        }
        const category = new Category(productMock.category);
        return new Product(model, category, productMock.price);
    }
}