"use client";

import * as React from "react";
import { Search, X, Loader2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSearchNews } from "@/hooks/useSearchNews";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDebouncedSearch } from "@/utils/debounce";
import { ScrollArea } from "@/components/ui/scroll-area";

export function PopoverSearchWithModal() {
  const [open, setOpen] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const debouncedQuery = useDebouncedSearch(inputValue, 1200);
  const { searchQuery, searchResults, handleSearch, isLoading, error } =
    useSearchNews();

  const handleSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (inputValue.trim()) {
        handleSearch(inputValue);
        setOpen(false);
        setShowResults(true);
      }
    },
    [inputValue, handleSearch]
  );

  const handleInputChange = React.useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const handleCloseResults = React.useCallback(() => {
    setShowResults(false);
    setInputValue("");
  }, []);

  React.useEffect(() => {
    if (debouncedQuery) {
      handleSearch(debouncedQuery);
    }
  }, [debouncedQuery, handleSearch]);

  React.useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      setShowResults(true);
    }
  }, [searchResults]);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-10 h-10 rounded-full p-0 md:my-0 my-3"
            aria-label="Open search"
          >
            <Search className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0">
          <form onSubmit={handleSubmit} className="flex items-center p-2">
            <Input
              type="search"
              placeholder="Search news..."
              className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              value={inputValue}
              onChange={(e) => handleInputChange(e.target.value)}
              aria-label="Search news"
            />
            <Button
              type="submit"
              size="sm"
              className="ml-2"
              disabled={!inputValue.trim() || isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
              <span className="sr-only">Search</span>
            </Button>
          </form>
        </PopoverContent>
      </Popover>

      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="sm:max-w-[700px] h-[80vh] max-h-[80vh] bg-white p-0 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Search Results</h2>
          </div>
          <div className="p-4 bg-muted">
            <p className="text-sm text-muted-foreground">
              Showing results for "
              <span className="font-medium">{searchQuery}</span>"
            </p>
          </div>
          <ScrollArea className="flex-grow overflow-auto">
            <div className="p-4">
              {isLoading ? (
                <div className="flex items-center justify-center h-40">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : error ? (
                <div className="text-center py-8">
                  <p className="text-red-500 mb-2">
                    An error occurred while fetching results.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Please try again later.
                  </p>
                </div>
              ) : searchResults && searchResults.length > 0 ? (
                <div className="space-y-4">
                  {searchResults.map((article) => (
                    <Card key={article.url} className="overflow-hidden">
                      <CardHeader className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">
                              {article.title}
                            </CardTitle>
                            <CardDescription className="mt-1">
                              <span className="font-black">
                                {article.source.name} •{" "}
                              </span>
                              {new Date(
                                article.publishedAt
                              ).toLocaleDateString()}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground mb-2">
                          {article.description}
                        </p>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                        >
                          Read more
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-2">
                    No results found.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your search terms or explore different topics.
                  </p>
                </div>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
