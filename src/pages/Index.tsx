
import React from 'react';
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative w-full max-w-[100vw] overflow-x-hidden">
      {/* Global Silk Background */}
      <SilkBackground 
        speed={2}
        scale={1.5}
        color="#D4AF37"
        noiseIntensity={1.2}
        rotation={0.05}
        className="opacity-30"
      />
      
      {/* Global Vertical Text - Removed */}
      
      <Navigation />
      
      {/* Main Content Container with responsive margins to avoid vertical text overlap */}
      <div className="w-full max-w-[100vw] px-[4vw] md:px-[8vw] lg:px-[10vw] xl:px-[12vw] mx-auto overflow-x-hidden">
        <HeroSection />
        <div className="py-12"></div>
        <GlobalInvestorMap />
        <div className="py-12"></div>
        <ProvenPerformance />
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
      </div>
      
      {/* Footer */}
      <footer className="bg-midnight py-12 border-t border-gold/20 w-full max-w-[100vw] overflow-x-hidden">
        <div className="w-full max-w-[100vw] px-[4vw] md:px-[8vw] lg:px-[10vw] xl:px-[12vw] mx-auto overflow-x-hidden">
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
