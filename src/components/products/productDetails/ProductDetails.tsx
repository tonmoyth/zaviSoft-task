"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

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
  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  const [selectedSize, setSelectedSize] = useState<number>(38);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  return (
    <div className="mx-auto px-4 py-6 lg:py-8 lg:px-15 grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* LEFT SIDE - IMAGE SECTION */}

      {/* Desktop Grid Layout */}
      <div className="hidden lg:grid grid-cols-2 col-span-2 gap-4">
        {Array.from({ length: 4 }).map((_, index) => {
          const img = product.images[index] || product.images[0];

          let roundedClass = "";

          if (index === 0) roundedClass = "rounded-tl-2xl";
          if (index === 1) roundedClass = "rounded-tr-2xl";
          if (index === 2) roundedClass = "rounded-bl-2xl";
          if (index === 3) roundedClass = "rounded-br-2xl";

          return (
            <div
              key={index}
              className={`bg-gray-100 overflow-hidden ${roundedClass}`}
            >
              <img
                src={img}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* Mobile Image Selector */}
      <div className="lg:hidden col-span-1">
        {/* Main Large Image */}
        <div className="bg-gray-100 rounded-2xl overflow-hidden mb-4 w-full h-96">
          <img
            src={product.images[selectedImageIndex]}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnail Images */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {product.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                selectedImageIndex === index ? "border-white scale-105" : ""
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - PRODUCT INFO */}
      <div className="space-y-6 ">
        {/* Badge */}
        <span className="inline-block bg-[#4A69E2] text-white text-xs px-4 py-3 rounded-xl">
          New Release
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold uppercase leading-tight">
          {product.title}
        </h1>

        {/* Price */}
        <p className="text-[#4A69E2] text-[24px] font-semibold">
          ${product.price}.00
        </p>

        {/* Color */}
        <div>
          <p className="text-xl font-medium mb-2">COLOR</p>

          <div className="flex gap-4">
            {/* First Color */}
            <label className="cursor-pointer">
              <input
                type="radio"
                name="color"
                value="#253043"
                className="hidden peer"
              />
              <div className="w-6 h-6 rounded-full bg-[#253043]  border-2 border-transparent peer-checked:border-black peer-checked:scale-110 transition-all duration-200" />
            </label>

            {/* Second Color */}
            <label className="cursor-pointer">
              <input
                type="radio"
                name="color"
                value="#707E6E"
                className="hidden peer"
              />
              <div className="w-6 h-6 rounded-full bg-[#707E6E] border-2 border-transparent peer-checked:border-black peer-checked:scale-110 transition-all duration-200" />
            </label>
          </div>
        </div>

        {/* Size */}
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-xl font-medium">SIZE</p>
            <p className="text-sm text-black underline cursor-pointer">
              SIZE CHART
            </p>
          </div>

          <div className="grid grid-cols-8 gap-2">
            {sizes.map((size) => (
              <label key={size} className="cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={() => setSelectedSize(size)}
                  className="hidden"
                />

                <div
                  className={`border rounded-md py-2 text-sm text-center transition
              ${
                selectedSize === size
                  ? "bg-black text-white border-black"
                  : "bg-white hover:bg-black hover:text-white"
              }`}
                >
                  {size}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 pt-4">
          <div className="flex items-center gap-3">
            {/* Add to Cart Button */}
            <Button className="flex-1 lg:h-12 bg-[#232321] text-white hover:bg-black/90">
              ADD TO CART
            </Button>

            {/* Heart Button */}
            <Button className="lg:h-12 w-12 flex items-center justify-center bg-[#232321] hover:bg-black/90">
              <Heart strokeWidth={1.5} className="w-5 h-5 text-white" />
            </Button>
          </div>

          <Button className="w-full lg:h-12 bg-[#4A69E2] hover:bg-[#3f5fd1]">
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
