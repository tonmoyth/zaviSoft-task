// components/NewDropsSlider.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ProductCard from "../ProductCard";

export default function ProductCardSection({ products }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRefMobile = useRef<HTMLDivElement>(null);
  const sliderRefDesktop = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      calculateMaxIndex(mobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [products]);

  const calculateMaxIndex = (mobile: boolean) => {
    if (!products) return;
    if (mobile) {
      // Mobile: groups of 4 (2x2) per slide
      const groups = Math.max(1, Math.ceil(products.length / 4));
      setMaxIndex(groups - 1);
      setCurrentIndex((ci) => Math.min(ci, groups - 1));
    } else {
      // Desktop: show 4 per view, but arrows move one-by-one
      const max = Math.max(0, products.length - 4);
      setMaxIndex(max);
      setCurrentIndex((ci) => Math.min(ci, max));
    }
  };

  // Scroll mobile by group (each child is a group)
  const scrollToIndexMobile = (index: number) => {
    if (!sliderRefMobile.current) return;
    const el = sliderRefMobile.current;
    const target = el.children[index] as HTMLElement | undefined;
    if (!target) return;
    el.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    setCurrentIndex(index);
  };

  // Scroll desktop by single card (align target card to left)
  const scrollToIndexDesktop = (index: number) => {
    if (!sliderRefDesktop.current) return;
    const el = sliderRefDesktop.current;
    const target = el.children[index] as HTMLElement | undefined;
    if (!target) return;
    el.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (isMobile) {
      if (currentIndex < maxIndex) scrollToIndexMobile(currentIndex + 1);
    } else {
      if (currentIndex < maxIndex) scrollToIndexDesktop(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) return;
    if (isMobile) {
      scrollToIndexMobile(currentIndex - 1);
    } else {
      scrollToIndexDesktop(currentIndex - 1);
    }
  };

  return (
    <div className="w-full px-4 py-12 lg:px-15 ">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-8">
          {/* Left: Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black">
            You may also like
          </h1>

          {/* Right: Arrow Navigation */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "rounded-xl bg-[#232321] border-2  border-black hover:bg-black hover:text-white transition-colors",
                currentIndex === 0 && "bg-[#232321] cursor-not-allowed",
              )}
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className={cn(
                "rounded-xl bg-[#232321] border-2 border-black hover:bg-black hover:text-white transition-colors",
                currentIndex === maxIndex && "bg-[#232321] cursor-not-allowed",
              )}
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative" ref={containerRef}>
        {/* Mobile Slider: groups of 4 (2x2 grid) */}
        <div
          ref={sliderRefMobile}
          className="md:hidden flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products && products.length > 0 && (
            <>
              {Array.from({ length: Math.ceil(products.length / 4) }).map(
                (_, groupIndex) => {
                  const groupProducts = products.slice(
                    groupIndex * 4,
                    groupIndex * 4 + 4,
                  );

                  return (
                    <div
                      key={`group-${groupIndex}`}
                      className="w-screen flex-shrink-0 snap-center px-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {groupProducts.map((product: any) => (
                          <div key={product.id} className="flex flex-col gap-2">
                            <ProductCard
                              id={product.id}
                              title={product.title}
                              price={product.price}
                              image={product.images?.[0]}
                              slug={product.slug}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                },
              )}
            </>
          )}
        </div>

        {/* Desktop Slider: single row, each card is one item (4 visible) */}
        <div
          ref={sliderRefDesktop}
          className="hidden md:flex overflow-x-auto scrollbar-hide gap-3 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products &&
            products.length > 0 &&
            products.map((product: any, idx: number) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[calc((100%/4)-1rem)] px-4"
                style={{ minWidth: "25%" }}
              >
                <ProductCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.images?.[0]}
                  slug={product.slug}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
