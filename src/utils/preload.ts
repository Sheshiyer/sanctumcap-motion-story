// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontPreloads = [
    '/fonts/inter-var.woff2',
    '/fonts/playfair-display.woff2'
  ];

  fontPreloads.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });

  // Preload critical images
  const criticalImages = [
    '/src/assets/logo-icon.png',
    '/src/assets/sanctumcap logo.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'image';
    document.head.appendChild(link);
  });
};

// Prefetch non-critical resources
export const prefetchResources = () => {
  const prefetchImages = [
    '/src/assets/global-map.png',
    '/src/assets/initialforay.png',
    '/src/assets/acceleratedreturns.png'
  ];

  prefetchImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = src;
    link.as = 'image';
    document.head.appendChild(link);
  });
};

// Resource hints for external domains
export const addResourceHints = () => {
  const domains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];

  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};

// Initialize all optimizations
export const initializePerformanceOptimizations = () => {
  // Run immediately for critical resources
  preloadCriticalResources();
  addResourceHints();
  
  // Defer non-critical resources
  requestIdleCallback(() => {
    prefetchResources();
  }, { timeout: 2000 });
};