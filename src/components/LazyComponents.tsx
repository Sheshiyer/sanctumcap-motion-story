import { lazy } from 'react';
import ErrorBoundary from './ErrorBoundary';

// Lazy load heavy chart components with error boundaries
export const GDPGrowthChart = lazy(() => import('./GDPGrowthChart').catch(() => ({ default: () => <div className="py-20 text-center text-gray-500">Chart temporarily unavailable</div> })));
export const GoldMetricsContainer = lazy(() => import('./GoldMetricsContainer').catch(() => ({ default: () => <div className="py-20 text-center text-gray-500">Metrics temporarily unavailable</div> })));
export const GlobalInvestorMap = lazy(() => import('./GlobalInvestorMap').catch(() => ({ default: () => <div className="py-20 text-center text-gray-500">Map temporarily unavailable</div> })));
export const CompanyJourney = lazy(() => import('./CompanyJourney').catch(() => ({ default: () => <div className="py-20 text-center text-gray-500">Journey section temporarily unavailable</div> })));
export const DeveloperPartners = lazy(() => import('./DeveloperPartners').catch(() => ({ default: () => <div className="py-20 text-center text-gray-500">Partners section temporarily unavailable</div> })));
export const ProvenPerformance = lazy(() => import('./ProvenPerformance').catch(() => ({ default: () => <div className="py-20 text-center text-gray-500">Performance section temporarily unavailable</div> })));
export const TrustFactors = lazy(() => import('./TrustFactors').catch(() => ({ default: () => <div className="py-20 text-center text-gray-500">Trust factors temporarily unavailable</div> })));
export const InvestorPartners = lazy(() => import('./InvestorPartners').catch(() => ({ default: () => <div className="py-20 text-center text-gray-500">Investor partners temporarily unavailable</div> })));
export const ContactSection = lazy(() => import('./ContactSection').catch(() => ({ default: () => <div className="py-20 text-center text-gray-500">Contact form temporarily unavailable</div> })));

// Fallback loading component
export const ComponentLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-gold/20 border-t-gold rounded-full animate-spin mx-auto mb-4" />
      <p className="text-midnight/60">Loading...</p>
    </div>
  </div>
);

// Wrapper component with error boundary for lazy components
export const SafeLazyComponent = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary fallback={
    <div className="py-20 text-center text-gray-500">
      Section temporarily unavailable
    </div>
  }>
    {children}
  </ErrorBoundary>
);