import { ProductFactory } from "../services/productFactory";
import { StateFactory } from "../services/stateFactory";
import { TaxService } from "../services/taxService";
import SaleItem from "./SaleItem";
import State from "./State";

class Sale {
    items: SaleItem[];
    date: string;
    state: State;

    constructor(
        date: string,
        stateId: string,
    ) {
        this.date = date;
        this.state = StateFactory.createState(stateId, this.getYear());
        this.items = [];
    }

    addProduct(model: string): boolean{
        try{
            const product = ProductFactory.createProduct(model);
            const tax = TaxService.getTax(this.state, this.getYear(), product.category);
            const price = product.getPrice(this.getYear());
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