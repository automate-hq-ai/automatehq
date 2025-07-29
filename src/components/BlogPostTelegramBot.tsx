import React from 'react';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import VideoBackground from './common/VideoBackground';

const BlogPostTelegramBot = () => {
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      title: "Start a Chat with BotFather",
      description: "Open Telegram and find BotFather to create your bot",
      details: [
        "Open Telegram on your phone or desktop",
        "Search for '@BotFather' in the search bar",
        "Start a chat with BotFather",
        "Send '/start' to begin the bot creation process",
        "BotFather will guide you through the setup"
      ]
    },
    {
      id: 2,
      title: "Create Your Bot",
      description: "Use BotFather commands to create and configure your bot",
      details: [
        "Send '/newbot' to BotFather",
        "Enter a display name for your bot (e.g., 'AutomateHQ Bot')",
        "Enter a username for your bot (must end with 'bot', e.g., 'automatehq_bot')",
        "BotFather will confirm your bot creation",
        "You'll receive a bot token (starts with '123456789:ABCdefGHIjklMNOpqrsTUVwxyz')"
      ]
    },
    {
      id: 3,
      title: "Get Your Bot Token",
      description: "Copy the bot token for API integration",
      details: [
        "BotFather will send you a message with your bot token",
        "The token looks like: 123456789:ABCdefGHIjklMNOpqrsTUVwxyz",
        "Copy this token - you'll need it for AutomateHQ",
        "Keep this token secure and never share it publicly",
        "You can always get it again by sending '/mybots' to BotFather"
      ]
    },
    {
      id: 4,
      title: "Find Your Chat ID",
      description: "Get your personal chat ID for testing and notifications",
      details: [
        "Start a chat with your new bot by searching its username",
        "Send any message to your bot (e.g., '/start')",
        "Visit: https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates",
        "Replace <YOUR_BOT_TOKEN> with your actual bot token",
        "Look for 'chat' → 'id' in the response - this is your chat ID",
        "Your chat ID will be a number (positive for users, negative for groups)"
      ]
    }
  ];

  const importantNotes = [
    "Bot tokens are sensitive - keep them secure and private",
    "You can create multiple bots with different purposes",
    "Chat IDs are unique identifiers for users, groups, or channels",
    "Group chat IDs are negative numbers, user chat IDs are positive",
    "You can revoke and regenerate bot tokens anytime via BotFather"
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
              <span className="text-gray-500">• January 15, 2025 • 5 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 mb-6">
              📲 Telegram Bot Setup Guide
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Learn how to generate a bot token via BotFather and find your chat ID for Telegram automation with AutomateHQ.
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
            Now that you have your Telegram bot token and chat ID, you can use them in AutomateHQ to:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Send Messages</h4>
              <p className="text-gray-600 text-sm">Automatically send notifications</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Receive Messages</h4>
              <p className="text-gray-600 text-sm">Process incoming bot messages</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Group Notifications</h4>
              <p className="text-gray-600 text-sm">Send messages to group chats</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Interactive Commands</h4>
              <p className="text-gray-600 text-sm">Create custom bot commands</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostTelegramBot; 