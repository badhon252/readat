import News from "../News";
import { useNewsStore } from "@/store/useNewsStore";

export default function NationNews() {
  const newsData = useNewsStore((state) => state.nationNews) || [];
  if (!newsData) return <div>Loading...</div>;
  return (
    <>
      <News news={newsData} title={"National News"} />
    </>
  );
}
