import { categoriesService } from "@/services/categories.service";

export const getCategories = async () => {
  return await categoriesService.getCategories();
};
