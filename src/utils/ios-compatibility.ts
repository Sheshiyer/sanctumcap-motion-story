// iOS Safari compatibility testing and feature detection

import mobileDebugger from './debug';

interface CompatibilityTest {
  name: string;
  test: () => boolean | Promise<boolean>;
  critical: boolean;
  description: string;
}

class iOSCompatibilityTester {
  private tests: CompatibilityTest[] = [];
  private results: Map<string, boolean> = new Map();
  private isProduction: boolean;

  constructor() {
    this.isProduction = 
      process.env.NODE_ENV === 'production' ||
      (window.location.hostname !== 'localhost' &&
       !window.location.hostname.includes('127.0.0.1') &&
       !window.location.hostname.includes('dev'));
    this.initializeTests();
  }

  private initializeTests() {
    this.tests = [
      {
        name: 'ES6 Modules',
        test: () => 'noModule' in HTMLScriptElement.prototype,
        critical: true,
        description: 'Support for ES6 module imports'
      },
      {
        name: 'Fetch API',
        test: () => 'fetch' in window,
        critical: true,
        description: 'Native fetch API support'
      },
      {
        name: 'Promise',
        test: () => 'Promise' in window,
        critical: true,
        description: 'Native Promise support'
      },
      {
        name: 'Arrow Functions',
        test: () => {
          try {
            new Function('() => {}');
            return true;
          } catch {
            return false;
          }
        },
        critical: true,
        description: 'ES6 arrow function syntax'
      },
      {
        name: 'Async/Await',
        test: () => {
          try {
            new Function('async () => { await Promise.resolve(); }');
            return true;
          } catch {
            return false;
          }
        },
        critical: true,
        description: 'ES2017 async/await syntax'
      },
      {
        name: 'IntersectionObserver',
        test: () => 'IntersectionObserver' in window,
        critical: false,
        description: 'Intersection Observer API for lazy loading'
      },
      {
        name: 'ResizeObserver',
        test: () => 'ResizeObserver' in window,
        critical: false,
        description: 'Resize Observer API'
      },
      {
        name: 'CSS Grid',
        test: () => CSS.supports('display', 'grid'),
        critical: false,
        description: 'CSS Grid Layout support'
      },
      {
        name: 'CSS Flexbox',
        test: () => CSS.supports('display', 'flex'),
        critical: true,
        description: 'CSS Flexbox layout support'
      },
      {
        name: 'CSS Custom Properties',
        test: () => CSS.supports('--test', 'red'),
        critical: false,
        description: 'CSS custom properties (variables) support'
      },
      {
        name: 'WebP Support',
        test: () => {
          return new Promise<boolean>((resolve) => {
            const webP = new Image();
            webP.onload = webP.onerror = () => {
              resolve(webP.height === 2);
            };
            webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
          });
        },
        critical: false,
        description: 'WebP image format support'
      },
      {
        name: 'Dynamic Imports',
        test: () => {
          try {
            // Test if dynamic import syntax is supported
            const func = new Function('return typeof import');
            return func() === 'function';
          } catch {
            return false;
          }
        },
        critical: true,
        description: 'Dynamic ES6 module imports'
      },
      {
        name: 'React DOM Root',
        test: () => {
          try {
            return typeof document.getElementById === 'function' && 
                   document.getElementById('root') !== null;
          } catch {
            return false;
          }
        },
        critical: true,
        description: 'React root element availability'
      },
      {
        name: 'CSS Modules Support',
        test: () => {
          try {
            const testDiv = document.createElement('div');
            testDiv.style.setProperty('--test-var', 'test');
            return testDiv.style.getPropertyValue('--test-var') === 'test';
          } catch {
            return false;
          }
        },
        critical: false,
        description: 'CSS custom properties manipulation'
      },
      {
        name: 'Viewport Meta Tag',
        test: () => {
          const viewportMeta = document.querySelector('meta[name="viewport"]');
          return viewportMeta !== null;
        },
        critical: true,
        description: 'Viewport meta tag for mobile responsiveness'
      },
      {
        name: 'CSS Backdrop Filter',
        test: () => CSS.supports('backdrop-filter', 'blur(1px)') || CSS.supports('-webkit-backdrop-filter', 'blur(1px)'),
        critical: false,
        description: 'CSS backdrop-filter property'
      },
      {
        name: 'CSS Transform 3D',
        test: () => {
          const el = document.createElement('div');
          el.style.transform = 'translate3d(0,0,0)';
          return el.style.transform !== '';
        },
        critical: false,
        description: '3D CSS transforms'
      },
      {
        name: 'WebGL',
        test: () => {
          try {
            const canvas = document.createElement('canvas');
            return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
          } catch {
            return false;
          }
        },
        critical: false,
        description: 'WebGL support for hardware acceleration'
      },
      {
        name: 'Local Storage',
        test: () => {
          try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return true;
          } catch {
            return false;
          }
        },
        critical: false,
        description: 'Local Storage API'
      },
      {
        name: 'Session Storage',
        test: () => {
          try {
            sessionStorage.setItem('test', 'test');
            sessionStorage.removeItem('test');
            return true;
          } catch {
            return false;
          }
        },
        critical: false,
        description: 'Session Storage API'
      },
      {
        name: 'History API',
        test: () => 'pushState' in history,
        critical: true,
        description: 'HTML5 History API for routing'
      },
      {
        name: 'Performance API',
        test: () => 'performance' in window && 'now' in performance,
        critical: false,
        description: 'Performance measurement API'
      },
      {
        name: 'RequestAnimationFrame',
        test: () => 'requestAnimationFrame' in window,
        critical: false,
        description: 'RequestAnimationFrame for smooth animations'
      },
      {
        name: 'Touch Events',
        test: () => 'ontouchstart' in window,
        critical: false,
        description: 'Touch event support'
      },
      {
        name: 'Passive Event Listeners',
        test: () => {
          try {
            const opts = Object.defineProperty({}, 'passive', {
              get: function() {
                return true;
              }
            });
            window.addEventListener('test', () => {}, opts);
            return true;
          } catch {
            return false;
          }
        },
        critical: false,
        description: 'Passive event listener support'
      },
      {
        name: 'Service Worker',
        test: () => 'serviceWorker' in navigator,
        critical: false,
        description: 'Service Worker API for caching'
      },
      {
        name: 'Web Workers',
        test: () => 'Worker' in window,
        critical: false,
        description: 'Web Workers for background processing'
      },
      {
        name: 'Geolocation',
        test: () => 'geolocation' in navigator,
        critical: false,
        description: 'Geolocation API'
      },
      {
        name: 'Device Memory',
        test: () => 'deviceMemory' in navigator,
        critical: false,
        description: 'Device Memory API'
      },
      {
        name: 'Connection API',
        test: () => 'connection' in navigator,
        critical: false,
        description: 'Network Information API'
      }
    ];
  }

  public async runAllTests(): Promise<void> {
    // Skip tests in production unless debug is explicitly enabled
    if (this.isProduction && !window.location.search.includes('debug=true')) {
      return;
    }
    
    mobileDebugger.info('🧪 Starting iOS compatibility tests...');
    
    let criticalFailures = 0;
    let totalFailures = 0;
    
    for (const test of this.tests) {
      try {
        const result = await test.test();
        this.results.set(test.name, result);
        
        const status = result ? '✅' : '❌';
        const priority = test.critical ? '[CRITICAL]' : '[OPTIONAL]';
        
        mobileDebugger.info(`${status} ${priority} ${test.name}: ${test.description}`);
        
        if (!result) {
          totalFailures++;
          if (test.critical) {
            criticalFailures++;
            mobileDebugger.error(`Critical feature missing: ${test.name}`);
          }
        }
      } catch (error) {
        this.results.set(test.name, false);
        mobileDebugger.error(`Test failed: ${test.name}`, error as Error);
        totalFailures++;
        if (test.critical) {
          criticalFailures++;
        }
      }
    }
    
    // Summary
    mobileDebugger.info(`\n📊 Compatibility Test Summary:`);
    mobileDebugger.info(`Total tests: ${this.tests.length}`);
    mobileDebugger.info(`Passed: ${this.tests.length - totalFailures}`);
    mobileDebugger.info(`Failed: ${totalFailures}`);
    mobileDebugger.info(`Critical failures: ${criticalFailures}`);
    
    if (criticalFailures > 0) {
      mobileDebugger.error(`⚠️ ${criticalFailures} critical compatibility issues detected!`);
      mobileDebugger.error('These issues may prevent the app from loading on iOS Safari.');
    } else {
      mobileDebugger.info('✅ All critical compatibility tests passed!');
    }
  }

  public getResults(): Map<string, boolean> {
    return new Map(this.results);
  }

  public getCriticalFailures(): string[] {
    return this.tests
      .filter(test => test.critical && !this.results.get(test.name))
      .map(test => test.name);
  }

  public generateCompatibilityReport(): string {
    let report = '📱 iOS Safari Compatibility Report\n';
    report += '=====================================\n\n';
    
    // Device info
    report += '📋 Device Information:\n';
    report += `User Agent: ${navigator.userAgent}\n`;
    report += `Platform: ${navigator.platform}\n`;
    report += `Language: ${navigator.language}\n`;
    report += `Viewport: ${window.innerWidth}x${window.innerHeight}\n`;
    
    // Memory info
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      report += `Memory Limit: ${Math.round(memory.jsHeapSizeLimit / 1024 / 1024)}MB\n`;
      report += `Memory Used: ${Math.round(memory.usedJSHeapSize / 1024 / 1024)}MB\n`;
    }
    
    // Connection info
    if ('connection' in navigator) {
      const conn = (navigator as any).connection;
      report += `Connection: ${conn.effectiveType || 'unknown'}\n`;
    }
    
    report += '\n🧪 Feature Support:\n';
    
    // Critical features
    const criticalTests = this.tests.filter(test => test.critical);
    const criticalPassed = criticalTests.filter(test => this.results.get(test.name));
    
    report += `\n🔴 Critical Features (${criticalPassed.length}/${criticalTests.length}):\n`;
    criticalTests.forEach(test => {
      const status = this.results.get(test.name) ? '✅' : '❌';
      report += `  ${status} ${test.name}\n`;
    });
    
    // Optional features
    const optionalTests = this.tests.filter(test => !test.critical);
    const optionalPassed = optionalTests.filter(test => this.results.get(test.name));
    
    report += `\n🟡 Optional Features (${optionalPassed.length}/${optionalTests.length}):\n`;
    optionalTests.forEach(test => {
      const status = this.results.get(test.name) ? '✅' : '❌';
      report += `  ${status} ${test.name}\n`;
    });
    
    return report;
  }

  public checkiOSVersion(): { version: number | null; isSupported: boolean } {
    const match = navigator.userAgent.match(/OS (\d+)_(\d+)/);
    const version = match ? parseInt(match[1]) : null;
    
    // iOS 12+ is generally required for modern web apps
    const isSupported = version ? version >= 12 : false;
    
    if (version) {
      mobileDebugger.info(`iOS version detected: ${version}`);
      if (!isSupported) {
        mobileDebugger.error(`iOS ${version} may not be fully supported. Minimum recommended: iOS 12`);
      }
    }
    
    return { version, isSupported };
  }

  public checkSafariVersion(): { version: string | null; isSupported: boolean } {
    const match = navigator.userAgent.match(/Version\/(\d+\.\d+)/);
    const version = match ? match[1] : null;
    
    // Safari 12+ is generally required
    const isSupported = version ? parseFloat(version) >= 12 : false;
    
    if (version) {
      mobileDebugger.info(`Safari version detected: ${version}`);
      if (!isSupported) {
        mobileDebugger.error(`Safari ${version} may not be fully supported. Minimum recommended: Safari 12`);
      }
    }
    
    return { version, isSupported };
  }
}

// Create global instance
const compatibilityTester = new iOSCompatibilityTester();

// Auto-run tests on iOS devices
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
  // Capture any early JavaScript errors
  window.addEventListener('error', (event) => {
    mobileDebugger.error(`JavaScript Error: ${event.message}`, event.error);
    mobileDebugger.error(`Error at: ${event.filename}:${event.lineno}:${event.colno}`);
  });
  
  // Capture unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    mobileDebugger.error(`Unhandled Promise Rejection: ${event.reason}`);
  });
  
  // Run tests after a short delay to ensure DOM is ready
  setTimeout(() => {
    compatibilityTester.runAllTests();
    compatibilityTester.checkiOSVersion();
    compatibilityTester.checkSafariVersion();
  }, 1000);
}

export default compatibilityTester;

// Make globally available for debugging
(window as any).iOSCompatibilityTester = compatibilityTester;