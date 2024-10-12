// app/category/[category]/page.tsx
"use client";
import { notFound, useParams } from "next/navigation";
import { FC } from "react";
import "tailwindcss/tailwind.css";
import { useNewsStore } from "@/store/useNewsStore";
import { CarouselSpacing } from "@/components/Carousel/Carousel";
import News from "@/components/News/News";
import Cards from "@/components/Card/Cards";

const validCategories = [
  "sports",
  "politics",
  "technology",
  "business",
  "health",
  "entertainment",
  "science",
  "world",
  "travel",
  "nation", // Added nation
];

const CategoryPage: FC = () => {
  const { category } = useParams();

  // Redirect or show a 404 page if the category is invalid
  if (!validCategories.includes(category as string)) {
    notFound(); // Renders the 404 page
    return null;
  }

  const newsStore = useNewsStore();
  const allNews = useNewsStore((state) => state.allNews) || [];
  const newsData = newsStore[`${category}News`] || []; // Dynamic access

  return (
    <div className="pt-20 min-h-screen mx-auto flex items-center flex-col justify-around container">
      <h1 className="text-3xl font-black pt-8 text-purple-700">
        Top Stories!{" "}
      </h1>
      <CarouselSpacing articles={newsData} />
      <News news={allNews} title={""} />
    </div>
  );
};

export default CategoryPage;
