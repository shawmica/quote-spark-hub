
import React from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider"; 
import { BookOpen, Copy, Palette, Image, Share2, Twitter, Instagram, Facebook } from 'lucide-react';

const ForCreators = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-10 pb-12">
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-quote-purple-light/30 to-quote-bg-blue/30 blur-2xl -z-10 rounded-3xl"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-quote-purple-dark to-quote-purple bg-clip-text text-transparent py-8">
              QuoteNest for Creators
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-center text-lg">
            Guidelines and resources for content creators using QuoteNest quotes
          </p>
        </div>
        
        <Card className="overflow-hidden border-quote-purple/20 shadow-lg">
          <div className="bg-gradient-to-r from-quote-purple/10 to-quote-bg-blue/10 p-6 border-b">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-quote-purple" />
              Usage Guidelines
            </h2>
          </div>
          <CardContent className="pt-6">
            <p className="text-gray-600 dark:text-gray-300">
              We're happy to see our quote collection being used to inspire others! 
              Here are some guidelines for using QuoteNest content in your creative projects:
            </p>
            
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="bg-quote-bg-light dark:bg-quote-purple-dark/20 rounded-xl p-5 shadow-sm animate-fade-in">
                <h3 className="font-medium text-lg text-quote-purple-dark dark:text-quote-purple-light flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-quote-purple-light/30 dark:bg-quote-purple-dark/30 flex items-center justify-center">
                    ✅
                  </div>
                  You're welcome to:
                </h3>
                <ul className="list-disc list-outside ml-5 text-gray-600 dark:text-gray-300 mt-3 space-y-2">
                  <li>Share quotes on social media (with attribution)</li>
                  <li>Include quotes in blog posts and articles</li>
                  <li>Use quotes in presentations and speeches</li>
                  <li>Create graphics with quotes for personal use</li>
                </ul>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 shadow-sm animate-fade-in" style={{animationDelay: "0.1s"}}>
                <h3 className="font-medium text-lg text-red-600 dark:text-red-300 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    ❌
                  </div>
                  Please don't:
                </h3>
                <ul className="list-disc list-outside ml-5 text-gray-600 dark:text-gray-300 mt-3 space-y-2">
                  <li>Claim quotes as your original content</li>
                  <li>Sell products featuring our quotes without permission</li>
                  <li>Create derivatives that misrepresent the original quote</li>
                  <li>Use quotes in ways that could be harmful or misleading</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-quote-purple/20 shadow-lg animate-slide-up" style={{animationDelay: "0.2s"}}>
          <div className="bg-gradient-to-r from-quote-purple/10 to-quote-bg-blue/10 p-6 border-b">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Copy className="h-6 w-6 text-quote-purple" />
              How to Attribute
            </h2>
          </div>
          <CardContent className="pt-6">
            <p className="text-gray-600 dark:text-gray-300">
              When sharing quotes from QuoteNest, please use proper attribution:
            </p>
            
            <div className="mt-5 space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <code className="text-sm font-mono block overflow-x-auto p-2">
                  Quote by [Author Name] | Source: QuoteNest.com
                </code>
                <div className="text-xs text-gray-500 mt-2">← Copy this format for proper attribution</div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  #QuoteNest
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                  #DailyInspiration
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  #QuoteOfTheDay
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                Consider using these hashtags for better reach on social media
              </p>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid gap-8 md:grid-cols-2 animate-slide-up" style={{animationDelay: "0.3s"}}>
          <Card className="overflow-hidden border-quote-purple/20 shadow-lg h-full">
            <div className="bg-gradient-to-r from-quote-purple/10 to-quote-bg-blue/10 p-6 border-b">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Share2 className="h-5 w-5 text-quote-purple" />
                For Social Media Creators
              </h2>
            </div>
            <CardContent className="pt-6 flex flex-col h-full">
              <div className="space-y-6 flex-grow">
                <div>
                  <h3 className="font-medium text-lg text-quote-purple-dark dark:text-quote-purple flex items-center gap-2">
                    Tips for Sharing
                  </h3>
                  <ul className="list-disc list-outside ml-5 text-gray-600 dark:text-gray-300 mt-3 space-y-2">
                    <li>Pair quotes with relevant, high-quality images</li>
                    <li>Use consistent branding for quote graphics</li>
                    <li>Schedule posts for optimal engagement times</li>
                    <li>Encourage followers to share their thoughts on the quote</li>
                    <li>Create themed quote collections (e.g., Motivation Monday)</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium text-lg text-quote-purple-dark dark:text-quote-purple">
                    Best Platforms
                  </h3>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                      <Instagram className="h-5 w-5 text-pink-500" />
                      <span>Instagram</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                      <Twitter className="h-5 w-5 text-blue-400" />
                      <span>Twitter</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                      <Image className="h-5 w-5 text-red-400" />
                      <span>Pinterest</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                      <Facebook className="h-5 w-5 text-blue-600" />
                      <span>LinkedIn</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-quote-purple/20 shadow-lg h-full">
            <div className="bg-gradient-to-r from-quote-purple/10 to-quote-bg-blue/10 p-6 border-b">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-quote-purple" />
                For Bloggers & Writers
              </h2>
            </div>
            <CardContent className="pt-6 flex flex-col h-full">
              <div className="space-y-6 flex-grow">
                <div>
                  <h3 className="font-medium text-lg text-quote-purple-dark dark:text-quote-purple">
                    Content Ideas
                  </h3>
                  <ul className="list-disc list-outside ml-5 text-gray-600 dark:text-gray-300 mt-3 space-y-2">
                    <li>Thematic roundups (e.g., "10 Inspiring Quotes About Perseverance")</li>
                    <li>Deep dives into specific quotes and their context</li>
                    <li>Author spotlights with their most famous quotes</li>
                    <li>Personal reflections inspired by meaningful quotes</li>
                    <li>Holiday or seasonal quote collections</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium text-lg text-quote-purple-dark dark:text-quote-purple">
                    SEO Tips
                  </h3>
                  <ul className="list-disc list-outside ml-5 text-gray-600 dark:text-gray-300 mt-3 space-y-2">
                    <li>Include author names in titles and headers</li>
                    <li>Use long-tail keywords like "inspirational quotes about [topic]"</li>
                    <li>Create roundup posts that answer specific search queries</li>
                    <li>Use structured data for quote content</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="overflow-hidden border-quote-purple/20 shadow-lg animate-slide-up" style={{animationDelay: "0.4s"}}>
          <div className="bg-gradient-to-r from-quote-purple/10 to-quote-bg-blue/10 p-6 border-b">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Palette className="h-6 w-6 text-quote-purple" />
              Design Resources
            </h2>
          </div>
          <CardContent className="pt-6">
            <p className="text-gray-600 dark:text-gray-300">
              Here are some resources to help you create beautiful quote graphics:
            </p>
            
            <div className="grid gap-4 md:grid-cols-3 mt-6">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="font-medium text-gray-800 dark:text-gray-100">Design Tools</h3>
                <ul className="text-gray-600 dark:text-gray-300 mt-3 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-quote-purple inline-block"></span> Canva
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-quote-purple inline-block"></span> Adobe Express
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-quote-purple inline-block"></span> Quotes Creator App
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-quote-purple inline-block"></span> Over
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-quote-purple inline-block"></span> Desygner
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="font-medium text-gray-800 dark:text-gray-100">Font Pairings</h3>
                <ul className="text-gray-600 dark:text-gray-300 mt-3 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-quote-purple inline-block"></span> Playfair Display + Source Sans Pro
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-quote-purple inline-block"></span> Montserrat + Merriweather
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-quote-purple inline-block"></span> Oswald + Lato
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-quote-purple inline-block"></span> Roboto Slab + Open Sans
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="font-medium text-gray-800 dark:text-gray-100">Color Schemes</h3>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Deep purple + soft pink</p>
                    <div className="flex gap-1 h-4">
                      <div className="flex-grow bg-purple-700 rounded-l-sm"></div>
                      <div className="flex-grow bg-pink-300 rounded-r-sm"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Navy blue + coral</p>
                    <div className="flex gap-1 h-4">
                      <div className="flex-grow bg-blue-900 rounded-l-sm"></div>
                      <div className="flex-grow bg-orange-400 rounded-r-sm"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Forest green + cream</p>
                    <div className="flex gap-1 h-4">
                      <div className="flex-grow bg-green-800 rounded-l-sm"></div>
                      <div className="flex-grow bg-yellow-50 rounded-r-sm"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Slate gray + gold</p>
                    <div className="flex gap-1 h-4">
                      <div className="flex-grow bg-gray-600 rounded-l-sm"></div>
                      <div className="flex-grow bg-yellow-500 rounded-r-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="relative mt-12 py-10 px-8 rounded-2xl bg-gradient-to-r from-quote-purple-light/20 to-quote-bg-blue/20 overflow-hidden animate-fade-in" style={{animationDelay: "0.5s"}}>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-quote-purple to-quote-purple-light"></div>
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-quote-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-quote-bg-blue/10 rounded-full blur-3xl"></div>
          
          <div className="text-center relative z-10">
            <h2 className="text-xl font-medium mb-3 text-quote-purple-dark dark:text-quote-purple-light">Need More Help?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions about using our content? Contact us at <span className="text-quote-purple font-medium">hello@quotenest.com</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForCreators;
