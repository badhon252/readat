import { useState, useCallback } from "react";
import { Article } from "@/type/types";
import { useNewsStore } from "@/store/useNewsStore";

export const useSearchNews = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const allNews = useNewsStore((state) => state.allNews);

  const handleSearch = useCallback(
    (query: string) => {
      setIsLoading(true);
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
      setIsLoading(false);
    },
    [allNews]
  );

  return { searchQuery, searchResults, handleSearch, isLoading, error };
};
