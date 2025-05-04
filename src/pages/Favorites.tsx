
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { getBookmarks, removeFromBookmarks } from '../utils/quoteUtils';
import { Quote } from '../data/quotes';
import QuoteCard from '../components/QuoteCard';
import { Button } from '@/components/ui/button';
import { BookmarkMinus, Calendar, Search, SortAsc } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';

const Favorites = () => {
  const [bookmarks, setBookmarks] = useState<Quote[]>([]);
  const [filteredBookmarks, setFilteredBookmarks] = useState<Quote[]>([]);
  const [sortOption, setSortOption] = useState<string>('dateAdded');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { toast } = useToast();

  // Load bookmarks from localStorage
  useEffect(() => {
    const savedBookmarks = getBookmarks();
    setBookmarks(savedBookmarks);
    setFilteredBookmarks(savedBookmarks);
  }, []);

  // Filter and sort bookmarks
  useEffect(() => {
    let filtered = [...bookmarks];

    // Apply category filter
    if (filterCategory !== 'all') {
      filtered = filtered.filter(quote => quote.category === filterCategory);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        quote => quote.text.toLowerCase().includes(query) || 
                quote.author.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortOption === 'author') {
        return a.author.localeCompare(b.author);
      } else if (sortOption === 'category') {
        return a.category.localeCompare(b.category);
      }
      // Default: date added (newest first)
      return 0; // In a real app we'd use timestamps
    });

    setFilteredBookmarks(filtered);
  }, [bookmarks, sortOption, filterCategory, searchQuery]);

  const handleRemoveBookmark = (e: React.MouseEvent, quoteId: string) => {
    e.stopPropagation();
    removeFromBookmarks(quoteId);
    const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== quoteId);
    setBookmarks(updatedBookmarks);
    
    toast({
      description: "Quote removed from favorites",
    });
  };

  // Get unique categories from bookmarks
  const categories = ['all', ...new Set(bookmarks.map(quote => quote.category))];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Favorite Quotes</h1>
          <div className="text-sm text-gray-500">
            {filteredBookmarks.length} {filteredBookmarks.length === 1 ? 'quote' : 'quotes'} saved
          </div>
        </div>

        {bookmarks.length > 0 ? (
          <>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="relative flex-grow">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search by quote or author..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2 items-center">
                <Select 
                  value={filterCategory} 
                  onValueChange={setFilterCategory}
                >
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select 
                  value={sortOption} 
                  onValueChange={setSortOption}
                >
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dateAdded">Date Added</SelectItem>
                    <SelectItem value="author">Author</SelectItem>
                    <SelectItem value="category">Category</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredBookmarks.map(quote => (
                <div key={quote.id} className="relative group">
                  <QuoteCard quote={quote} />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => handleRemoveBookmark(e, quote.id)}
                    >
                      <BookmarkMinus size={18} className="text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-lg font-medium">No favorites yet</h3>
            <p className="text-gray-500 mt-2">
              Bookmark quotes from the home page to see them here.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
