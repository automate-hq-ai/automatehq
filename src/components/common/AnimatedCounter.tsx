import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  duration = 2,
  className = '',
  decimals = 0
}) => {
  const [isInView, setIsInView] = useState(false);
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000
  });

  const displayValue = useTransform(spring, (latest) => {
    return `${latest.toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <motion.div
      className={className}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true }}
    >
      <motion.span>{displayValue}</motion.span>
    </motion.div>
  );
};

export default AnimatedCounter; 