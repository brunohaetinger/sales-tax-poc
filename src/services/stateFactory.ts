import State from "../models/State";

export class StateFactory {
    static createState(id: string): State{
        if(id === "RS") {
            return new State(id, "Rio Grande do Sul");
        }
        if(id === "SC") {
            return new State(id, "Santa Catarina");
        }

    }
}