import Product from "./Product";
import Tax from "./Tax";

class SaleItem {
    product: Product;
    price: number;
    tax: Tax;

    constructor(
        product: Product,
        price: number,
        tax: Tax,
    ) {
        this.product = product;
        this.price = price;
        this.tax = tax;
    }

    getPriceWithoutTaxes(): number{
        return this.price || 0;
    }

    getFullPrice(): number{
        if(!this.product) return 0;

        const fullPrice = this.price * (1 + this.tax.percentage/100);
        return Number(fullPrice.toFixed(2));
    }
};

export default SaleItem;