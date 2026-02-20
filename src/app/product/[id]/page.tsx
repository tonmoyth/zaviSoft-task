import { getSingleProduct } from "@/Action/products.action";
import ProductDetails from "@/components/products/productDetails/ProductDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productDetails = await getSingleProduct(id);

  return (
    <div>
      <ProductDetails product={productDetails}></ProductDetails>
    </div>
  );
}
