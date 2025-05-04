
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon, Menu, X, BookmarkIcon, HomeIcon, LibraryIcon, UsersIcon, CalendarIcon, InfoIcon, SendIcon, PenToolIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();
  const isMobile = useIsMobile();

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
  
  // Add scroll listener for header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/favorites', label: 'Favorites', icon: BookmarkIcon },
    { path: '/library', label: 'Quote Library', icon: LibraryIcon },
    { path: '/authors', label: 'Authors', icon: UsersIcon },
    { path: '/archive', label: 'Archive', icon: CalendarIcon },
    { path: '/about', label: 'About', icon: InfoIcon },
    { path: '/submit', label: 'Submit Quote', icon: SendIcon },
    { path: '/for-creators', label: 'For Creators', icon: PenToolIcon },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 flex flex-col">
      <header className={cn(
        "sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b transition-all duration-300",
        scrolled && "shadow-sm bg-background/90"
      )}>
        <div className="container max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-quote-purple rounded-full h-8 w-8 flex items-center justify-center text-white font-bold transition-transform group-hover:scale-110 duration-300">Q</div>
            <h1 className="text-xl font-bold gradient-text group-hover:opacity-80 transition-opacity duration-300">
              QuoteNest
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors relative group overflow-hidden",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  {location.pathname === item.path && (
                    <item.icon className="h-3.5 w-3.5" />
                  )}
                  {item.label}
                </span>
                {location.pathname !== item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                )}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="rounded-full hover:bg-primary/10 transition-colors"
            >
              {darkMode ? (
                <SunIcon size={18} className="text-yellow-400" />
              ) : (
                <MoonIcon size={18} className="text-quote-purple" />
              )}
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden w-full border-t bg-background animate-fade-in">
            <nav className="container max-w-6xl mx-auto flex flex-col">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-3 border-b text-sm font-medium flex items-center gap-2",
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent hover:text-accent-foreground",
                    "animate-slide-up"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="container max-w-6xl mx-auto px-4 flex-grow flex flex-col py-6 animate-float-in">
        {children}
      </main>

      <footer className="text-center p-6 text-sm text-gray-500 mt-auto border-t">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm gradient-text font-medium">QuoteNest © {new Date().getFullYear()}</p>
            <div className="flex gap-6">
              {navItems.slice(0, 4).map(item => (
                <Link key={item.path} to={item.path} className="text-xs text-gray-400 hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
