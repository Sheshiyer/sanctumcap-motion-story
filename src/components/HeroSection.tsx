
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 bg-midnight rounded-lg"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-platinum mb-6 leading-tight"
        >
          We bring you high alpha opportunities to invest in the{' '}
          <span className="text-gold">Real Estate Sector</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-platinum/80 mb-12 max-w-4xl mx-auto"
        >
          Investors from Bharat, USA, Ireland, Japan and Singapore
        </motion.p>

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mb-12"
        >
          <div className="relative w-full max-w-4xl mx-auto h-64 bg-charcoal/20 rounded-2xl backdrop-blur-sm border border-gold/20 flex items-center justify-center">
            {/* Simplified world map representation */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-md">
              {['USA', 'Ireland', 'Japan', 'Singapore', 'Bharat'].map((country, index) => (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.2, type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-3 h-3 bg-gold rounded-full mb-2 animate-pulse" />
                  <span className="text-xs text-platinum/60">{country}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => scrollToSection('#contact')}
            size="lg"
            className="bg-gold hover:bg-gold-600 text-midnight font-semibold px-8 py-4 text-lg"
          >
            Start Investing
          </Button>
          <Button
            onClick={() => scrollToSection('#company')}
            size="lg"
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-midnight px-8 py-4 text-lg"
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gold rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
