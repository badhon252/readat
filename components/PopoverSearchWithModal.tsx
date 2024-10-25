"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSearchNews } from "@/hooks/useSearchNews";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDebouncedSearch } from "@/utils/debounce";
import { useEffect, useState } from "react";

export function PopoverSearchWithModal() {
  const [open, setOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const debouncedQuery = useDebouncedSearch(inputValue, 1000);
  const { searchQuery, searchResults, handleSearch } = useSearchNews();

  useEffect(() => {
    handleSearch(debouncedQuery);
  }, [handleSearch, debouncedQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(debouncedQuery);
    setOpen(false);
    setShowResults(true);
    console.log(searchResults);
    // if (!searchQuery) alert("Enter input to search!!");
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleCloseResults = () => {
    setShowResults(false);
    setInputValue("");
  };

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-10 rounded-full p-0">
            <Search className="h-4 w-4" />
            <span className="sr-only">Open search</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <Input
              type="search"
              placeholder="Search news..."
              className="flex-1"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <Button type="submit" size="sm">
              Search
            </Button>
          </form>
        </PopoverContent>
      </Popover>

      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="sm:max-w-[625px] bg-white">
          <DialogHeader>
            <DialogTitle>Search Results</DialogTitle>
            <DialogDescription>Results for "{searchQuery}"</DialogDescription>
          </DialogHeader>
          <div className="mt-4 max-h-[60vh] overflow-y-auto">
            {searchResults && searchResults.length > 0 ? (
              searchResults.map((article) => (
                <Card key={article.url} className="mb-4">
                  <CardHeader>
                    <CardTitle>{article.title}</CardTitle>
                    <CardDescription>
                      {article.source.name} -{" "}
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{article.description}</p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline mt-2 inline-block"
                    >
                      Read more
                    </a>
                  </CardContent>
                </Card>
              ))
            ) : (
              <>
                <p>No results found.</p>{" "}
                <h1 className="text-red-500 text-3xl">
                  {!inputValue && "Enter input value to search!"}
                </h1>
              </>
            )}
          </div>
          <Button
            onClick={handleCloseResults}
            className="mt-4"
            variant="outline"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
