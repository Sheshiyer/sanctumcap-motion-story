# Performance Optimization Checklist

## Core Web Vitals Targets

### Largest Contentful Paint (LCP)
- **Target**: < 2.5 seconds
- **Critical Path**: Hero section image and typography
- **Optimizations**:
  - [ ] Preload hero background image
  - [ ] Use `next/image` with priority flag
  - [ ] Implement WebP/AVIF format with fallbacks
  - [ ] Optimize font loading with `font-display: swap`

### First Input Delay (FID)
- **Target**: < 100 milliseconds
- **Critical Path**: Interactive elements and animations
- **Optimizations**:
  - [ ] Defer non-critical JavaScript
  - [ ] Use `requestIdleCallback` for heavy computations
  - [ ] Implement code splitting for animation libraries
  - [ ] Optimize event handlers with debouncing

### Cumulative Layout Shift (CLS)
- **Target**: < 0.1
- **Critical Path**: Dynamic content and animations
- **Optimizations**:
  - [ ] Define explicit dimensions for all images
  - [ ] Reserve space for dynamic content
  - [ ] Use CSS `aspect-ratio` for responsive images
  - [ ] Avoid layout-triggering animations

## Animation Performance

### Frame Rate Targets
- **Target**: Consistent 60fps (16.67ms per frame)
- **Monitoring**: Use Chrome DevTools Performance tab
- **Optimizations**:
  - [ ] Use `transform` and `opacity` only for animations
  - [ ] Enable GPU acceleration with `will-change`
  - [ ] Implement `IntersectionObserver` for scroll animations
  - [ ] Use `requestAnimationFrame` for custom animations

### Framer Motion Optimizations
```typescript
// Performance-optimized animation configuration
const performantVariants = {
  initial: { opacity: 0, transform: 'translateY(20px)' },
  animate: { 
    opacity: 1, 
    transform: 'translateY(0px)',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      // Reduce motion for performance
      reduce: { duration: 0.2 }
    }
  }
};

// GPU acceleration hints
const gpuOptimized = {
  style: {
    willChange: 'transform, opacity',
    backfaceVisibility: 'hidden',
    perspective: 1000
  }
};
```

### Memory Management
- **Target**: < 50MB heap size increase during animations
- **Monitoring**: Chrome DevTools Memory tab
- **Optimizations**:
  - [ ] Cleanup animation listeners on unmount
  - [ ] Use `useCallback` and `useMemo` for animation functions
  - [ ] Implement lazy loading for off-screen animations
  - [ ] Dispose of Three.js/WebGL contexts properly

## Image Optimization

### Loading Performance
- **Target**: < 1 second for above-the-fold images
- **Formats**: WebP (primary), AVIF (progressive), JPEG (fallback)
- **Optimizations**:
  - [ ] Implement responsive image sizes
  - [ ] Use blur-up placeholder technique
  - [ ] Preload critical images
  - [ ] Lazy load below-the-fold images

### Image Configuration
```typescript
// Next.js Image optimization
const imageConfig = {
  domains: ['images.unsplash.com', 'images.pexels.com'],
  formats: ['image/avif', 'image/webp'],
  sizes: {
    mobile: '(max-width: 768px) 100vw',
    tablet: '(max-width: 1200px) 50vw',
    desktop: '33vw'
  },
  quality: 85,
  priority: true // For hero images only
};
```

## Bundle Optimization

### JavaScript Bundle Size
- **Target**: < 200KB initial bundle (gzipped)
- **Target**: < 50KB per route chunk
- **Optimizations**:
  - [ ] Implement dynamic imports for heavy components
  - [ ] Tree-shake unused Framer Motion features
  - [ ] Use bundle analyzer to identify large dependencies
  - [ ] Implement route-based code splitting

### CSS Optimization
- **Target**: < 50KB critical CSS
- **Optimizations**:
  - [ ] Purge unused Tailwind classes
  - [ ] Inline critical CSS
  - [ ] Use CSS containment for isolated components
  - [ ] Minimize custom CSS with Tailwind utilities

## Runtime Performance Monitoring

### Performance Metrics Collection
```typescript
// Performance monitoring setup
const performanceMonitor = {
  // Core Web Vitals
  lcp: { threshold: 2500, samples: 100 },
  fid: { threshold: 100, samples: 100 },
  cls: { threshold: 0.1, samples: 100 },
  
  // Custom metrics
  animationFrameRate: { target: 60, tolerance: 5 },
  scrollPerformance: { target: 16.67, tolerance: 2 },
  memoryUsage: { threshold: 50 * 1024 * 1024 } // 50MB
};

// Performance observer implementation
const observePerformance = () => {
  // LCP observer
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.startTime);
  }).observe({ entryTypes: ['largest-contentful-paint'] });
  
  // FID observer
  new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      console.log('FID:', entry.processingStart - entry.startTime);
    });
  }).observe({ entryTypes: ['first-input'] });
};
```

