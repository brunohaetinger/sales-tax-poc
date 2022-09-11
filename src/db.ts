import { fileURLToPath } from "bun";
import { Low, JSONFile } from "lowdb";
import { dirname, join } from "path";
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

const __dirname = dirname(fileURLToPath(new URL(import.meta.url)));    
const file = join(__dirname, 'db.json')
const adapter = new JSONFile<Data>(file);
const db = new Low(adapter);
// db.read().then(()=>{
//   console.log('READ');
//   console.log(db.data.products)
// })
export default db;

