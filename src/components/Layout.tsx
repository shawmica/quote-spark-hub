
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon, Menu, X } from 'lucide-react';
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

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/favorites', label: 'Favorites' },
    { path: '/library', label: 'Quote Library' },
    { path: '/authors', label: 'Authors' },
    { path: '/archive', label: 'Archive' },
    { path: '/about', label: 'About' },
    { path: '/submit', label: 'Submit Quote' },
    { path: '/for-creators', label: 'For Creators' },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 flex flex-col">
      <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b">
        <div className="container max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-quote-purple rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">Q</div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-quote-purple-dark to-quote-purple bg-clip-text text-transparent">
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
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
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
          <div className="md:hidden w-full border-t bg-background">
            <nav className="container max-w-6xl mx-auto flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-3 border-b text-sm font-medium",
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="container max-w-6xl mx-auto px-4 flex-grow flex flex-col py-6">
        {children}
      </main>

      <footer className="text-center p-4 text-sm text-gray-500 mt-auto border-t">
        <div className="container max-w-6xl mx-auto">
          <p>QuoteNest © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
