import { create } from "zustand";
import useSWR from "swr";
import { useEffect } from "react";

// Define types for the API response
interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

// Define the Zustand store
interface NewsStore {
  news: Article[] | null;
  isLoading: boolean;
  error: "" | null;
}

interface NewsResponse {
  totalArticles: number;
  articles: Article[];
}

export const useNewsStore = create<NewsStore>(() => ({
  news: null,
  isLoading: true,
  error: null,
}));

// Function to fetch data from your API (outside the store)
const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data: NewsResponse = await response.json();
  return data;
};

// Create a custom hook to manage SWR data and Zustand updates
const useFetchNews = () => {
  const { data, error } = useSWR<NewsResponse>(
    `https://gnews.io/api/v4/top-headlines?token=${process.env.API_KEY}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      useNewsStore.setState({
        news: data.articles,
        isLoading: false,
      });
    } else if (error) {
      useNewsStore.setState({ error, isLoading: false });
    }
  }, [data, error]);
};

// Trigger the data fetch on first mount
export const useFetchNewsOnMount = () => {
  useFetchNews(); // Call your custom hook to manage data and Zustand
};
