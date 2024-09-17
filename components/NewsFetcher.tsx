"use client"; // This is a client component
import { useNewsStore } from "@/store/useNewsStore"; // Import the store

const NewsFetcher = () => {
  useNewsStore((state) => state.fetchNews()); // Trigger data fetch on mount

  return null; // This component doesn't render anything visually
};

export default NewsFetcher;
