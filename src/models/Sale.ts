import { PriceFactory } from "../services/priceFactory";
import { ProductBuilder } from "../services/productBuilder";
import { ProductDirector } from "../services/productDirector";
import { TaxFactory } from "../services/taxFactory";
import SaleItem from "./SaleItem";
import State from "./State";

class Sale {
    items: SaleItem[];
    date: string;
    state: State;

    constructor(
        date: string,
        state: State,
    ) {
        this.date = date;
        this.state = state;
        this.items = [];
    }

    addProduct(model: string): boolean{
        try{
            const productBuilder = new ProductBuilder();
            
            // TODO: How to define what to make ? What pattern should be responsible ?
            if(model === "iPhone 12"){
                ProductDirector.makeIPhone12(productBuilder); 
            }
            if(model === "iPhone 12 Pro Max"){
                ProductDirector.makeIPhone12ProMax(productBuilder); 
            }
            if(model === "Apple Watch 2"){
                ProductDirector.makeAppleWatch2(productBuilder); 
            }
            
            const product = productBuilder.build();
            const price = PriceFactory.createPrice(model, this.getYear());
            const tax = TaxFactory.createTax(this.state, this.getYear(), product.category);
            const newItem = new SaleItem(product, price, tax);
            this.items.push(newItem)
            return true;
        } catch (err){
            console.error(err)
            return false;
        }
    }

    getPriceWithoutTaxes(): number{
        return this.items.reduce((acc, item) => acc + item.getPriceWithoutTaxes(), 0);
    }

    getFullPrice(): number{
        if(!this.items) return 0;

        const fullPrice = this.items.reduce((acc, item) => acc + item.getFullPrice(), 0);
        return Number(fullPrice.toFixed(2));
    }

    getYear(): number{
        const [yearStr] = this.date.split("-");
        return Number(yearStr);
    }
};

export default Sale;