"use client";
import { useEffect } from "react";
import { useNewsStore } from "@/store/useNewsStore"; // Adjust the path as needed

// Custom hook to fetch news on first mount and store it
export const useFetchNewsOnMount = () => {
  const fetchNews = useNewsStore((state) => state.fetchNews);
  const news = useNewsStore((state) => state.news);

  useEffect(() => {
    // Fetch news only if it hasn't been fetched yet
    if (!news) {
      fetchNews();
    }
  }, [fetchNews, news]);
};
