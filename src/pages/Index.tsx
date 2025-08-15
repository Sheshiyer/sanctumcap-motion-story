
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GlobalInvestorMap from '@/components/GlobalInvestorMap';
import ProvenPerformance from '@/components/ProvenPerformance';
import InvestmentMetrics from '@/components/InvestmentMetrics';
import CompanyJourney from '@/components/CompanyJourney';
import InvestorPartners from '@/components/InvestorPartners';
import GDPGrowthChart from '@/components/GDPGrowthChart';
import DeveloperPartners from '@/components/DeveloperPartners';
import ContactSection from '@/components/ContactSection';
import SilkBackground from '@/components/SilkBackground';
// import GlobalVerticalText from '@/components/GlobalVerticalText'; // Removed
import logoIcon from '@/assets/logo-icon.png';

// Animated Section Separator Component
const SectionSeparator = ({ className = "", opacity = 20 }: { className?: string; opacity?: number }) => (
  <div className={`relative py-12 ${className}`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div 
        className={`w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gold/${opacity} to-transparent`}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </div>
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="w-2 h-2 bg-midnight/40 rounded-full animate-pulse" />
    </motion.div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-[80vh] relative w-full">
      {/* Global Silk Background - Adjusted for light theme */}
      <SilkBackground 
        speed={2}
        scale={1.5}
        color="#D4AF37"
        noiseIntensity={0.8}
        rotation={0.05}
        className="opacity-20"
      />
      
      {/* Global Vertical Text - Removed */}
      
      <Navigation />
      
      {/* Main Content Container */}
      <div className="w-full">
        <HeroSection />
        
        {/* Light background container for all sections after hero */}
        <div className="bg-background">
          <SectionSeparator className="py-16" opacity={30} />
          
          <ProvenPerformance />
          
          <SectionSeparator />
          
          <GlobalInvestorMap />
          
          <SectionSeparator />
          
          <InvestmentMetrics />
          
          <SectionSeparator />
          
          <CompanyJourney />
          
          <SectionSeparator />
          
          <InvestorPartners />
          
          <SectionSeparator />
          
          <GDPGrowthChart />
          
          <SectionSeparator />
          
          <DeveloperPartners />
          
          <SectionSeparator />
          
          <ContactSection />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-midnight py-12 border-t border-gold/20 w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src={logoIcon} 
                alt="SanctumCap Logo" 
                className="h-8 w-8"
              />
              <h2 
                className="text-2xl font-black bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent tracking-tight"
                style={{ fontFamily: 'Arial Black, sans-serif' }}
              >
                SANCTUMCAP
              </h2>
            </div>
            
            <div className="text-platinum/60 text-center md:text-right">
              <p>&copy; 2025 SanctumCap. All rights reserved.</p>
              <p className="text-sm mt-1">
                Investing in your future through strategic real estate opportunities
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
