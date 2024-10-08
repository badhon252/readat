// hooks/useSearchNews.tsx
import { useNewsStore } from "@/store/useNewsStore";
import { useMemo } from "react";

export const useSearchNews = () => {
  const searchQuery = useNewsStore((state) => state.searchQuery);
  const allNews = useNewsStore((state) => state.allNews);
  const setSearchQuery = useNewsStore((state) => state.setSearchQuery);
  const setSearchResults = useNewsStore((state) => state.setSearchResults);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Memoize the search results to avoid unnecessary re-renders
  const searchResults = useMemo(() => {
    if (allNews && searchQuery) {
      return allNews.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return []; // Return an empty array if no search query or no news data
  }, [allNews, searchQuery]); // Memoize based on allNews and searchQuery

  return { searchQuery, searchResults, handleSearch };
};
