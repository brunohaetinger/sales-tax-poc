import { Low, JSONFile } from "lowdb";
import Category from "./types/Category.type";
import Product from "./types/Product.type";
import ProductPrice from "./types/ProductPrice.type";
import Sale from "./types/Sale.type";
import State from "./types/State.type";
import Tax from "./types/Tax.type";

type Data = {
  states: State[];
  categories: Category[];
  products: Product[];
  productsPrices: ProductPrice[];
  taxes: Tax[];
  sales: Sale[];
};

const adapter = new JSONFile<Data>("db.json");
const db = new Low(adapter);

export default db;
