import { getSaleInfo, insertSale } from "../dao/sale.dao";

export const handleGetSale = async (slug: number): Promise<Response> => {
    const infos = await getSaleInfo(slug);
    return new Response(JSON.stringify(infos), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-control-allow-origin": "*",
        },
    });
}

export const handlePostSell = async (request: Request): Promise<Response> => {
    const { prodPriceId, date, stateId } = await request.json() as any;
    insertSale(prodPriceId, date, stateId)
    return new Response("ok", {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-control-allow-origin": "*",
        },
    });
}

