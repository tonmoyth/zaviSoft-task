import productsService, { IParams } from "@/services/product.service";

export const getProducts = async (params?: IParams) => {
  return await productsService.getProducts(params);
};

export const getSingleProduct = async (id: string) => {
  return await productsService.getSingleProduct(id);
};
