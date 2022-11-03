import { StateSpecification } from "../../specifications/State/StateSpecification";
import { TaxByCategory } from "../../types/TaxByCategory.type";
import Category from "../Category";
import SC from "./SC";

class SC2021 extends SC implements StateSpecification {
    private tax: TaxByCategory;
    
    constructor() {
        super();
        
        this.tax = {
            "Smartphone": 5,
            "Wearable": 50,
        };
    }

    isSatisfiedBy(): boolean {
        return this.id === "RS"
    }
    
    getTax(category: Category): number {
        return this.tax[category.name];
    }
}

export default SC2021;