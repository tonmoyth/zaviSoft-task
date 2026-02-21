import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";

function EmblaWrapper({ list }: { list: any[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback((api: any) => {
    if (!api) return;
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtons(emblaApi);
    emblaApi.on("select", () => updateButtons(emblaApi));
    emblaApi.on("reInit", () => updateButtons(emblaApi));
    return () => {
      emblaApi.off("select", () => updateButtons(emblaApi));
      emblaApi.off("reInit", () => updateButtons(emblaApi));
    };
  }, [emblaApi, updateButtons]);

  // build chunks of 2
  const chunks: any[] = [];
  for (let i = 0; i < (list || []).length; i += 2) {
    chunks.push(list.slice(i, i + 2));
  }

  return (
    <div className="relative">
      <div className="absolute -top-13 right-0 lg:-top-20 flex gap-3 lg:pr-20 pr-2 z-10">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          className="bg-white/20 hover:bg-white/30 text-white h-8 w-8 lg:h-10 lg:w-10 rounded-full disabled:opacity-50"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          className="bg-white text-black hover:bg-white/90 h-8 w-8 lg:h-10 lg:w-10 rounded-full disabled:opacity-50"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      <div
        className="overflow-hidden p-0 bg-white rounded-tl-2xl lg:rounded-tl-[64px]"
        ref={emblaRef}
      >
        <div className="flex -ml-4">
          {chunks.map((pair, idx) => (
            <div key={idx} className="min-w-full pl-4">
              <div className="p-6 md:p-10 flex flex-col md:flex-row gap-6">
                {pair.map((cat: any) => (
                  <div key={cat.id} className="w-full md:w-1/2">
                    <CategoriesCard category={cat} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmblaWrapper;
