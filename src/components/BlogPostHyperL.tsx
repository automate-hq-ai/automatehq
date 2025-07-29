import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InsightsIcon from '@mui/icons-material/Insights';
import BusinessIcon from '@mui/icons-material/Business';

// Import images
import heroImage from '../assets/images/hyperl-hero.jpg';
import challengeImage from '../assets/images/hyperl-challenge.jpg';
import resultsImage from '../assets/images/hyperl-results.jpg';

const BlogPostHyperL = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-xl p-6 md:p-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/blog')}
          className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-purple-600 mb-8 bg-blue-50 rounded-lg shadow-sm"
        >
          <ArrowBackIcon className="mr-2" />
          Back to Blog
        </motion.button>

        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <img 
            src={heroImage} 
            alt="HyperL's transformation journey with AutomateHQ" 
            className="w-full h-full object-cover"
          />
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 mb-4 leading-tight">
            How AutomateHQ Transformed HyperL with AI Automation: A Success Story
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-500 text-base">Published on <span className="font-semibold">March 10, 2025</span></span>
            <span className="inline-flex items-center gap-1 text-blue-500 bg-blue-100 px-2 py-1 rounded-full text-xs font-semibold"><BusinessIcon fontSize="small" /> Success Story</span>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            In today's fast-paced digital landscape, businesses are under constant pressure to innovate, scale efficiently, and reduce operational overhead. That's where AutomateHQ steps in — your trusted partner in intelligent automation solutions.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            This is the story of how we helped <span className="font-semibold">HyperL</span>, a growing Marketing Agency, streamline operations, reduce costs, and unlock new growth opportunities through strategic AI-powered automation.
          </p>

          {/* Challenge Image */}
          <div className="w-full h-56 rounded-xl overflow-hidden mb-8">
            <img 
              src={challengeImage} 
              alt="Challenges faced by HyperL in scaling operations" 
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold text-blue-700 mt-12 mb-6 flex items-center gap-2"><TrendingUpIcon className="text-blue-400" /> The Challenge: Scaling Without Sacrificing Quality</h2>
          <p className="mb-8">As HyperL expanded its customer base across multiple time zones, they faced several critical challenges:</p>
          <ul className="list-disc pl-5 mb-6">
            <li>Manual customer support was slow and error-prone.</li>
            <li>Sales follow-ups were inconsistent due to limited human resources.</li>
            <li>Internal workflows like data entry, lead scoring, and report generation consumed too much time.</li>
            <li>They struggled to maintain consistent communication across marketing, sales, and customer success teams.</li>
          </ul>

          <h2 className="text-3xl font-bold text-purple-700 mt-12 mb-6 flex items-center gap-2"><InsightsIcon className="text-purple-400" /> The Solution: Custom AI Automation Strategy</h2>
          <p className="mb-8">We began by conducting a deep dive into HyperL's operations, identifying key areas where AI could make the biggest impact.</p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
            <p className="font-semibold mb-2">✅ Key Areas of Automation Implemented by AutomateHQ:</p>
            <ul className="list-disc pl-5 mb-2">
              <li><span className="font-semibold">Customer Support</span><br />Handling FAQs, ticket routing, response drafting<br />AI-Powered Chatbots + Ticket Auto-Sorting</li>
              <li><span className="font-semibold">Sales</span><br />Lead qualification, email outreach, follow-up scheduling<br />AI Lead Scoring + Smart Email Sequences</li>
              <li><span className="font-semibold">Marketing</span><br />Personalized content recommendations, campaign analysis<br />Generative AI Content Engine</li>
              <li><span className="font-semibold">Operations</span><br />Data entry, internal reporting, task delegation<br />Workflow Automation Bots</li>
            </ul>
          </div>

          {/* Results Image */}
          <div className="w-full h-56 rounded-xl overflow-hidden mb-8">
            <img 
              src={resultsImage} 
              alt="Results and improvements achieved by HyperL" 
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold text-blue-700 mt-12 mb-6">📈 The Results: Faster, Smarter, More Scalable</h2>
          <p className="mb-8">Within just six months of implementation, HyperL saw measurable improvements across all departments.</p>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
            <p className="font-semibold mb-2">🔍 Quantifiable Outcomes:</p>
            <ul className="list-disc pl-5 mb-2">
              <li>Customer Support Response Time Reduced by <span className="font-semibold">68%</span></li>
              <li>Lead Conversion Rate Increased by <span className="font-semibold">42%</span></li>
              <li>Internal Reporting Efficiency Improved by <span className="font-semibold">55%</span></li>
              <li>Employee Productivity Rose by <span className="font-semibold">35%</span></li>
              <li>Monthly Operational Costs Decreased by <span className="font-semibold">$18,000</span></li>
            </ul>
          </div>

          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-700 mb-8">
            "Partnering with AutomateHQ was a game-changer for us. Their team didn't just install software — they embedded intelligence into our daily operations. We're now scaling faster than ever before."<br />
            <span className="font-semibold">– Tim Davis, Co-founder & CTO at HyperL</span>
          </blockquote>

          <div className="mt-12 p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">🚀 Ready to Transform Your Business?</h3>
            <p className="mb-4">
              If you're ready to take your operations to the next level, AutomateHQ can help you do more with less.
            </p>
            <p className="mb-4">
              From strategy design to deployment and ongoing optimization, we ensure your business runs smarter, not harder.
            </p>
            <p className="mb-4">
              <span className="font-semibold">👉 Schedule a free consultation today</span> and discover how AI automation can revolutionize your workflow, boost productivity, and drive growth.
            </p>
            <p>Let's Build the Future — Together</p>
            <p className="mt-2 text-sm">Follow us on <a href="https://www.linkedin.com/company/automatehq/" className="underline text-white hover:text-blue-200">LinkedIn</a>, <a href="https://www.instagram.com/automate.hq/" className="underline text-white hover:text-blue-200">Instagram</a>, and <a href="https://www.facebook.com/people/Automate-HQ/61567698083446/" className="underline text-white hover:text-blue-200">Facebook</a> for more success stories, industry insights, and tips on how to leverage AI automation for your business.</p>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPostHyperL; 