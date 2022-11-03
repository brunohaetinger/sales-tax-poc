import { StateSpecification } from "../../specifications/State/StateSpecification";
import { TaxByCategory } from "../../types/TaxByCategory.type";
import Category from "../Category";
import RS from "./RS";

class RS2022 extends RS  implements StateSpecification{
    private tax: TaxByCategory;

    constructor() {
        super();
        this.tax = {
            "Smartphone": 12,
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

export default RS2022;