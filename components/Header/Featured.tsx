"use client";

import * as React from "react";
import { useFetchNewsOnMount } from "@/hooks/useFetchNewsOnMount";
import { useNewsStore } from "@/store/useNewsStore";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselPlugin() {
  // Custom hook to fetch news on first mount and store it
  useFetchNewsOnMount();
  const news = useNewsStore((state) => state.news);

  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-screen mx-auto" // Full width with max width on large screens
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      // Hide indicators
    >
      <h1>Featured</h1>
      <CarouselContent className="xsm:w-2/3">
        {news.slice(0, 9).map((article, index) => (
          <CarouselItem key={index}>
            <Card>
              <div className="relative p-1 h-48 sm:h-60 md:h-72 lg:h-80 xl:h-[40rem]">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full rounded-lg"
                  width={1920}
                  height={1080}
                  unoptimized
                />
                <CardContent className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold">
                    {article.title}
                  </span>
                  <p className="text-xs sm:text-sm text-white mt-1">
                    {article.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
