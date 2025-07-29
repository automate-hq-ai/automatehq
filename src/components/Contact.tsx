import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import { FormData } from '../types';

const AUTOMATION_AREAS = [
  'Accounting',
  'Analytics',
  'CRM / Sales',
  'Marketing',
  'Admin / Internal Ops',
  'Not sure yet'
];

const TIMELINE_OPTIONS = [
  'ASAP',
  'In the next 30 days',
  'In 1–3 months',
  'Just exploring'
];

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    companyName: '',
    jobTitle: '',
    automationAreas: [],
    timeline: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use a simple and reliable approach - send to your email
      const emailData = {
        to: 'anurag@automatehq.com', // Replace with your actual email
        subject: 'New Contact Form Submission - AutomateHQ',
        message: `
New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Company Name: ${formData.companyName}
Job Title: ${formData.jobTitle}
Automation Areas: ${formData.automationAreas.join(', ')}
Timeline: ${formData.timeline}
Additional Info: ${formData.additionalInfo || 'N/A'}

---
Sent from AutomateHQ Website
        `.trim()
      };

      // Use a reliable email service (Web3Forms - free and reliable)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '248d7cbe-2d2a-435f-aaab-a619c5a78b92', // Get free key from web3forms.com
          name: formData.name,
          email: formData.email,
          company: formData.companyName,
          job_title: formData.jobTitle,
          automation_areas: formData.automationAreas.join(', '),
          timeline: formData.timeline,
          additional_info: formData.additionalInfo || 'N/A',
          subject: 'New Contact Form Submission - AutomateHQ'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          companyName: '',
          jobTitle: '',
          automationAreas: [],
          timeline: '',
          additionalInfo: ''
        });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        console.error('Email service error:', response.status);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (area: string) => {
    setFormData(prev => ({
      ...prev,
      automationAreas: prev.automationAreas.includes(area)
        ? prev.automationAreas.filter(a => a !== area)
        : [...prev.automationAreas, area]
    }));
  };

  return (
    <section id="contact-us" className="py-6 lg:py-8 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 lg:mb-8"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 lg:mb-3">
            Let's Work Together
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-xl mx-auto">
            Ready to streamline your business with AI automation? Fill out the form below and let's explore what we can build together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4 bg-white p-4 lg:p-6 rounded-2xl shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
                  placeholder="Enter your business email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
                  placeholder="What company do you represent?"
                />
              </div>
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title / Role
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
                  placeholder="What is your role at the company?"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What are you looking to automate?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {AUTOMATION_AREAS.map((area) => (
                  <div key={area} className="flex items-center">
                    <input
                      type="checkbox"
                      id={area}
                      checked={formData.automationAreas.includes(area)}
                      onChange={() => handleCheckboxChange(area)}
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-2 border-blue-500 rounded bg-white appearance-none checked:bg-blue-500 checked:border-blue-500 relative after:content-[''] after:absolute after:left-[3px] after:top-[1px] after:w-[4px] after:h-[8px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45 after:opacity-0 checked:after:opacity-100"
                    />
                    <label htmlFor={area} className="ml-2 text-sm text-gray-700">
                      {area}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timeline
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {TIMELINE_OPTIONS.map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      id={option}
                      name="timeline"
                      value={option}
                      checked={formData.timeline === option}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-2 border-blue-500 rounded-full bg-white appearance-none checked:bg-blue-500 checked:border-blue-500 relative after:content-[''] after:absolute after:left-[3px] after:top-[3px] after:w-[6px] after:h-[6px] after:bg-white after:rounded-full after:opacity-0 checked:after:opacity-100"
                    />
                    <label htmlFor={option} className="ml-2 text-sm text-gray-700">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Info (Optional)
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={2}
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
                placeholder="Share any context, goals, or questions"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <SendIcon />
            </motion.button>
            {submitStatus === 'success' && (
              <p className="text-green-600 text-center text-sm">Message sent successfully! We'll get back to you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center text-sm">Failed to send message. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;