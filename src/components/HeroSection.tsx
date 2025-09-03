
import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, Globe, Award, Users, Trophy } from 'lucide-react';
import sanctumCapLogo from '../assets/sanctumcap logo.png';
// import GlobalVerticalText from './GlobalVerticalText'; // Removed
import GeometricMatrix from './GeometricMatrix';
import { SectionLoader, StaggerContainer, LoadingItem } from './LoadingStates';
import { LoadingTransition } from './PageTransition';
import { SmoothReveal } from './PageTransition';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  
  // Advanced scroll-based animations for hero section
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Global scroll progress for the entire document
  const { scrollYProgress: globalScrollProgress } = useScroll();
  
  // Simplified scroll animations without problematic parallax
  const logoScale = useTransform(heroScrollProgress, [0, 0.5], [1, 0.95]);
  const logoOpacity = useTransform(heroScrollProgress, [0, 0.5, 1], [1, 0.9, 0.8]);
  
  // Scroll progress indicator - tracks entire document
  const scaleX = useTransform(globalScrollProgress, [0, 1], [0, 1]);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAssetsLoaded(true);
      setTimeout(() => setIsLoading(false), 500);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: TrendingUp, value: '₹50+ Cr', label: 'Assets Under Management' },
    { icon: Award, value: '24%+', label: 'Best CAGR Achieved' },
    { icon: Globe, value: '5', label: 'Countries' },
    { icon: Users, value: '100+', label: 'Global Investors' }
  ];



  return (
    <motion.section ref={heroRef} id="home" className="relative min-h-[80vh] w-full overflow-visible" style={{backgroundColor: '#E7E7E9'}}>
      <LoadingTransition
        isLoading={isLoading}
        loadingComponent={
          <SectionLoader className="min-h-[80vh]" />
        }
      >
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-400 to-sandstone z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Clean Light Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>



      {/* Blue horizontal stripe behind logo - seamless with navigation */}
      <div className="absolute left-0 right-0 z-5" style={{
        top: '0px',
        height: '280px',
        backgroundColor: '#0D1A36'
      }} />

      {/* Above the Fold Content - Fixed */}
      <div className="relative z-10 pt-20 pb-16 w-full min-h-screen">
        <div className="w-full max-w-[100vw] px-[4vw] md:px-[6vw] lg:px-[8vw] mx-auto overflow-visible">
          {/* Logo and Trusted Badge - Above the Fold */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50, rotateX: 45 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.2
            }}
            className="text-center mb-16 md:mb-20 relative z-20"
            style={{ 
              scale: logoScale,
              opacity: logoOpacity
            }}
          >
            {/* New SanctumCap Logo */}
            <div className="mb-0">
              <img
              src={sanctumCapLogo}
              alt="SanctumCap"
              className="h-44 max-h-[20rem] w-auto mx-auto"
            />
            </div>
          </motion.div>

          {/* Trusted Badge - Below Blue Patch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center relative z-20"
            style={{ paddingTop: '32px', paddingBottom: '24px' }}
          >
            <span className="inline-flex items-center gap-2 px-[1rem] py-[0.5rem] bg-white/80 border border-gray-300 rounded-full text-[0.875rem] md:text-[1rem] font-medium" style={{color: '#0D1A36'}}>
              <Trophy className="w-[1rem] h-[1rem]" style={{color: '#B8860B'}} />
              Trusted by Global Investors Since 2015
            </span>
          </motion.div>

          {/* Main Headline - Compact for Above the Fold */}
          <div className="text-center mb-8 md:mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-black mb-6 leading-tight tracking-tight motion-text-fix"
              style={{ 
                fontFamily: 'Arial Black, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
                overflow: 'visible',
                color: '#B8860B'
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.span 
                className="block font-black"
                style={{ color: '#B8860B' }}
              >
                HIGH ALPHA
              </motion.span>
              <motion.span 
                className="block mt-2"
                style={{ 
                  fontSize: 'clamp(1.2rem, 2.8vw, 2.2rem)',
                  color: '#0D1A36'
                }}
              >
                Investment Opportunities
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-8 max-w-3xl mx-auto leading-relaxed motion-text-fix"
              style={{ 
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', 
                overflow: 'visible',
                color: '#0D1A36'
              }}
            >
              Join investors from <span className="font-semibold" style={{color: '#B8860B'}}>India, USA, Ireland, Japan, and Singapore</span> in 
              building wealth through strategic investment opportunities with proven{' '}
              <span className="font-semibold" style={{color: '#B8860B'}}>24%+ CAGR</span> returns.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 sm:gap-6 justify-center mb-16 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                onClick={() => {
                  const element = document.getElementById('metrics');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-gold to-gold-400 text-midnight font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-gold/30 relative overflow-hidden group w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 20px 40px rgba(255, 215, 0, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-300 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100"
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <span className="relative z-10">Explore Opportunities</span>
              </motion.button>
              
              <motion.button
                className="border border-[#CCCCCC] text-[#333333] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-slate-400 hover:text-midnight transition-all duration-300 relative overflow-hidden group w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 30px rgba(100, 116, 139, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onClick={() => document.getElementById('developers')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.div
                  className="absolute inset-0 bg-slate-400 scale-x-0 group-hover:scale-x-100 origin-left"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <span className="relative z-10 group-hover:text-midnight transition-colors duration-300">Learn More</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>


      </LoadingTransition>
    </motion.section>
  );
};

export default HeroSection;
