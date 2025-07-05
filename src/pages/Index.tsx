
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import InvestmentMetrics from '@/components/InvestmentMetrics';
import CompanyJourney from '@/components/CompanyJourney';
import InvestorPartners from '@/components/InvestorPartners';
import GDPGrowthChart from '@/components/GDPGrowthChart';
import DeveloperPartners from '@/components/DeveloperPartners';
import ContactSection from '@/components/ContactSection';
import SilkBackground from '@/components/SilkBackground';
import GlobalVerticalText from '@/components/GlobalVerticalText';
import logoCompact from '@/assets/logo-compact.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global Silk Background */}
      <SilkBackground 
        speed={2}
        scale={1.5}
        color="#D4AF37"
        noiseIntensity={1.2}
        rotation={0.05}
        className="opacity-30"
      />
      
      {/* Global Vertical Text - Persists across all sections */}
      <GlobalVerticalText />
      
      <Navigation />
      <HeroSection />
      <div className="py-8"></div>
      <InvestmentMetrics />
      <div className="py-8"></div>
      <CompanyJourney />
      <div className="py-8"></div>
      <InvestorPartners />
      <div className="py-8"></div>
      <GDPGrowthChart />
      <div className="py-8"></div>
      <DeveloperPartners />
      <div className="py-8"></div>
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-midnight py-12 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src={logoCompact} 
                alt="SanctumCap Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-platinum">SanctumCap</span>
            </div>
            
            <div className="text-platinum/60 text-center md:text-right">
              <p>&copy; 2024 SanctumCap. All rights reserved.</p>
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
