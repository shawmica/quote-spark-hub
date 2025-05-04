
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from '../data/quotes';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { saveAs } from 'file-saver';

interface SubmittedQuote {
  id: string;
  text: string;
  author: string;
  category: string;
  submittedBy: string;
  submittedAt: string;
}

const Submit = () => {
  const [formData, setFormData] = useState({
    text: '',
    author: '',
    category: '',
    submittedBy: '',
    email: ''
  });
  
  const [submittedQuotes, setSubmittedQuotes] = useState<SubmittedQuote[]>([]);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.text || !formData.author || !formData.category) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Create new quote object with unique ID
    const newQuote: SubmittedQuote = {
      id: `submit_${Date.now()}`,
      text: formData.text,
      author: formData.author,
      category: formData.category,
      submittedBy: formData.submittedBy || 'Anonymous',
      submittedAt: new Date().toISOString()
    };
    
    // Add to submitted quotes
    const updatedSubmissions = [...submittedQuotes, newQuote];
    setSubmittedQuotes(updatedSubmissions);
    
    // Save submissions to localStorage
    localStorage.setItem('quoteNest_submissions', JSON.stringify(updatedSubmissions));
    
    // Show success message
    toast({
      title: "Quote submitted",
      description: "Thank you for contributing to QuoteNest!",
    });
    
    // Reset form
    setFormData({
      text: '',
      author: '',
      category: '',
      submittedBy: '',
      email: ''
    });
  };

  // Download submissions as JSON
  const downloadSubmissions = () => {
    const blob = new Blob([JSON.stringify(submittedQuotes, null, 2)], {
      type: 'application/json'
    });
    saveAs(blob, 'quote-submissions.json');
    toast({
      description: "Submissions downloaded as JSON file",
    });
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Submit a Quote</h1>
          <p className="text-gray-500 mt-1">
            Share your favorite quote with the QuoteNest community
          </p>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="text">Quote Text *</Label>
                <Textarea
                  id="text"
                  name="text"
                  placeholder="Enter the quote text..."
                  value={formData.text}
                  onChange={handleInputChange}
                  required
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="author">Author *</Label>
                <Input
                  id="author"
                  name="author"
                  placeholder="Who said or wrote this quote?"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select 
                  value={formData.category}
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="submittedBy">Your Name (Optional)</Label>
                  <Input
                    id="submittedBy"
                    name="submittedBy"
                    placeholder="How should we credit you?"
                    value={formData.submittedBy}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="For follow-up if needed"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="border-t pt-4 mt-4">
                <Button type="submit" className="w-full md:w-auto">
                  Submit Quote
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        {submittedQuotes.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Your Submitted Quotes</h2>
              <Button variant="outline" size="sm" onClick={downloadSubmissions}>
                Download JSON
              </Button>
            </div>
            
            <div className="space-y-3">
              {submittedQuotes.map(quote => (
                <Card key={quote.id}>
                  <CardContent className="pt-6">
                    <blockquote className="italic text-gray-700 dark:text-gray-300">
                      "{quote.text}"
                    </blockquote>
                    <footer className="mt-2 text-right">
                      <cite className="font-medium not-italic">
                        — {quote.author}
                      </cite>
                      <div className="text-xs text-gray-500 mt-1">
                        Category: {quote.category} | Submitted by: {quote.submittedBy}
                      </div>
                    </footer>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        <div className="bg-primary/5 rounded-lg p-4 text-sm">
          <h3 className="font-medium">Note About Submissions</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Quotes submitted here are stored locally on your device. In a production environment, 
            these would be sent to a database for review before being added to the main collection. 
            For demonstration purposes, you can download your submissions as a JSON file.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Submit;
