"use client";

import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  return (
    <div className="mx-auto px-4 py-6 lg:px-15 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* LEFT SIDE - IMAGE GRID */}
      <div className="grid grid-cols-2 gap-4">
        {product.images.map((img, index) => (
          <div key={index} className="bg-gray-100 rounded-xl overflow-hidden">
            <img
              src={img}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* RIGHT SIDE - PRODUCT INFO */}
      <div className="space-y-6">
        {/* Badge */}
        <span className="inline-block bg-[#4A69E2] text-white text-xs px-3 py-1 rounded-full">
          New Release
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold uppercase leading-tight">
          {product.title}
        </h1>

        {/* Price */}
        <p className="text-[#4A69E2] text-xl font-semibold">
          ${product.price}.00
        </p>

        {/* Color */}
        <div>
          <p className="text-sm font-medium mb-2">COLOR</p>
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-gray-800 border-2 border-black cursor-pointer" />
            <div className="w-6 h-6 rounded-full bg-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Size */}
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-sm font-medium">SIZE</p>
            <p className="text-xs text-gray-500 cursor-pointer">SIZE CHART</p>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {[38, 39, 40, 41, 42, 43, 44, 45, 46, 47].map((size) => (
              <button
                key={size}
                className="border rounded-md py-2 text-sm hover:bg-black hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 pt-4">
          <Button className="w-full bg-black text-white hover:bg-black/90">
            ADD TO CART
          </Button>

          <Button className="w-full bg-[#4A69E2] hover:bg-[#3f5fd1]">
            BUY IT NOW
          </Button>
        </div>

        {/* About */}
        <div className="pt-6">
          <h3 className="font-semibold mb-2 uppercase text-sm">
            About The Product
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
