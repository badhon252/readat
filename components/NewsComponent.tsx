/* eslint-disable @next/next/no-img-element */
"use client";
import { useNewsStore } from "@/store/useNewsStore";
import { useFetchNewsOnMount } from "@/hooks/useFetchNewsOnMount";

// Example component to use the news data
const NewsComponent = () => {
  useFetchNewsOnMount(); // Fetch news on first mount
  const news = useNewsStore((state) => state.news);

  if (!news) {
    return <div>Loading news...</div>;
  }

  return (
    <div>
      {news.map((article) => (
        <div key={article.url}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <img src={article.image} alt={article.title} />
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
