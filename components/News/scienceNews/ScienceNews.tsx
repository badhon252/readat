import News from "../News";
import { useNewsStore } from "@/store/useNewsStore";

export default function ScienceNews() {
  const newsData = useNewsStore((state) => state.entertainmentNews) || [];
  if (!newsData) return <div>Loading...</div>;
  return (
    <>
      <News news={newsData} title={"Science News"} />
    </>
  );
}
