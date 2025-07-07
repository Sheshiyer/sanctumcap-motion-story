
import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, Globe, Award, Users, Trophy } from 'lucide-react';
import logoWithText from '../assets/logo-with-text.png';
import logoCompact from '../assets/logo-compact.png';
import logoIcon from '../assets/logo-icon.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlobalVerticalText from './GlobalVerticalText';
import GeometricMatrix from './GeometricMatrix';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const controls = useAnimation();


  useEffect(() => {
    if (titleRef.current) {
      // GSAP title animation - reduced delay
      gsap.fromTo(titleRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: TrendingUp, value: '₹50+ Cr', label: 'Assets Under Management' },
    { icon: Award, value: '32%+', label: 'Best CAGR Achieved' },
    { icon: Globe, value: '5', label: 'Countries' },
    { icon: Users, value: '100+', label: 'Global Investors' }
  ];



  return (
    <section ref={heroRef} id="home" className="relative min-h-screen w-full max-w-[100vw] overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight/80 via-primary-900/70 to-charcoal/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
      </div>
      
      {/* Geometric Matrix Background - Full Coverage */}
      <div className="absolute inset-0 z-[1]">
        <GeometricMatrix className="opacity-100 w-full h-full" />
      </div>
      
      {/* Background Noise Layer */}
      <div 
        className="absolute inset-0 z-[2] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />



      {/* Above the Fold Content - Positioned at 15-25% screen height */}
      <div className="relative z-10 pt-[12vh] pb-[6vh] w-full max-w-[100vw] overflow-x-hidden">
        <div className="w-full max-w-[100vw] px-[4vw] md:px-[6vw] lg:px-[8vw] mx-auto overflow-x-hidden">
          {/* Logo and Trusted Badge - Above the Fold */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-[4vh] md:mb-[6vh] relative z-20"
          >
            {/* Responsive Logo Display - Viewport Relative */}
            <div className="mb-[3vh] md:mb-[4vh]">
              {/* Large screens - Logo with text */}
              <img 
                src={logoWithText} 
                alt="SanctumCap" 
                className="hidden lg:block h-[12vh] max-h-[15rem] w-auto mx-auto"
              />
              {/* Medium screens - Compact logo */}
              <img 
                src={logoCompact} 
                alt="SanctumCap" 
                className="hidden md:block lg:hidden h-[10vh] max-h-[12rem] w-auto mx-auto"
              />
              {/* Small screens - Icon only */}
              <div className="md:hidden flex flex-col items-center">
                <img 
                  src={logoIcon} 
                  alt="SanctumCap" 
                  className="h-[8vh] max-h-[10rem] w-auto mb-[1vh]"
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
                Trusted by Global Investors Since 2005
              </span>
            </motion.div>
          </motion.div>

          {/* Main Headline - Compact for Above the Fold */}
          <div className="text-center mb-[2vh] md:mb-[3vh]">
            <h1
              ref={titleRef}
              className="font-black text-platinum mb-[1.5vh] leading-tight tracking-tight"
              style={{ 
                fontFamily: 'Arial Black, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 3.5rem)'
              }}
            >
              <span className="block text-platinum/90">HIGH ALPHA</span>
              <span className="block bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent font-black">
                REAL ESTATE
              </span>
              <span 
                className="block text-platinum/80 mt-[0.5vh]"
                style={{ fontSize: 'clamp(1.2rem, 2.8vw, 2.2rem)' }}
              >
                INVESTMENT OPPORTUNITIES
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-platinum/70 mb-[2vh] max-w-3xl mx-auto leading-relaxed"
              style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
            >
              Join investors from <span className="text-gold font-semibold">India, USA, Ireland, Japan, and Singapore</span> in 
              building wealth through strategic real estate investments with proven{' '}
              <span className="text-gold font-semibold">32%+ CAGR</span> returns.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-[2vh] left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-platinum/60 mb-[0.75rem] font-medium tracking-wider"
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
    </section>
  );
};

export default HeroSection;
