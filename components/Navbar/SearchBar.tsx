import { useState } from "react";
import { useSearchNews } from "@/hooks/useSearchNews";

interface SearchInputProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function SearchInput({ setIsModalOpen }: SearchInputProps) {
  const { handleSearch } = useSearchNews();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (value: string) => {
    setInputValue(value);
    handleSearch(value);
    setIsModalOpen(!!value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      className="ml-2 p-1 border border-gray-300 rounded"
      value={inputValue}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
