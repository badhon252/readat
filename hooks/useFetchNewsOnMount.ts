"use client";
import { useFetchNews } from "@/store/useNewsStore";
import { useEffect } from "react";
// Trigger the data fetch on first mount
export const useFetchNewsOnMount = () => {
  useEffect(() => {
    useFetchNews(); // Call your custom hook to manage data and Zustand
  }, []);
};
