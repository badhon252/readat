import React from "react";
import News from "../News";
import { useNewsStore } from "@/store/useNewsStore";
import { SkeletonCard } from "../Skeleton/SkeletonCard";

export default function LatestNews() {
  const newsData = useNewsStore((state) => state.worldNews);
  // Check if newsData is defined and not empty
  if (!newsData || newsData.length === 0) {
    return <SkeletonCard />; // or any other loading state
  }
  return (
    <>
      <News news={newsData} title={"World"} len={8} />
    </>
  );
}
