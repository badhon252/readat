/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link for navigation
import { NewsData } from "@/type/types";

export default function News({ news }: { news: NewsData }) {
  // Local state for posts and loading/error indicators
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Update posts when news changes
  useEffect(() => {
    if (news) {
      setPosts(news);
      setLoading(false);
    } else {
      setError("Failed to fetch news data");
      setLoading(false);
    }
  }, [news]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Display only the first 8 posts
  const postsToShow = posts.slice(0, 8);

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {postsToShow.map((post) => (
          <Card key={post.url} className="flex flex-col h-full">
            {/* Card content including image and description should have size and length limitations */}
            <CardHeader>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-lg" // Fixed height (adjust as needed)
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle>{post.title}</CardTitle>

              <CardDescription>
                {post.description.slice(0, 100)}...
                {/* Fixed length (adjust as needed) */}
              </CardDescription>
              <p>
                Published at: {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </CardContent>
            <CardFooter>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Read more
              </a>
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
