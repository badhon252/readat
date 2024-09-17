import { create } from "zustand";

interface NewsResponse {
  totalArticles: number;
  articles: Article[];
}

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
  fetchNews: () => Promise<void>;
}

// Create the Zustand store
export const useNewsStore = create<NewsStore>((set) => ({
  news: null, // Initially no news data

  // Fetch news from the API
  fetchNews: async () => {
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/top-headlines?token=${process.env.API_KEY}`
      );
      const data: NewsResponse = await response.json();

      set({
        news: data.articles, // Set news articles in store
      });
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
  },
}));
