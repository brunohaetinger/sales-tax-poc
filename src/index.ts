let products = [
    {
        id: "1", model: "iPhone 12", category_id: "1",
    },
    {
        id: "2", model: "iPhone 12 Pro Max", category_id: "1",
    },
    {
        id: "3", model: "Apple Watch 2", category_id: "2",
    },
]



export default {
    port: 3000,
    fetch(request: Request) {
      // Get url and method
        const { url, method } = request;
        // Get pathname from url
        const { pathname } = new URL(url);
        // Get All Products
        if (pathname === "/products" && method === "GET") {
            return new Response(JSON.stringify(products), {
                status: 200,
                headers: {
                "Content-Type": "application/json",
                "Access-control-allow-origin": "*",
                },
            });
        }
    },
  };
  