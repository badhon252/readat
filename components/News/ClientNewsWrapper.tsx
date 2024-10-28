// components/news/ClientNewsWrapper.tsx
"use client";

import { useEffect } from "react";
import { useNewsStore } from "@/store/useNewsStore";
import { Article } from "@/type/types";
import NewsCard from "../Card/NewsCard";

interface Props {
  initialData: Article[];
  category: string;
}

export function ClientNewsWrapper({ initialData, category }: Props) {
  const setNews = useNewsStore((state) => state.setNews);
  const setAllNews = useNewsStore((state) => state.setAllNews);

  useEffect(() => {
    setNews(category as any, initialData);
    setAllNews(initialData);
  }, [initialData, category, setNews, setAllNews]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {initialData.map((article) => (
        <NewsCard
          key={article.url}
          title={article.title}
          description={article.description}
          url={article.url}
          image={article.image}
          publishedAt={article.publishedAt}
          source={article.source}
          height={""}
          width={""}
        />
      ))}
    </div>
  );
}
