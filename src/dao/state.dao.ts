import db from "../db";
import State from "../types/State.type";

export const getStates = async (): Promise<State[]> => {
    await db.read();
    return db.data?.states || [];
};
