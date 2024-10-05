// components/Header/Featured.tsx
/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
// Store and Hook
import { useNewsStore } from "@/store/useNewsStore";
// Carousel Component and Plugin
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { timeSince } from "@/utils/timeUtils";

export function CarouselPlugin() {
  // Get Zustand state values
  const featuredNews = useNewsStore((state) => state.featuredNews);

  // Initialize the Autoplay plugin with a 3-second delay
  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  // Return the Carousel component
  return (
    <Carousel
      plugins={[plugin.current]} // Apply the Autoplay plugin
      className="w-full max-w-screen mx-auto my-32" // Full width with max width on large screens
      onMouseEnter={plugin.current.stop} // Stop autoplay on mouse enter
      onMouseLeave={plugin.current.reset} // Resume autoplay on mouse leave
      aria-roledescription="carousel"
    >
      <CarouselContent className="xsm:w-2/3 cursor-grab">
        {/* Map through the featured news articles */}
        {featuredNews?.map((article, index) => (
          <CarouselItem
            key={article.url} // Use the article URL for a unique key
            className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${featuredNews.length}`}
          >
            {/* Wrap the image and details in a single div for proper grid layout */}
            <div className="md:col-span-1">
              {/* Image */}
              <img
                src={article.image}
                alt={`Image for article titled: ${article.title}`}
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
              />
            </div>
            {/* Details */}
            <div className="flex flex-col justify-center p-4 h-auto md:col-span-1">
              <div className=" dark:text-white text-slate-950">
                <div className="publisher my-4">
                  <span className="text-red-600 me-4 font-semibold text-lg">
                    {article.source.name}
                  </span>
                  <span className="text-sm">
                    {timeSince(article.publishedAt)}
                  </span>
                </div>
                <a
                  className="block text-base md:text-xl lg:text-3xl font-semibold hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
                  aria-label={`Read more about: ${article.title}`}
                >
                  {article.title}
                </a>
                <p className="text-xs sm:text-sm my-2">{article.description}</p>
                <div>
                  <Link
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
                    aria-label={`Read more about: ${article.title}`}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
