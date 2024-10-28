import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { useNewsStore } from "@/store/useNewsStore";
import Link from "next/link";
import NewsCard from "../Card/NewsCard";

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
            <Link
              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
              href="/"
            >
              {" "}
              <p className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/100 to-transparent" />
              <p className=" leading-tight text-muted-foreground z-50 text-white text-2xl font-semibold">
                Explore All the News Category
              </p>
            </Link>
          </NavigationMenuLink>
        </div>
      </div>
      <div className="overflow-y-auto px-4 w-full">
        <ul className="flex flex-col ">
          <li key={nationNews[0].url + nationNews[0].image} className="my-2 ">
            <NewsCard
              title="Nation news"
              url="/category/nation"
              image={nationNews[0].image}
              height="h-[8rem]"
              width="w-full"
              description={""}
              publishedAt={""}
              source={{
                name: "",
                url: "",
              }}
            />
          </li>
          <li
            key={featuredNews[0].url + featuredNews[0].image}
            className="my-2 "
          >
            <NewsCard
              title="Featured news"
              url="/category/featured"
              image={featuredNews[0].image}
              height="h-[8rem]"
              width="w-full"
              description={""}
              publishedAt={""}
              source={{
                name: "",
                url: "",
              }}
            />
          </li>
          <li
            key={businessNews[0].url + businessNews[0].image}
            className="my-2 "
          >
            <NewsCard
              title="Business News"
              url="/category/business"
              image={businessNews[0].image}
              height="h-[8rem]"
              width="w-full"
              description={""}
              publishedAt={""}
              source={{
                name: "",
                url: "",
              }}
            />
          </li>
          <li
            key={entertainmentNews[0].url + entertainmentNews[0].image}
            className="my-2 "
          >
            <NewsCard
              title="Entertainment News"
              url="/category/entertainment"
              image={entertainmentNews[0].image}
              height="h-[8rem]"
              width="w-full"
              description={""}
              publishedAt={""}
              source={{
                name: "",
                url: "",
              }}
            />
          </li>
          <li key={healthNews[0].url + healthNews[0].image} className="my-2 ">
            <NewsCard
              title="Health News"
              url="/category/health"
              image={healthNews[0].image}
              height="h-[8rem]"
              width="w-full"
              description={""}
              publishedAt={""}
              source={{
                name: "",
                url: "",
              }}
            />
          </li>
          <li
            key={politicsNews[0].url + politicsNews[0].image}
            className="my-2 "
          >
            <NewsCard
              title="Politics News"
              url="/category/politics"
              image={politicsNews[0].image}
              height="h-[8rem]"
              width="w-full"
              description={""}
              publishedAt={""}
              source={{
                name: "",
                url: "",
              }}
            />
          </li>
          <li key={scienceNews[0].url + scienceNews[0].image} className="my-2 ">
            <NewsCard
              title="Science News"
              url="/category/science"
              image={scienceNews[0].image}
              height="h-[8rem]"
              width="w-full"
              description={""}
              publishedAt={""}
              source={{
                name: "",
                url: "",
              }}
            />
          </li>
          <li key={sportsNews[0].url + sportsNews[0].image} className="my-2 ">
            <NewsCard
              title="Sports News"
              url="/category/sports"
              image={sportsNews[0].image}
              height="h-[8rem]"
              width="w-full"
              description={""}
              publishedAt={""}
              source={{
                name: "",
                url: "",
              }}
            />
          </li>
          <li key={travelNews[0].url + travelNews[0].image} className="my-2 ">
            <NewsCard
              title="Travel News"
              url="/category/travel"
              image={travelNews[0].image}
              height="h-[8rem]"
              width="w-full"
              description={""}
              publishedAt={""}
              source={{
                name: "",
                url: "",
              }}
            />
          </li>
          <li
            key={technologyNews[0].url + technologyNews[0].image}
            className="my-2 "
          >
            <NewsCard
              title="Technology News"
              url="/category/technology"
              image={technologyNews[0].image}
              height="h-[8rem]"
              width="w-full"
              description={""}
              publishedAt={""}
              source={{
                name: "",
                url: "",
              }}
            />
          </li>
          <li key={worldNews[0].url + worldNews[0].image} className="my-2 ">
            <NewsCard
              title="World News"
              url="/category/world"
              image={worldNews[0].image}
              height="h-[8rem]"
              width="w-full"
              description={""}
              publishedAt={""}
              source={{
                name: "",
                url: "",
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
