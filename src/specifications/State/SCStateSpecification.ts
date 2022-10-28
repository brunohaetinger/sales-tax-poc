import { StateTax } from "../../types/StateTax.type";
import { StateSpecification } from "./StateSpecification";

export class SCStateSpecification implements StateSpecification {
    isSatisfiedBy(state: StateTax){
        return state.id === "SC"
    }
}