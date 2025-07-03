
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import InvestmentMetrics from '@/components/InvestmentMetrics';
import CompanyJourney from '@/components/CompanyJourney';
import InvestorPartners from '@/components/InvestorPartners';
import GDPGrowthChart from '@/components/GDPGrowthChart';
import DeveloperPartners from '@/components/DeveloperPartners';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <InvestmentMetrics />
      <CompanyJourney />
      <InvestorPartners />
      <GDPGrowthChart />
      <DeveloperPartners />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-midnight py-12 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 bg-midnight rounded-sm"></div>
              </div>
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
