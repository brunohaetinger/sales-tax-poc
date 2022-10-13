import Category from "../models/Category";
import State from "../models/State";
import Tax from "../models/Tax";

export class TaxFactory {
    static createTax(state: State, year: number, category: Category): Tax{
        let percentage = null;
        // Specification idea: 
        //  have a SmartphoneSpec, with method isSatisfiedBy(category){ return category.name === "Smartphone" }
        if(category.name === "Smartphone"){
            //Have a RSStateSpec, with method isSatisfiedBy(state){ return state.id === "RS" }
            if(state.id === "RS"){
                percentage = year >= 2022 ? 12 : 10;
            }
            if(state.id === "SC"){
                percentage = year >= 2022 ? null : 5;
            }
        }
        if(category.name === "Wearable"){
            if(state.id === "RS"){
                percentage = year >= 2022 ? 30 : null;
            }
            if(state.id === "SC"){
                percentage = year >= 2022 ? null : 50;
            }
        }
        

        if(!percentage) {
            throw Error("No percentage while creating Tax");
        }

        return new Tax(state, year, category, percentage);
    }
}