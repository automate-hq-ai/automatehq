import React from 'react';

interface CardProps {
  children: any;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`glass glass-hover p-6 rounded-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;