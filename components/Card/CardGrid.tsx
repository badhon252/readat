import React from "react";
import NewsCard from "@/components/Card/NewsCard"; // Adjust the import path as necessary
import Link from "next/link";

interface CardGridProps {
  items: any[]; // Replace with a more specific type if available
  itemRenderer: (item: any) => React.ReactNode; // Function to render each item
  itemsToShow?: number;
  linkHref: string;
}

const CardGrid: React.FC<CardGridProps> = ({
  items,
  itemRenderer,
  itemsToShow = 8,
  linkHref,
}) => {
  const displayedItems = items.slice(0, itemsToShow);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedItems.map((item, index) => (
          <React.Fragment key={index}>{itemRenderer(item)}</React.Fragment>
        ))}
      </div>

      <div className="mt-4">
        <Link
          href={linkHref}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default CardGrid;
