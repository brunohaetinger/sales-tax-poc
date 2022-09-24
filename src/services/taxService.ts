import Category from "../models/Category";
import State from "../models/State";
import { taxesMock } from "../tests/mocks/mocks";

export class TaxService {
    static getTax(category: Category, year: number, state: State): number{
        const taxMock = Object.values(taxesMock).find(tax => tax.category === category.name && tax.year === year && tax.state.id === state.id);
        if(!taxMock){
            throw Error("Tax doesn't exist for this year/category/state");
        }
        return taxMock.tax;
    }
}