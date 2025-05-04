
import React from 'react';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  showBookmarks: boolean;
  setShowBookmarks: (show: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  darkMode, 
  setDarkMode,
  showBookmarks,
  setShowBookmarks
}) => {
  const isMobile = useIsMobile();
  
  return (
    <header className="w-full flex justify-between items-center py-4 mb-6">
      <div className="flex items-center gap-2">
        <div className="bg-quote-purple rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">Q</div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-quote-purple-dark to-quote-purple bg-clip-text text-transparent">
          QuoteNest
        </h1>
      </div>
      
      <div className="flex gap-2">
        <Button 
          variant={showBookmarks ? "default" : "outline"}
          onClick={() => setShowBookmarks(!showBookmarks)}
          className="text-sm"
        >
          {isMobile ? "Favorites" : "My Favorites"}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
