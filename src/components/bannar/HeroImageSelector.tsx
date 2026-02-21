"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroImage {
  id: string;
  src: string;
  title: string;
  description: string;
}

interface HeroImageSelectorProps {
  images: HeroImage[];
  defaultImageId?: string;
  buttonText?: string;
  title?: string;
  description?: string;
}

/**
 * HeroImageSelector - A hero section with full width/height background image
 * and selectable thumbnail images in the bottom right
 */
const HeroImageSelector: React.FC<HeroImageSelectorProps> = ({
  images,
  defaultImageId,
}) => {
  const [selectedImageId, setSelectedImageId] = useState(
    defaultImageId || images[0]?.id || "",
  );

  const selectedImage = images.find((img) => img.id === selectedImageId);
  const currentImageSrc =
    selectedImage?.src || images[0]?.src || "/placeholder.jpg";

  const addLineBreakEveryFiveWords = (text?: string) => {
    if (!text) return "";

    const words = text.split(" ");
    const result = [];

    for (let i = 0; i < words.length; i += 7) {
      result.push(words.slice(i, i + 5).join(" "));
    }

    return result.join("<br />");
  };

  return (
    <section className="px-4 lg:px-15 ">
      <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[750px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute  inset-0">
          <Image
            src={currentImageSrc}
            alt="Hero background"
            fill
            className="object-cover rounded-[32px] sm:rounded-[40px] md:rounded-[48px] lg:rounded-[64px]"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 rounded-[32px] sm:rounded-[40px] md:rounded-[48px] lg:rounded-[64px] bg-black/30"></div>
        </div>

        {/* Content Container - Bottom Left */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-4 sm:left-6 md:left-8 lg:left-12 z-10 flex flex-col max-w-2xl">
          {/* Left: Title, Description, Button - Bottom Left */}
          <div className="flex-1 min-w-0">
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-[74px] uppercase text-[#FFFF] leading-tight sm:leading-none tracking-tight mb-2 sm:mb-4 md:mb-6">
              {selectedImage?.title}
            </h1>
            <p
              className="text-xs sm:text-sm md:text-base text-gray-200 mb-4 sm:mb-6 md:mb-8 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: addLineBreakEveryFiveWords(selectedImage?.description),
              }}
            />
            <Button
              size="lg"
              className="w-auto bg-[#4A69E2] text-white font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-lg sm:rounded-xl tracking-widest text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              SHOP NOW
            </Button>
          </div>
        </div>

        {/* Right: Image Thumbnails - Fixed Bottom Right */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 right-4 sm:right-6 md:right-8 lg:right-12 z-10 flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-4">
          {images.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImageId(image.id)}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[32px] overflow-hidden transition-all duration-300 border-2 md:border-3 lg:border-3 border-[#E7E7E3] cursor-pointer flex-shrink-0 ${
                selectedImageId === image.id
                  ? "border-white shadow-lg scale-105"
                  : "border-gray-400 hover:border-white opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroImageSelector;
