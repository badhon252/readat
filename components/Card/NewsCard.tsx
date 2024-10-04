import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
interface NewsCardProps {
  title: string;
  description: string;
  content?: string;
  footer?: React.ReactNode;
  url: string;
  image: string;
  source: object;
  publishedAt: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  url,
  image,
  source,
  publishedAt,
}) => {
  return (
    <Card key={url} className="flex flex-col w-96 h-full justify-around">
      {/* Card content including image and description should have size and length limitations */}
      <CardHeader>
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg" // Fixed height (adjust as needed)
        />
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center justify-between py-2">
          <Link
            href={source.url}
            className="hover:underline text-red-500 font-semibold"
          >
            {source.name}
          </Link>
          <p className="text-slate-600 text-sm ">
            {new Date(publishedAt).toDateString()}
          </p>
        </div>
        <CardTitle className="md:text-xl font-semibold text-slate-800">
          {title}
        </CardTitle>

        <CardDescription className="py-2">{description}..</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-950"
        >
          Read more
        </a>
        <p className="px-2 text-sm text-right">5 min read</p>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
