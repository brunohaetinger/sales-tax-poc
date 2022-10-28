import { StateTax } from "../../types/StateTax.type";
import { StateSpecification } from "./StateSpecification";

export class RSStateSpecification implements StateSpecification {
    isSatisfiedBy(state: StateTax){
        return state.id === "RS"
    }
}