
import React from 'react';
import { categories, Category } from '../data/quotes';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  // Add 'All' category at the beginning
  const allCategories: Category[] = [
    { id: 'all', name: 'All Quotes' },
    ...categories
  ];

  return (
    <div className="w-full mb-6">
      <ScrollArea className="w-full whitespace-nowrap pb-2">
        <div className="flex space-x-2 p-1">
          {allCategories.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              size="sm"
              className={cn(
                "rounded-full px-4 py-2 transition-all hover:bg-primary hover:text-white",
                selectedCategory === category.id && "category-active"
              )}
              onClick={() => onSelectCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CategoryFilter;
