import React from 'react';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import VideoBackground from './common/VideoBackground';

const BlogPostSendGrid = () => {
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      title: "Create a SendGrid Account",
      description: "Sign up for a SendGrid account to get started",
      details: [
        "Visit https://sendgrid.com and click 'Start for Free'",
        "Enter your email, password, and company information",
        "Verify your email address",
        "Complete your account setup",
        "You'll get 100 free emails per day on the free plan"
      ]
    },
    {
      id: 2,
      title: "Generate an API Key",
      description: "Create an API key for programmatic access",
      details: [
        "Log into your SendGrid Dashboard",
        "Go to 'Settings' → 'API Keys'",
        "Click 'Create API Key'",
        "Choose 'Full Access' or 'Restricted Access'",
        "Name your API key (e.g., 'AutomateHQ Integration')",
        "Copy the generated API key (starts with 'SG.')",
        "Store it securely - you won't be able to see it again"
      ]
    },
    {
      id: 3,
      title: "Set Up Sender Authentication",
      description: "Verify your domain or single sender for better deliverability",
      details: [
        "Go to 'Settings' → 'Sender Authentication'",
        "Choose 'Domain Authentication' for best results",
        "Add your domain (e.g., yourcompany.com)",
        "Add the provided CNAME records to your DNS",
        "Wait for DNS propagation (can take up to 48 hours)",
        "Verify the authentication is complete"
      ]
    },
    {
      id: 4,
      title: "Create a Verified Sender",
      description: "Set up a verified sender email address",
      details: [
        "Go to 'Settings' → 'Sender Authentication'",
        "Click 'Single Sender Verification'",
        "Add your sender email (e.g., noreply@yourcompany.com)",
        "Click the verification link sent to your email",
        "Your sender is now verified and ready to use"
      ]
    }
  ];

  const importantNotes = [
    "API keys are sensitive - never expose them in client-side code",
    "Free accounts are limited to 100 emails per day",
    "Domain authentication improves email deliverability significantly",
    "You can create multiple API keys for different purposes",
    "Monitor your sending reputation in the SendGrid dashboard"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <VideoBackground src="/videos/ai-background4.mov" opacity={0.15} overlayOpacity={0.08} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/blog')}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors duration-200"
          >
            <ArrowBackIcon className="mr-2" />
            Back to Blog
          </motion.button>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                <InfoIcon />
                Tutorial
              </span>
              <span className="text-gray-500">• January 15, 2025 • 7 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 mb-6">
              🔔 SendGrid API Setup Guide
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Learn how to generate an API key and set up sender authentication for reliable email automation with AutomateHQ.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.id}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Detailed Steps:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <CheckCircleIcon className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg border border-blue-200 mt-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <WarningIcon className="text-blue-600 text-2xl" />
            <h3 className="text-2xl font-bold text-gray-800">Important Notes</h3>
          </div>
          
          <ul className="space-y-3">
            {importantNotes.map((note, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{note}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 shadow-lg border border-green-200 mt-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🚀 Ready to Integrate?</h3>
          <p className="text-gray-700 mb-6">
            Now that you have your SendGrid API key, you can use it in AutomateHQ to:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Send Emails</h4>
              <p className="text-gray-600 text-sm">Automatically send transactional emails</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Email Templates</h4>
              <p className="text-gray-600 text-sm">Use dynamic templates with variables</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Email Tracking</h4>
              <p className="text-gray-600 text-sm">Monitor opens, clicks, and bounces</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">List Management</h4>
              <p className="text-gray-600 text-sm">Manage subscriber lists and segments</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostSendGrid; 