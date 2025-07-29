import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SecurityIcon from '@mui/icons-material/Security';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const BlogPostGettingGcalCred = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-xl p-6 md:p-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/blog')}
          className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-purple-600 mb-8 bg-blue-50 rounded-lg shadow-sm"
        >
          <ArrowBackIcon className="mr-2" />
          Back to Blog
        </motion.button>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 mb-4 leading-tight">
            🔐 How to Set Up Your Google Calendar Credentials
          </h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-500 text-base">Published on <span className="font-semibold">Jan 20, 2025</span></span>
            <span className="inline-flex items-center gap-1 text-blue-500 bg-blue-100 px-2 py-1 rounded-full text-xs font-semibold">
              <SecurityIcon fontSize="small" /> Setup Guide
            </span>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-6 rounded-xl mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              At AutomateHQ, we help you streamline your workflows. To enable automated event creation, updates, or deletions in your Google Calendar, we just need you to generate secure credentials via Google Cloud. Don't worry—it's safe, quick, and you remain in full control.
            </p>
          </div>

          {/* What You'll Need */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-2">
              <CheckCircleIcon className="text-blue-400" />
              What You'll Need
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="text-blue-500 text-2xl mb-2">📧</div>
                <h3 className="font-semibold text-gray-800 mb-2">Google Account</h3>
                <p className="text-sm text-gray-600">With the calendar you want to automate</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="text-purple-500 text-2xl mb-2">⏱️</div>
                <h3 className="font-semibold text-gray-800 mb-2">5-10 Minutes</h3>
                <p className="text-sm text-gray-600">For complete setup process</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="text-green-500 text-2xl mb-2">🆘</div>
                <h3 className="font-semibold text-gray-800 mb-2">Our Support</h3>
                <p className="text-sm text-gray-600">Just ask if you get stuck</p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Guide */}
          <h2 className="text-3xl font-bold text-purple-700 mb-8 flex items-center gap-2">
            🔁 Step-by-Step Guide
          </h2>

          <div className="space-y-6 mb-12">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Open Google Cloud Console</h3>
                  <p className="text-gray-700 mb-3">
                    Go to <a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">console.cloud.google.com</a> and sign in with your Google Calendar account.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Create a New Project</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Click the project dropdown at the top</li>
                    <li>• Select "New Project"</li>
                    <li>• Name it (e.g. <code className="bg-gray-200 px-2 py-1 rounded text-sm">Calendar Integration</code>)</li>
                    <li>• Click <strong>Create</strong></li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Enable Google Calendar API</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Navigate to <span className="font-medium text-blue-800">APIs & Services → Library</span></li>
                    <li>• Search for <span className="font-medium text-blue-800">Google Calendar API</span></li>
                    <li>• Click it, then click <strong>Enable</strong></li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Create OAuth Credentials</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Go to <span className="font-medium text-purple-800">APIs & Services → Credentials</span></li>
                    <li>• Click <span className="font-medium text-purple-800">+ Create Credentials → OAuth client ID</span></li>
                    <li>• Under <strong>Application type</strong>, select <em>Web application</em></li>
                    <li>• Set <strong>Authorized redirect URIs</strong> to:</li>
                  </ul>
                  <div className="mt-3 bg-gray-100 p-3 rounded-lg">
                    <code className="text-sm text-gray-800 break-all">
                      https://profound-thrush-seriously.ngrok-free.app/oauth2/callback
                    </code>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Copy Your Client ID & Secret</h3>
                  <p className="text-gray-700 mb-3">After creation, Google will display your:</p>
                  <ul className="text-gray-700 space-y-1 mb-4">
                    <li>• <strong>Client ID</strong></li>
                    <li>• <strong>Client Secret</strong></li>
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <p className="text-blue-800 font-medium">
                      📩 Please share both with your AutomateHQ specialist so we can securely set up your automation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Security Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
              <SecurityIcon className="text-green-500" />
              Why This Is Safe
            </h2>
            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
              <p className="text-gray-700 text-lg">
                These credentials do <strong>not</strong> give us blanket access to your data—they only allow us to perform the specific calendar actions you approve (create, update, delete events).
              </p>
            </div>
          </div>

          {/* Need Help Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-purple-700 mb-6 flex items-center gap-2">
              <HelpOutlineIcon className="text-purple-500" />
              Need Help?
            </h2>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                If you get stuck at any point or prefer a hand‑holding session, just reply to your AutomateHQ contact. We're happy to jump on a quick call and walk you through it.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:hello.automatehq@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                <EmailIcon className="mr-2" />
                Contact AutomateHQ Support
              </motion.a>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Crafted with care by AutomateHQ – Automate smarter, not harder.
            </p>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPostGettingGcalCred; 