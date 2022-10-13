import { IPhone12, IPhone12ProMax, AppleWatch2 } from "../models/Products";

export class PriceFactory {
    static createPrice(model: string, year: number): number{
        if(model === "iPhone 12"){
            if(year >= 2022){
                return 800.5; 
            } else {
                return 999;
            }
        }
        if(model === "iPhone 12 Pro Max"){
            if(year >= 2022){
                return 1000; 
            } else {
                return 1200;
            }
        }
        if(model === "Apple Watch 2"){
            if(year >= 2022){
                return 1000; 
            } else {
                return 1100;
            }
        }
    }
}