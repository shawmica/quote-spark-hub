
import { quotes, Quote } from '../data/quotes';

// Get today's quote based on the day of the year
export const getQuoteOfTheDay = (): Quote => {
  const today = new Date();
  const dayOfYear = getDayOfYear(today);
  const quoteIndex = dayOfYear % quotes.length;
  return quotes[quoteIndex];
};

// Get quote by id
export const getQuoteById = (id: string): Quote | undefined => {
  return quotes.find(quote => quote.id === id);
};

// Get random quote
export const getRandomQuote = (currentQuoteId?: string): Quote => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  
  // Make sure we don't get the same quote
  if (currentQuoteId) {
    let randomQuote = quotes[randomIndex];
    while (randomQuote.id === currentQuoteId && quotes.length > 1) {
      randomIndex = Math.floor(Math.random() * quotes.length);
      randomQuote = quotes[randomIndex];
    }
  }
  
  return quotes[randomIndex];
};

// Get quotes by category
export const getQuotesByCategory = (category: string): Quote[] => {
  if (category === 'all') {
    return quotes;
  }
  return quotes.filter(quote => quote.category === category);
};

// Get day of year (1-366)
const getDayOfYear = (date: Date): number => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

// Save a quote to bookmarks in localStorage
export const saveToBookmarks = (quote: Quote): void => {
  const bookmarks = getBookmarks();
  // Only add if not already bookmarked
  if (!bookmarks.find(b => b.id === quote.id)) {
    bookmarks.push(quote);
    localStorage.setItem('quoteNest_bookmarks', JSON.stringify(bookmarks));
  }
};

// Remove a quote from bookmarks
export const removeFromBookmarks = (quoteId: string): void => {
  const bookmarks = getBookmarks().filter(quote => quote.id !== quoteId);
  localStorage.setItem('quoteNest_bookmarks', JSON.stringify(bookmarks));
};

// Get all bookmarked quotes
export const getBookmarks = (): Quote[] => {
  const storedBookmarks = localStorage.getItem('quoteNest_bookmarks');
  return storedBookmarks ? JSON.parse(storedBookmarks) : [];
};

// Check if a quote is bookmarked
export const isBookmarked = (quoteId: string): boolean => {
  return getBookmarks().some(quote => quote.id === quoteId);
};

// Share quote to Twitter
export const shareToTwitter = (quote: Quote): void => {
  const text = `"${quote.text}" — ${quote.author}`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&hashtags=QuoteNest,Inspiration`;
  window.open(url, '_blank');
};

// Copy quote to clipboard
export const copyToClipboard = (quote: Quote): Promise<void> => {
  const text = `"${quote.text}" — ${quote.author}`;
  return navigator.clipboard.writeText(text);
};
