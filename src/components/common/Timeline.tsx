import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  number: number;
  title: string;
  benefit: string;
  description: string;
  metric: string;
  icon: React.ReactNode;
  color: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline Line - Only for desktop */}
      <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500">
        {items.slice(0, -1).map((_, index) => (
          <div
            key={index}
            className="absolute top-0 right-0 w-4 h-4 transform translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-4 h-4 border-t-2 border-r-2 border-emerald-500 transform rotate-45" />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex-1 flex flex-col items-center w-full md:w-auto h-full"
          >
            {/* Number Circle */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4 z-10 mx-auto">
              <span className="text-white font-bold text-xl">{item.number}</span>
            </div>

            {/* Content */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="w-full group relative flex-1 flex flex-col justify-start"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                   style={{ backgroundImage: `linear-gradient(to right, ${item.color})` }} />
              <div className="relative bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col justify-start">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 mx-auto md:mx-0 transform group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center md:text-left">
                  {item.title.split('\n').map((line, idx, arr) => (
                    <span key={idx}>
                      {line}
                      {idx < arr.length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-2 text-center md:text-left">
                  {item.benefit}
                </p>
                <p className="text-gray-600 text-sm mb-3 text-center md:text-left">
                  {item.description}
                </p>
                <p className="text-gray-500 text-xs text-center md:text-left mt-auto">
                  {item.metric}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 