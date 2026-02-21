import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

export default function CategoriesCard({ category }: { category: any }) {
  return (
    <div className="w-full overflow-hidden rounded-md">
      <div className="relative w-full h-56 md:h-102">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
        />

        {/* gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* content over image */}
        <div className="absolute inset-0 flex items-end p-4 md:p-6">
          <div className="w-full flex items-center justify-between text-white">
            <h3 className="text-lg md:text-2xl font-bold uppercase">
              {category.name}
            </h3>

            <Button
              size="icon"
              className="bg-white/10 text-white rounded-lg h-10 w-10 hover:bg-white/20"
            >
              <ArrowUpRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
