import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import { galleryImages, eventGroups } from '../data/galleryData';

const Gallery: React.FC = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-cycle through events and images
  useEffect(() => {
    const eventTimer = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % eventGroups.length);
      setCurrentImageIndex(0);
    }, 4000);

    return () => clearInterval(eventTimer);
  }, []);

  useEffect(() => {
    if (eventGroups[currentEventIndex]?.images.length > 1) {
      const imageTimer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % eventGroups[currentEventIndex].images.length);
      }, 2000);

      return () => clearInterval(imageTimer);
    }
  }, [currentEventIndex]);

  const scrollingImages = [...galleryImages, ...galleryImages]; // Duplicate for seamless loop

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Gallery"
        subtitle="Explore moments captured from our events, workshops, and community activities."
        backgroundImage="/Gallery.png"
      />

      {/* Infinite Scrolling Gallery */}
<section className="py-12 px-4 bg-gray-50 dark:bg-gray-900 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <h2 className="font-heading text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Event Highlights
      </h2>
      <p className="font-body text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        A visual journey through our community events and activities.
      </p>
    </motion.div>

    {/* Row 1 - Left to Right */}
    <div className="mb-6 overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex space-x-4 md:space-x-6"
      >
        {scrollingImages.map((image, index) => (
          <div
            key={`row1-${index}`}
            className="flex-shrink-0 w-48 h-32 sm:w-60 sm:h-40 md:w-72 md:h-52 lg:w-80 lg:h-60 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>

    {/* Row 2 - Right to Left */}
    <div className="mb-6 overflow-hidden">
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex space-x-4 md:space-x-6"
      >
        {scrollingImages.map((image, index) => (
          <div
            key={`row2-${index}`}
            className="flex-shrink-0 w-48 h-32 sm:w-60 sm:h-40 md:w-72 md:h-52 lg:w-80 lg:h-60 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Gallery;