import News from "../News";
import { useNewsStore } from "@/store/useNewsStore";
export default function Travel() {
  // Get news from Zustand store
  const newsData = useNewsStore((state) => state.travelNews) || null;
  if (!newsData) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-black">Travel News</h1>
      <News news={newsData} />
    </div>
  );
}
