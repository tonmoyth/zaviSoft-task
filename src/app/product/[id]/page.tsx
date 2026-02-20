import ProductDetails from "@/components/products/productDetails/ProductDetails";
export const fakeProduct = {
  id: 3,
  title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
  slug: "adidas-4dfwd-x-parley-running-shoes",
  price: 125,
  description:
    "Experience next-level performance with the Adidas 4DFWD X Parley Running Shoes. Designed with breathable upper material and innovative 4D midsole for smooth forward motion. Perfect for everyday runners and athletes.",
  images: [
    "https://i.imgur.com/cHddUCu.jpeg",
    "https://i.imgur.com/CFOjAgK.jpeg",
    "https://i.imgur.com/wbIMMme.jpeg",
    "https://i.imgur.com/npLfCGq.jpeg",
  ],
  category: {
    id: 1,
    name: "Shoes",
    slug: "shoes",
    image: "https://placeimg.com/640/480/fashion",
    creationAt: "2026-02-19T17:49:24.000Z",
    updatedAt: "2026-02-19T17:49:24.000Z",
  },
  creationAt: "2026-02-19T17:49:24.000Z",
  updatedAt: "2026-02-19T17:49:24.000Z",
};

export default function Page() {
  return (
    <div>
      <ProductDetails product={fakeProduct}></ProductDetails>
    </div>
  );
}
