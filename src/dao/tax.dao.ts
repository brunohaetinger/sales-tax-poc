import db from "../db";
import Tax from "../models/Tax.type";

export const getTaxes = async (): Promise<Tax[]> => {
    await db.read();
    return db.data?.taxes || [];
};

export const getTaxId = async (year: number, stateId: string, categoryId: number): Promise<number> => {
    const taxes = await getTaxes();
    return taxes.find((tax: Tax) => tax.category_id === categoryId && tax.year === year && tax.state_id === stateId).id;
}
