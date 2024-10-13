import { useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchNews } from "@/hooks/useSearchNews";
import PostCard from "../Card/postCard";
import NewsCard from "../Card/NewsCard";
import { title } from "process";

interface SearchResultsModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function SearchResultsModal({
  isModalOpen,
  setIsModalOpen,
}: SearchResultsModalProps) {
  const { searchResults } = useSearchNews();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen, setIsModalOpen]);

  if (!isModalOpen || !searchResults.length) return null;

  return (
    <div
      className="bg-white shadow-md p-4 rounded w-96 absolute top-10 right-0 z-10 h-[40rem] overflow-hidden"
      ref={modalRef}
    >
      <ul className="flex flex-col gap-4 ">
        {searchResults.map((article) => (
          <li key={article.title}>
            <NewsCard
              title={article.title}
              url={article.url}
              image={article.image}
              source={article.source}
              height="h-36"
              width=""
              description={""}
              publishedAt={""}
            />
          </li>
        ))}
      </ul>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => setIsModalOpen(false)}
      >
        Close
      </button>
    </div>
  );
}
