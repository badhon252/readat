import News from "../News";
import { useNewsStore } from "@/store/useNewsStore";
export default function Travel() {
  // Get news from Zustand store
  const newsData = useNewsStore((state) => state.travelNews) || null;
  if (!newsData) return <div>Loading...</div>;

  return (
    <div>
      <News news={newsData} title={"Travel News"} />
    </div>
  );
}
