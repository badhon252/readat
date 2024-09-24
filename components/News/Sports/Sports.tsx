import React from "react";
import News from "../News";
import { useNewsStore } from "@/store/useNewsStore";

export default function Sports() {
  const newsData = useNewsStore((state) => state.sportsNews) || null;

  if (!newsData) return <div>Loading...</div>;

  return (
    <>
      <News news={newsData} title={"Sports News"} />
    </>
  );
}
