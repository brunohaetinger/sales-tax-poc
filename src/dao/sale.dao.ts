import db from "../db";
import Sale from "../types/Sale.type";
import { getCategoryIdFromProductId } from "./category.dao";
import { getProductIdFromProdPriceId, getProducts } from "./product.dao";
import { getProductsPrices } from "./productPrice.dao";
import { getTaxId, getTaxes } from "./tax.dao";

export const insertSale = async (prodPriceId: number, date: string, stateId: string): Promise<Sale> => {
    await db.read();
    const sales = db.data.sales;
    const nextId = sales.length ? sales[sales.length-1].id + 1 : 1;

    const productId = await getProductIdFromProdPriceId(prodPriceId);
    const categoryId = await getCategoryIdFromProductId(productId);
    const taxId = await getTaxId(Number(date.slice(0, 4)), stateId, categoryId);
    const newSale: Sale = {id: nextId, product_price_id: prodPriceId, date, state_id: stateId, tax_id: taxId};
    db.data.sales = [...sales, newSale]
    db.write();
    return newSale;
};

export const getSaleInfo = async (saleId: number): Promise<any> => {
    await db.read();
    const sales = db.data.sales;
    const sale = sales.find(s => s.id === saleId);
    if(!sale){
        return "Sale not found."
    }

    const { price, product_id } = await (await getProductsPrices()).find(productPrice => productPrice.id === sale.product_price_id);
    const productModel = await (await getProducts()).find(p => p.id === product_id).model;
    const { tax } = await (await getTaxes()).find(tax => tax.id === sale.tax_id);
    const totalPrice = price * (1+(tax/100));
    
    return {
        saleId,
        price,
        product: productModel,
        taxPercentage: `${tax} %`,
        totalPrice,
    }
}