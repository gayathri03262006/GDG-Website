import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  backgroundImage,
  children, 
}) => {
  return (
    <section
      className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
    >
      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:mx-20 md:text-6xl font-bold mb-6 text-gray-900"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:mx-20 md:text-2xl mb-8 max-w-3xl leading-relaxed text-gray-700 "
        >
          {subtitle}
        </motion.p>
        {children && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
