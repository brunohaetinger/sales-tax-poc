import db from "../db";
import Category from "../types/Category.type";
import Product from "../types/Product.type";
import ProductPrice from "../types/ProductPrice.type";
import Sale from "../types/Sale.type";
import State from "../types/State.type";
import Tax from "../types/Tax.type";

export const getStates = async (): Promise<State[]> => {
    await db.read();
    return db.data?.states || [];
};

export const getCategories = async (): Promise<Category[]> => {
    await db.read();
    return db.data?.categories || [];
};

export const getProducts = async (): Promise<Product[]> => {
    await db.read();
    return db.data?.products || [];
};

export const getProductsPrices = async (): Promise<ProductPrice[]> => {
    await db.read();
    return db.data?.productsPrices || [];
};

export const getTaxes = async (): Promise<Tax[]> => {
    await db.read();
    return db.data?.taxes || [];
};
  
export const insertSale = async (prodPriceId: number, date: string, stateId: string): Promise<Sale> => {
    const sales = await db.data.sales;
    const nextId = sales[sales.length-1].id + 1;
    const newSale: Sale = {id: nextId, product_price_id: prodPriceId, date, state_id: stateId};
    db.data.sales = [...sales, newSale]
    db.write();
    return newSale;
};