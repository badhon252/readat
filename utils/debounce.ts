import { useEffect, useState } from "react";

export function useDebouncedSearch(query: string, delay: number) {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => {
      clearTimeout(handler); // Clear timeout if user is still typing
    };
  }, [query, delay]);

  return debouncedQuery;
}
