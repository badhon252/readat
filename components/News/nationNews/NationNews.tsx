import CardList from "@/components/Card/CardList";
import { useNewsStore } from "@/store/useNewsStore";

export default function NationNews() {
  const newsData = useNewsStore((state) => state.nationNews) || [];
  if (!newsData) return <div>Loading...</div>;
  return <CardList news={newsData} title={"National News"} />;
}
