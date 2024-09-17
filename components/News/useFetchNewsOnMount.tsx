"use client";
import { useNewsStore } from "@/store/useNewsStore"; // Adjust the path as needed
import { useEffect } from "react";

// Custom hook to fetch news on first mount and store it
export const useFetchNewsOnMount = () => {
  useEffect(() => {
    if (!useNewsStore.getState().news) {
      useNewsStore.getState().fetchNews();
    }
  }, []);
};
