"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-screen  mx-auto" // Full width with max width on large screens
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      // Hide indicators
    >
      {/* Responsive height adjustments */}
      <CarouselContent className="xsm:w-2/3">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <div className="p-1 h-48 sm:h-60 md:h-72 lg:h-80 xl:h-[40rem] ">
                <CardContent className="flex h-full items-center justify-center p-3 bg-slate-200 relative">
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold">
                      {index + 1} Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Quisquam neque harum rem commodi
                      blanditiis molestias ab non accusamus aliquid explicabo?
                      Laborum doloribus vero, architecto eaque dignissimos odit
                      corporis quisquam excepturi.Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Quisquam neque harum rem
                      commodi blanditiis molestias ab non accusamus aliquid
                      explicabo? Laborum doloribus vero, architecto eaque
                      dignissimos odit corporis quisquam excepturi.Lorem ipsum,
                      dolor sit amet consectetur adipisicing elit. Quisquam
                      neque harum rem commodi blanditiis molestias ab non
                      accusamus aliquid explicabo? Laborum doloribus vero,
                      architecto eaque dignissimos odit corporis quisquam
                      excepturi.
                    </span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
