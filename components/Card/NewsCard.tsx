import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import { timeSince } from "@/utils/timeUtils";

interface NewsCardProps {
  title: string;
  description: string;
  content?: string;
  footer?: React.ReactNode;
  url: string;
  image: string;
  source: { name: string; url: string };
  publishedAt: string;
  height: string;
  width: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  url,
  image,
  source,
  publishedAt,
  height,
  width,
}) => {
  return (
    <Link href={url} target="_blank">
      <Card
        key={url}
        className={`${height} relative flex flex-col ${width} justify-end overflow-hidden `}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <CardContent className="relative z-10 p-4 text-white">
          <div className="flex items-center justify-between py-2">
            {source.name ? (
              <h3 className="bg-red-600 text-white p-1 rounded-lg text-xs font-semibold">
                {source.name}
              </h3>
            ) : null}
            {publishedAt ? (
              <p className="text-slate-200 text-sm">{timeSince(publishedAt)}</p>
            ) : null}
          </div>
          <CardTitle className="md:text-xl font-semibold">{title}</CardTitle>
          <CardDescription className="text-white">
            {description}
          </CardDescription>
        </CardContent>
        {/* <CardFooter className="relative z-10 flex justify-between px-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-indigo-700 text-white rounded hover:bg-slate-950"
        >
          Read more
        </a>
        <Badge variant="outline" className="absolute top-0 z-50">
          Badge
        </Badge>
      </CardFooter> */}
      </Card>
    </Link>
  );
};

export default NewsCard;
