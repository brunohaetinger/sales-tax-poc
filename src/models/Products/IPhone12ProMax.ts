import Product from "../Product";

class IPhone12ProMax extends Product {

    constructor() {
        super("iPhone 12 Pro Max");
    }

    getPrice(year: number): number{
        const price = {
            2021: 1200,
            2022: 1000, 
        }
        return price[year];
    }
}

export default IPhone12ProMax;