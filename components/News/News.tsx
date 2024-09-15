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
import { useNewsStore } from "@/store/useNewsStore";
import { useFetchNewsOnMount } from "@/hooks/useFetchNewsOnMount";

export default function Travel() {
  // Fetch news on first mount
  useFetchNewsOnMount();

  // Get news from Zustand store
  const news = useNewsStore((state) => state.news);

  // Local state for posts and loading/error indicators
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Update posts when news changes
  useEffect(() => {
    if (news) {
      setPosts(news);
      setLoading(false);
    }
  }, [news]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Display only the first 8 posts
  const postsToShow = posts.slice(0, 8);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Travel</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {postsToShow.map((post) => (
          <Card key={post.url} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto"
              />
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
