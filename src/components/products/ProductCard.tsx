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
  return (
    <div className="flex flex-col gap-3 sm:gap-4 w-full">
      {/* Product Image Card with "NEW" Badge */}
      <div className="relative w-full">
        {/* Image with border and rounded corners - responsive aspect ratio */}
        <div className="w-full aspect-square  border-2 sm:border-3 lg:border-6 border-white rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden relative">
          <Image
            src={image}
            alt={title}
            fill
            className="w-full h-full object-cover"
          />

          {/* "NEW" Badge - Top Left */}
          <div
            className="absolute top-0 left-0   bg-[#4A69E2] text-white px-4 py-3 
                rounded-tl-[24px] rounded-br-[24px]
                text-xs font-bold"
          >
            NEW
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xs sm:text-sm lg:text-[24px] font-medium text-gray-900 line-clamp-2">
        {title}
      </h3>

      {/* Button */}
      <Link href={`/product/${id}`}>
        <Button
          className="w-full bg-[#232321]
 text-white  rounded-xl py-xl px-4 uppercase hover:cursor-pointer  tracking-wide text-xs sm:text-sm"
        >
          View Product- <span className="text-[#FFA52F]">${price}</span>
        </Button>
      </Link>
    </div>
  );
};

export default ProductCard;
