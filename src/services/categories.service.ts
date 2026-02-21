export const categoriesService = {
  getCategories: async () => {
    try {
      const url = new URL(`${process.env.API_URL}/categories`);

      // Fetch with ISR (revalidate every hour) and cache tags for on-demand revalidation
      const response = await fetch(url.toString(), {
        next: {
          tags: ["categories"],
          revalidate: 3600, // revalidate every hour (3600 seconds)
        },
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      // Normalize response
      const data = Array.isArray(json)
        ? json
        : json?.data || json?.results || json?.items || json?.categories || [];

      return {
        success: true,
        data,
      };
    } catch (error: any) {
      return {
        success: false,
        data: [],
        error: error?.message || "Failed to fetch categories",
      };
    }
  },
};
