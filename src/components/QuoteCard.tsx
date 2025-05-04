
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
      "w-full overflow-hidden shadow-md hover:shadow-lg transition-shadow quote-card-gradient",
      className
    )}>
      <CardContent className="p-6 md:p-8">
        <div className="space-y-4">
          <div className="text-3xl text-quote-purple-dark dark:text-quote-purple mb-2">"</div>
          <blockquote className="text-lg md:text-xl font-medium italic text-gray-800 dark:text-gray-100">
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
