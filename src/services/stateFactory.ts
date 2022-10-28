import State from "../models/State";
import { RS2021, RS2022, SC2021 } from "../models/States";
import { StateTax } from "../types/StateTax.type";

export class StateFactory {
    static createState(id: string, year: number): StateTax{
        if(id === "RS") {
            if(year === 2021){
                return new RS2021();
            }
            if(year === 2022){
                return new RS2022();
            }
        }
        if(id === "SC") {
            if(year === 2021){
                return new SC2021();
            }
        }

    }
}