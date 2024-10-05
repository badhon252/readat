import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { useNewsStore } from "@/store/useNewsStore";
import Link from "next/link";
import PostCard from "../Card/postCard";
import NewsCard from "../Card/NewsCard";
import { title } from "process";

export default function Explore() {
  const featuredNews = useNewsStore((state) => state.featuredNews) || [];
  const businessNews = useNewsStore((state) => state.businessNews) || [];
  const entertainmentNews =
    useNewsStore((state) => state.entertainmentNews) || [];
  const healthNews = useNewsStore((state) => state.healthNews) || [];
  const nationNews = useNewsStore((state) => state.nationNews) || [];
  const politicsNews = useNewsStore((state) => state.politicsNews) || [];
  const scienceNews = useNewsStore((state) => state.scienceNews) || [];
  const sportsNews = useNewsStore((state) => state.sportsNews) || [];
  const technologyNews = useNewsStore((state) => state.technologyNews) || [];
  const travelNews = useNewsStore((state) => state.travelNews) || [];
  const worldNews = useNewsStore((state) => state.worldNews) || [];
  return (
    <div className="flex h-96 overflow-hidden">
      <div className="flex flex-col w-[40rem] bg-lime-50 sticky top-0">
        <div key={nationNews[1]?.title} className="h-full">
          <NavigationMenuLink
            asChild
            style={{
              backgroundImage: `url(${nationNews[1].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <a
              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
              href="/"
            >
              {" "}
              <p className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/100 to-transparent" />
              <p className=" leading-tight text-muted-foreground z-50 text-white text-2xl font-semibold">
                Explore All the News Category
              </p>
            </a>
          </NavigationMenuLink>
        </div>
      </div>
      <div className="overflow-y-auto px-4 w-full">
        <ul className="flex flex-col ">
          {featuredNews?.map((post) => (
            <li className="my-2 ">
              <NewsCard
                title="Featured news"
                url="/"
                image={post.image}
                height="h-[6rem]"
                width="w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
