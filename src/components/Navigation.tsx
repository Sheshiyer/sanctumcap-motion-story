
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoIcon from '@/assets/logo-icon.png';

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'Why Sanctum', href: '#trust' },
  { label: 'Investment Metrics', href: '#metrics' },
  { label: 'Investor Partners', href: '#investors' },
  { label: 'Completed Projects', href: '#developers' },
  { label: 'Contact', href: '#contact' }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-[100vw] overflow-visible ${
        isScrolled 
          ? 'bg-midnight/95 backdrop-blur-xl border-b border-gold/20 shadow-2xl shadow-gold/10' 
          : 'bg-midnight/80 backdrop-blur-md border-b border-gold/10'
      }`}
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={logoIcon} 
              alt="SanctumCap Logo" 
              className="h-7 w-7 sm:h-8 sm:w-8"
            />
            <h1 
              className="text-lg sm:text-xl lg:text-2xl font-black bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent tracking-tight"
              style={{ fontFamily: 'Arial Black, sans-serif' }}
            >
              SANCTUMCAP
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-1 justify-center max-w-4xl mx-8">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm xl:text-base text-white/85 hover:text-gold transition-colors duration-300 font-medium relative whitespace-nowrap px-2 py-1 group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  textShadow: "0 0 8px rgba(255, 215, 0, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ color: "#FFD700" }}
                >
                  {item.label}
                </motion.span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ 
                    scaleX: 1,
                    boxShadow: "0 0 10px rgba(255, 215, 0, 0.8)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-slate-600/10 rounded-lg scale-0 group-hover:scale-100"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-gold to-gold-400 text-midnight font-semibold text-sm xl:text-base px-4 xl:px-6 py-2 rounded-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-gold/30 relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 20px 40px rgba(255, 215, 0, 0.4)",
                rotate: [0, -1, 1, 0]
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-300 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100"
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <span className="relative z-10">Get Started</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-midnight/95 backdrop-blur-xl border border-gold/20 rounded-xl mt-3 p-4 shadow-2xl shadow-gold/10 mx-4 sm:mx-6"
          >
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-2 text-white/85 hover:text-gold hover:bg-gold/10 transition-all duration-200 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="pt-4 mt-4 border-t border-gold/20">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-to-r from-gold to-gold-400 hover:from-gold-400 hover:to-gold-500 text-midnight font-medium py-3 shadow-lg hover:shadow-gold/30 transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
