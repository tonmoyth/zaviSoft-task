import { categoriesService } from "@/services/categories.service";

// Fallback categories when API fails
const fallbackCategories = [
  {
    id: "1",
    name: "Lifestyle Shoes",
    image: "/categories/lifestyle.png",
    slug: "lifestyle",
    creationAt: new Date().toISOString(),
    updateAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Basketball Shoes",
    image: "/categories/basketball.png",
    slug: "basketball",
    creationAt: new Date().toISOString(),
    updateAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Running Shoes",
    image: "/categories/running.png",
    slug: "running",
    creationAt: new Date().toISOString(),
    updateAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Training Shoes",
    image: "/categories/training.png",
    slug: "training",
    creationAt: new Date().toISOString(),
    updateAt: new Date().toISOString(),
  },
];

export const getCategories = async () => {
  const response = await categoriesService.getCategories();

  // If API call failed or returned empty, use fallback
  if (!response.success || (response.data?.length ?? 0) === 0) {
    console.warn("Categories API failed, using fallback:", response.error);
    return {
      data: fallbackCategories,
      isError: !response.success,
      error: response.error,
    };
  }

  return {
    data: response.data,
    isError: false,
    error: null,
  };
};
