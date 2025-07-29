import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  Speed,
  People,
  ExpandMore,
  ExpandLess
} from '@mui/icons-material';
import VideoBackground from './common/VideoBackground';

const ServicesNew = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryTitle)
        ? prev.filter(title => title !== categoryTitle)
        : [...prev, categoryTitle]
    );
  };

  const serviceCategories = [
    {
      title: "Revenue Growth",
      description: "Boost your business growth with AI-powered solutions",
      icon: <TrendingUp className="w-8 h-8" />,
      services: [
        {
          name: "Sales & Marketing Automation",
          description: "CRM automation, marketing campaigns, lead generation, and social media management"
        },
        {
          name: "Customer Experience",
          description: "AI chatbots, customer support automation, and sentiment analysis"
        },
        {
          name: "Business Intelligence",
          description: "Analytics automation, data insights, and predictive analytics"
        },
        {
          name: "Social Media Management",
          description: "AI-generated content and automated posting schedules"
        },
        {
          name: "Data Analytics",
          description: "Automated data collection, processing, and visualization"
        },
        {
          name: "Customer Journey Mapping",
          description: "Automated tracking and optimization of customer interactions"
        }
      ]
    },
    {
      title: "Operational Efficiency",
      description: "Streamline your operations with intelligent automation",
      icon: <Speed className="w-8 h-8" />,
      services: [
        {
          name: "Finance & Accounting",
          description: "Automated bookkeeping, invoicing, payment processing, and financial reporting"
        },
        {
          name: "Document Management",
          description: "AI-powered document processing, file management, and contract automation"
        },
        {
          name: "Task & Workflow Automation",
          description: "Meeting management, task prioritization, and process optimization"
        },
        {
          name: "Invoice Processing",
          description: "Automated invoice data extraction and approval workflows"
        },
        {
          name: "Data Integration",
          description: "Seamless connection of disparate data sources"
        },
        {
          name: "Financial Automation",
          description: "Automated reconciliation and financial reporting"
        }
      ]
    },
    {
      title: "People & Customers",
      description: "Enhance employee and customer experiences",
      icon: <People className="w-8 h-8" />,
      services: [
        {
          name: "HR & People Operations",
          description: "Automated onboarding, scheduling, performance management, and HR processes"
        },
        {
          name: "AI Content Creation",
          description: "Automated content generation, social media posts, and marketing materials"
        },
        {
          name: "AI Consulting & Training",
          description: "Strategic guidance, implementation support, and team training"
        },
        {
          name: "AI Integration",
          description: "Seamlessly integrate AI capabilities into your existing systems and workflows"
        },
        {
          name: "Contract Management",
          description: "Automated contract review and approval workflows"
        },
        {
          name: "Performance Management",
          description: "Automated review cycles and feedback collection"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <VideoBackground src="/videos/ai-background2.mp4" opacity={0.4} overlayOpacity={0.1} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with AI-powered automation solutions that drive efficiency, 
            reduce costs, and accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
            >
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleCategory(category.title)}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 flex items-center justify-center text-white mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                {expandedCategories.includes(category.title) ? (
                  <ExpandLess className="text-gray-500" />
                ) : (
                  <ExpandMore className="text-gray-500" />
                )}
              </div>
              
              <AnimatePresence>
                {expandedCategories.includes(category.title) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-4 mt-6">
                      {category.services.map((service, serviceIndex) => (
                        <motion.li
                          key={serviceIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: serviceIndex * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3" />
                          <div>
                            <h4 className="font-semibold text-gray-900">{service.name}</h4>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesNew; 