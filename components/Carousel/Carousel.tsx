// "use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { useNewsStore } from "@/store/useNewsStore";
import NewsCard from "../Card/NewsCard";
import { Article } from "@/type/types";

export function CarouselSpacing({ articles }: { articles: Article[] }) {
  // const articles = useNewsStore((state) => state.businessNews) || [];
  return (
    <Carousel className="w-full max-w-7xl mx-auto ">
      <CarouselContent className="-ml-1">
        {articles.map((post) => (
          <CarouselItem
            key={post.url}
            className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 h-full">
                  <NewsCard
                    title={post.title}
                    image={post.image}
                    url={post.url}
                    publishedAt={post.publishedAt}
                    source={post.source}
                    height="h-96"
                    description={""}
                    width={""}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="md:block hidden" />
      <CarouselNext className="md:block hidden" />
    </Carousel>
  );
}
