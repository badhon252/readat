/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
// Store and Hook
import { useNewsStore } from "@/store/useNewsStore";
// Carousel Component and Plugin
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

export function CarouselPlugin() {
  // Custom hook to fetch news on first mount and store it
  console.log("Featured");
  // Get Zustand state values
  const featuredNews = useNewsStore((state) => state.featuredNews);

  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-screen mx-auto m-4" // Full width with max width on large screens
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="xsm:w-2/3 flex overflow-hidden">
        {featuredNews?.map((article, index) => (
          <CarouselItem key={index}>
            <Card>
              <div className="relative p-1 h-48 sm:h-60 md:h-72 lg:h-80 xl:h-[40rem]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full rounded-lg"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 py-8 p-4 bg-gradient-to-t from-black/90 to-transparent rounded-b-lg">
                  <Link href={article.url}>
                    <span className="text-base sm:text-base md:text-lg lg:text-6xl py-2 text-white font-semibold text-wrap">
                      {article.title}
                    </span>
                  </Link>
                  <p className="text-xs sm:text-sm text-white my-2">
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
