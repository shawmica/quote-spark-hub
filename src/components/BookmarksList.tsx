
import React from 'react';
import { Quote } from '../data/quotes';
import { getBookmarks, removeFromBookmarks } from '../utils/quoteUtils';
import QuoteCard from './QuoteCard';
import { Button } from '@/components/ui/button';
import { BookmarkMinus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

interface BookmarksListProps {
  onSelectQuote: (quote: Quote) => void;
  refreshBookmarks: boolean;
}

const BookmarksList: React.FC<BookmarksListProps> = ({ 
  onSelectQuote,
  refreshBookmarks 
}) => {
  const [bookmarks, setBookmarks] = React.useState<Quote[]>([]);
  const { toast } = useToast();

  React.useEffect(() => {
    setBookmarks(getBookmarks());
  }, [refreshBookmarks]);

  const handleRemoveBookmark = (e: React.MouseEvent, quoteId: string) => {
    e.stopPropagation();
    removeFromBookmarks(quoteId);
    setBookmarks(getBookmarks());
    toast({
      description: "Quote removed from bookmarks",
    });
  };

  if (bookmarks.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">You haven't saved any quotes yet.</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-[400px] w-full pr-4">
      <div className="space-y-4 pb-4">
        {bookmarks.map((quote) => (
          <div
            key={quote.id}
            className="relative group cursor-pointer"
            onClick={() => onSelectQuote(quote)}
          >
            <QuoteCard 
              quote={quote} 
              className="hover:ring-1 hover:ring-quote-purple transition-all" 
            />
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
    </ScrollArea>
  );
};

export default BookmarksList;
