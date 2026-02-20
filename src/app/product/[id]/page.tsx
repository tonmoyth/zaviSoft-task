import { getProducts, getSingleProduct } from "@/Action/products.action";
import ProductCardSection from "@/components/products/productDetails/procutCardSection";
import ProductDetails from "@/components/products/productDetails/ProductDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productDetails = getSingleProduct(id);
  const product = getProducts();

  const [productDetailsData, productData] = await Promise.all([
    productDetails,
    product,
  ]);

  return (
    <div>
      <ProductDetails product={productDetailsData}></ProductDetails>
      <ProductCardSection products={productData}></ProductCardSection>
    </div>
  );
}
