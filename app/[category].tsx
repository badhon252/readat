"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useCategoryPosts } from "@/hooks/useCategoryPosts"; // Import custom hook
import { useRouter } from "next/router"; // Use router for dynamic routes

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query; // Get category from URL

  const { posts, loading, error } = useCategoryPosts(category as string); // Pass dynamic category

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const postsToShow = posts.slice(0, 12); // Show only the first 12 posts

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold capitalize">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {postsToShow.map((post) => (
          <Card key={post.id} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.body}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* "See All" Link */}
      <div className="mt-4">
        <Link
          href="/latest-news"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          See All
        </Link>
      </div>
    </div>
  );
}
