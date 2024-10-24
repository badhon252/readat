import { useNewsStore } from "@/store/useNewsStore";
import { useState, useCallback } from "react";
import { Article } from "@/type/types";

export const useSearchNews = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const allNews = useNewsStore((state) => state.allNews);
  const [searchResults, setSearchResults] = useState<Article[]>([]);

  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query);
      if (allNews && query) {
        const results = allNews.filter(
          (article) =>
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.description.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    },
    [allNews]
  );

  return { searchQuery, searchResults, handleSearch };
};
