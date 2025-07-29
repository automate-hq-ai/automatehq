import React from 'react';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import VideoBackground from './common/VideoBackground';

const BlogPostWhatsApp = () => {
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      title: "Choose Your WhatsApp Solution",
      description: "Decide between Meta WhatsApp Business API or Twilio WhatsApp",
      details: [
        "Meta WhatsApp Business API: Direct integration, requires business verification",
        "Twilio WhatsApp: Easier setup, uses Twilio's infrastructure",
        "For small businesses: Start with Twilio WhatsApp",
        "For enterprise: Consider Meta WhatsApp Business API",
        "Both solutions require business verification"
      ]
    },
    {
      id: 2,
      title: "Option A: Meta WhatsApp Business API",
      description: "Set up direct WhatsApp Business API integration",
      details: [
        "Visit https://developers.facebook.com/apps/",
        "Create a new app or use existing Facebook app",
        "Add WhatsApp product to your app",
        "Complete business verification process",
        "Get your WhatsApp Business Account ID",
        "Generate access tokens for API calls"
      ]
    },
    {
      id: 3,
      title: "Option B: Twilio WhatsApp",
      description: "Use Twilio's WhatsApp integration (easier setup)",
      details: [
        "Follow the Twilio setup guide first",
        "In Twilio Console, go to 'Messaging' → 'Try it out'",
        "Click 'Send a WhatsApp message'",
        "Join the WhatsApp sandbox by sending the code",
        "Your WhatsApp number is now connected",
        "Use Twilio's WhatsApp API for messaging"
      ]
    },
    {
      id: 4,
      title: "Get Your API Keys",
      description: "Retrieve the necessary credentials for integration",
      details: [
        "For Meta: Get access token from Facebook Developer Console",
        "For Twilio: Use your Account SID and Auth Token",
        "Store credentials securely in AutomateHQ",
        "Test your integration with a simple message",
        "Monitor message delivery and responses"
      ]
    }
  ];

  const importantNotes = [
    "WhatsApp Business API requires business verification",
    "Sandbox mode is limited to testing with verified numbers",
    "Production access requires approval from Meta/Twilio",
    "Message templates must be pre-approved for business use",
    "24-hour messaging window applies to customer-initiated conversations"
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
              <span className="text-gray-500">• January 15, 2025 • 8 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 mb-6">
              📞 WhatsApp Business API Setup Guide
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Learn how to set up WhatsApp Business API and get keys for messaging automation with AutomateHQ.
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
            Now that you have your WhatsApp Business API set up, you can use it in AutomateHQ to:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Send Messages</h4>
              <p className="text-gray-600 text-sm">Automatically send WhatsApp messages</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Message Templates</h4>
              <p className="text-gray-600 text-sm">Use pre-approved message templates</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Receive Messages</h4>
              <p className="text-gray-600 text-sm">Process incoming customer messages</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Media Messages</h4>
              <p className="text-gray-600 text-sm">Send images, documents, and audio</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostWhatsApp; 