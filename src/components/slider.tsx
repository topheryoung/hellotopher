"use client";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";
import { DotButton } from "./sliderControls";

interface Props {
  slides: Array<{
    src: string;
    alt: string;
  }>;
}

const Carousel = ({ slides }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {slides.map((slide, index) => (
              <div
                className="relative grow-0 shrink-0 basis-full aspect-video"
                key={index}
              >
                <Image
                  fill
                  src={slide.src}
                  alt={slide.alt}
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex absolute left-0 right-0 -bottom-6 justify-center items-center">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={"h-2 w-2 bg-black/[0.3] mx-2".concat(
              index === selectedIndex ? " bg-orange-500" : ""
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
