import Cards from "@/components/Card/Cards";
import News from "../News";
import { useNewsStore } from "@/store/useNewsStore";

export default function HelthNews() {
  const newsData = useNewsStore((state) => state.healthNews) || [];
  if (!newsData) return <div>Loading...</div>;
  return <Cards news={newsData} title={"Health"} len={6} />;
}
