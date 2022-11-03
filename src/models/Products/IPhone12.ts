import Product from "../Product";

class IPhone12 extends Product {
    constructor() {
        super("iPhone 12");
    }

    getPrice(year: number): number{
        const price = {
            2021: 999,
            2022: 800.5, 
        }
        return price[year];
    }
}

export default IPhone12;