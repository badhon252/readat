// components/Header/Featured.tsx
/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import { useNewsStore } from "@/store/useNewsStore";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { timeSince } from "@/utils/timeUtils";

// Define the article type for proper TypeScript usage
interface Article {
  url: string;
  title: string;
  image?: string; // Optional image
  source: { name: string };
  description: string;
  publishedAt: string;
}

export function CarouselPlugin() {
  const featuredNews = useNewsStore((state) => state.featuredNews as Article[]); // Type the state correctly
  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  // Ensure autoplay stops/resumes properly
  React.useEffect(() => {
    const autoplay = plugin.current;
    return () => autoplay.reset(); // Cleanup autoplay on unmount
  }, []);

  if (!featuredNews || featuredNews.length === 0) return null; // Early return if no news

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-screen mx-auto md:my-32"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      aria-roledescription="carousel"
    >
      <CarouselContent className="xsm:w-2/3 cursor-grab">
        {featuredNews.map((article, index) => (
          <CarouselItem
            key={article.url}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${featuredNews.length}`}
          >
            {/* Image and Details */}
            <div className="md:col-span-1">
              {/* Image with fallback */}
              <img
                src={article.image || "/default-placeholder.jpg"} // Fallback image
                alt={`Image for article titled: ${article.title}`}
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg"
                aria-hidden={article.image ? "false" : "true"} // Mark as decorative if no real image
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center p-4 h-auto md:col-span-1">
              <div className="dark:text-white text-slate-950">
                <div className="publisher my-4">
                  <span className="text-red-600 me-4 font-semibold text-lg">
                    {article.source.name}
                  </span>
                  <span className="text-sm">
                    {timeSince(article.publishedAt)}
                  </span>
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
