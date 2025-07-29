import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';
import SavingsIcon from '@mui/icons-material/Savings';
import HoverCard from './common/HoverCard';

// Import custom images
import onlineStoreImage from '../assets/images/online-store.png';
import accountingImage from '../assets/images/accounting.png';
import saasImage from '../assets/images/software-as-service.png';

const CaseStudyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      image: onlineStoreImage,
      title: "E-Commerce Fashion Retailer",
      subtitle: "Scaling Customer Support Without Hiring",
      problem: "A growing fashion retailer was drowning in customer inquiries about orders, returns, and sizing. Their support team was overwhelmed, leading to 48+ hour response times and frustrated customers.",
      solution: "We implemented an AI-powered customer support system using GPT-4 that handles 80% of common queries automatically. The system integrates with their Shopify store and provides instant, personalized responses.",
      results: [
        { 
          icon: <SpeedIcon className="w-6 h-6 text-emerald-500" />, 
          metric: "42%", 
          label: "Faster Response Time",
          description: "From 48 hours to under 2 hours average"
        },
        { 
          icon: <TrendingUpIcon className="w-6 h-6 text-blue-500" />, 
          metric: "30+", 
          label: "Hours Saved Monthly",
          description: "Support team can focus on complex issues"
        },
        { 
          icon: <SavingsIcon className="w-6 h-6 text-purple-500" />, 
          metric: "85%", 
          label: "Customer Satisfaction",
          description: "Up from 62% before automation"
        }
      ],
      quote: {
        text: "AutomateHQ transformed our customer support from a bottleneck into a competitive advantage. We scaled our business without the overhead of hiring more support staff.",
        author: "Sarah Chen",
        role: "COO, Fashion Industry",
        company: "Fashion Retailer"
      }
    },
    {
      image: accountingImage,
      title: "Mid-Size Accounting Firm",
      subtitle: "Eliminating Manual Data Entry",
      problem: "A 50-person accounting firm was spending 60+ hours weekly on manual data entry from invoices and bank statements. This was delaying client reporting and eating into profit margins.",
      solution: "We deployed an AI-powered document processing system that extracts data from invoices, receipts, and bank statements with 99.2% accuracy. The system automatically syncs with Xero and QuickBooks.",
      results: [
        { 
          icon: <SpeedIcon className="w-6 h-6 text-emerald-500" />, 
          metric: "90%", 
          label: "Reduction in Manual Entry",
          description: "From 60 hours to 6 hours weekly"
        },
        { 
          icon: <SavingsIcon className="w-6 h-6 text-blue-500" />, 
          metric: "$18K", 
          label: "Annual Cost Savings",
          description: "Reduced admin overhead significantly"
        },
        { 
          icon: <TrendingUpIcon className="w-6 h-6 text-purple-500" />, 
          metric: "3x", 
          label: "Faster Client Reporting",
          description: "Monthly reports ready in days, not weeks"
        }
      ],
      quote: {
        text: "Our team finally focuses on strategic insights instead of data cleanup. The accuracy and speed improvements have made us more competitive in the market.",
        author: "Michael Rodriguez",
        role: "Managing Partner",
        company: "Accounting Firm"
      }
    },
    {
      image: saasImage,
      title: "B2B SaaS Startup",
      subtitle: "Revolutionizing Lead Conversion",
      problem: "A SaaS company was losing 70% of trial users due to poor onboarding and inconsistent follow-up. Their sales team couldn't keep up with lead volume, and conversion rates were declining.",
      solution: "We built an intelligent lead nurturing system that personalizes onboarding emails based on user behavior and CRM data. The system automatically segments leads and sends targeted follow-ups.",
      results: [
        { 
          icon: <TrendingUpIcon className="w-6 h-6 text-emerald-500" />, 
          metric: "3x", 
          label: "Trial-to-Paid Conversion",
          description: "From 15% to 45% conversion rate"
        },
        { 
          icon: <SpeedIcon className="w-6 h-6 text-blue-500" />, 
          metric: "100%", 
          label: "Email Delivery Rate",
          description: "Perfect deliverability and engagement"
        },
        { 
          icon: <SavingsIcon className="w-6 h-6 text-purple-500" />, 
          metric: "40%", 
          label: "Reduced Sales Cycle",
          description: "Faster time from trial to purchase"
        }
      ],
      quote: {
        text: "Our onboarding is now AI-personalized and completely frictionless. The automated nurturing has become our secret weapon for converting trials into paying customers.",
        author: "Jennifer Park",
        role: "Head of Growth",
        company: "Tech Startup"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="case-studies" className="py-8 sm:py-10 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20"></div>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mb-2 sm:mb-3">
            Real Results, Real Impact
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-xl sm:max-w-3xl mx-auto leading-relaxed">
            See how leading businesses are transforming their operations and achieving measurable results with AutomateHQ
          </p>
        </motion.div>
        <div className="relative flex items-center justify-center min-h-[480px] sm:min-h-[600px] max-h-[95vh]">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-100"
          >
            <ArrowBackIosNewIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-100"
          >
            <ArrowForwardIosIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
          </button>
          {/* Carousel */}
          <div className="w-full flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row items-stretch min-h-[420px] sm:min-h-[520px] max-h-[90vh] sm:max-h-[80vh] max-w-full sm:max-w-5xl w-full sm:w-[80vw]"
                style={{ minHeight: 420, maxHeight: '90vh' }}
              >
                {/* Left: Logo, Title, Subtitle, Quote */}
                <div className="w-full md:w-1/3 min-w-0 bg-gradient-to-br from-blue-50 to-purple-50 p-5 sm:p-8 flex flex-col items-center justify-between gap-4 sm:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl bg-white shadow-lg border-2 border-gray-100 flex items-center justify-center p-2 sm:p-3 mb-2 sm:mb-4">
                      <img src={caseStudies[currentSlide].image} alt={caseStudies[currentSlide].title} className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 text-center">
                      {caseStudies[currentSlide].title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2 text-center text-sm sm:text-lg">
                      {caseStudies[currentSlide].subtitle}
                    </p>
                  </div>
                  {/* Quote */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-5 border border-white/20 mt-2 text-xs sm:text-base text-gray-700 italic text-center shadow">
                    "{caseStudies[currentSlide].quote.text}"
                    <div className="mt-2 sm:mt-3 not-italic text-gray-900 font-semibold text-xs sm:text-base">
                      {caseStudies[currentSlide].quote.author}
                    </div>
                    <div className="text-gray-500 text-[11px] sm:text-sm">{caseStudies[currentSlide].quote.role}</div>
                  </div>
                </div>
                {/* Right: Details */}
                <div className="w-full md:w-2/3 flex flex-col justify-between p-5 sm:p-8 overflow-y-auto gap-4 sm:gap-6">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-2 sm:mb-4">
                    {/* Challenge */}
                    <div className="flex-1 bg-red-50 border border-red-100 rounded-2xl p-3 sm:p-5 min-w-0 mb-2 sm:mb-0">
                      <h4 className="font-bold text-red-700 mb-1 sm:mb-2 text-sm sm:text-lg flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        The Challenge
                      </h4>
                      <p className="text-xs sm:text-base text-gray-700 leading-snug">{caseStudies[currentSlide].problem}</p>
                    </div>
                    {/* Solution */}
                    <div className="flex-1 bg-green-50 border border-green-100 rounded-2xl p-3 sm:p-5 min-w-0">
                      <h4 className="font-bold text-green-700 mb-1 sm:mb-2 text-sm sm:text-lg flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Our Solution
                      </h4>
                      <p className="text-xs sm:text-base text-gray-700 leading-snug">{caseStudies[currentSlide].solution}</p>
                    </div>
                  </div>
                  {/* Results */}
                  <div className="mt-1 sm:mt-2">
                    <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-xl flex items-center">
                      <span className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></span>
                      Measurable Results
                    </h4>
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                      {caseStudies[currentSlide].results.map((result, index) => (
                        <div key={index} className="bg-white p-3 sm:p-5 rounded-2xl shadow border border-gray-100 text-center flex flex-col items-center min-w-0">
                          <div className="mb-1 sm:mb-2">{result.icon}</div>
                          <div className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-0.5 sm:mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs sm:text-base font-semibold text-gray-900 mb-0.5 sm:mb-1">
                            {result.label}
                          </div>
                          <div className="text-[11px] sm:text-sm text-gray-600 leading-tight">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* CTA */}
                  <div className="flex justify-end mt-2 sm:mt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-4 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white rounded-xl font-semibold flex items-center gap-2 sm:gap-3 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm sm:text-lg"
                    >
                      Get Similar Results for Your Business
                      <ArrowForwardIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Dots Navigation */}
          <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 bottom-0 mt-2 z-20">
            <div className="flex justify-center space-x-2 sm:space-x-3">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index 
                      ? 'w-4 h-2 sm:w-8 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500' 
                      : 'w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCarousel;