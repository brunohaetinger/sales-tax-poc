import { StateTax } from "../../types/StateTax.type";
import { TaxByCategory } from "../../types/TaxByCategory.type";
import RS from "./RS";


class RS2021 extends RS implements StateTax {
    tax: TaxByCategory;
    year: number;
    
    constructor() {
        super();

        this.year = 2021;
        this.tax = {
            1: 10,
            2: 30,
        };
    }
}

export default RS2021;