import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';
import RocketIcon from '@mui/icons-material/Rocket';
import BusinessIcon from '@mui/icons-material/Business';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Card from './common/Card';
import VideoBackground from './common/VideoBackground';

const plans = [
  {
    name: 'Lite',
    price: 299,
    setupFee: 300,
    description: (
      <>
        <span className="font-semibold text-gray-900">Save 10–20 hours a month.</span> Perfect for small teams or solo operators who want to automate routine work and focus on what matters most.
      </>
    ),
    icon: <RocketIcon className="w-8 h-8" />,
    features: [
      '5 Automations included',
      'Essential Integrations',
      'Email Support',
      'Save 10–20 hours/month',
      'Proven ROI for lean teams'
    ]
  },
  {
    name: 'Professional',
    price: 799,
    setupFee: 500,
    description: (
      <>
        <span className="font-semibold text-gray-900">Save up to 50 hours a month and scale faster.</span> Our most popular plan for growing teams who want to streamline operations and unlock advanced automations.
      </>
    ),
    popular: true,
    icon: <StarIcon className="w-8 h-8" />,
    features: [
      '15 Automations included',
      'Essential + Advanced Integrations',
      'Priority Support (Email + Chat)',
      'Save up to 50 hours/month',
      'Accelerate revenue with optimized workflows'
    ]
  },
  {
    name: 'Enterprise',
    description: (
      <>
        <span className="font-semibold text-gray-900">Bespoke automation for maximum impact.</span> The best choice for companies needing advanced, custom solutions and hands-on support.
      </>
    ),
    icon: <BusinessIcon className="w-8 h-8" />,
    features: [
      'Unlimited Automations',
      'Fully Custom Integrations & Solutions',
      'Dedicated Account Manager',
      'Hands-on implementation & support',
      'Maximize ROI at scale'
    ]
  }
];

export default function Pricing() {
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

  // FAQ state and data moved here to fix linter errors
  const faqs = [
    {
      question: "What's included in the setup fee?",
      answer:
        "The setup fee covers personalized onboarding, workflow design, account setup, and training. Our team will configure your automations so they're tailored to your business, then help you and your team hit the ground running."
    },
    {
      question: "Do I need to pay the setup fee every month?",
      answer:
        "No — the setup fee is a one-time cost at the beginning of your service. Once you're onboarded, you'll only pay the monthly plan rate you choose."
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer:
        "Absolutely. You can move between plans as your automation needs grow or change — just reach out to us and we'll help make the switch."
    },
    {
      question: "What if I need a custom automation that isn't listed?",
      answer:
        "That's what our Enterprise plan is for. We'll work with you to design custom solutions that fit your processes exactly. Contact us for a personalized quote."
    },
    {
      question: "Do you offer discounts for annual payments?",
      answer:
        "Yes — we offer a discount for annual prepayment. Get in touch with us and we'll send you the details."
    },
    {
      question: "What kind of support is included?",
      answer:
        "Professional plan customers receive email support. Business and Enterprise customers receive priority support through both email and chat. Our team aims to respond quickly so you never feel stuck."
    },
    {
      question: "How do I get started?",
      answer:
        "Sign up for the plan that suits you best. Once we receive your setup fee, we'll schedule an onboarding session and begin building your custom automation workflows."
    }
  ];
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const handleFaqClick = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div id="pricing" className="py-24 bg-white relative overflow-hidden">
      <VideoBackground src="/videos/ai-background2.mp4" opacity={0.3} overlayOpacity={0.08} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Our Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your automation needs
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`shadow-lg rounded-lg overflow-hidden border-2 relative ${
                plan.popular 
                  ? 'border-blue-500 transform hover:scale-105' 
                  : 'border-gray-200 hover:border-blue-500 transition-all duration-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase shadow-lg z-20">
                  Most Popular
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 flex items-center justify-center text-white">
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">{plan.name}</h3>
                {plan.price ? (
                  <div className="text-center mb-1">
                    <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">${plan.price}</span>
                    <span className="text-lg text-gray-600">/month</span>
                  </div>
                ) : (
                  <div className="text-center mb-1">
                    <span className="text-xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Custom Pricing</span>
                  </div>
                )}
                {plan.setupFee && (
                  <div className="text-center mb-2">
                    <span className="text-sm text-gray-500">+ ${plan.setupFee} setup fee</span>
                  </div>
                )}
                {!plan.setupFee && plan.name === 'Enterprise' && (
                  <div className="text-center mb-2">
                    <span className="text-sm text-gray-500">+ tailored setup fee</span>
                  </div>
                )}
                <p className="text-gray-700 text-center mb-4 text-base leading-relaxed">{plan.description}</p>
                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <CheckIcon className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => scrollToSection('contact-us')}
                  className={`w-full py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                      : 'bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-50'
                  }`}
                >
                  {plan.popular ? 'Book Your AI Strategy Session' : 'Book Your AI Strategy Session'}
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative max-w-5xl mx-auto mt-6 mb-0 px-2 sm:px-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-center mb-4 z-10 relative">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-4 z-10 relative">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className={`transition-all duration-300 rounded-2xl shadow-xl border-2 ${openFaq === idx ? 'border-blue-500 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-100 scale-[1.03]' : 'border-gray-100 bg-white hover:shadow-2xl'} overflow-hidden`}
            >
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-left focus:outline-none group"
                onClick={() => handleFaqClick(idx)}
                aria-expanded={openFaq === idx}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl md:text-3xl animate-pulse">💡</span>
                  <span className="font-bold text-base md:text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {faq.question}
                  </span>
                </div>
                <span className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>{openFaq === idx ? <ExpandLess className="text-blue-500 text-2xl" /> : <ExpandMore className="text-blue-500 text-2xl" />}</span>
              </button>
              <div
                className={`px-4 pb-3 text-gray-700 text-sm md:text-base transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                style={{ transitionProperty: 'max-height, opacity' }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col items-center z-10 relative">
          <div className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Still have questions?</div>
          <button
            onClick={() => scrollToSection('contact-us')}
            className="px-6 py-2 rounded-full font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Ask Us Directly
          </button>
        </div>
      </div>

    </div>
  );
}
