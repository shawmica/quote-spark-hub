
import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Bookmark, Share, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">About QuoteNest</h1>
          <p className="text-gray-500 mt-2">Your daily inspiration hub</p>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300">
              QuoteNest was created with a simple vision: to provide daily inspiration through powerful quotes. 
              We believe that the right words at the right time can inspire, motivate, and transform. Our curated 
              collection of quotes spans across various themes like success, mindfulness, love, happiness, and wisdom.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Whether you're looking for your daily dose of motivation, seeking wisdom from some of history's 
              greatest minds, or just want to discover a new perspective, QuoteNest is here to help you find 
              the words that resonate with your journey.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">How It Works</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Daily Quotes</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Every day, a new quote is featured on the home page. You can also click "Inspire Me" 
                    to discover a random quote from our collection at any time.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <Bookmark className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Save Your Favorites</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Find a quote that speaks to you? Bookmark it to save it to your personal collection. 
                    Your favorites are stored locally on your device for easy access anytime.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <Share className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Share Inspiration</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    Spread the wisdom by easily sharing quotes to social media or copying them to use 
                    in your own content. Inspiration is meant to be shared!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4">Behind the Technology</h2>
            <p className="text-gray-600 dark:text-gray-300">
              QuoteNest is built using modern web technologies:
            </p>
            
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
              <li>React for interactive user interfaces</li>
              <li>Tailwind CSS for responsive, beautiful design</li>
              <li>Local storage for saving your favorite quotes</li>
              <li>React Router for seamless navigation</li>
              <li>Shadcn/UI for pre-built accessible components</li>
            </ul>
            
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              All quote content is carefully selected and categorized to provide you with the best 
              possible experience. We regularly update our collection to ensure fresh inspiration.
            </p>
          </CardContent>
        </Card>
        
        <div className="text-center pt-8">
          <p className="text-gray-500 text-sm">
            QuoteNest © {new Date().getFullYear()} | Designed with care for all those seeking daily inspiration
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
