import productsService from "@/services/product.service";

export const getProducts = async () => {
  return await productsService.getProducts();
};

export const getSingleProduct = async (id: string) => {
  return await productsService.getSingleProduct(id);
};
