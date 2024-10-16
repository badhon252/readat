// app/category/[category]/page.tsx
"use client";
import { notFound, useParams } from "next/navigation";
import { FC } from "react";
import "tailwindcss/tailwind.css";
import { useNewsStore } from "@/store/useNewsStore";
import News from "@/components/News/News";
// import CardList from "@/components/Card/CardList";

const validCategories = [
  "featured",
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
  // const allNews = useNewsStore((state) => state.allNews) || [];
  const newsData = newsStore[`${category}News`] || []; // Dynamic access

  return (
    <div className="pt-20 min-h-screen mx-auto flex items-center flex-col justify-around container">
      <h1 className="text-6xl font-black pt-8 text-purple-700">
        Top Stories on {category}
      </h1>

      <News news={newsData} title={""} len={8} />
    </div>
  );
};

export default CategoryPage;
