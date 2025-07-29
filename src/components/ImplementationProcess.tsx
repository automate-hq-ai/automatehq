import React from 'react';
import { motion } from 'framer-motion';
import Timeline from './common/Timeline';
import {
  SearchOutlined,
  Code,
  RocketLaunch,
  Support
} from '@mui/icons-material';
import VideoBackground from './common/VideoBackground';

const ImplementationProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Identify Automation Opportunities",
      benefit: "Discover Inefficiencies",
      description: "We assess your current workflows to uncover inefficiencies and pinpoint high-impact automation areas.",
      metric: "(Typically completed within 3–5 days)",
      icon: <SearchOutlined className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-50"
    },
    {
      number: 2,
      title: "Tailored Automation Blueprint",
      benefit: "Custom-Fit Solution",
      description: "Our experts design a custom solution aligned with your goals—ensuring a perfect fit for your business.",
      metric: "(Typically completed within 1 week - depending on complexity)",
      icon: <Code className="w-6 h-6 text-purple-500" />,
      color: "bg-purple-50"
    },
    {
      number: 3,
      title: "Hands-Free\nImplementation",
      benefit: "Zero-Disruption Deployment",
      description: "We handle the full deployment with minimal disruption, so your team can stay focused on day-to-day operations.",
      metric: "(Go-live in 7–14 days)",
      icon: <RocketLaunch className="w-6 h-6 text-emerald-500" />,
      color: "bg-emerald-50"
    },
    {
      number: 4,
      title: "Continuous Optimization & Support",
      benefit: "Always Improving",
      description: "Our team monitors and fine-tunes your automation setup, keeping performance high as your business evolves.",
      metric: "Quarterly check-ins included",
      icon: <Support className="w-6 h-6 text-rose-500" />,
      color: "bg-rose-50"
    }
  ];

  return (
    <section id="process" className="pt-24 pb-8 bg-white relative overflow-hidden">
      <VideoBackground src="/videos/ai-chip.mp4" opacity={0.25} overlayOpacity={0.06} />
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 relative z-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
            Our Implementation Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            A streamlined approach to transforming your business through automation
          </p>
        </motion.div>

        <div className="w-full">
          <Timeline items={steps} className="mt-6" />
        </div>
      </div>
    </section>
  );
};

export default ImplementationProcess;