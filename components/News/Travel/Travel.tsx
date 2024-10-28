"use client";
import { useNewsStore } from "@/store/useNewsStore";
import News from "../News";
export default function Travel() {
  // Get news from Zustand store
  const newsData = useNewsStore((state) => state.travelNews) || null;
  if (!newsData) return <div>Loading...</div>;

  return <News news={newsData} title={"Travel"} len={8} />;
}
