// Bundle size analysis and iOS-specific optimizations

import mobileDebugger from './debug';

interface BundleInfo {
  totalSize: number;
  chunks: { name: string; size: number }[];
  loadTime: number;
  memoryUsage?: number;
}

class BundleAnalyzer {
  private startTime: number;
  private loadedChunks: Set<string> = new Set();
  private chunkSizes: Map<string, number> = new Map();
  private isProduction: boolean;

  constructor() {
    this.startTime = performance.now();
    this.isProduction = 
      process.env.NODE_ENV === 'production' ||
      (window.location.hostname !== 'localhost' &&
       !window.location.hostname.includes('127.0.0.1') &&
       !window.location.hostname.includes('dev'));
    this.init();
  }

  private init() {
    // Skip initialization in production unless debug is explicitly enabled
    if (this.isProduction && !window.location.search.includes('debug=true')) {
      return;
    }
    
    // Monitor script loading
    this.monitorScriptLoading();
    
    // Monitor memory usage
    this.monitorMemoryUsage();
    
    // Check for iOS-specific issues
    this.checkiOSCompatibility();
  }

  private monitorScriptLoading() {
    // Monitor all script tags
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.tagName === 'SCRIPT') {
              const script = element as HTMLScriptElement;
              this.trackScript(script);
            }
          }
        });
      });
    });

    observer.observe(document.head, { childList: true, subtree: true });
    observer.observe(document.body, { childList: true, subtree: true });

    // Track existing scripts
    document.querySelectorAll('script').forEach(script => {
      this.trackScript(script);
    });
  }

  private trackScript(script: HTMLScriptElement) {
    const src = script.src;
    if (!src) return;

    const chunkName = this.extractChunkName(src);
    
    script.addEventListener('load', () => {
      this.loadedChunks.add(chunkName);
      mobileDebugger.info(`Chunk loaded: ${chunkName}`);
      
      // Estimate size (this is approximate)
      this.estimateChunkSize(src, chunkName);
    });

    script.addEventListener('error', (error) => {
      mobileDebugger.error(`Failed to load chunk: ${chunkName}`, error.error);
    });
  }

  private extractChunkName(src: string): string {
    const parts = src.split('/');
    const filename = parts[parts.length - 1];
    return filename.replace(/\?.*$/, ''); // Remove query params
  }

  private async estimateChunkSize(src: string, chunkName: string) {
    try {
      // Skip estimation for development URLs that might not support HEAD requests
       if (src.includes('?t=') || src.includes('localhost')) {
         const estimatedSize = this.estimateSizeFromFilename(src);
         this.chunkSizes.set(chunkName, estimatedSize);
         return;
       }
      
      // Try to get actual size via fetch (if same origin)
      if (src.startsWith(window.location.origin) || src.startsWith('/')) {
        const response = await fetch(src, { method: 'HEAD' });
        if (response.ok) {
          const contentLength = response.headers.get('content-length');
          if (contentLength) {
            const size = parseInt(contentLength, 10);
            this.chunkSizes.set(chunkName, size);
            mobileDebugger.info(`Chunk size: ${chunkName} = ${this.formatBytes(size)}`);
            return;
          }
        }
      }
    } catch (error) {
      // Fallback to filename-based estimation
      mobileDebugger.warn(`Failed to fetch chunk size for ${chunkName}: ${(error as Error).message}`);
    }
    
    // Fallback: estimate based on filename patterns
     const estimatedSize = this.estimateSizeFromFilename(src);
     this.chunkSizes.set(chunkName, estimatedSize);
  }

  private estimateSizeFromFilename(filename: string): number {
    // Rough estimates based on common patterns
    if (filename.includes('vendor') || filename.includes('chunk')) {
      return 300 * 1024; // 300KB for vendor chunks
    }
    if (filename.includes('main') || filename.includes('index')) {
      return 150 * 1024; // 150KB for main chunks
    }
    return 50 * 1024; // 50KB default
  }

  private monitorMemoryUsage() {
    if ('memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        const limitMB = Math.round(memory.jsHeapSizeLimit / 1024 / 1024);
        
        mobileDebugger.info(`Memory: ${usedMB}MB / ${limitMB}MB (${Math.round(usedMB/limitMB*100)}%)`);
        
        // Warn if memory usage is high
        if (usedMB / limitMB > 0.8) {
          mobileDebugger.warn(`High memory usage: ${usedMB}MB / ${limitMB}MB`);
        }
        
        // Critical memory warning
        if (usedMB / limitMB > 0.9) {
          mobileDebugger.error(`Critical memory usage: ${usedMB}MB / ${limitMB}MB - iOS may terminate app`);
        }
      };

      // Check memory every 5 seconds
      setInterval(checkMemory, 5000);
      
      // Initial check
      setTimeout(checkMemory, 1000);
    }
  }

  private checkiOSCompatibility() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      mobileDebugger.warn('iOS device detected - checking compatibility');
      
      // Check iOS version
      const iOSVersion = this.getiOSVersion();
      if (iOSVersion) {
        mobileDebugger.info(`iOS version: ${iOSVersion}`);
        
        if (iOSVersion < 14) {
          mobileDebugger.error('iOS version < 14 detected - may have compatibility issues');
        }
      }
      
      // Check Safari version
      const safariVersion = this.getSafariVersion();
      if (safariVersion) {
        mobileDebugger.info(`Safari version: ${safariVersion}`);
      }
      
      // Check memory limits
      this.checkiOSMemoryLimits();
      
      // Check for problematic features
      this.checkProblematicFeatures();
    }
  }

  private getiOSVersion(): number | null {
    const match = navigator.userAgent.match(/OS (\d+)_(\d+)/);
    if (match) {
      return parseInt(match[1]);
    }
    return null;
  }

  private getSafariVersion(): string | null {
    const match = navigator.userAgent.match(/Version\/(\d+\.\d+)/);
    return match ? match[1] : null;
  }

  private checkiOSMemoryLimits() {
    // iOS has strict memory limits
    const totalBundleSize = Array.from(this.chunkSizes.values()).reduce((sum, size) => sum + size, 0);
    
    if (totalBundleSize > 10 * 1024 * 1024) { // 10MB
      mobileDebugger.error(`Large bundle size detected: ${this.formatBytes(totalBundleSize)} - may cause iOS crashes`);
    } else if (totalBundleSize > 5 * 1024 * 1024) { // 5MB
      mobileDebugger.warn(`Bundle size: ${this.formatBytes(totalBundleSize)} - monitor for iOS performance issues`);
    }
  }

  private checkProblematicFeatures() {
    const problematicFeatures = {
      'Framer Motion': () => !!(window as any).FramerMotion || document.querySelector('[data-framer-motion]'),
      'Large Images': () => document.querySelectorAll('img').length > 20,
      'Complex Animations': () => document.querySelectorAll('[class*="animate-"]').length > 10,
      'Backdrop Filters': () => {
        const elements = document.querySelectorAll('*');
        return Array.from(elements).some(el => {
          const style = getComputedStyle(el);
          return style.backdropFilter && style.backdropFilter !== 'none';
        });
      },
      'Heavy CSS': () => document.styleSheets.length > 10
    };

    Object.entries(problematicFeatures).forEach(([feature, check]) => {
      try {
        if (check()) {
          mobileDebugger.warn(`Potentially problematic feature detected: ${feature}`);
        }
      } catch (error) {
        mobileDebugger.error(`Error checking feature ${feature}`, error as Error);
      }
    });
  }

  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  public getBundleInfo(): BundleInfo {
    const totalSize = Array.from(this.chunkSizes.values()).reduce((sum, size) => sum + size, 0);
    const chunks = Array.from(this.chunkSizes.entries()).map(([name, size]) => ({ name, size }));
    const loadTime = performance.now() - this.startTime;
    
    let memoryUsage;
    if ('memory' in performance) {
      memoryUsage = (performance as any).memory.usedJSHeapSize;
    }

    return {
      totalSize,
      chunks,
      loadTime,
      memoryUsage
    };
  }

  public generateReport(): string {
    const info = this.getBundleInfo();
    
    let report = `📊 Bundle Analysis Report\n`;
    report += `=========================\n\n`;
    report += `📦 Total Bundle Size: ${this.formatBytes(info.totalSize)}\n`;
    report += `⏱️  Load Time: ${Math.round(info.loadTime)}ms\n`;
    
    if (info.memoryUsage) {
      report += `🧠 Memory Usage: ${this.formatBytes(info.memoryUsage)}\n`;
    }
    
    report += `\n📋 Loaded Chunks (${info.chunks.length}):\n`;
    info.chunks
      .sort((a, b) => b.size - a.size)
      .forEach(chunk => {
        report += `  • ${chunk.name}: ${this.formatBytes(chunk.size)}\n`;
      });
    
    return report;
  }

  public logReport() {
    const report = this.generateReport();
    mobileDebugger.info(report);
  }
}

// Create global instance
const bundleAnalyzer = new BundleAnalyzer();

// Auto-generate report after page load
window.addEventListener('load', () => {
  setTimeout(() => {
    bundleAnalyzer.logReport();
  }, 2000); // Wait 2 seconds for all chunks to load
});

export default bundleAnalyzer;

// Make globally available for debugging
(window as any).bundleAnalyzer = bundleAnalyzer;