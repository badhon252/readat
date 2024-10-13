/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link for navigation
import { NewsData } from "@/type/types";
import NewsCard from "./NewsCard";

export default function Cards({
  news,
  title,
  len,
}: {
  news: NewsData;
  title: string;
  len: number;
}) {
  // Local state for posts and loading/error indicators
  const [posts, setPosts] = useState<any[]>([]);

  // Update posts when news changes
  useEffect(() => {
    if (news) {
      setPosts(news);
    }
  }, [news]);

  // Display only the first 9 posts
  const postsToShow = posts.slice(0, len);

  return (
    <div className=" mx-4 rounded-lg shadow-md bg-white">
      {/* "See All" Link */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          {title} News
        </h1>
        <Link
          href={`/category/${encodeURIComponent(title.toLowerCase())}`} // Dynamic category link
          className="text-blue-600 text-sm md:text-md lg:text-lg hover:underline"
        >
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {postsToShow.map((post, index) => (
          <div
            key={index}
            className="transform transition duration-500 hover:scale-105 h-64"
          >
            <NewsCard
              title={post.title}
              description={" "}
              source={post.source}
              url={post.url}
              image={post.image}
              publishedAt={post.publishedAt}
              height="h-64"
              width={""}
            />
            {/*                 
                {index % 2 === 0 ? (
            ) : (
              <PostCard post={post} />
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
}
