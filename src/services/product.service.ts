export interface IParams {
  offset?: number;
  limit?: number;
}

const productsService = {
  getProducts: async (params?: IParams) => {
    try {
      const url = new URL(`${process.env.API_URL}/products`);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value.toString());
          }
        });
      }
      const response = await fetch(url.toString());
      const products = await response.json();
      return products;
    } catch (error: any) {
      return { data: null, message: error?.message };
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
    } catch (error: any) {
      return { data: null, message: error?.message };
    }
  },
};

export default productsService;
