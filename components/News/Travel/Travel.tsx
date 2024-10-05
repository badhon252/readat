import { useNewsStore } from "@/store/useNewsStore";
import CardList from "@/components/Card/CardList";
import News from "../News";
export default function Travel() {
  // Get news from Zustand store
  const newsData = useNewsStore((state) => state.travelNews) || null;
  if (!newsData) return <div>Loading...</div>;

  return (
    <div>
      <News news={newsData} title={"Travel News"} />{" "}
    </div>
  );
}
