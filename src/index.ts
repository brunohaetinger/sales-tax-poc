import { handleGetProducts } from "./controllers/product.controller";
import { handleGetSale, handlePostSell } from "./controllers/sale.controller";

export default {
    port: 3000,
    async fetch(request: Request) {
      // Get url and method
        const { url, method } = request;
        // Get pathname from url
        const { pathname } = new URL(url);
        // Get All Products
        if (pathname === "/products" && method === "GET") {
            return handleGetProducts()
        }
        if (pathname === "/sell" && method === "POST") {
            return handlePostSell(request)
        }
        if (pathname.includes("/sale") && method === "GET") {
            const slug = Number(pathname.slice(pathname.lastIndexOf('/')+1))
            return handleGetSale(slug)
        }
    },
  };
  