import News from "../News";
import { useNewsStore } from "@/store/useNewsStore";

export default function Entertainment() {
  const newsData = useNewsStore((state) => state.entertainmentNews) || [];
  if (!newsData) return <div>Loading...</div>;
  return (
    <>
      <News news={newsData} title={"Entertainment"} len={8} />
    </>
  );
}
