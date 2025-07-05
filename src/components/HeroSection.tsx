
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
  const marqueeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const controls = useAnimation();
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const marqueeAnimation = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (marqueeRef.current && titleRef.current) {
      // Very slow TV news ticker-style marquee animation
      gsap.set(marqueeRef.current, { xPercent: 100 });
      marqueeAnimation.current = gsap.to(marqueeRef.current, {
        xPercent: -100,
        duration: 1200, // Extremely slow base speed - 1/10th of original
        ease: "none",
        repeat: -1,
        delay: 0
      });

      // GSAP title animation - reduced delay
      gsap.fromTo(titleRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );
    }

    // Scroll velocity tracking for marquee physics
    const handleScroll = () => {
      const currentTime = Date.now();
      const currentScrollY = window.scrollY;
      const deltaTime = currentTime - lastScrollTime.current;
      const deltaScroll = Math.abs(currentScrollY - lastScrollY.current);
      
      if (deltaTime > 0) {
        const velocity = deltaScroll / deltaTime;
        setScrollVelocity(velocity);
        
        // Update marquee speed based on scroll velocity
         if (marqueeAnimation.current) {
           // Base duration: 1200s (very slow), minimum: 200s (still slow but faster)
           // Velocity multiplier: higher velocity = slightly faster marquee
           const velocityMultiplier = Math.min(velocity * 10, 2); // Much smaller multiplier
           const newDuration = Math.max(1200 / (1 + velocityMultiplier), 200);
           
           marqueeAnimation.current.duration(newDuration);
         }
      }
      
      lastScrollY.current = currentScrollY;
      lastScrollTime.current = currentTime;
    };

    // Velocity decay - slow down marquee when not scrolling
    const velocityDecay = setInterval(() => {
      setScrollVelocity(prev => {
        const newVelocity = prev * 0.95; // Decay factor
        
        if (marqueeAnimation.current && newVelocity < 0.01) {
           // Return to base very slow speed when velocity is very low
           marqueeAnimation.current.duration(1200);
         }
        
        return newVelocity;
      });
    }, 50);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(velocityDecay);
      if (marqueeAnimation.current) {
        marqueeAnimation.current.kill();
      }
    };
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

  const marqueeTexts = [
    'TRUSTED BY GLOBAL INVESTORS',
    'PROVEN TRACK RECORD',
    'HIGH ALPHA RETURNS',
    'STRATEGIC REAL ESTATE',
    'WEALTH CREATION',
    'PREMIUM INVESTMENTS'
  ];

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight/80 via-primary-900/70 to-charcoal/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
      </div>
      
      {/* Geometric Matrix Background */}
      <GeometricMatrix className="opacity-100" />

      {/* Marquee Background Text - Always Visible with Viewport Calculations */}
      <div className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-full h-full flex items-center">
          {/* Central Horizontal Marquee for Premium Subliminal Messaging */}
          <div 
            ref={marqueeRef}
            className="absolute whitespace-nowrap font-black leading-none select-none bg-gradient-to-r from-gold/15 via-gold-400/15 to-sandstone/15 bg-clip-text text-transparent"
            style={{ 
              fontFamily: 'Arial Black, sans-serif',
              fontSize: 'clamp(8rem, 15vw, 20rem)',
              transform: 'translateY(-2vh)',
              width: 'max-content'
            }}
          >
            {marqueeTexts.join(' • ')}
          </div>
        </div>
      </div>

      {/* Above the Fold Content - Positioned at 20-30% screen height */}
      <div className="relative z-10 pt-[20vh] pb-[10vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Trusted Badge - Above the Fold */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-6 relative z-20"
          >
            {/* Responsive Logo Display */}
            <div className="mb-4">
              {/* Large screens - Logo with text */}
              <img 
                src={logoWithText} 
                alt="SanctumCap" 
                className="hidden lg:block h-20 w-auto mx-auto"
              />
              {/* Medium screens - Compact logo */}
              <img 
                src={logoCompact} 
                alt="SanctumCap" 
                className="hidden md:block lg:hidden h-16 w-auto mx-auto"
              />
              {/* Small screens - Icon only */}
              <div className="md:hidden flex flex-col items-center">
                <img 
                  src={logoIcon} 
                  alt="SanctumCap" 
                  className="h-14 w-14 mb-2"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gold font-semibold text-base tracking-wider"
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-sm font-medium">
                <Trophy className="w-4 h-4" />
                Trusted by Global Investors Since 2005
              </span>
            </motion.div>
          </motion.div>

          {/* Main Headline - Compact for Above the Fold */}
          <div className="text-center mb-8">
            <h1
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-platinum mb-4 leading-tight tracking-tight"
              style={{ fontFamily: 'Arial Black, sans-serif' }}
            >
              <span className="block text-platinum/90">HIGH ALPHA</span>
              <span className="block bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent font-black">
                REAL ESTATE
              </span>
              <span className="block text-platinum/80 text-2xl md:text-3xl lg:text-4xl mt-2">
                INVESTMENT OPPORTUNITIES
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base md:text-lg lg:text-xl text-platinum/70 mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              Join investors from <span className="text-gold font-semibold">Bharat, USA, Ireland, Japan, and Singapore</span> in 
              building wealth through strategic real estate investments with proven{' '}
              <span className="text-gold font-semibold">32%+ CAGR</span> returns.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Below the Fold Content - Metrics and Performance */}
      <div className="relative z-10 pt-[10vh] pb-[20vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Clean Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-black text-platinum mb-4 tracking-tight">
              PROVEN{' '}
              <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent font-black">
                PERFORMANCE
              </span>
            </h3>
            <p className="text-platinum/70 max-w-2xl mx-auto text-lg">
              Track record that speaks for itself
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.2 + index * 0.1
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="relative bg-midnight/20 backdrop-blur-sm rounded-xl p-6 text-center group hover:bg-midnight/30 transition-all duration-300"
                >
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all duration-300"
                    >
                      <IconComponent className="w-6 h-6 text-gold" />
                    </motion.div>
                    
                    <div className="text-3xl md:text-4xl font-black text-gold mb-2 tracking-tight">
                      {stat.value}
                    </div>
                    
                    <div className="text-sm text-platinum/80 font-medium uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

        {/* Removed CTA Section to prevent overlapping and redundancy */}
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="text-xs text-platinum/60 mb-3 font-medium tracking-wider"
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
      </div>
    </section>
  );
};

export default HeroSection;
