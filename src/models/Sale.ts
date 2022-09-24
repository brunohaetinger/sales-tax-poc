import { ProductFactory } from "../services/productFactory";
import { TaxService } from "../services/taxService";
import Product from "./Product";
import State from "./State";

class Sale {
    product: Product;
    date: string;
    state: State;

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

        console.log(`Cat: ${this.product.category.name} --- year: ${this.getYear()} --- state: ${this.state.id}`);
        const tax = TaxService.getTax(this.product.category, this.getYear(), this.state)
        console.log('tax >>',tax);
        
        const fullPrice = this.product.price * (1 + tax/100);
        return Number(fullPrice.toFixed(2));
    }

    getYear(): number{
        const [yearStr] = this.date.split("-");
        return Number(yearStr);
    }
};

export default Sale;