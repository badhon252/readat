"use client";
import { useEffect } from "react";
// Trigger the data fetch on first mount
export const useFetchNewsOnMount = () => {
  useEffect(() => {
    console.log("useFetchNewsOnMount");
  }, []);
};
