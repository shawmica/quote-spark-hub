
import React from 'react';
import { Quote } from '../data/quotes';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface QuoteCardProps {
  quote: Quote;
  className?: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, className }) => {
  return (
    <Card className={cn(
      "w-full overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 quote-card-enhanced hover-lift",
      className
    )}>
      <CardContent className="p-6 md:p-8">
        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="text-4xl text-quote-purple-dark dark:text-quote-purple opacity-70">"</div>
            <div className="text-xs uppercase tracking-wider font-semibold text-quote-purple/70 dark:text-quote-purple-light/70 bg-primary/10 px-3 py-1 rounded-full animate-fade-in">
              {quote.category}
            </div>
          </div>
          <blockquote className="text-lg md:text-xl font-medium italic text-gray-800 dark:text-gray-100 relative pl-2">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-quote-purple to-quote-purple-light opacity-40"></div>
            {quote.text}
          </blockquote>
          <footer className="text-right">
            <cite className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-300 not-italic block mt-2">
              — {quote.author}
            </cite>
          </footer>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;
