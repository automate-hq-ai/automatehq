import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import ServicesNew from './components/ServicesNew';
import ImplementationProcess from './components/ImplementationProcess';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import AnimatedBackground from './components/common/AnimatedBackground';
import StarTrail from './components/common/StarTrail';
import Chat from './components/Chat';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import { pageview } from './utils/analytics';
import ScrollToTop from './components/ScrollToTop';
import BlogPostAI2025 from './components/BlogPostAI2025';
import BlogPostHyperL from './components/BlogPostHyperL';
import BlogPostAccounting from './components/BlogPostAccounting';
import BlogPostEthics from './components/BlogPostEthics';
import BlogPostGettingGcalCred from './components/BlogPostGettingGcalCred';
import CaseStudyCarousel from './components/CaseStudyCarousel';
import BlogPostSlackOAuth from './components/BlogPostSlackOAuth';
import BlogPostDropboxAPI from './components/BlogPostDropboxAPI';
import BlogPostTwilio from './components/BlogPostTwilio';
import BlogPostSendGrid from './components/BlogPostSendGrid';
import BlogPostTelegramBot from './components/BlogPostTelegramBot';
import BlogPostWhatsApp from './components/BlogPostWhatsApp';
import BlogPostHubSpotAPI from './components/BlogPostHubSpotAPI';
import BlogPostNotionAPI from './components/BlogPostNotionAPI';
import BlogPostAirtableToken from './components/BlogPostAirtableToken';
import BlogPostStripeAPI from './components/BlogPostStripeAPI';
import BlogPostOpenAIAPI from './components/BlogPostOpenAIAPI';

// Component to track page views
const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <PageViewTracker />
      <div className="min-h-screen bg-white text-gray-900">
        <AnimatedBackground />
        <StarTrail />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ValueProposition />
                <ServicesNew />
                <CaseStudyCarousel />
                <ImplementationProcess />
                <Comparison />
                <Pricing />
                <Contact />
              </>
            } />
            <Route path="/chat" element={<Chat />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/key-benefits-of-ai-2025" element={<BlogPostAI2025 />} />
            <Route path="/blog/hyperl-success-story" element={<BlogPostHyperL />} />
            <Route path="/blog/accounting-finance-automation" element={<BlogPostAccounting />} />
            <Route path="/blog/ethics-of-ai-automation" element={<BlogPostEthics />} />
            <Route path="/blog/google-calendar-credentials" element={<BlogPostGettingGcalCred />} />
            <Route path="/blog/slack-oauth" element={<BlogPostSlackOAuth />} />
            <Route path="/blog/dropbox-api" element={<BlogPostDropboxAPI />} />
            <Route path="/blog/twilio" element={<BlogPostTwilio />} />
            <Route path="/blog/sendgrid" element={<BlogPostSendGrid />} />
            <Route path="/blog/telegram-bot" element={<BlogPostTelegramBot />} />
            <Route path="/blog/whatsapp" element={<BlogPostWhatsApp />} />
            <Route path="/blog/hubspot-api" element={<BlogPostHubSpotAPI />} />
            <Route path="/blog/notion-api" element={<BlogPostNotionAPI />} />
            <Route path="/blog/airtable-token" element={<BlogPostAirtableToken />} />
            <Route path="/blog/stripe-api" element={<BlogPostStripeAPI />} />
            <Route path="/blog/openai-api" element={<BlogPostOpenAIAPI />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;