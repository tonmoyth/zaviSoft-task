import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { getProducts } from "@/Action/products.action";

const ProductSection = async () => {
  const productData = await getProducts({
    offset: 1,
    limit: 4,
  });

  return (
    <section className="w-full lg:px-15 mb-4 lg:mb-0 lg:py-16">
      {/* Header Section */}
      <div className="px-4  lg:px-8 py-6 sm:py-16 lg:py-20">
        <div>
          <div className="flex ">
            {/* Left: Title */}
            <div className="flex-1">
              <h1
                className="
    uppercase 
    font-semibold
    text-[20px]
    lg:text-[36px] 
    sm:text-[48px] 
    md:text-[60px] 
    lg:text-[74px]
    leading-[95%]
    tracking-[0]
    text-[#232321]
  "
              >
                Don't miss out
                <br />
                new drops
              </h1>
            </div>

            {/* Right: Button */}
            <div className="flex items-end lg:mt-16">
              <Button
                className="bg-[#4A69E2]
 rounded-xl py-xl px-4 lg:px-6 sm:px-8  sm:py-6 lg:font-semibold tracking-widest text-xs sm:text-base"
              >
                Shop New Drops
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid - Responsive columns */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className=" mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6 lg:gap-8">
            {productData &&
              productData.length > 0 &&
              productData.map((product: any) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.images[0]}
                  slug={product.slug}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
