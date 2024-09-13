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
import { fetchPosts } from "@/lib/fetchData";
import Link from "next/link"; // Import Link for navigation

export default function NewsCard() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts(); // Fetch all posts
        setPosts(data); // Update posts
        setLoading(false); // Turn off loading
      } catch (err) {
        setError("Failed to load posts");
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Display only the first 4 posts
  const postsToShow = posts.slice(0, 8);

  return (
    <div className="p-4">
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
