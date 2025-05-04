
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bookmark, BookmarkCheck, ArrowRight, Share } from 'lucide-react';
import { Quote } from '../data/quotes';
import { 
  saveToBookmarks, 
  removeFromBookmarks, 
  isBookmarked,
  shareToTwitter,
  copyToClipboard
} from '../utils/quoteUtils';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ActionButtonsProps {
  quote: Quote;
  onRandomQuote: () => void;
  refreshBookmarkState: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  quote, 
  onRandomQuote,
  refreshBookmarkState
}) => {
  const { toast } = useToast();
  const [bookmarked, setBookmarked] = React.useState<boolean>(false);

  React.useEffect(() => {
    setBookmarked(isBookmarked(quote.id));
  }, [quote.id]);

  const handleBookmarkToggle = () => {
    if (bookmarked) {
      removeFromBookmarks(quote.id);
      setBookmarked(false);
      refreshBookmarkState();
      toast({
        description: "Quote removed from bookmarks",
      });
    } else {
      saveToBookmarks(quote);
      setBookmarked(true);
      refreshBookmarkState();
      toast({
        description: "Quote saved to bookmarks",
      });
    }
  };

  const handleShare = async (action: 'copy' | 'twitter') => {
    try {
      if (action === 'copy') {
        await copyToClipboard(quote);
        toast({
          description: "Quote copied to clipboard",
        });
      } else if (action === 'twitter') {
        shareToTwitter(quote);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to share quote",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center mt-6">
      <Button 
        variant="outline" 
        className="gap-2"
        onClick={handleBookmarkToggle}
      >
        {bookmarked ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
        {bookmarked ? 'Bookmarked' : 'Bookmark'}
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Share size={18} />
            Share
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleShare('copy')}>
            Copy to clipboard
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleShare('twitter')}>
            Share to Twitter
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Button onClick={onRandomQuote} className="gap-2">
        <ArrowRight size={18} />
        Inspire Me
      </Button>
    </div>
  );
};

export default ActionButtons;
