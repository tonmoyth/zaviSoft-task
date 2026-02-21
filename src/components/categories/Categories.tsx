"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import EmblaWrapper from "./EmblaWrapper";

export type Category = {
  id: string;
  name: string;
  image: string;
  slug: string;
  creationAt: string;
  updateAt: string;
};

interface Props {
  categories: any;
}

export default function CategoriesSection({ categories }: Props) {
  // Normalize input: handle array, wrapped object, or single object with error flag
  let list: any[] = [];
  let isError = false;
  let error: string | null = null;

  if (categories && typeof categories === "object") {
    if (Array.isArray(categories)) {
      list = categories;
    } else if (categories.data) {
      list = Array.isArray(categories.data) ? categories.data : [];
      isError = categories.isError || false;
      error = categories.error || null;
    } else {
      // Try common response shapes
      const extracted =
        categories.results ??
        categories.items ??
        categories.rows ??
        categories.categories ??
        [];
      list = Array.isArray(extracted) ? extracted : [];
    }
  }

  // Show empty state if no categories
  if (list.length === 0) {
    return (
      <section className="w-full bg-[#1f1f1f] pt-6 pl-4 lg:pt-22.5  lg:pl-15 ">
        <div className=" mx-auto ">
          <h2 className="text-2xl md:text-[74px] font-extrabold text-white mb-6 lg:mb-16">
            CATEGORIES
          </h2>
          <div className="flex items-center justify-center bg-[#ededed] rounded-2xl p-12 text-center">
            <div>
              <p className="text-lg text-gray-600 mb-2">
                No categories available
              </p>
              {error && <p className="text-sm text-red-500">Error: {error}</p>}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#1f1f1f] pt-6 pl-4 lg:pt-22.5 lg:mt-23 lg:pl-20">
      <div className=" mx-auto ">
        {/* Title with error badge if applicable */}
        <div className="flex items-center gap-4 mb-4 lg:mb-12">
          <h2 className="text-2xl md:text-[74px] font-extrabold text-white">
            CATEGORIES
          </h2>
          {isError && (
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded">
              Using cached data
            </span>
          )}
        </div>

        {/* Embla carousel (direct) — grouped pairs per slide */}
        <EmblaWrapper list={list} />
      </div>
    </section>
  );
}
