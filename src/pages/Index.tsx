
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
import Layout from '../components/Layout';
import { useToast } from '@/hooks/use-toast';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const [quote, setQuote] = useState<Quote>(getQuoteOfTheDay());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [refreshBookmarks, setRefreshBookmarks] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const { toast } = useToast();
  
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
  
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="flex items-center gap-2 text-sm font-medium gradient-text animate-float-in">
              <Sparkles size={16} className="text-quote-purple" />
              {selectedCategory === 'all' 
                ? 'Quote of the Day' 
                : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Quote`}
            </h2>
            <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full animate-fade-in">
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
    
        <div className={`flex-grow flex flex-col ${isAnimating ? 'opacity-0' : 'animate-float-in'}`}>
          <div className="flex-grow mb-6">
            <QuoteCard quote={quote} />
          </div>
          
          <ActionButtons 
            quote={quote} 
            onRandomQuote={handleRandomQuote}
            refreshBookmarkState={refreshBookmarkState}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
