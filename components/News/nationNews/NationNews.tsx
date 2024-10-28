import { CarouselSpacing } from "@/components/Carousel/Carousel";
import { useNewsStore } from "@/store/useNewsStore";

export default function NationNews() {
  const newsData = useNewsStore((state) => state.nationNews) || [];
  if (!newsData) return <div>Loading...</div>;
  return (
    <div className="flex items-center justify-around flex-wrap">
      <h1 className="text-6xl font-black">National News</h1>
      <CarouselSpacing articles={newsData} />
    </div>
  );
}
