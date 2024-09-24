import React from "react";
import News from "../News";
import { useNewsStore } from "@/store/useNewsStore";
import { SkeletonCard } from "../Skeleton/SkeletonCard";

export default function LatestNews() {
  const newsData = useNewsStore((state) => state.worldNews) || [];

  return (
    <>
      <News news={newsData} title={"Latest News"} />
    </>
  );
}
