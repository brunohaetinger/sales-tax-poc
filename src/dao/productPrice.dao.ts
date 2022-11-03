// import db from "../db";
// import ProductPrice from "../models/ProductPrice.type";

// export const getProductsPrices = async (): Promise<ProductPrice[]> => {
//     await db.read();
//     return db.data?.productsPrices || [];
// };

// export const getProductIdFromProdPriceId = async (prodPriceId: number): Promise<number> => {
//     const productsPrices = await getProductsPrices();
//     return productsPrices.find((productPrice: ProductPrice) => productPrice.id === prodPriceId).product_id;
// }
