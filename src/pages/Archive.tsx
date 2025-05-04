
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { quotes } from '../data/quotes';
import QuoteCard from '../components/QuoteCard';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, subDays, addDays } from 'date-fns';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getDayOfYear } from '../utils/quoteUtils';

const Archive = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [quoteForDate, setQuoteForDate] = useState(quotes[0]);
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [daysToShow, setDaysToShow] = useState<Date[]>([]);

  // Calculate quote for a specific day
  const getQuoteForDate = (date: Date) => {
    const dayOfYear = getDayOfYear(date);
    const quoteIndex = dayOfYear % quotes.length;
    return quotes[quoteIndex];
  };

  // Update quote when selected date changes
  useEffect(() => {
    setQuoteForDate(getQuoteForDate(selectedDate));
  }, [selectedDate]);

  // Generate days for list view
  useEffect(() => {
    const today = new Date();
    const days = [];
    
    // Show quotes for the past 30 days
    for (let i = 0; i < 30; i++) {
      const date = subDays(today, i);
      days.push(date);
    }
    
    setDaysToShow(days);
  }, []);

  // Handle date navigation
  const goToPreviousDay = () => {
    setSelectedDate(prevDate => subDays(prevDate, 1));
  };

  const goToNextDay = () => {
    const tomorrow = addDays(selectedDate, 1);
    const today = new Date();
    
    // Don't allow selecting future dates
    if (tomorrow <= today) {
      setSelectedDate(tomorrow);
    }
  };

  // Format date as Month Day, Year
  const formatDate = (date: Date) => {
    return format(date, 'MMMM d, yyyy');
  };

  // Check if a date is today
  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Quote Archive</h1>
          <p className="text-gray-500 mt-1">Browse past quotes of the day</p>
        </div>

        <div className="flex justify-center gap-2 mb-2">
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            onClick={() => setViewMode('list')}
            size="sm"
          >
            Timeline View
          </Button>
          <Button
            variant={viewMode === 'calendar' ? 'default' : 'outline'}
            onClick={() => setViewMode('calendar')}
            size="sm"
          >
            Date View
          </Button>
        </div>

        {viewMode === 'calendar' ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPreviousDay}
                aria-label="Previous day"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <h2 className="text-lg font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {formatDate(selectedDate)}
                {isToday(selectedDate) && (
                  <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">
                    Today
                  </span>
                )}
              </h2>
              
              <Button
                variant="outline"
                size="icon"
                onClick={goToNextDay}
                disabled={isToday(selectedDate)}
                aria-label="Next day"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <QuoteCard quote={quoteForDate} />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {daysToShow.map((day, index) => (
              <div key={index} className="relative">
                <div className="flex items-center mb-2">
                  <div 
                    className={cn(
                      "w-4 h-4 rounded-full mr-3",
                      isToday(day) ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
                    )}
                  />
                  <h3 className="font-medium">
                    {formatDate(day)}
                    {isToday(day) && (
                      <span className="ml-2 bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">
                        Today
                      </span>
                    )}
                  </h3>
                </div>
                <div className="pl-7">
                  <QuoteCard quote={getQuoteForDate(day)} />
                </div>
                
                {index < daysToShow.length - 1 && (
                  <div className="absolute top-4 left-2 w-0 h-[calc(100%-1rem)] border-l-2 border-dashed border-gray-200 dark:border-gray-800" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Archive;
