import React from 'react';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import VideoBackground from './common/VideoBackground';

const BlogPostDropboxAPI = () => {
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      title: "Create a Dropbox App",
      description: "Go to the Dropbox App Console and create a new app",
      details: [
        "Visit https://www.dropbox.com/developers/apps",
        "Click 'Create app'",
        "Choose 'Scoped access' for file access",
        "Select 'Full Dropbox' access type",
        "Enter your app name (e.g., 'AutomateHQ File Sync')",
        "Click 'Create app'"
      ]
    },
    {
      id: 2,
      title: "Configure App Settings",
      description: "Set up OAuth 2 redirect URIs and permissions",
      details: [
        "In your app settings, go to 'OAuth 2' section",
        "Add redirect URI: https://your-automatehq-domain.com/auth/dropbox/callback",
        "Under 'Permissions' tab, enable:",
        "• files.metadata.read - Read file metadata",
        "• files.content.read - Read file content",
        "• files.content.write - Write file content",
        "• files.metadata.write - Write file metadata"
      ]
    },
    {
      id: 3,
      title: "Get App Credentials",
      description: "Copy your App Key and App Secret",
      details: [
        "In the 'Settings' tab, find your App Key",
        "Copy the App Key (starts with your app name)",
        "Copy the App Secret (click 'Show' to reveal)",
        "Keep these credentials secure - you'll need them for OAuth flow"
      ]
    },
    {
      id: 4,
      title: "Generate Access Token",
      description: "Create a long-lived access token for automation",
      details: [
        "In the 'Permissions' tab, click 'Generate access token'",
        "Select the appropriate permissions for your use case",
        "Copy the generated token (starts with 'sl.')",
        "This token will be used for API calls in AutomateHQ",
        "Note: This token doesn't expire unless revoked"
      ]
    }
  ];

  const importantNotes = [
    "Access tokens are long-lived and don't expire automatically",
    "Keep your App Secret secure and never expose it in client-side code",
    "For production apps, implement proper OAuth 2.0 flow",
    "You can revoke access tokens anytime from the app console",
    "The app will appear in users' Dropbox with the name you specified"
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
              ☁️ Dropbox API Setup Guide
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Learn how to create a Dropbox app, configure OAuth permissions, and get access tokens for file automation with AutomateHQ.
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
            Now that you have your Dropbox access token, you can use it in AutomateHQ to:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">File Upload</h4>
              <p className="text-gray-600 text-sm">Automatically upload files to Dropbox</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">File Download</h4>
              <p className="text-gray-600 text-sm">Download files from Dropbox</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">File Monitoring</h4>
              <p className="text-gray-600 text-sm">Watch for new files and changes</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Folder Management</h4>
              <p className="text-gray-600 text-sm">Create and organize folders</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostDropboxAPI; 