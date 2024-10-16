/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link for navigation
import { NewsData } from "@/type/types";
import PostCard from "./postCard";
import NewsCard from "./NewsCard";
import CategoriesLink from "../Category/CategoriesLInk";

interface CardListProps {
  news: NewsData; // Ensure news is an array of NewsData
  title: string;
}

export default function CardList({ news, title }: CardListProps) {
  // Local state for posts
  const [posts, setPosts] = useState<NewsData>([]); // Type posts as an array of NewsData

  // Update posts when news changes
  useEffect(() => {
    if (news && news.length) {
      setPosts(news.slice(0, 8)); // Limit to 9 posts directly
    }
  }, [news]);

  return (
    <div className="rounded-lg m-4">
      {/* Header */}
      <div className="mt-4 px-4 py-4 flex flex-wrap justify-between items-center">
        <h1 className="text-4xl font-black">{title}</h1>
        {title && <CategoriesLink title={title} />}
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
        {posts.length > 0 && (
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-3 transform transition duration-500 hover:scale-105">
            <NewsCard
              title={posts[0].title}
              description={posts[0].description || ""} // Handle optional fields with fallback
              source={posts[0].source || "Unknown Source"} // Provide fallback for optional fields
              url={posts[0].url}
              image={posts[0].image || "/default-image.jpg"} // Use default image if not present
              publishedAt={posts[0].publishedAt || "Unknown Date"} // Handle optional date
              height="h-[30rem] lg:h-[40rem]"
              width="w-full"
            />
          </div>
        )}

        {/* Post cards */}
        {posts.slice(1).map((post, index) => (
          <div
            key={index} // Ensure unique key for each element in the list
            className={`col-span-1 sm:col-span-2 lg:col-span-2 ${
              index === 1
                ? "row-span-3 transform transition duration-500 hover:scale-105"
                : ""
            }`}
          >
            {index === 1 ? (
              <NewsCard
                title={post.title}
                description={post.description || ""}
                source={post.source || "Unknown Source"}
                url={post.url}
                image={post.image || "/default-image.jpg"}
                publishedAt={post.publishedAt || "Unknown Date"}
                height="h-[30rem] lg:h-[40rem]"
                width="w-full"
              />
            ) : (
              <PostCard post={post} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
