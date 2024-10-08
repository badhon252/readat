/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link for navigation
import { NewsData } from "@/type/types";
import PostCard from "./postCard";
import NewsCard from "./NewsCard";

export default function CardList({
  news,
  title,
}: {
  news: NewsData;
  title: string;
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
  const postsToShow = posts.slice(0, 9);

  return (
    <div className=" rounded-lg m-4">
      {/* "See All" Link */}
      <div className="mt-4 px-4 py-4 flex justify-between items-center">
        <h1 className="text-4xl font-black">{title}</h1>
        <Link
          href="/latest-news"
          className=" text-red-600 text-md flex-wrap hover:underline"
        >
          See All
        </Link>
      </div>
      <div className="grid grid-cols-8 grid-rows-3 gap-6">
        <div className="col-span-2 row-span-3 transform transition duration-500 hover:scale-105">
          {postsToShow.length > 0 && (
            <NewsCard
              title={postsToShow[0].title}
              description={" "}
              source={postsToShow[0].source}
              url={postsToShow[0].url}
              image={postsToShow[0].image}
              publishedAt={postsToShow[0].publishedAt}
              height="h-[40rem]"
              width="w-full"
            />
          )}
        </div>
        {postsToShow.length > 2 && (
          <div className="col-span-2 col-start-3">
            <PostCard post={postsToShow[2]} />
          </div>
        )}
        {postsToShow.length > 3 && (
          <div className="col-span-2 col-start-3">
            <PostCard post={postsToShow[3]} />
          </div>
        )}
        {postsToShow.length > 4 && (
          <div className="col-span-2 col-start-3">
            <PostCard post={postsToShow[4]} />
          </div>
        )}
        <div className="col-span-2 row-span-3 col-start-5 row-start-1 transform transition duration-500 hover:scale-105">
          {postsToShow.length > 5 && (
            <NewsCard
              title={postsToShow[1].title}
              description={" "}
              source={postsToShow[1].source}
              url={postsToShow[1].url}
              image={postsToShow[1].image}
              publishedAt={postsToShow[1].publishedAt}
              height="h-[40rem]"
              width="w-full"
            />
          )}
        </div>
        {postsToShow.length > 5 && (
          <div className="col-span-2 col-start-7 row-start-1">
            <PostCard post={postsToShow[5]} />
          </div>
        )}

        {postsToShow.length > 6 && (
          <div className="col-span-2 col-start-7 row-start-2">
            <PostCard post={postsToShow[6]} />
          </div>
        )}

        {postsToShow.length > 7 && (
          <div className="col-span-2 col-start-7 row-start-3">
            <PostCard post={postsToShow[7]} />
          </div>
        )}
      </div>
    </div>
  );
}
