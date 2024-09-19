import { create } from "zustand";
import useSWR from "swr";
import { persist, PersistStorage } from "zustand/middleware";
import axios from "axios";
import { useEffect } from "react";

// Axios instance for centralized API handling
const axiosInstance = axios.create({
  baseURL: "https://gnews.io/api/v4",
  headers: {
    "Content-Type": "application/json",
  },
});

// Axios fetcher function for SWR
const axiosFetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);

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

interface NewsResponse {
  totalArticles: number;
  articles: Article[];
}

// Define the Zustand store with persistence
interface NewsStore {
  featuredNews: Article[] | null;
  latestNews: Article[] | null;
  sportsNews: Article[] | null;
  travelNews: Article[] | null;
  politicsNews: Article[] | null;
  isLoading: { [key: string]: boolean };
  error: { [key: string]: string | null };
  setNews: (key: keyof NewsStore, articles: Article[]) => void;
  setError: (key: keyof NewsStore, errorMessage: string | null) => void;
  setLoading: (key: keyof NewsStore, loading: boolean) => void;
}

// Custom localStorage wrapper to satisfy PersistStorage<NewsStore>
const customLocalStorage: PersistStorage<NewsStore> = {
  getItem: (name) => {
    const storedValue = localStorage.getItem(name);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return null;
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
};

// Zustand store with custom storage
export const useNewsStore = create<NewsStore>()(
  persist(
    (set) => ({
      featuredNews: null,
      latestNews: null,
      sportsNews: null,
      travelNews: null,
      politicsNews: null,
      isLoading: {
        featuredNews: true,
        latestNews: true,
        sportsNews: true,
        travelNews: true,
        politicsNews: true,
      },
      error: {
        featuredNews: null,
        latestNews: null,
        sportsNews: null,
        travelNews: null,
        politicsNews: null,
      },
      setNews: (key, articles) =>
        set((state) => ({
          [key]: articles,
          isLoading: { ...state.isLoading, [key]: false },
          error: { ...state.error, [key]: null },
        })),
      setError: (key, errorMessage) =>
        set((state) => ({
          isLoading: { ...state.isLoading, [key]: false },
          error: { ...state.error, [key]: errorMessage },
        })),
      setLoading: (key, loading) =>
        set((state) => ({
          isLoading: { ...state.isLoading, [key]: loading },
        })),
    }),
    {
      name: "news-storage", // Local storage key
      storage: customLocalStorage, // Custom localStorage wrapper
    }
  )
);

// Reusable hook for fetching news with SWR and Zustand updates
const useFetchNews = (
  key: keyof NewsStore,
  url: string,
  dedupingInterval = 60000 // Cache SWR response for 60 seconds to avoid duplicate requests
) => {
  const setNews = useNewsStore((state) => state.setNews);
  const setError = useNewsStore((state) => state.setError);
  const setLoading = useNewsStore((state) => state.setLoading);

  const { data, error } = useSWR<NewsResponse>(url, axiosFetcher, {
    dedupingInterval,
    revalidateOnFocus: false, // Avoid refetching on window focus
    revalidateOnReconnect: true, // Revalidate on reconnect
  });

  useEffect(() => {
    if (data) {
      setNews(key, data.articles);
    } else if (error) {
      setError(key, error.message);
    }
    setLoading(key, false);
  }, [data, error]);
};

// Custom hooks for each news section
export const useFetchFeaturedNews = () =>
  useFetchNews(
    "featuredNews",
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&max=5`
  );

export const useFetchLatestNews = () =>
  useFetchNews(
    "latestNews",
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&max=10`
  );

export const useFetchSportsNews = () =>
  useFetchNews(
    "sportsNews",
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&category=sports`
  );

export const useFetchTravelNews = () =>
  useFetchNews(
    "travelNews",
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&category=travel`
  );

export const useFetchPoliticsNews = () =>
  useFetchNews(
    "politicsNews",
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&category=politics`
  );

// Use on mount to prefetch multiple sections if needed
export const useFetchNewsOnMount = () => {
  useFetchFeaturedNews();
  useFetchLatestNews();
  useFetchSportsNews();
  useFetchTravelNews();
  useFetchPoliticsNews();
};
