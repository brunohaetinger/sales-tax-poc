import { describe, expect, it } from "bun:test";
import Sale from "../models/Sale";
import { StateFactory } from "../services/stateFactory";

it('should pass test', ()=>{
    expect(1+1).toBe(2)
})

describe("Sales",() => {
    it("should have undefined product", () => {
        const state = StateFactory.createState("RS");
        const sale = new Sale("2022-09-24", state);
        expect(sale.items[0]).toBe(undefined);
    })

    describe("addProduct", () => {
        it("should add product", () => {
            const state = StateFactory.createState("RS");
            const sale = new Sale("2022-09-24", state);
            sale.addProduct("iPhone 12")
            expect(sale.items[0].product.model).toBe("iPhone 12");
        })
    
        it("should fail to add product", () => {
            const state = StateFactory.createState("RS");
            const sale = new Sale("2022-09-24", state);
            sale.addProduct("Non existing iphone")
            // Currently bun doens't have expect(fn).toThrown()
            expect(sale.items[0]).toBe(undefined);
        })
    })

    describe("getPriceWithoutTaxes", () => {
        it("should return price 0 when there is no product", () => {
            const state = StateFactory.createState("RS");
            const sale = new Sale("2022-09-24", state);
            expect(sale.getPriceWithoutTaxes()).toBe(0)
        })
        
        it("should get price 800.5 for iphone 12", () => {
            const state = StateFactory.createState("RS");
            const sale = new Sale("2022-09-24", state);
            sale.addProduct("iPhone 12")
            expect(sale.getPriceWithoutTaxes()).toBe(800.5)
        })
    })
    
    describe("getFullPrice", () => {
        it("should return price 0 when there is no product", () => {
            const state = StateFactory.createState("RS");
            const sale = new Sale("2022-09-24", state);
            expect(sale.getFullPrice()).toBe(0)
        })

        it("should return price with taxes for iphone 12 at RS on 2022", () => {
            const state = StateFactory.createState("RS");
            const sale = new Sale("2022-09-24", state);
            sale.addProduct("iPhone 12")
            expect(sale.getFullPrice()).toBe(896.56)
        })

        it("should get price with taxes for iphone 12 at RS on 2021", () => {
            const state = StateFactory.createState("RS");
            const sale = new Sale("2021-09-24", state);
            sale.addProduct("iPhone 12")
            expect(sale.getFullPrice()).toBe(1098.9)
        })

        it("should return price with taxes for Apple Watch 2 at RS on 2022", () => {
            const state = StateFactory.createState("RS");
            const sale = new Sale("2022-09-24", state);
            sale.addProduct("Apple Watch 2")
            expect(sale.getFullPrice()).toBe(1300)
        })

        it("should get price with taxes for iphone 12 at SC on 2021", () => {
            const state = StateFactory.createState("SC");
            const sale = new Sale("2021-09-24", state);
            sale.addProduct("iPhone 12")
            expect(sale.getFullPrice()).toBe(1048.95)
        })
    })
})