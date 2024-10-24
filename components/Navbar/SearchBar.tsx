// components/Navbar/SearchBar.tsx
import { useEffect, useState } from "react";
import { useSearchNews } from "@/hooks/useSearchNews";
import { useDebouncedSearch } from "@/utils/debounce";

interface SearchInputProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function SearchInput({ setIsModalOpen }: SearchInputProps) {
  const { handleSearch } = useSearchNews();
  const [inputValue, setInputValue] = useState("");
  const debouncedQuery = useDebouncedSearch(inputValue, 1000);

  // Perform search whenever the debounced query changes
  useEffect(() => {
    if (debouncedQuery) {
      handleSearch(debouncedQuery);
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [debouncedQuery, handleSearch, setIsModalOpen]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleIconClick = () => {
    // Avoid direct call to handleSearch, let useEffect handle it
    handleSearch(inputValue);
    setIsModalOpen(!!inputValue);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="lg:ml-2 my-4 p-1 border border-gray-300 rounded w-full"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <button
        onClick={handleIconClick}
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
      >
        🔍
      </button>
    </div>
  );
}
