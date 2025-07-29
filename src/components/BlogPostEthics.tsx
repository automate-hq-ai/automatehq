import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';

// Import images
import heroImage from '../assets/images/ethics-hero.jpg';
import biasImage from '../assets/images/ethics-bias.jpg';
import transparencyImage from '../assets/images/ethics-transparency.jpg';

const BlogPostEthics = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      const header = document.querySelector('header');
      const headerOffset = header ? header.clientHeight : 0;

      if (section) {
        const elementPosition = section.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-xl p-6 md:p-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/blog')}
          className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-purple-600 mb-8 bg-blue-50 rounded-lg shadow-sm"
        >
          <ArrowBackIcon className="mr-2" />
          Back to Blog
        </motion.button>

        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <img 
            src={heroImage} 
            alt="Ethical considerations in AI automation" 
            className="w-full h-full object-cover"
          />
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 mb-4 leading-tight">
            The Ethics of AI Automation: Bias, Transparency & Responsible Use
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-500 text-base">Published on <span className="font-semibold">April 7, 2025</span></span>
            <span className="inline-flex items-center gap-1 text-blue-500 bg-blue-100 px-2 py-1 rounded-full text-xs font-semibold"><PsychologyIcon fontSize="small" /> AI Ethics</span>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            As artificial intelligence (AI) becomes deeply embedded in business processes, from hiring to customer service and financial decision-making, concerns around its ethical implications have grown.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Businesses are increasingly adopting <span className="font-semibold">AI automation</span> to boost efficiency and reduce costs — but without proper safeguards, these systems can unintentionally perpetuate biases, lack transparency, and make decisions that are difficult to challenge or explain.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
            <p className="font-semibold mb-2">In this article, you'll learn:</p>
            <ul className="list-disc pl-5 mb-2">
              <li>What ethical AI means in practice</li>
              <li>How AI bias occurs and how to mitigate it</li>
              <li>Why transparency matters in AI deployment</li>
              <li>Best practices for ensuring responsible AI use</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-blue-700 mt-12 mb-6 flex items-center gap-2"><PsychologyIcon className="text-blue-400" /> What Is Ethical AI?</h2>
          <p className="mb-8">Ethical AI refers to the development and use of artificial intelligence technologies in a way that respects human rights, promotes fairness, ensures accountability, and avoids harm. It involves embedding moral principles into AI systems so they act in the best interest of users and society at large.</p>

          <p className="mb-8">Key components of <span className="font-semibold">ethical AI</span> include:
            <ul className="list-disc pl-5 mt-2">
              <li>Fairness and non-discrimination</li>
              <li>Transparency and explainability</li>
              <li>Privacy and data protection</li>
              <li>Accountability and oversight</li>
            </ul>
          </p>

          <h2 className="text-3xl font-bold text-purple-700 mt-12 mb-6">Understanding AI Bias</h2>
          <p className="mb-6">One of the most pressing concerns in AI ethics is <span className="font-semibold">AI bias</span> — when an AI system makes decisions that reflect unfair preferences or prejudices, often due to biased training data or flawed algorithm design.</p>

          {/* Bias Image */}
          <div className="w-full h-56 rounded-xl overflow-hidden mb-8">
            <img 
              src={biasImage} 
              alt="Understanding AI bias in automation" 
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Sources of AI Bias</h3>
          <ul className="list-disc pl-5 mb-8">
            <li><span className="font-semibold">Biased Training Data:</span> If historical data reflects past inequalities (e.g., gender pay gaps), AI models may learn and replicate those patterns.</li>
            <li><span className="font-semibold">Algorithm Design Flaws:</span> Poorly designed algorithms can prioritize certain outcomes over others based on irrelevant factors.</li>
            <li><span className="font-semibold">Lack of Diverse Input:</span> Homogeneous development teams may fail to consider diverse perspectives during AI model creation.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Real-World Examples of AI Bias</h3>
          <p className="mb-6">AI bias has already led to real-world consequences:
            <ul className="list-disc pl-5 mt-2">
              <li>Hiring tools that favored male applicants over equally qualified female candidates.</li>
              <li>Loan approval systems that disproportionately denied credit to minority groups.</li>
              <li>Predictive policing algorithms that targeted historically over-policed communities.</li>
            </ul>
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-12 mb-6 flex items-center gap-2"><SecurityIcon className="text-blue-400" /> Why Transparency Matters in AI</h2>
          <p className="mb-6">Transparency in AI refers to making the inner workings of an AI system understandable to users and stakeholders. This includes explaining how decisions are made, what data was used, and why certain outcomes were reached.</p>

          <p className="mb-8">Without transparency, AI systems become "black boxes" — difficult to audit, regulate, or trust.</p>

          {/* Transparency Image */}
          <div className="w-full h-56 rounded-xl overflow-hidden mb-8">
            <img 
              src={transparencyImage} 
              alt="Transparency in AI systems" 
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefits of Transparent AI Systems</h3>
          <ul className="list-disc pl-5 mb-8">
            <li>Increased user trust and confidence in AI-driven decisions</li>
            <li>Improved ability to detect and correct errors or biases</li>
            <li>Compliance with regulatory standards (e.g., GDPR, AI Act)</li>
            <li>Greater accountability for AI-related outcomes</li>
          </ul>

          <h2 className="text-3xl font-bold text-purple-700 mt-12 mb-6">Responsible AI Use in Business</h2>
          <p className="mb-6">For businesses deploying AI automation, <span className="font-semibold">responsible AI use</span> isn't just a legal or reputational concern — it's a strategic imperative. Companies must implement frameworks that ensure AI systems operate fairly, ethically, and in alignment with company values.</p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Steps to Ensure Responsible AI Deployment</h3>
          <ol className="list-decimal pl-5 mb-8">
            <li><span className="font-semibold">Establish an AI Governance Framework:</span> Define clear policies and procedures for developing, deploying, and monitoring AI systems.</li>
            <li><span className="font-semibold">Conduct Regular Audits:</span> Test AI systems for bias, accuracy, and compliance across different demographic groups.</li>
            <li><span className="font-semibold">Use Diverse Teams:</span> Involve professionals from varied backgrounds in AI development to prevent blind spots.</li>
            <li><span className="font-semibold">Ensure Data Quality:</span> Use representative, clean, and well-labeled datasets to train AI models.</li>
            <li><span className="font-semibold">Provide Explanations:</span> Allow users to understand how and why decisions were made by AI systems.</li>
            <li><span className="font-semibold">Implement Human Oversight:</span> Always involve human judgment in high-stakes decisions, especially in areas like hiring, finance, and law enforcement.</li>
          </ol>

          <h2 className="text-3xl font-bold text-blue-700 mt-12 mb-6">Case Study: Ethical AI in Action</h2>
          <p className="mb-6">A global financial institution implemented an AI-based loan approval system designed with fairness in mind. By using anonymized data and running continuous bias audits, the organization ensured that applicants from all backgrounds were treated equally.</p>

          <p className="mb-8">As a result:
            <ul className="list-disc pl-5 mt-2">
              <li>Approval rates became more balanced across demographics.</li>
              <li>Credit risk remained stable or improved.</li>
              <li>Customer trust increased significantly.</li>
            </ul>
          </p>

          <h2 className="text-3xl font-bold text-purple-700 mt-12 mb-6 flex items-center gap-2"><GavelIcon className="text-blue-400" /> Regulatory Landscape for Ethical AI</h2>
          <p className="mb-6">Governments and international bodies are increasingly regulating AI to promote ethical behavior. Notable regulations include:
            <ul className="list-disc pl-5 mt-2">
              <li><span className="font-semibold">EU AI Act:</span> Proposes strict rules for high-risk AI systems, including mandatory risk assessments and transparency requirements.</li>
              <li><span className="font-semibold">GDPR (General Data Protection Regulation):</span> While not AI-specific, it impacts how AI systems handle personal data in Europe.</li>
              <li><span className="font-semibold">U.S. Algorithmic Accountability Act:</span> Aims to require companies to assess the impact of automated decision systems.</li>
            </ul>
          </p>

          <h2 className="text-3xl font-bold text-blue-700 mt-12 mb-6">FAQs About Ethical AI</h2>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What is AI bias?</h3>
              <p>AI bias occurs when an AI system makes decisions that reflect unfair preferences or prejudices, often due to biased training data or flawed algorithm design.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Can AI be completely unbiased?</h3>
              <p>No system is entirely free of bias, but with careful design, testing, and oversight, AI can be made significantly fairer and more equitable.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">How can I ensure my AI system is transparent?</h3>
              <p>Document your AI development process, provide explanations for key decisions, and allow third-party audits to verify fairness and performance.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Is ethical AI a legal requirement?</h3>
              <p>In many regions, yes — especially for high-risk applications. Regulations like the EU AI Act are pushing organizations toward more ethical AI practices.</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">🚀 Ready to Build Ethical and Trustworthy AI Systems?</h3>
            <p className="mb-4">
              At AutomateHQ, we specialize in helping businesses deploy AI automation responsibly. From bias audits to explainable AI frameworks, our team ensures your systems are both powerful and principled.
            </p>
            <p className="mb-4">
              Whether you're just starting with AI or looking to improve existing systems, we can help you implement ethical AI practices that build trust and drive results.
            </p>
            <p className="mb-4">
              <span className="font-semibold">
                <button 
                  onClick={() => scrollToSection('contact-us')}
                  className="underline hover:text-blue-200 transition-colors duration-300"
                >
                  👉 Schedule a consultation today
                </button>
              </span> and start building AI with integrity.
            </p>
            <p>Let's Build the Future — Together</p>
            <p className="mt-2 text-sm">Follow us on <a href="https://www.linkedin.com/company/automatehq/" className="underline text-white hover:text-blue-200">LinkedIn</a>, <a href="https://www.instagram.com/automate.hq/" className="underline text-white hover:text-blue-200">Instagram</a>, and <a href="https://www.facebook.com/people/Automate-HQ/61567698083446/" className="underline text-white hover:text-blue-200">Facebook</a> for more success stories, industry insights, and tips on how to leverage AI automation for your business.</p>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPostEthics; 