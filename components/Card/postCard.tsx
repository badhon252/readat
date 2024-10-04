import { Card, CardContent, CardHeader } from "../ui/card";
import { Article } from "@/type/types";

export default function PostCard({ post }: { post: Article }) {
  return (
    <Card className=" dark:text-white text-slate-950 flex items-center">
      {/* Wrap the image and details in a single div for proper grid layout */}
      <CardHeader className="md:col-span-1 p-0 m-2">
        {/* Image */}
        <img
          src={post.image}
          alt={`Image for article titled: ${post.title}`}
          className="w-30 h-20 object-cover rounded-lg"
        />
      </CardHeader>
      <CardContent className="">
        <a
          href={post.url}
          target="_blank"
          className=" text-xs font-semibold sm:text-sm my-2 md:my-0"
          aria-label={`Read more about: ${post.title}`}
        >
          "{post.description.slice(0, 50)}.."
        </a>
        <p className="text-xs sm:text-sm my-2">
          {" "}
          {post.description.slice(0, 100)}...
        </p>
      </CardContent>
    </Card>
  );
}
