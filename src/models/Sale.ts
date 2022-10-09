import { ProductFactory } from "../services/productFactory";
import { TaxFactory } from "../services/taxFactory";
import Product from "./Product";
import State from "./State";
import Tax from "./Tax";

class Sale {
    product: Product;
    date: string;
    state: State;
    tax: Tax;

    constructor(
        date: string,
        state: State,
    ) {
        this.date = date;
        this.state = state;
    }

    addProduct(model: string): boolean{
        try{
            const product = ProductFactory.createProduct(model, this.getYear());
            this.product = product;
            this.tax = TaxFactory.createTax(this.state, this.getYear(), this.product.category);
            return true;
        } catch (err){
            console.error(err)
            return false;
        }
    }

    getPriceWithoutTaxes(): number{
        return this.product?.price || 0;
    }

    getFullPrice(): number{
        if(!this.product) return 0;

        const fullPrice = this.product.price * (1 + this.tax.percentage/100);
        return Number(fullPrice.toFixed(2));
    }

    getYear(): number{
        const [yearStr] = this.date.split("-");
        return Number(yearStr);
    }
};

export default Sale;