import db from "../db";
import State from "../models/State.type";

export const getStates = async (): Promise<State[]> => {
    await db.read();
    return db.data?.states || [];
};
