import State from "../models/State";
import { RS2021, RS2022, SC2021 } from "../models/States";

export class StateFactory {
    static createState(id: string, year: number): State{
        if(year === 2021){
            if(id === "RS") {
                return new RS2021();
            }
            if(id === "SC") {
                return new SC2021();
            }
        }
        if(year === 2022){
            if(id === "RS") {
                return new RS2022();
            }
        }
    }
}