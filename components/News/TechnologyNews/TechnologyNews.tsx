import News from "../News";
import { useNewsStore } from "@/store/useNewsStore";

export default function TechnologyNews() {
  const newsData = useNewsStore((state) => state.technologyNews) || [];
  if (!newsData) return <div>Loading...</div>;
  return (
    <>
      <News news={newsData} title={"Tech News"} len={8} />
    </>
  );
}
