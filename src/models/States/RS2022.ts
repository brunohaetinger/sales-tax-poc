import { StateTax } from "../../types/StateTax.type";
import { TaxByCategory } from "../../types/TaxByCategory.type";
import RS from "./RS";

class RS2022 extends RS  implements StateTax{
    tax: TaxByCategory;
    year: number;

    constructor() {
        super();
        this.year = 2022;
        this.tax = {
            1: 12,
        };
    }
}

export default RS2022;