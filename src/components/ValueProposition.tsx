import React from 'react';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BoltIcon from '@mui/icons-material/Bolt';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SecurityIcon from '@mui/icons-material/Security';
import SupportIcon from '@mui/icons-material/Support';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HoverCard from './common/HoverCard';
import StatsTicker from './common/StatsTicker';
import VideoBackground from './common/VideoBackground';

const ValueProposition = () => {
  const coreValues = [
    {
      icon: <BoltIcon className="w-12 h-12 text-blue-500" />,
      title: "Lightning Fast Results",
      description: "See ROI in 30 days. Our AI automation delivers measurable results faster than traditional solutions.",
      metric: "30 days to ROI",
      color: "from-blue-500/10 to-blue-600/10"
    },
    {
      icon: <AttachMoneyIcon className="w-12 h-12 text-emerald-500" />,
      title: "Proven Cost Savings",
      description: "Average clients save $18,000 monthly in operational costs while increasing productivity by 35%.",
      metric: "$18K monthly savings",
      color: "from-emerald-500/10 to-emerald-600/10"
    },
    {
      icon: <GpsFixedIcon className="w-12 h-12 text-purple-500" />,
      title: "99.9% Accuracy Guarantee",
      description: "Our AI systems achieve near-perfect accuracy, eliminating costly human errors in critical processes.",
      metric: "99.9% accuracy",
      color: "from-purple-500/10 to-purple-600/10"
    },
    {
      icon: <AccessTimeIcon className="w-12 h-12 text-rose-500" />,
      title: "24/7 Intelligent Operations",
      description: "Your business never sleeps. Our AI agents work around the clock, handling tasks while you focus on growth.",
      metric: "24/7 operation",
      color: "from-rose-500/10 to-rose-600/10"
    }
  ];

  const competitiveAdvantages = [
    {
      title: "AI-Powered vs Rule-Based",
      description: "Unlike traditional automation that follows rigid rules, our AI learns and adapts to your business needs.",
      icon: <TrendingUpIcon className="w-6 h-6 text-green-500" />
    },
    {
      title: "Custom Solutions, Not Templates",
      description: "Every automation is built specifically for your workflow, not a one-size-fits-all approach.",
      icon: <CheckCircleIcon className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Dedicated Success Team",
      description: "Get your own automation strategist, not just generic support tickets.",
      icon: <SupportIcon className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and compliance with SOC 2, GDPR, and industry standards.",
      icon: <SecurityIcon className="w-6 h-6 text-emerald-500" />
    }
  ];

  const clientTestimonials = [
    {
      quote: "AutomateHQ transformed our customer support from a bottleneck into a competitive advantage. We scaled our business without the overhead of hiring more support staff.",
      author: "Sarah Chen",
      role: "COO, Fashion Industry",
      results: "42% faster response time, 30+ hours saved monthly"
    },
    {
      quote: "Our team finally focuses on strategic insights instead of data cleanup. The accuracy and speed improvements have made us more competitive in the market.",
      author: "Michael Rodriguez",
      role: "Managing Partner, Accounting Firm",
      results: "90% reduction in manual entry, $18K annual savings"
    },
    {
      quote: "Our onboarding is now AI-personalized and completely frictionless. The automated nurturing has become our secret weapon for converting trials into paying customers.",
      author: "Jennifer Park",
      role: "Head of Growth, Tech Startup",
      results: "3x trial-to-paid conversion, 40% reduced sales cycle"
    }
  ];

  const painPoints = [
    {
      problem: "Manual tasks consuming 20+ hours weekly",
      solution: "AI automation handles repetitive work",
      result: "Free up time for strategic initiatives"
    },
    {
      problem: "Inconsistent customer experiences",
      solution: "AI-powered personalization at scale",
      result: "85% customer satisfaction improvement"
    },
    {
      problem: "Scaling operations without hiring",
      solution: "Intelligent automation that grows with you",
      result: "Scale 10x without proportional overhead"
    },
    {
      problem: "Data errors and compliance risks",
      solution: "99.9% accuracy with built-in compliance",
      result: "Eliminate costly mistakes and audits"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Stronger white overlay for readability */}
      <VideoBackground src="/videos/ai-background4.mov" opacity={0.25} overlayOpacity={0.85} />
      <div className="absolute inset-0 bg-white/70 z-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mb-6 leading-[1.2] pb-2">
            Why Leading Businesses Choose AutomateHQ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join 50+ companies already saving 20 hours per week and $18,000 monthly with AI automation that actually delivers results
          </p>
        </motion.div>

        {/* Core Value Propositions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 items-stretch">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <HoverCard>
                <div className="h-[400px] flex flex-col justify-between p-8 rounded-2xl bg-white shadow-xl border border-gray-100">
                  <div>
                    <div className="flex items-center justify-center" style={{ minHeight: 48 }}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2 text-center">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {value.description}
                    </p>
                  </div>
                  <div className="bg-blue-50/80 rounded-lg p-3 text-center">
                    <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                      {value.metric}
                    </span>
                  </div>
                </div>
              </HoverCard>
            </motion.div>
          ))}
        </div>

        {/* Pain Points & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            We Solve Your Biggest Automation Challenges
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold text-sm">!</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-red-600 mb-2">Problem: {item.problem}</h4>
                    <p className="text-gray-600 mb-2">Solution: {item.solution}</p>
                    <p className="text-emerald-600 font-semibold">Result: {item.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why We're Different from Traditional Automation Vendors
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say About Results
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Asian and Thai names for testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-700 text-lg italic mb-6 relative z-10">
                "AutomateHQ transformed our customer support from a bottleneck into a competitive advantage. We scaled our business without the overhead of hiring more support staff."
              </p>
              <span className="absolute top-8 right-8 text-gray-200 text-9xl font-extrabold -z-0 select-none opacity-75">
                "
              </span>
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-bold text-gray-900">Mei Lin</h4>
                <p className="text-gray-600 text-sm mb-2">COO, Fashion Industry</p>
                <p className="text-emerald-600 text-sm font-semibold">42% faster response time, 30+ hours saved monthly</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-700 text-lg italic mb-6 relative z-10">
                "Our team finally focuses on strategic insights instead of data cleanup. The accuracy and speed improvements have made us more competitive in the market."
              </p>
              <span className="absolute top-8 right-8 text-gray-200 text-9xl font-extrabold -z-0 select-none opacity-75">
                "
              </span>
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-bold text-gray-900">Somsak Chaiyawan</h4>
                <p className="text-gray-600 text-sm mb-2">Managing Partner, Accounting Firm</p>
                <p className="text-emerald-600 text-sm font-semibold">90% reduction in manual entry, $18K annual savings</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-700 text-lg italic mb-6 relative z-10">
                "Our onboarding is now AI-personalized and completely frictionless. The automated nurturing has become our secret weapon for converting trials into paying customers."
              </p>
              <span className="absolute top-8 right-8 text-gray-200 text-9xl font-extrabold -z-0 select-none opacity-75">
                "
              </span>
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-bold text-gray-900">Nattaya Srisuk</h4>
                <p className="text-gray-600 text-sm mb-2">Head of Growth, Tech Startup</p>
                <p className="text-emerald-600 text-sm font-semibold">3x trial-to-paid conversion, 40% reduced sales cycle</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Ticker */}
        {/* Removed scrolling StatsTicker widget as requested */}
      </div>
    </section>
  );
};

export default ValueProposition;