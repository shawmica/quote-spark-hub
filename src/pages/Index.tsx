
import React, { useState, useEffect } from 'react';
import { Quote } from '../data/quotes';
import { 
  getQuoteOfTheDay, 
  getRandomQuote, 
  getQuotesByCategory 
} from '../utils/quoteUtils';
import QuoteCard from '../components/QuoteCard';
import CategoryFilter from '../components/CategoryFilter';
import ActionButtons from '../components/ActionButtons';
import BookmarksList from '../components/BookmarksList';
import Header from '../components/Header';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const [quote, setQuote] = useState<Quote>(getQuoteOfTheDay());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showBookmarks, setShowBookmarks] = useState<boolean>(false);
  const [refreshBookmarks, setRefreshBookmarks] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const { toast } = useToast();

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Check localStorage for previously stored dark mode preference
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('quoteNest_darkMode');
    if (storedDarkMode) {
      setDarkMode(storedDarkMode === 'true');
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('quoteNest_darkMode', darkMode.toString());
  }, [darkMode]);
  
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    
    // Get a quote from selected category
    if (categoryId === 'all') {
      handleRandomQuote();
    } else {
      const categoryQuotes = getQuotesByCategory(categoryId);
      if (categoryQuotes.length > 0) {
        changeQuote(categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)]);
      }
    }
  };
  
  const handleRandomQuote = () => {
    const newQuote = getRandomQuote(quote.id);
    changeQuote(newQuote);
    
    if (selectedCategory !== 'all' && newQuote.category !== selectedCategory) {
      setSelectedCategory('all');
    }
  };
  
  const changeQuote = (newQuote: Quote) => {
    setIsAnimating(true);
    setTimeout(() => {
      setQuote(newQuote);
      setIsAnimating(false);
    }, 300);
  };
  
  const refreshBookmarkState = () => {
    setRefreshBookmarks(!refreshBookmarks);
  };
  
  const selectBookmarkedQuote = (selectedQuote: Quote) => {
    setShowBookmarks(false);
    changeQuote(selectedQuote);
    setSelectedCategory('all');
    
    toast({
      description: "Quote loaded from bookmarks",
    });
  };
  
  return (
    <div className="min-h-screen bg-background transition-colors duration-300 flex flex-col">
      <div className="container max-w-3xl px-4 mx-auto flex-grow flex flex-col">
        <Header 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          showBookmarks={showBookmarks}
          setShowBookmarks={setShowBookmarks}
        />
        
        {!showBookmarks ? (
          <>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-medium text-quote-purple">
                  {selectedCategory === 'all' 
                    ? 'Quote of the Day' 
                    : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Quote`}
                </h2>
                <span className="text-xs text-gray-500">
                  {new Date().toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              
              <CategoryFilter 
                selectedCategory={selectedCategory} 
                onSelectCategory={handleCategorySelect} 
              />
            </div>
        
            <div className={`flex-grow flex flex-col ${isAnimating ? 'opacity-0' : 'animate-fade-in'}`}>
              <div className="flex-grow">
                <QuoteCard quote={quote} />
              </div>
              
              <ActionButtons 
                quote={quote} 
                onRandomQuote={handleRandomQuote}
                refreshBookmarkState={refreshBookmarkState}
              />
            </div>
          </>
        ) : (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium text-lg">My Favorite Quotes</h2>
            </div>
            
            <BookmarksList 
              onSelectQuote={selectBookmarkedQuote}
              refreshBookmarks={refreshBookmarks}
            />
          </div>
        )}
      </div>
      
      <footer className="text-center p-4 text-sm text-gray-500 mt-auto">
        <p>QuoteNest © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
