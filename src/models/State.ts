import { StateSpecification } from "../specifications/State/StateSpecification";
import Category from "./Category";

abstract class State implements StateSpecification {
    id: string;
    name: string;

    constructor(id: string, name: string){
        this.id = id;
        this.name = name;
    }

    abstract isSatisfiedBy(): boolean;
    abstract getTax(category: Category): number;
};

export default State;