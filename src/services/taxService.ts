import Category from "../models/Category";
import State from "../models/State";
import Tax from "../models/Tax";

export class TaxService {
    static getTax(state: State, year: number, category: Category): Tax{
        let percentage = null;
        console.log({category});
        
        percentage = state.getTax(category);

        if(!percentage) {
            throw Error(`No percentage for category ${category.name} at year ${year} while creating Tax`);
        }

        return new Tax(state, year, category, percentage);
    }
}