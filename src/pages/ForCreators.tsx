
import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from "@/components/ui/separator";

const ForCreators = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold">QuoteNest for Creators</h1>
          <p className="text-gray-500 mt-1">
            Guidelines and resources for content creators using QuoteNest quotes
          </p>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold">Usage Guidelines</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              We're happy to see our quote collection being used to inspire others! 
              Here are some guidelines for using QuoteNest content in your creative projects:
            </p>
            
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium">✅ You're welcome to:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-1">
                  <li>Share quotes on social media (with attribution)</li>
                  <li>Include quotes in blog posts and articles</li>
                  <li>Use quotes in presentations and speeches</li>
                  <li>Create graphics with quotes for personal use</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium">❌ Please don't:</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-1">
                  <li>Claim quotes as your original content</li>
                  <li>Sell products featuring our quotes without permission</li>
                  <li>Create derivatives that misrepresent the original quote</li>
                  <li>Use quotes in ways that could be harmful or misleading</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold">How to Attribute</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              When sharing quotes from QuoteNest, please use proper attribution:
            </p>
            
            <div className="mt-4 space-y-2">
              <div className="bg-primary/5 p-3 rounded-md">
                <code className="text-sm">
                  Quote by [Author Name] | Source: QuoteNest.com
                </code>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300">
                For social media posts, consider using the hashtag #QuoteNest
              </p>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">For Social Media Creators</h2>
              
              <h3 className="font-medium">Tips for Sharing</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>Pair quotes with relevant, high-quality images</li>
                <li>Use consistent branding for quote graphics</li>
                <li>Schedule posts for optimal engagement times</li>
                <li>Encourage followers to share their thoughts on the quote</li>
                <li>Create themed quote collections (e.g., Motivation Monday)</li>
              </ul>
              
              <Separator className="my-4" />
              
              <h3 className="font-medium">Best Platforms</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>Instagram: Visual quote cards perform well</li>
                <li>Twitter: Short, impactful quotes get engagement</li>
                <li>Pinterest: Create pinnable quote graphics</li>
                <li>LinkedIn: Professional and leadership quotes</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">For Bloggers & Writers</h2>
              
              <h3 className="font-medium">Content Ideas</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>Thematic roundups (e.g., "10 Inspiring Quotes About Perseverance")</li>
                <li>Deep dives into specific quotes and their context</li>
                <li>Author spotlights with their most famous quotes</li>
                <li>Personal reflections inspired by meaningful quotes</li>
                <li>Holiday or seasonal quote collections</li>
              </ul>
              
              <Separator className="my-4" />
              
              <h3 className="font-medium">SEO Tips</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>Include author names in titles and headers</li>
                <li>Use long-tail keywords like "inspirational quotes about [topic]"</li>
                <li>Create roundup posts that answer specific search queries</li>
                <li>Use structured data for quote content</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold">Design Resources</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Here are some resources to help you create beautiful quote graphics:
            </p>
            
            <div className="grid gap-4 md:grid-cols-3 mt-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Design Tools</h3>
                <ul className="text-gray-600 dark:text-gray-300 mt-2 space-y-1 text-sm">
                  <li>Canva</li>
                  <li>Adobe Express</li>
                  <li>Quotes Creator App</li>
                  <li>Over</li>
                  <li>Desygner</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Font Pairings</h3>
                <ul className="text-gray-600 dark:text-gray-300 mt-2 space-y-1 text-sm">
                  <li>Playfair Display + Source Sans Pro</li>
                  <li>Montserrat + Merriweather</li>
                  <li>Oswald + Lato</li>
                  <li>Roboto Slab + Open Sans</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium">Color Schemes</h3>
                <ul className="text-gray-600 dark:text-gray-300 mt-2 space-y-1 text-sm">
                  <li>Deep purple + soft pink</li>
                  <li>Navy blue + coral</li>
                  <li>Forest green + cream</li>
                  <li>Slate gray + gold</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center pt-4 pb-8">
          <p className="text-gray-600 dark:text-gray-300">
            Have questions about using our content? Contact us at hello@quotenest.com
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ForCreators;
