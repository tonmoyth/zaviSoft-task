const productsService = {
  getProducts: async () => {
    try {
      const response = await fetch(
        `${process.env.API_URL}/products?offset=1&limit=4`,
      );
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      const products = await response.json();
      return products;
    } catch (error) {
      console.error("Get Products Failed:", error);

      throw new Error("Unable to load products. Please try again.");
    }
  },
  getSingleProduct: async (id: string) => {
    try {
      const response = await fetch(`${process.env.API_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      const product = await response.json();
      return product;
    } catch (error) {
      console.error("Get Single Product Failed:", error);

      throw new Error("Unable to load product. Please try again.");
    }
  },
};

export default productsService;