## Testing Strategy

### Automated Performance Testing
- **Tools**: Lighthouse CI, WebPageTest, Playwright
- **Frequency**: Every deployment
- **Thresholds**:
  - [ ] Lighthouse Performance Score > 90
  - [ ] LCP < 2.5s across all pages
  - [ ] FID < 100ms for all interactions
  - [ ] CLS < 0.1 for all viewport sizes

### Device Testing Matrix
```typescript
const testDevices = {
  mobile: {
    device: 'iPhone 12',
    network: '3G Fast',
    viewport: '375x812',
    targets: { lcp: 3000, fid: 150 }
  },
  tablet: {
    device: 'iPad Air',
    network: '4G',
    viewport: '820x1180',
    targets: { lcp: 2500, fid: 100 }
  },
  desktop: {
    device: 'Desktop',
    network: 'Cable',
    viewport: '1920x1080',
    targets: { lcp: 2000, fid: 50 }
  }
};
```

## Optimization Checklist by Component

### Navigation Component
- [ ] Implement virtual scrolling for mobile menu
- [ ] Debounce search input with 300ms delay
- [ ] Use CSS transforms for menu animations
- [ ] Preload critical navigation assets

### Hero Section
- [ ] Optimize hero background image (WebP, 1920x1080)
- [ ] Implement progressive image loading
- [ ] Use CSS Grid for layout stability
- [ ] Defer non-critical animations until after LCP

### Investment Metrics
- [ ] Use CSS counters for animated numbers
- [ ] Implement intersection observer for trigger
- [ ] Cache calculation results with useMemo
- [ ] Use transform3d for GPU acceleration

### Company Journey Timeline
- [ ] Implement virtual scrolling for long timelines
- [ ] Use CSS containment for timeline items
- [ ] Lazy load timeline images
- [ ] Optimize SVG icons and illustrations

### Investor Partners Grid
- [ ] Implement masonry layout with CSS Grid
- [ ] Use image placeholders during loading
- [ ] Optimize portrait images (400x400 WebP)
- [ ] Implement hover state debouncing

### GDP Growth Visualization
- [ ] Use Canvas for complex chart animations
- [ ] Implement data point virtualization
- [ ] Cache chart calculations
- [ ] Use Web Workers for heavy computations

### Developer Partners Showcase
- [ ] Implement carousel with virtual slides
- [ ] Optimize partner logos (SVG preferred)
- [ ] Use CSS transforms for slide transitions
- [ ] Preload adjacent slides

### Contact Section
- [ ] Implement form validation debouncing
- [ ] Use CSS Grid for responsive layout
- [ ] Optimize form submission handling
- [ ] Implement progressive enhancement

## Deployment Optimizations

### Static Site Generation
```typescript
// Next.js static export configuration
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // For static export
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react']
  }
};
```

### CDN Configuration
- [ ] Configure aggressive caching for static assets
- [ ] Implement image optimization at CDN level
- [ ] Use HTTP/2 server push for critical resources
- [ ] Enable Brotli compression

## Success Metrics

### Performance Targets
- **Lighthouse Performance Score**: > 95
- **Time to Interactive**: < 3 seconds
- **Total Blocking Time**: < 200ms
- **Speed Index**: < 2 seconds
- **Bundle Size**: < 200KB (gzipped)

### User Experience Metrics
- **Animation Smoothness**: 60fps maintained
- **Scroll Performance**: No jank during scroll
- **Interaction Responsiveness**: < 100ms response time
- **Memory Usage**: < 100MB peak usage
- **Battery Impact**: Minimal CPU usage on mobile

### Monitoring Dashboard
```typescript
const performanceDashboard = {
  realUserMetrics: {
    lcp: { p75: 2200, p95: 3000 },
    fid: { p75: 80, p95: 120 },
    cls: { p75: 0.05, p95: 0.08 }
  },
  syntheticMetrics: {
    lighthouse: { performance: 96, accessibility: 100 },
    webPageTest: { speedIndex: 1800, fcp: 1200 }
  },
  businessMetrics: {
    bounceRate: { target: '<30%', current: '25%' },
    timeOnPage: { target: '>2min', current: '2.5min' },
    conversionRate: { target: '>5%', current: '6.2%' }
  }
};
```

This performance optimization checklist ensures the SanctumCap website delivers exceptional user experience while maintaining sophisticated animations and interactions.