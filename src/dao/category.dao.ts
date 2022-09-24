import db from "../db";
import Category from "../models/persistence/Category.type";
import Product from "../models/Product.type";
import { getProducts } from "./product.dao";

export const getCategories = async (): Promise<Category[]> => {
    await db.read();
    return db.data?.categories || [];
};

export const getCategoryIdFromProductId = async (productId: number): Promise<number> => {
    const products = await getProducts();
    return products.find((product: Product) => product.id === productId).category_id;
}
