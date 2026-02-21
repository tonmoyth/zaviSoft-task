export const categoriesService = {
  getCategories: async () => {
    try {
      const url = new URL(`${process.env.API_URL}/categories`);

      //   if (params) {
      //     Object.entries(params).forEach(([key, value]) => {
      //       if (value !== undefined && value !== null && value !== "") {
      //         url.searchParams.append(key, value.toString());
      //       }
      //     });
      //   }
      const response = await fetch(url.toString());
      const products = await response.json();
      return products;
    } catch (error: any) {
      return { data: null, message: error?.message };
    }
  },
};
