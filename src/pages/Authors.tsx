
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { quotes } from '../data/quotes';
import QuoteCard from '../components/QuoteCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Author interface with bio
interface Author {
  name: string;
  bio?: string;
  imageUrl?: string; // For future enhancements
  quotes: number; // Number of quotes
}

const Authors = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
  const [authorQuotes, setAuthorQuotes] = useState<typeof quotes>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAuthors, setFilteredAuthors] = useState<Author[]>([]);

  // Create author data from quotes on component mount
  useEffect(() => {
    // Extract unique authors and count their quotes
    const authorMap = new Map<string, number>();
    quotes.forEach(quote => {
      const count = authorMap.get(quote.author) || 0;
      authorMap.set(quote.author, count + 1);
    });
    
    // Create author objects with name and quote count
    const authorList: Author[] = Array.from(authorMap).map(([name, count]) => ({
      name,
      bio: getAuthorBio(name), // Get author bio
      quotes: count
    }));
    
    // Sort alphabetically
    authorList.sort((a, b) => a.name.localeCompare(b.name));
    
    setAuthors(authorList);
    setFilteredAuthors(authorList);
  }, []);

  // Filter authors when search changes
  useEffect(() => {
    if (!searchQuery) {
      setFilteredAuthors(authors);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const filtered = authors.filter(author => 
      author.name.toLowerCase().includes(query)
    );
    
    setFilteredAuthors(filtered);
  }, [searchQuery, authors]);

  // Update quotes when an author is selected
  useEffect(() => {
    if (selectedAuthor) {
      const authorQuotes = quotes.filter(quote => quote.author === selectedAuthor);
      setAuthorQuotes(authorQuotes);
    } else {
      setAuthorQuotes([]);
    }
  }, [selectedAuthor]);

  // Function to get author bio (pre-defined bios for some authors)
  const getAuthorBio = (name: string): string => {
    const bios: Record<string, string> = {
      'Nelson Mandela': 'Nelson Rolihlahla Mandela was a South African anti-apartheid revolutionary, political leader, and philanthropist who served as President of South Africa from 1994 to 1999.',
      'Walt Disney': 'Walter Elias Disney was an American entrepreneur, animator, writer, voice actor, and film producer who co-founded Disney Brothers Cartoon Studio.',
      'Eleanor Roosevelt': 'Eleanor Roosevelt was an American political figure, diplomat, and activist who served as the First Lady of the United States from 1933 to 1945.',
      'John Lennon': 'John Winston Ono Lennon was an English singer, songwriter, musician, and peace activist who achieved worldwide fame as the founder, co-lead vocalist, and rhythm guitarist of the Beatles.',
      'Mother Teresa': 'Mother Teresa, canonized as Saint Teresa of Calcutta, was an Albanian-Indian Roman Catholic nun and missionary who dedicated her life to caring for the sick and poor.',
      'Steve Jobs': 'Steven Paul Jobs was an American business magnate, industrial designer, investor, and media proprietor, best known as the co-founder, chairman, and CEO of Apple Inc.',
      'Maya Angelou': 'Maya Angelou was an American poet, memoirist, and civil rights activist best known for her series of seven autobiographies focusing on her childhood and early adult experiences.',
      'Dalai Lama': 'The Dalai Lama is a title given to spiritual leaders of the Tibetan people. The 14th and current Dalai Lama is Tenzin Gyatso, who advocates for the welfare of Tibetans and teaches Buddhism globally.',
      'Confucius': 'Confucius was a Chinese philosopher and politician of the Spring and Autumn period who is traditionally considered the paragon of Chinese sages.',
      'Bob Marley': 'Robert Nesta Marley was a Jamaican singer, songwriter, and musician who became an international musical and cultural icon.',
      'Winston Churchill': 'Sir Winston Leonard Spencer Churchill was a British statesman, soldier, and writer who served as Prime Minister of the United Kingdom from 1940 to 1945 and from 1951 to 1955.'
    };
    
    return bios[name] || 'Information about this author is not available.';
  };

  return (
    <Layout>
      <div className={`space-y-6 ${selectedAuthor ? 'md:grid md:grid-cols-3 md:gap-6 md:space-y-0' : ''}`}>
        <div className={selectedAuthor ? 'md:col-span-1' : ''}>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Quote Authors</h1>
            {selectedAuthor && (
              <button 
                className="text-sm text-primary hover:underline" 
                onClick={() => setSelectedAuthor(null)}
              >
                ← Back to all authors
              </button>
            )}
          </div>
          
          {!selectedAuthor && (
            <div className="relative mb-4">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search authors..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}
          
          {!selectedAuthor ? (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {filteredAuthors.map(author => (
                <div 
                  key={author.name}
                  className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all cursor-pointer"
                  onClick={() => setSelectedAuthor(author.name)}
                >
                  <h3 className="font-medium">{author.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{author.quotes} {author.quotes === 1 ? 'quote' : 'quotes'}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h2 className="text-xl font-bold">{selectedAuthor}</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                {getAuthorBio(selectedAuthor)}
              </p>
              <div className="mt-4 text-sm text-gray-500">
                {authorQuotes.length} {authorQuotes.length === 1 ? 'quote' : 'quotes'} in collection
              </div>
            </div>
          )}
        </div>
        
        {selectedAuthor && (
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Quotes by {selectedAuthor}</h2>
            <div className="space-y-4">
              {authorQuotes.map(quote => (
                <QuoteCard key={quote.id} quote={quote} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Authors;
