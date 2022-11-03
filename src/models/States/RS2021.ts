import { StateSpecification } from "../../specifications/State/StateSpecification";
import { TaxByCategory } from "../../types/TaxByCategory.type";
import Category from "../Category";
import RS from "./RS";

class RS2021 extends RS implements StateSpecification {
    private tax: TaxByCategory;
    
    constructor() {
        super();

        this.tax = {
            "Smartphone": 10,
            "Wearable": 30,
        };
    }

    isSatisfiedBy(): boolean {
        return this.id === "RS"
    }
    
    getTax(category: Category): number {
        return this.tax[category.name];
    }
}

export default RS2021;