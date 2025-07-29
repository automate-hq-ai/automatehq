import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HoverCard from './common/HoverCard';

const Comparison = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const features = [
    {
      feature: "AI-Powered Automation",
      automatehq: "Built on GPT-4 + no-code tools to reduce manual tasks by 90%.",
      competitors: "Relies on fixed rules, no adaptation or learning."
    },
    {
      feature: "Custom Workflows",
      automatehq: "Tailored solutions, not cookie-cutter templates.",
      competitors: "One-size-fits-all templates with limited customization."
    },
    {
      feature: "Cross-Tool Integration",
      automatehq: "Syncs with CRMs, ERPs, marketing tools, and finance platforms.",
      competitors: "Basic tool integrations, often requires dev help to connect apps."
    },
    {
      feature: "Predictive Logic",
      automatehq: "Machine learning forecasts issues & optimizes decisions.",
      competitors: "No predictive abilities, manual monitoring and alerts only."
    },
    {
      feature: "24/7 Monitoring",
      automatehq: "AI agents keep processes running—even while you sleep.",
      competitors: "Limited monitoring capabilities."
    },
    {
      feature: "Dedicated Automation Strategist",
      automatehq: "Not just support—your own automation consultant.",
      competitors: "Generic support only, no dedicated strategist or guidance."
    },
    {
      feature: "Rapid Launch",
      automatehq: "Go live with AI-powered workflows in 7-14 days.",
      competitors: "Delayed launch (4-8 weeks), slow iterations."
    },
    {
      feature: "Measurable ROI Dashboard",
      automatehq: "Track hours saved and revenue gained—real-time.",
      competitors: "Hidden ROI, hard to track true impact or performance."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const header = document.querySelector('header');
    const headerOffset = header ? header.clientHeight : 0;

    if (section) {
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="comparison" className="py-20 bg-gradient-to-b from-blue-50 to-white relative">
      {/* Sticky Stats Box */}
      <div className="absolute top-8 right-8 hidden lg:block">

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Commented out "How We Compare" section
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How We Compare
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See why leading businesses choose AutomateHQ for their automation needs
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-500 h-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  AutomateHQ
                </h3>
              </div>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 group hover:bg-blue-50 p-4 rounded-lg transition-colors duration-200"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.feature}</h4>
                      <p className="text-gray-600 text-sm mt-1">{feature.automatehq}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 h-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-400">
                  Traditional Automation Vendors
                </h3>
              </div>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200"
                  >
                    <CancelIcon className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-400">{feature.feature}</h4>
                      <p className="text-gray-400 text-sm mt-1">{feature.competitors}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:hidden space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="p-4 cursor-pointer"
                onClick={() => setExpandedRow(expandedRow === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">{feature.feature}</h4>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-1" />
                      <span className="text-sm text-gray-600">AutomateHQ</span>
                    </div>
                    <div className="flex items-center">
                      <CancelIcon className="w-5 h-5 text-red-400 mr-1" />
                      <span className="text-sm text-gray-600">Others</span>
                    </div>
                  </div>
                </div>
              </div>
              <AnimatePresence>
                {expandedRow === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-blue-50">
                      <div className="mb-4">
                        <h5 className="font-semibold text-blue-600 mb-2">AutomateHQ</h5>
                        <p className="text-sm text-gray-600">{feature.automatehq}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-600 mb-2">Traditional Vendors</h5>
                        <p className="text-sm text-gray-600">{feature.competitors}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        */}

        {/* New Section: AI and Automation Technologies */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">AI and Automation</span> expertise at AutomateHQ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage a diverse set of leading AI and automation tools to build comprehensive solutions. Our team possesses deep expertise in these platforms and is adept at integrating various technologies to meet unique client needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ChatGPT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
            >
              <img src="/chatgpt-logo.png" alt="CustomGPT" className="h-16 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">CustomGPTs</h3>
              <p className="text-gray-600 text-sm">We help create Custom made GPTs for your business needs with the open to self host your own data.</p>
            </motion.div>

            {/* OpenAI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
            >
              <img src="/elevenlabs-logo.png" alt="ElevenLabs" className="h-16 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">ElevenLabs</h3>
              <p className="text-gray-600 text-sm">ElevenLabs is a software company that specializes in developing natural-sounding speech synthesis software using deep learning.</p>
            </motion.div>

            {/* Gemini */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
            >
              <img src="/gemini-logo.png" alt="Gemini" className="h-16 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gemini</h3>
              <p className="text-gray-600 text-sm">Google's advanced AI initiative, Gemini, stands as a powerful competitor in the AI landscape, offering robust capabilities for diverse applications.</p>
            </motion.div>

            {/* Zapier */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
            >
              <img src="/zapier-logo.png" alt="Zapier" className="h-16 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zapier</h3>
              <p className="text-gray-600 text-sm">Zapier is a versatile platform enabling seamless connections between various applications to automate workflows efficiently.</p>
            </motion.div>

            {/* Make.com */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
            >
              <img src="/make-logo.png" alt="Make.com" className="h-16 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Make</h3>
              <p className="text-gray-600 text-sm">Make.com offers a highly visual and intuitive interface for building complex automated workflows, often surpassing Zapier in capability for intricate tasks.</p>
            </motion.div>

            {/* Python/JavaScript */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
            >
              <img src="/python-logo.png" alt="Python" className="h-16 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">JavaScript & Python</h3>
              <p className="text-gray-600 text-sm">We leverage JavaScript and Python for custom scripting, enabling us to build highly sophisticated and tailored automation solutions for even the most complex requirements.</p>
            </motion.div>

            {/* Midjourney */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
            >
              <img src="/midjourney-logo.png" alt="Midjourney" className="h-16 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Midjourney</h3>
              <p className="text-gray-600 text-sm">Midjourney is an independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.</p>
            </motion.div>

            {/* Notion AI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
            >
              <img src="/notion-ai-logo.png" alt="Notion AI" className="h-16 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Notion AI</h3>
              <p className="text-gray-600 text-sm">Notion AI integrates artificial intelligence directly into your workspace, automating tasks and generating content to enhance productivity.</p>
            </motion.div>

            {/* Synthesia */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
            >
              <img src="/synthesia-logo.png" alt="Synthesia" className="h-16 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Synthesia</h3>
              <p className="text-gray-600 text-sm">Synthesia is an AI video generation platform that allows users to create professional videos with AI avatars and voiceovers from text.</p>
            </motion.div>

            {/* Claude */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
            >
              <img src="/claude-logo.png" alt="Claude" className="h-16 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Claude</h3>
              <p className="text-gray-600 text-sm">Claude is a large language model developed by Anthropic, known for its strong performance in conversational AI and complex reasoning tasks.</p>
            </motion.div>

            {/* n8n */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
            >
              <img src="/n8n-logo.png" alt="n8n" className="h-16 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">n8n</h3>
              <p className="text-gray-600 text-sm">n8n is a fair-code licensed tool that helps you automate workflows by connecting various apps and services.</p>
            </motion.div>

            {/* Perplexity */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
            >
              <img src="/perplexity-logo.png" alt="Perplexity" className="h-16 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Perplexity AI</h3>
              <p className="text-gray-600 text-sm">Perplexity AI is a conversational answer engine that provides direct answers and citations from various sources, offering a new way to discover information.</p>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
       
      </div>
    </section>
  );
};

export default Comparison;
