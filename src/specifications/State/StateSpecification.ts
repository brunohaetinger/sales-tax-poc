import { StateTax } from "../../types/StateTax.type";

export interface StateSpecification {
    isSatisfiedBy(state: StateTax): boolean;
}
