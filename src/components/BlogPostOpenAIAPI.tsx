import React from 'react';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import VideoBackground from './common/VideoBackground';

const BlogPostOpenAIAPI = () => {
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      title: "Log in to OpenAI Platform",
      description: "Access your OpenAI account to get your API key",
      details: [
        "Go to https://platform.openai.com and log in",
        "Click your avatar in the top right",
        "Select 'View API keys' from the dropdown menu",
        "Click 'Create new secret key'",
        "Name your key (e.g., 'AutomateHQ Integration')"
      ]
    },
    {
      id: 2,
      title: "Copy Your API Key",
      description: "Copy the key for use in AutomateHQ",
      details: [
        "The key will be shown once (starts with 'sk-')",
        "Copy and store it securely - you won't see it again",
        "Use this key for API requests in AutomateHQ",
        "You can revoke or regenerate keys anytime"
      ]
    },
    {
      id: 3,
      title: "Set API Usage Limits (Optional)",
      description: "Restrict usage for security and cost control",
      details: [
        "In the API keys page, click 'Usage limits'",
        "Set daily or monthly usage caps as needed",
        "Monitor usage in the OpenAI dashboard"
      ]
    },
    {
      id: 4,
      title: "Integrate with AutomateHQ",
      description: "Add your key to AutomateHQ for AI automation",
      details: [
        "Go to AutomateHQ integration settings",
        "Paste your OpenAI API key",
        "Test the integration with a sample prompt",
        "Monitor completions and usage in the dashboard"
      ]
    }
  ];

  const importantNotes = [
    "Never expose your API key in client-side code",
    "You can revoke or regenerate keys anytime in the dashboard",
    "Monitor usage to avoid unexpected charges",
    "API keys are required for GPT, embeddings, and assistants",
    "Keep your key secure to prevent unauthorized access"
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
              <span className="text-gray-500">• January 15, 2025 • 6 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 mb-6">
              🤖 OpenAI API Key Guide
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Learn how to securely retrieve your OpenAI API key for GPT, embeddings, or assistants in AutomateHQ.
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
            Now that you have your OpenAI API key, you can use it in AutomateHQ to:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">ChatGPT & GPT-4</h4>
              <p className="text-gray-600 text-sm">Automate conversations and completions</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Embeddings</h4>
              <p className="text-gray-600 text-sm">Power semantic search and recommendations</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Assistants</h4>
              <p className="text-gray-600 text-sm">Build custom AI assistants and workflows</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Content Generation</h4>
              <p className="text-gray-600 text-sm">Automate blog posts, emails, and more</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostOpenAIAPI; 