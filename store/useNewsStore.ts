/* useNewsStore.ts
 *This file defines a Zustand store for managing news data. It uses SWR for data fetching and persistence.
 *The store is initialized with a custom localStorage wrapper to persist the data across sessions.
 *The store has several getters and setters for managing the state, including loading and error states.
 *The store also has a fetchNews function that fetches news data from the API and updates the store.
 */
"use client";
import { create } from "zustand";
import useSWR from "swr";
import { persist, PersistStorage } from "zustand/middleware";
import axios from "axios";
import { useEffect } from "react";
import { Article } from "@/type/types";

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

interface NewsResponse {
  totalArticles: number;
  articles: Article[];
}

// Define the Zustand store with persistence
interface NewsStore {
  setAllNews: any;
  setSearchQuery: any;
  setSearchResults: any;
  featuredNews: Article[] | null;
  sportsNews: Article[] | null;
  travelNews: Article[] | null;
  politicsNews: Article[] | null;
  worldNews: Article[] | null;
  nationNews: Article[] | null;
  businessNews: Article[] | null;
  technologyNews: Article[] | null;
  entertainmentNews: Article[] | null;
  scienceNews: Article[] | null;
  healthNews: Article[] | null;
  isLoading: { [key: string]: boolean };
  error: { [key: string]: string | null };
  setNews: (key: keyof NewsStore, articles: Article[]) => void;
  setError: (key: keyof NewsStore, errorMessage: string | null) => void;
  setLoading: (key: keyof NewsStore, loading: boolean) => void;
  allNews: Article[] | null;
  searchQuery: string | null;
  searchResults: Article[] | null;
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
      sportsNews: null,
      travelNews: null,
      politicsNews: null,
      worldNews: null,
      nationNews: null,
      businessNews: null,
      technologyNews: null,
      entertainmentNews: null,
      scienceNews: null,
      healthNews: null,

      isLoading: {
        featuredNews: true,
        sportsNews: true,
        travelNews: true,
        politicsNews: true,
        worldNews: true,
        nationNews: true,
        businessNews: true,
        technologyNews: true,
        entertainmentNews: true,
        scienceNews: true,
        healthNews: true,
      },
      error: {
        featuredNews: null,
        sportsNews: null,
        travelNews: null,
        politicsNews: null,
        worldNews: null,
        nationNews: null,
        businessNews: null,
        technologyNews: null,
        entertainmentNews: null,
        scienceNews: null,
        healthNews: null,
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
      allNews: null,
      setAllNews: (articles: any) => set((state) => ({ allNews: articles })),
      searchQuery: null,
      searchResults: null,
      setSearchQuery: (query: any) => set((state) => ({ searchQuery: query })),
      setSearchResults: (results: any) =>
        set((state) => ({ searchResults: results })),
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
  dedupingInterval = 600000
) => {
  const setNews = useNewsStore((state) => state.setNews);
  const setError = useNewsStore((state) => state.setError);
  const setLoading = useNewsStore((state) => state.setLoading);
  const setAllNews = useNewsStore((state) => state.setAllNews);
  const allNews = useNewsStore((state) => state.allNews);

  const { data, error } = useSWR<NewsResponse>(url, axiosFetcher, {
    dedupingInterval,
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  });

  useEffect(() => {
    if (data) {
      setNews(key, data.articles);
      if (allNews) {
        setAllNews([...allNews, ...data.articles]);
      } else {
        setAllNews(data.articles);
      }
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
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&lang=en`
  );

export const useFetchSportsNews = () =>
  useFetchNews(
    "sportsNews",
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&category=sports&lang=en`
  );

export const useFetchTravelNews = () =>
  useFetchNews(
    "travelNews",
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&category=travel&lang=en`
  );

export const useFetchPoliticsNews = () =>
  useFetchNews(
    "politicsNews",
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&category=politics&lang=en`
  );

export const useFetchWorldNews = () =>
  useFetchNews(
    "worldNews",
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&category=world&lang=en`
  );

export const useFetchNationNews = () =>
  useFetchNews(
    "nationNews",
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&category=nation&lang=en`
  );

export const useFetchBusinessNews = () =>
  useFetchNews(
    "businessNews",
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&category=business&lang=en`
  );

export const useFetchTechnologyNews = () =>
  useFetchNews(
    "technologyNews",
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&category=technology&lang=en`
  );

export const useFetchEntertainmentNews = () =>
  useFetchNews(
    "entertainmentNews",
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&category=entertainment&lang=en`
  );

export const useFetchScienceNews = () =>
  useFetchNews(
    "scienceNews",
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&category=science&lang=en`
  );

export const useFetchHealthNews = () =>
  useFetchNews(
    "healthNews",
    `/top-headlines?token=${process.env.NEXT_PUBLIC_API_KEY}&category=health&lang=en`
  );

// Use on mount to prefetch multiple sections if needed (adjust as needed)
export const useFetchNewsOnMount = () => {
  useFetchFeaturedNews();
  useFetchSportsNews();
  useFetchTravelNews();
  useFetchPoliticsNews();
  useFetchWorldNews();
  useFetchNationNews();
  useFetchBusinessNews();
  useFetchTechnologyNews();
  useFetchEntertainmentNews();
  useFetchScienceNews();
  useFetchHealthNews();
};
