import Link from "next/link";
import React from "react";

export default function CategoryLink({ title }) {
  return (
    <Link
      href={`/category/${encodeURIComponent(title.toLowerCase())}`} // Dynamic category link
      className=" text-red-600 text-md flex-wrap hover:underline"
    >
      See All
    </Link>
  );
}
