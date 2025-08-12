
import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, Globe, Award, Users, Trophy } from 'lucide-react';
import logoWithText from '../assets/logo-with-text.png';
import logoCompact from '../assets/logo-compact.png';
import logoIcon from '../assets/logo-icon.png';
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
  
  // Advanced scroll-based animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 0.8, 0]);
  
  // Smooth spring animations
  const smoothBackgroundY = useSpring(backgroundY, { stiffness: 100, damping: 30 });
  const smoothContentY = useSpring(contentY, { stiffness: 100, damping: 30 });
  
  // Scroll progress indicator
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
    <motion.section ref={heroRef} id="home" className="relative min-h-screen w-full overflow-hidden">
      <LoadingTransition
        isLoading={isLoading}
        loadingComponent={
          <SectionLoader className="min-h-screen" />
        }
      >
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-400 to-sandstone z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Clean Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: smoothBackgroundY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
      </motion.div>
      
      {/* Geometric Matrix Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-[1]"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
      >
        <GeometricMatrix className="opacity-100 w-full h-full" />
      </motion.div>
      
      {/* Background Noise Layer */}
      <div 
        className="absolute inset-0 z-[2] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />



      {/* Above the Fold Content with Parallax */}
      <motion.div 
        className="relative z-10 pt-24 pb-16 w-full"
        style={{ y: smoothContentY }}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
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
            {/* Responsive Logo Display - Viewport Relative */}
            <div className="mb-12 md:mb-16">
              {/* Large screens - Logo with text */}
              <img 
                src={logoWithText} 
                alt="SanctumCap" 
                className="hidden lg:block h-32 max-h-[15rem] w-auto mx-auto"
              />
              {/* Medium screens - Compact logo */}
              <img 
                src={logoCompact} 
                alt="SanctumCap" 
                className="hidden md:block lg:hidden h-28 max-h-[12rem] w-auto mx-auto"
              />
              {/* Small screens - Icon only */}
              <div className="md:hidden flex flex-col items-center">
                <img 
                  src={logoIcon} 
                  alt="SanctumCap" 
                  className="h-24 max-h-[10rem] w-auto mb-4"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gold font-semibold text-[1.2rem] md:text-[1.4rem] tracking-wider"
                >
                  SANCTUMCAP
                </motion.div>
              </div>
            </div>
            
            {/* Trusted Badge - Immediately below logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 px-[1rem] py-[0.5rem] bg-gold/10 border border-gold/20 rounded-full text-gold text-[0.875rem] md:text-[1rem] font-medium">
                <Trophy className="w-[1rem] h-[1rem]" />
                Trusted by Global Investors Since 2015
              </span>
            </motion.div>
          </motion.div>

          {/* Main Headline - Compact for Above the Fold */}
          <div className="text-center mb-8 md:mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-black text-platinum mb-6 leading-tight tracking-tight"
              style={{ 
                fontFamily: 'Arial Black, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 3.5rem)'
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.span 
                className="block bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent font-black"
                whileHover={{ 
                  backgroundImage: "linear-gradient(45deg, #FFD700, #FFA500, #FFD700, #FFA500)",
                  backgroundSize: "200% 200%"
                }}
              >
                HIGH ALPHA
              </motion.span>
              <motion.span 
                className="block text-platinum/95 mt-2"
                style={{ fontSize: 'clamp(1.2rem, 2.8vw, 2.2rem)' }}
                whileHover={{ color: "#FFD700" }}
                transition={{ duration: 0.3 }}
              >
                INVESTMENT OPPORTUNITIES
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-platinum/85 mb-8 max-w-3xl mx-auto leading-relaxed"
              style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
            >
              Join investors from <span className="text-gold font-semibold">India, USA, Ireland, Japan, and Singapore</span> in 
              building wealth through strategic investment opportunities with proven{' '}
              <span className="text-gold font-semibold">24%+ CAGR</span> returns.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                className="bg-gradient-to-r from-gold to-gold-400 text-midnight font-semibold px-8 py-4 rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-gold/30 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 20px 40px rgba(255, 215, 0, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-200 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100"
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <span className="relative z-10">Explore Opportunities</span>
              </motion.button>
              
              <motion.button
                className="border-2 border-gold text-gold font-semibold px-8 py-4 rounded-xl hover:bg-gold hover:text-midnight transition-all duration-300 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 30px rgba(255, 215, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gold scale-x-0 group-hover:scale-x-100 origin-left"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <span className="relative z-10 group-hover:text-midnight transition-colors duration-300">Learn More</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-platinum/80 mb-[0.75rem] font-medium tracking-wider"
          style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)' }}
        >
          EXPLORE MORE
        </motion.p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gold/60 rounded-full flex justify-center cursor-pointer hover:border-gold transition-colors"
          onClick={() => scrollToSection('#metrics')}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-1 h-3 bg-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
      </LoadingTransition>
    </motion.section>
  );
};

export default HeroSection;
