import Category from "../models/Category";
import State from "../models/State";
import Tax from "../models/Tax";
import { StateFactory } from "./stateFactory";

export class TaxService {
    static getTax(state: State, year: number, category: Category): Tax{
        let percentage = null;
        const stateTax = StateFactory.createState(state.id, year);
        percentage = stateTax.tax[category.name];

        if(!percentage) {
            throw Error("No percentage while creating Tax");
        }

        return new Tax(state, year, category, percentage);
    }
}