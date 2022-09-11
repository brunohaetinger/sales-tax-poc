import { getProducts } from "../dao/product.dao";

export const handleGetProducts = async (): Promise<Response> => {
    const products = await getProducts();
    return new Response(JSON.stringify(products), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-control-allow-origin": "*",
        },
    });
}