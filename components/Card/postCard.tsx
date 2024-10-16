import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Article } from "@/type/types";
import { timeSince } from "@/utils/timeUtils";

export default function PostCard({ post }: { post: Article }) {
  return (
    <Link href={post.url} target="_blank">
      <Card
        className="relative w-full h-64 md:h-full  overflow-hidden flex flex-col justify-end  transform transition duration-500 hover:scale-105"
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CardHeader className="font-semibold flex flex-row justify-between py-2 z-30">
          {/* News source name */}
          <h3 className="bg-red-600 text-white p-1 rounded-lg text-xs font-semibold">
            {post.source.name}
          </h3>
          <p className="text-slate-200 text-sm">
            {timeSince(post.publishedAt)}
          </p>
        </CardHeader>
        <CardContent className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/90 to-transparent" />
        <CardContent className=" text-white  z-50">
          {/* Increased z-index */}
          <h1
            className="text-white text-xl font-semibold "
            aria-label={`Read more about: ${post.title}`}
          >
            {post.title.slice(0, 50)}
          </h1>
        </CardContent>
      </Card>
    </Link>
  );
}
