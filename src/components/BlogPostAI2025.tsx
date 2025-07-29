import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InsightsIcon from '@mui/icons-material/Insights';

// Import images
import heroImage from '../assets/images/ai-hero-illustration.jpg';
import marketGrowthChart from '../assets/images/ai-market-growth-chart.jpg';
import industryApplications from '../assets/images/ai-industry-applications.jpg';

const BlogPostAI2025 = () => {
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
            alt="AI and Industry Illustration showing the future of technology" 
            className="w-full h-full object-cover"
          />
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 mb-4 leading-tight">
            The Key Benefits of AI in 2025: How AI Transforms Industries
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-500 text-base">Published on <span className="font-semibold">Jan 18, 2025</span></span>
            <span className="inline-flex items-center gap-1 text-blue-500 bg-blue-100 px-2 py-1 rounded-full text-xs font-semibold"><TrendingUpIcon fontSize="small" /> AI Trends</span>
          </div>

          {/* Key Takeaways Callout */}
          <div className="flex items-start gap-3 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl mb-10">
            <InfoOutlinedIcon className="text-blue-400 mt-1" />
            <div>
              <p className="font-bold text-blue-700 mb-1">Key Takeaways:</p>
              <ul className="list-disc pl-5 text-blue-900 text-base">
                <li>AI improves efficiency, productivity, decision-making, innovation, and customer experience.</li>
                <li>It is applied in fields like healthcare, finance, retail, manufacturing, and cybersecurity.</li>
                <li>Ethical concerns, bias, and transparency must be considered when developing and implementing AI.</li>
              </ul>
            </div>
          </div>

          {/* INTRO */}
          <p className="text-lg text-gray-700 mb-8">
            Artificial Intelligence (AI) has rapidly evolved from a futuristic concept into a powerful tool reshaping how businesses operate across industries. In 2025, organizations are leveraging AI not just for automation but also for strategic decision-making, innovation, and customer engagement.
          </p>

          {/* Market Growth Chart */}
          <div className="w-full h-56 rounded-xl overflow-hidden mb-8">
            <img 
              src={marketGrowthChart} 
              alt="AI Market Growth Chart showing industry trends and projections" 
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold text-blue-700 mt-12 mb-6 flex items-center gap-2"><TrendingUpIcon className="text-blue-400" /> Market Growth and Adoption of AI</h2>
          <p className="mb-8">In 2023, the global market for AI technologies reached an estimated value of <span className="font-bold text-blue-600">$200 billion</span>. By 2030, it's projected to surpass <span className="font-bold text-purple-600">$1.8 trillion</span>. With <span className="font-bold text-blue-600">82%</span> of companies worldwide either already utilizing AI or exploring its integration, it's clear that AI is no longer optional—it's essential.</p>

          <h2 className="text-3xl font-bold text-purple-700 mt-12 mb-6 flex items-center gap-2"><InsightsIcon className="text-purple-400" /> Major Benefits of AI</h2>

          {/* Each benefit as a card */}
          <div className="grid gap-8 mb-12">
            <div className="bg-white border-l-4 border-blue-400 shadow p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">1. Increased Efficiency & Productivity</h3>
              <p>AI enhances business operations by automating repetitive tasks such as scheduling, report generation, and data entry—freeing employees to focus on higher-value work.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>AI-powered tools improve office productivity and reduce time spent on routine tasks.</li>
                <li>Customer support agents using AI handle 13.8% more inquiries per hour with a 1.3% improvement in quality.</li>
                <li>Generative AI boosts performance by an average of 66%, especially for complex workflows.</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-purple-400 shadow p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">2. Enhanced Decision-Making & Data Analysis</h3>
              <p>AI systems analyze vast datasets faster than any human, identifying patterns and trends that drive smarter decisions.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>In finance, AI predicts market trends and detects fraud in real-time.</li>
                <li>Risk assessment becomes more accurate, reducing errors and enhancing investment strategies.</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-blue-400 shadow p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">3. Improved Customer Experience</h3>
              <p>From personalized recommendations to instant chatbots, AI revolutionizes customer service and engagement.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Platforms like Netflix and Amazon use AI to offer tailored suggestions.</li>
                <li>Chatbots provide 24/7 support, offering immediate responses at any time.</li>
                <li>Salesforce reports:
                  <ul className="list-disc pl-5">
                    <li><span className="font-bold text-blue-600">84%</span> of sales teams say AI helps increase sales.</li>
                    <li><span className="font-bold text-blue-600">90%</span> of service professionals confirm faster customer resolution.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-purple-400 shadow p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">4. Innovation & Competitive Advantage</h3>
              <p>AI accelerates discovery, enabling companies to innovate faster and stay ahead of competitors.</p>
              <ul className="list-disc pl-5 mt-2">
                <li><span className="font-bold">AlphaFold</span> predicts protein structures, aiding medical breakthroughs.</li>
                <li>Companies like Danone use AI to analyze consumer trends and develop products faster.</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-blue-400 shadow p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">5. Cost Reduction & ROI Optimization</h3>
              <p>McKinsey reports that AI automation leads to significant cost savings, especially in HR and supply chain. Marketing and sales see notable revenue growth through targeted campaigns.</p>
            </div>
            <div className="bg-white border-l-4 border-purple-400 shadow p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">6. Scalability, Flexibility & Safety</h3>
              <p>Cloud-based AI solutions allow businesses to scale effortlessly while maintaining security.</p>
              <ul className="list-disc pl-5 mt-2">
                <li>CISA uses AI for anomaly detection, malware reverse engineering, and PII protection.</li>
                <li>AI continuously monitors network traffic, adapting to new threats in real-time.</li>
              </ul>
            </div>
          </div>

          {/* Industry Applications Image */}
          <div className="w-full h-56 rounded-xl overflow-hidden mb-8">
            <img 
              src={industryApplications} 
              alt="Illustration showing various industry applications of AI" 
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold text-blue-700 mt-12 mb-6">Industry-Specific Applications of AI</h2>
          <div className="grid gap-8 mb-12">
            <div className="bg-white border-l-4 border-blue-400 shadow p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Healthcare</h3>
              <ul className="list-disc pl-5">
                <li>Analyzing X-rays, MRIs, and CT scans for abnormalities.</li>
                <li>Predicting patient risks and recommending treatments.</li>
                <li>Automating administrative tasks and assisting in robotic surgery.</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-purple-400 shadow p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">Finance</h3>
              <ul className="list-disc pl-5">
                <li>Improving market forecasting and risk management.</li>
                <li>Detecting fraud in real-time and supporting credit scoring.</li>
                <li>Helping clients make informed investment decisions via robo-advisors.</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-blue-400 shadow p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Retail & E-commerce</h3>
              <ul className="list-disc pl-5">
                <li>Delivering personalized product recommendations.</li>
                <li>Managing inventory and optimizing pricing dynamically.</li>
                <li>Offering real-time customer support via AI chatbots.</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-purple-400 shadow p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">Manufacturing & Engineering</h3>
              <ul className="list-disc pl-5">
                <li>Predictive maintenance prevents equipment failure.</li>
                <li>Simulating systems improves product design.</li>
                <li>Optimizing supply chains and demand forecasting.</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-blue-400 shadow p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Transportation & Smart Cities</h3>
              <ul className="list-disc pl-5">
                <li>Enabling autonomous vehicles and smart traffic systems.</li>
                <li>Managing urban resources like energy and waste.</li>
                <li>Predicting delays and offering optimized commuting routes.</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-purple-400 shadow p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">Agriculture & Sustainability</h3>
              <ul className="list-disc pl-5">
                <li>Using precision agriculture for soil and crop monitoring.</li>
                <li>Deploying drones and robots for efficient harvesting.</li>
                <li>Tracking water usage and carbon emissions for environmental sustainability.</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-blue-400 shadow p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Cybersecurity & Surveillance</h3>
              <ul className="list-disc pl-5">
                <li>Detecting anomalies and identifying threats instantly.</li>
                <li>Monitoring public spaces and recognizing suspicious behavior.</li>
                <li>Providing real-time alerts and rapid response protocols.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-purple-700 mt-12 mb-6">Challenges and Considerations</h2>
          <div className="grid gap-8 mb-12">
            <div className="bg-white border-l-4 border-blue-400 shadow p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Ethical Concerns</h3>
              <ul className="list-disc pl-5">
                <li>Bias in AI models can lead to unfair outcomes in hiring, lending, and law enforcement.</li>
                <li>Privacy issues arise when handling personal data, requiring strict safeguards.</li>
                <li>Transparency and explainability are crucial to ensure trust in AI decisions.</li>
              </ul>
            </div>
            <div className="bg-white border-l-4 border-purple-400 shadow p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-700 mb-2">Implementation Barriers</h3>
              <p>According to McKinsey:</p>
              <ul className="list-disc pl-5">
                <li><span className="font-bold">43%</span> of organizations lack a clear AI strategy.</li>
                <li><span className="font-bold">42%</span> struggle with talent shortages in AI expertise.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-blue-700 mt-12 mb-6">Job Displacement vs. Opportunity Creation</h2>
          <p>While AI may impact up to 300 million jobs, it also creates new roles and opportunities. Over the next decade, global productivity is expected to grow by 7% annually, opening doors for innovation rather than replacement.</p>

          <div className="mt-12 p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Leverage AI for Your Business?</h3>
            <p className="mb-4">
              If you're ready to harness the power of AI to boost efficiency, enhance customer experience, and drive innovation, our team at AutomateHQ is here to help.
            </p>
            <p>
              Explore our AI consulting services, custom automation solutions, and strategic implementation plans designed to transform your business in 2025 and beyond.
            </p>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPostAI2025; 