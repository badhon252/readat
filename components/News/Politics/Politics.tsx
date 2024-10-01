import React from "react";
import News from "../News";
import { useNewsStore } from "@/store/useNewsStore";

export default function Politics() {
  const newsData = useNewsStore((state) => state.politicsNews) || [];
  // Check if newsData is defined and not empty
  // if (!newsData || newsData.length === 0) {
  //   return <div>Loading...</div>; // or any other loading state
  // }
  return (
    <div>
      <News news={newsData} title={"Politics News"} />
    </div>
  );
}
