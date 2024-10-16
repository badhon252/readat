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
import { timeSince } from "@/utils/timeUtils";
import CategoriesLink from "../Category/CategoriesLInk";

export default function News({
  news,
  title,
  len = 8,
}: {
  news: NewsData;
  title: string;
  len: number;
}) {
  // Local state for posts and loading/error indicators
  const [posts, setPosts] = useState<any[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // Update posts when news changes
  useEffect(() => {
    if (news) {
      setPosts(news);
    }
  }, [news]);

  // Display only the first 8 posts
  const postsToShow = posts.slice(0, len);

  return (
    <div className="rounded-lg my-12">
      {/* "See All" Link */}
      <div className="mt-4 px-4 py-4 flex justify-between items-center">
        <h1 className="text-4xl font-black">{title}</h1>
        {title ? <CategoriesLink title={title} /> : ""}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {postsToShow.map((post) => (
          <Card key={post.url} className="flex flex-col h-full justify-around">
            {/* Card content including image and description should have size and length limitations */}
            <CardHeader>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-lg" // Fixed height (adjust as needed)
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center justify-between py-2">
                <Link
                  href={post.source.url}
                  className="hover:underline text-red-500 font-semibold"
                >
                  {post.source.name}
                </Link>
                <p className="text-slate-600 text-sm ">
                  {timeSince(post.publishedAt)}
                </p>
              </div>
              <CardTitle className="text-xl font-semibold text-slate-800">
                {post.title}
              </CardTitle>

              <CardDescription className="py-2">
                {post.description.slice(0, 100)}...
                {/* Fixed length (adjust as needed) */}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-950"
              >
                Continue reading..
              </a>
              {/* <p className="px-2 text-sm text-right">5 min read</p> */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
