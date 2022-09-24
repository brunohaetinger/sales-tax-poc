import db from "../db";
import Product from "../models/Product.type";
import ProductPrice from "../models/ProductPrice.type";
import { getProductsPrices } from "./productPrice.dao";

export const getProducts = async (): Promise<Product[]> => {
    await db.read();
    return db.data?.products || [];
};

export const getProductIdFromProdPriceId = async (prodPriceId: number): Promise<number> => {
    const productsPrices = await getProductsPrices();
    return productsPrices.find((productPrice: ProductPrice) => productPrice.id === prodPriceId).product_id;
}
