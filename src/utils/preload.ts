// Preload utility for critical resources
import logoIcon from '../assets/logo-icon.png';
import sanctumcapLogo from '../assets/sanctumcap logo.png';
import globalMap from '../assets/global-map.png';
import initialForay from '../assets/initialforay.png';
import acceleratedReturns from '../assets/acceleratedreturns.png';

export const preloadCriticalResources = () => {
  try {
    // Skip font preloading - using Google Fonts and system fonts
    // Fonts are loaded via CSS and don't need explicit preloading

    // Preload critical images with production-compatible paths
    const criticalImages = [
      logoIcon,
      sanctumcapLogo
    ];

    criticalImages.forEach(src => {
      try {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        link.onerror = () => console.warn(`Failed to preload image: ${src}`);
        document.head.appendChild(link);
      } catch (error) {
        console.warn(`Error preloading image ${src}:`, error);
      }
    });
  } catch (error) {
    console.warn('Error in preloadCriticalResources:', error);
  }
};

// Prefetch non-critical resources
export const prefetchResources = () => {
  try {
    const prefetchImages = [
      globalMap,
      initialForay,
      acceleratedReturns
    ];

    prefetchImages.forEach(src => {
      try {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = src;
        link.as = 'image';
        link.onerror = () => console.warn(`Failed to prefetch image: ${src}`);
        document.head.appendChild(link);
      } catch (error) {
        console.warn(`Error prefetching image ${src}:`, error);
      }
    });
  } catch (error) {
    console.warn('Error in prefetchResources:', error);
  }
};

// Resource hints for external domains
export const addResourceHints = () => {
  try {
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    domains.forEach(domain => {
      try {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      } catch (error) {
        console.warn(`Error adding DNS prefetch for ${domain}:`, error);
      }
    });
  } catch (error) {
    console.warn('Error in addResourceHints:', error);
  }
};

// Initialize all optimizations
export const initializePerformanceOptimizations = () => {
  try {
    // Run immediately for critical resources
    preloadCriticalResources();
    addResourceHints();
    
    // Defer non-critical resources with Safari compatibility
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        try {
          prefetchResources();
        } catch (error) {
          console.warn('Error in deferred prefetchResources:', error);
        }
      }, { timeout: 2000 });
    } else {
      // Safari fallback - use setTimeout instead
      setTimeout(() => {
        try {
          prefetchResources();
        } catch (error) {
          console.warn('Error in fallback prefetchResources:', error);
        }
      }, 100);
    }
  } catch (error) {
    console.warn('Error in initializePerformanceOptimizations:', error);
  }
};