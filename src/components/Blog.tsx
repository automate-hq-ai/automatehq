import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import BusinessIcon from '@mui/icons-material/Business';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';
import VideoBackground from './common/VideoBackground';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  href?: string;
  link?: string;
}

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Blog posts ordered by date (newest first) with categories
  const blogPosts: BlogPost[] = [
    {
      id: 4,
      title: "The Ethics of AI Automation",
      excerpt: "Bias, Transparency & Responsible Use",
      date: "April 7, 2025",
      readTime: "5 min read",
      category: "ethics",
      link: "/blog/ethics-of-ai-automation"
    },
    {
      id: 3,
      title: "Accounting & Finance Automation Using AI",
      excerpt: "Reduce Errors & Speed Up Reporting",
      date: "April 6, 2025",
      readTime: "6 min read",
      category: "case-study",
      link: "/blog/accounting-finance-automation"
    },
    {
      id: 2,
      title: "A Success Story",
      excerpt: "How AutomateHQ Transformed HyperL with AI Automation",
      date: "March 10, 2025",
      readTime: "5 min read",
      category: "case-study",
      href: "/blog/hyperl-success-story"
    },
    {
      id: 5,
      title: "How to Set Up Your Google Calendar Credentials",
      excerpt: "Step-by-step guide to securely configure Google Calendar automation",
      date: "Jan 20, 2025",
      readTime: "8 min read",
      category: "tutorial",
      href: "/blog/google-calendar-credentials"
    },
    {
      id: 1,
      title: "Key Benefits of AI in 2025",
      excerpt: "Exploring how AI is Transforming Industries.",
      date: "Jan 18, 2025",
      readTime: "7 min read",
      category: "trends",
      href: "/blog/key-benefits-of-ai-2025"
    },
    {
      id: 6,
      title: "Slack OAuth Setup Guide",
      excerpt: "Create a Slack App, add scopes, install to workspace, get Bot Token.",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      category: "tutorial",
      href: "/blog/slack-oauth"
    },
    {
      id: 7,
      title: "Dropbox API Setup Guide",
      excerpt: "How to create an app and get OAuth tokens for file automation.",
      date: "Jan 15, 2025",
      readTime: "7 min read",
      category: "tutorial",
      href: "/blog/dropbox-api"
    },
    {
      id: 8,
      title: "Twilio Setup Guide",
      excerpt: "Setup your Twilio account SID, auth token, and enable WhatsApp/SMS sandbox.",
      date: "Jan 15, 2025",
      readTime: "6 min read",
      category: "tutorial",
      href: "/blog/twilio"
    },
    {
      id: 9,
      title: "SendGrid API Setup Guide",
      excerpt: "How to generate an API key and set up sender authentication for email automation.",
      date: "Jan 15, 2025",
      readTime: "7 min read",
      category: "tutorial",
      href: "/blog/sendgrid"
    },
    {
      id: 10,
      title: "Telegram Bot Setup Guide",
      excerpt: "Generate a bot token via BotFather and find your chat ID.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      category: "tutorial",
      href: "/blog/telegram-bot"
    },
    {
      id: 11,
      title: "WhatsApp Business API Setup Guide",
      excerpt: "Set up WhatsApp Business API and get keys (Meta or Twilio).",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      category: "tutorial",
      href: "/blog/whatsapp"
    },
    {
      id: 12,
      title: "HubSpot API Setup Guide",
      excerpt: "Create private app, get API key for contacts, deals, workflows.",
      date: "Jan 15, 2025",
      readTime: "7 min read",
      category: "tutorial",
      href: "/blog/hubspot-api"
    },
    {
      id: 13,
      title: "Notion API Setup Guide",
      excerpt: "How to create an integration, share a workspace, and get the internal token.",
      date: "Jan 15, 2025",
      readTime: "7 min read",
      category: "tutorial",
      href: "/blog/notion-api"
    },
    {
      id: 14,
      title: "Airtable Personal Access Token Guide",
      excerpt: "New way to access bases securely.",
      date: "Jan 15, 2025",
      readTime: "6 min read",
      category: "tutorial",
      href: "/blog/airtable-token"
    },
    {
      id: 15,
      title: "Stripe API Keys Guide",
      excerpt: "How to retrieve your secret key and publishable key.",
      date: "Jan 15, 2025",
      readTime: "6 min read",
      category: "tutorial",
      href: "/blog/stripe-api"
    },
    {
      id: 16,
      title: "OpenAI API Key Guide",
      excerpt: "How to securely retrieve your API key for GPT, embeddings, or assistants.",
      date: "Jan 15, 2025",
      readTime: "6 min read",
      category: "tutorial",
      href: "/blog/openai-api"
    },
  ];

  // Sort by date (newest first)
  const sortedPosts = blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Separate tutorials from regular blog posts
  const tutorials = sortedPosts.filter(post => post.category === 'tutorial');
  const regularPosts = sortedPosts.filter(post => post.category !== 'tutorial');
  
  // Filter by category
  const filteredPosts = selectedCategory === 'all' 
    ? sortedPosts 
    : selectedCategory === 'tutorial'
    ? tutorials
    : selectedCategory === 'articles'
    ? regularPosts
    : sortedPosts.filter(post => post.category === selectedCategory);

  const handleBlogClick = (post: BlogPost) => {
    if (post.href) {
      navigate(post.href);
    } else if (post.link) {
      navigate(post.link);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'trends': return <TrendingUpIcon />;
      case 'case-study': return <BusinessIcon />;
      case 'business': return <BusinessIcon />;
      case 'ethics': return <PsychologyIcon />;
      case 'tutorial': return <SettingsIcon />;
      default: return <TrendingUpIcon />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'trends': return 'from-blue-500 to-cyan-500';
      case 'case-study': return 'from-purple-500 to-pink-500';
      case 'business': return 'from-green-500 to-emerald-500';
      case 'ethics': return 'from-orange-500 to-red-500';
      case 'tutorial': return 'from-indigo-500 to-purple-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'trends': return 'AI Trends';
      case 'case-study': return 'Case Study';
      case 'business': return 'Business';
      case 'ethics': return 'Ethics';
      case 'tutorial': return 'Tutorial';
      default: return category;
    }
  };

  const categories = [
    { id: 'all', label: 'All Posts', count: sortedPosts.length },
    { id: 'articles', label: 'Articles', count: regularPosts.length },
    { id: 'tutorial', label: 'Tutorials', count: tutorials.length },
    { id: 'trends', label: 'AI Trends', count: sortedPosts.filter(p => p.category === 'trends').length },
    { id: 'case-study', label: 'Case Studies', count: sortedPosts.filter(p => p.category === 'case-study').length },
    { id: 'ethics', label: 'Ethics', count: sortedPosts.filter(p => p.category === 'ethics').length },
  ];

  return (
    <div id="blog" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <VideoBackground src="/videos/ai-background4.mov" opacity={0.15} overlayOpacity={0.08} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 mb-6 leading-[1.3] pb-2">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
            Insights and updates from the world of automation
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {selectedCategory === 'all' ? (
            // Show both sections when "All Posts" is selected
            <div className="space-y-16">
              {/* Articles Section */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <ArticleIcon className="text-2xl text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-800">Latest Articles</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.slice(0, 6).map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="group bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[280px]"
                    >
                      <div>
                        {/* Category Badge */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(post.category)} text-white`}>
                            {getCategoryIcon(post.category)}
                            {getCategoryLabel(post.category)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                          <span>{post.date}</span>
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleBlogClick(post)}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 mt-auto group-hover:from-purple-500 group-hover:to-blue-500"
                      >
                        Read More
                        <ArrowForwardIcon className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </motion.article>
                  ))}
                </div>
              </div>

              {/* Tutorials Section */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <SchoolIcon className="text-2xl text-purple-600" />
                  <h2 className="text-3xl font-bold text-gray-800">Integration Tutorials</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-purple-200 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tutorials.slice(0, 6).map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="group bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[280px]"
                    >
                      <div>
                        {/* Category Badge */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(post.category)} text-white`}>
                            {getCategoryIcon(post.category)}
                            {getCategoryLabel(post.category)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                          <span>{post.date}</span>
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleBlogClick(post)}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 mt-auto group-hover:from-blue-500 group-hover:to-purple-500"
                      >
                        Read Tutorial
                        <ArrowForwardIcon className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // Show filtered posts when a specific category is selected
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {selectedCategory === 'articles' ? 'All Articles' : 
                 selectedCategory === 'tutorial' ? 'All Tutorials' : 
                 `${getCategoryLabel(selectedCategory)} Posts`}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="group bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[280px]"
                  >
                    <div>
                      {/* Category Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(post.category)} text-white`}>
                          {getCategoryIcon(post.category)}
                          {getCategoryLabel(post.category)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleBlogClick(post)}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 mt-auto group-hover:from-purple-500 group-hover:to-blue-500"
                    >
                      {post.category === 'tutorial' ? 'Read Tutorial' : 'Read More'}
                      <ArrowForwardIcon className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </motion.article>
                ))}
              </div>

              {/* No posts message */}
              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="text-gray-400 text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No posts found</h3>
                  <p className="text-gray-500">Try selecting a different category or check back later for new content.</p>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog; 