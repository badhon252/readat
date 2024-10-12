import React from "react";
import News from "../News";
import { useNewsStore } from "@/store/useNewsStore";
import CardList from "@/components/Card/CardList";

export default function Sports() {
  const newsData = useNewsStore((state) => state.sportsNews) || null;

  if (!newsData) return <div>Loading...</div>;

  return (
    <>
      <CardList news={newsData} title={"Sports"} />
    </>
  );
}
