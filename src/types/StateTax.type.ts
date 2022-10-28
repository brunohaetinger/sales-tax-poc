import State from "../models/State";
import { TaxByCategory } from "./TaxByCategory.type";

export abstract class StateTax extends State {
    year: number;
    tax: TaxByCategory;
}