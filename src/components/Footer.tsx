import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h3>
          <div className="flex items-center space-x-8">
            <a
              href="https://www.instagram.com/automate.hq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              <InstagramIcon sx={{ fontSize: 40 }} />
            </a>
            <a
              href="https://www.linkedin.com/company/automatehq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              <LinkedInIcon sx={{ fontSize: 40 }} />
            </a>
            <a
              href="https://www.facebook.com/people/Automate-HQ/61567698083446/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              <FacebookIcon sx={{ fontSize: 40 }} />
            </a>
          </div>
          <p className="text-sm mt-4">&copy; {new Date().getFullYear()} AutomateHQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 