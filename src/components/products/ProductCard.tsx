import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

// Product Card Component
const ProductCard = ({
  id,
  title,
  price,
  image,
  slug,
}: {
  id: String;
  title: string;
  price: number;
  image: string;
  slug: string;
}) => {
  // Fallback image if invalid URL
  const validImage =
    image && typeof image === "string" && image.startsWith("http")
      ? image
      : "/placeholder.jpg";

  return (
    <div className="flex flex-col gap-3 sm:gap-4 w-full h-[300px] justify-between sm:h-[350px] lg:h-[450px]">
      {/* Product Image Card with "NEW" Badge */}
      <div className="relative w-full   lg:h-80 flex-shrink-0">
        {/* Image with border and rounded corners - fixed height */}
        <div className="w-full h-50 lg:h-full border-2 sm:border-3 lg:border-6 border-white rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden relative">
          <Image
            src={validImage}
            alt={title}
            fill
            className="w-full h-full object-cover"
          />

          {/* "NEW" Badge - Top Left */}
          <div
            className="absolute top-0 left-0 bg-[#4A69E2] text-white px-4 py-3 
                rounded-tl-[24px] rounded-br-[24px]
                text-xs font-bold"
          >
            NEW
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xs sm:text-sm lg:text-[24px] font-medium text-gray-900 line-clamp-2 flex-shrink-0">
        {title}
      </h3>

      {/* Button */}
      <Link href={`/product/${id}`} className="flex-shrink-0">
        <Button
          className="w-full bg-[#232321]
 text-white rounded-xl py-3 px-4 uppercase hover:cursor-pointer tracking-wide text-xs sm:text-sm"
        >
          View Product- <span className="text-[#FFA52F]">${price}</span>
        </Button>
      </Link>
    </div>
  );
};

export default ProductCard;
