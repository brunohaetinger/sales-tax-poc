import { StateTax } from "../../types/StateTax.type";
import { StateSpecification } from "./StateSpecification";

export class Year2021StateSpecification implements StateSpecification {
    isSatisfiedBy(state: StateTax){
        return state.year === 2021
    }
}