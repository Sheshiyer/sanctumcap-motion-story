import { lazy } from 'react';

// Lazy load heavy chart components
export const GDPGrowthChart = lazy(() => import('./GDPGrowthChart'));
export const GoldMetricsContainer = lazy(() => import('./GoldMetricsContainer'));
export const GlobalInvestorMap = lazy(() => import('./GlobalInvestorMap'));
export const CompanyJourney = lazy(() => import('./CompanyJourney'));
export const DeveloperPartners = lazy(() => import('./DeveloperPartners'));
export const ProvenPerformance = lazy(() => import('./ProvenPerformance'));
export const TrustFactors = lazy(() => import('./TrustFactors'));
export const InvestorPartners = lazy(() => import('./InvestorPartners'));
export const ContactSection = lazy(() => import('./ContactSection'));

// Fallback loading component
export const ComponentLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-gold/20 border-t-gold rounded-full animate-spin mx-auto mb-4" />
      <p className="text-midnight/60">Loading...</p>
    </div>
  </div>
);