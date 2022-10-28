import { StateTax } from "../../types/StateTax.type";
import { TaxByCategory } from "../../types/TaxByCategory.type";
import SC from "./SC";

class SC2021 extends SC implements StateTax {
    tax: TaxByCategory;
    year: number;
    
    constructor() {
        super();
        
        this.year = 2022;
        this.tax = {
            1: 5,
            2: 50,
        };
    }
}

export default SC2021;