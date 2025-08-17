import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import globalMapImage from '@/assets/global-map.png';
import { CardSkeleton, StaggerContainer, LoadingItem } from './LoadingStates';
import { LoadingTransition, SmoothReveal } from './PageTransition';

const GlobalInvestorMap = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mapDataLoaded, setMapDataLoaded] = useState(false);
  
  // Simulate loading map data
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapDataLoaded(true);
      setTimeout(() => setIsLoading(false), 400);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  
  // Advanced scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Simplified scroll animations without problematic parallax
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const investorCountries = [
    { 
      name: 'USA', 
      flag: '🇺🇸',
      investors: '25+',
      description: 'Leading institutional investors'
    },
    { 
      name: 'Ireland', 
      flag: '🇮🇪',
      investors: '15+',
      description: 'European investment partners'
    },
    { 
      name: 'India', 
      flag: '🇮🇳',
      investors: '40+',
      description: 'Domestic market leaders'
    },
    { 
      name: 'Japan', 
      flag: '🇯🇵',
      investors: '12+',
      description: 'Asian Pacific investors'
    },
    { 
      name: 'Singapore', 
      flag: '🇸🇬',
      investors: '18+',
      description: 'Southeast Asian hub'
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-20 w-full max-w-[100vw] overflow-visible"
      style={{ opacity, paddingTop: '2em', paddingBottom: '2em' }}
    >
      {/* Background - Fixed */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
      
      <div className="w-full max-w-[100vw] px-[4vw] md:px-[6vw] lg:px-[8vw] mx-auto relative z-10 overflow-visible">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-midnight mb-6 tracking-tight">
            GLOBAL{' '}
            <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent font-black">
              INVESTOR
            </span>{' '}
            NETWORK
          </h3>
          <p className="text-lg md:text-xl text-midnight/85 max-w-3xl mx-auto leading-relaxed">
            Trusted by investors across five countries, building wealth through strategic real estate investments
          </p>
        </motion.div>

        {/* Map Background Container with Advanced Parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full mb-16"
        >
          {/* Background Map */}
          <div className="absolute inset-0 w-full h-full opacity-20 rounded-2xl overflow-hidden">
            <img 
              src={globalMapImage} 
              alt="World Map Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Country Bento Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
            {investorCountries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true }}
                className="group relative bg-midnight backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 shadow-lg hover:shadow-xl overflow-visible cursor-pointer"
              >
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.3)_0%,transparent_50%)] group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px]" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Flag and Country */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl">{country.flag}</div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-slate-200 transition-colors duration-300">
                        {country.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/80">{country.description}</p>
                    </div>
                  </div>
                  
                  {/* Investor Count */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-slate-300 mb-1">{country.investors}</div>
                      <div className="text-xs text-white/85 uppercase tracking-wider">Investors</div>
                    </div>
                    
                    {/* Decorative Element */}
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-500/30 flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 50%, rgba(212, 175, 55, 0.1) 100%)'
                      }}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                        boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)"
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <motion.div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: '#D4AF37' }}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                {/* Hover glow effect removed */}
                
                {/* Animated Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    background: [
                      "linear-gradient(0deg, rgba(255,215,0,0.1) 0%, transparent 50%, rgba(255,215,0,0.1) 100%)",
                      "linear-gradient(90deg, rgba(255,215,0,0.1) 0%, transparent 50%, rgba(255,215,0,0.1) 100%)",
                      "linear-gradient(180deg, rgba(255,215,0,0.1) 0%, transparent 50%, rgba(255,215,0,0.1) 100%)",
                      "linear-gradient(270deg, rgba(255,215,0,0.1) 0%, transparent 50%, rgba(255,215,0,0.1) 100%)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-midnight/90 mb-6">
            Join our global community of successful real estate investors
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-gold to-gold-600 text-midnight font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Investment Journey
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GlobalInvestorMap;