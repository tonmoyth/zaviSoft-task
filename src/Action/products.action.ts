import productsService from "@/services/product.service";

export const getProducts = async () => {
  return await productsService.getProducts();
};
