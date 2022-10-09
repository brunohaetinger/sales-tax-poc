import Category from "./Category";
import State from "./State";

class Tax {
    state: State;
    year: number;
    category: Category;
    percentage: number;

    constructor(state: State, year: number,
        category: Category,
        percentage: number){
        this.state = state;
        this.year = year;
        this.category = category;
        this.percentage = percentage;
    }
};

export default Tax;