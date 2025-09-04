import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DebugPage from "./pages/DebugPage";
import mobileDebugger from "./utils/debug";
import bundleAnalyzer from "./utils/bundle-analyzer";
import iOSCompatibilityTester from "./utils/ios-compatibility";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    try {
      // Check if we're in production environment
      const isProduction = process.env.NODE_ENV === 'production' ||
        (window.location.hostname !== 'localhost' &&
         !window.location.hostname.includes('127.0.0.1') &&
         !window.location.hostname.includes('dev'));

      // Initialize mobile debugging (only in development)
      if (!isProduction) {
        mobileDebugger.info('App component mounted');
        
        // Log initial app state
        mobileDebugger.info(`React version: ${React.version || 'unknown'}`);
        mobileDebugger.info(`Query client initialized: ${!!queryClient}`);
        
        // Test if critical APIs are available
        if (!window.fetch) {
          mobileDebugger.error('Fetch API not available');
        }
        
        if (!window.IntersectionObserver) {
          mobileDebugger.warn('IntersectionObserver not available');
        }
        
        // Log bundle loading status
        mobileDebugger.info('App initialization complete');
        
        // Start bundle analysis (development only)
        mobileDebugger.info('Bundle analyzer initialized');
        
        // Log bundle info after a delay
        setTimeout(() => {
          try {
            const bundleInfo = bundleAnalyzer.getBundleInfo();
            mobileDebugger.info(`Bundle analysis: ${bundleAnalyzer.generateReport()}`);
          } catch (error) {
            mobileDebugger.error('Bundle analysis failed', error as Error);
          }
        }, 3000);
        
        // Run iOS compatibility tests on iOS devices (development only)
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
          mobileDebugger.info('iOS device detected - running compatibility tests');
          setTimeout(() => {
            try {
              iOSCompatibilityTester.runAllTests();
              const compatReport = iOSCompatibilityTester.generateCompatibilityReport();
              mobileDebugger.info(`iOS Compatibility Report:\n${compatReport}`);
            } catch (error) {
              mobileDebugger.error('iOS compatibility test failed', error as Error);
            }
          }, 2000);
        }
      } else {
        // Production mode - minimal logging
        console.log('SanctumCap app initialized');
      }
    } catch (error) {
      // Fallback error handling
      console.error('Error during app initialization:', error);
      if (typeof mobileDebugger !== 'undefined') {
        mobileDebugger.error('Error during app initialization', error as Error);
      }
    }
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/debug" element={<DebugPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
