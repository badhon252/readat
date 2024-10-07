import { useNewsStore } from "@/store/useNewsStore";

export const useSearchNews = () => {
  const searchQuery = useNewsStore((state) => state.searchQuery);
  const searchResults = useNewsStore((state) => state.searchResults);
  const allNews = useNewsStore((state) => state.allNews);
  const setSearchQuery = useNewsStore((state) => state.setSearchQuery);
  const setSearchResults = useNewsStore((state) => state.setSearchResults);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (allNews) {
      const results = allNews.filter(
        (article) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  return { searchQuery, searchResults, handleSearch };
};
