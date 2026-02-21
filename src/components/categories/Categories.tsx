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
  categories: Category[];
}

export default function CategoriesSection({ categories }: Props) {
  // normalize input: allow array or wrapped/paginated object
  const raw: any = categories;
  const list: any[] = Array.isArray(raw)
    ? raw
    : raw && typeof raw === "object"
      ? (raw.data ??
        raw.results ??
        raw.items ??
        raw.rows ??
        raw.categories ??
        [])
      : [];

  return (
    <section className="w-full bg-[#1f1f1f] pt-10 pl-4 lg:pt-25 lg:pl-20">
      <div className=" mx-auto ">
        {/* Title */}
        <h2 className="text-2xl md:text-6xl font-extrabold text-white mb-4 lg:mb-12">
          CATEGORIES
        </h2>

        {/* Embla carousel (direct) — grouped pairs per slide */}
        <EmblaWrapper list={list} />
      </div>
    </section>
  );
}
