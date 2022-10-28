import { StateTax } from "../../types/StateTax.type";
import { StateSpecification } from "./StateSpecification";

export class Year2022StateSpecification implements StateSpecification {
    isSatisfiedBy(state: StateTax){
        return state.year === 2022
    }
}