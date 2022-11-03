import Product from "../Product";

class AppleWatch2 extends Product {

    constructor() {
        super("Apple Watch 2");
    }

    getPrice(year: number): number{
        const price = {
            2021: 1100,
            2022: 1000, 
        }
        return price[year];
    }
}

export default AppleWatch2;