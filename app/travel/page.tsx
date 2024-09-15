"use client";
import { useEffect } from "react";
import { useNewsStore } from "@/store/newsStore"; // Import the Zustand store

const NewsComponent = () => {
  const { news, fetchNews, isLoading, error } = useNewsStore();

  // Fetch the news when the component mounts
  useEffect(() => {
    if (!news) {
      fetchNews();
    }
  }, [news, fetchNews]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {news?.articles.map((article) => (
        <div key={article.url}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <img src={article.image} alt={article.title} />
          <a href={article.url}>Read more</a>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
