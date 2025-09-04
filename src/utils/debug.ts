// Remote debugging utility for mobile Safari debugging

interface DebugInfo {
  timestamp: string;
  userAgent: string;
  viewport: { width: number; height: number };
  memory?: any;
  error?: Error;
  message?: string;
  level: 'info' | 'warn' | 'error';
}

class MobileDebugger {
  private logs: DebugInfo[] = [];
  private overlay: HTMLElement | null = null;
  private isVisible = false;
  private isProduction = false;

  constructor() {
    this.checkEnvironment();
    this.init();
  }

  private checkEnvironment() {
    // Check if we're in production environment
    this.isProduction = 
      process.env.NODE_ENV === 'production' ||
      window.location.hostname !== 'localhost' &&
      !window.location.hostname.includes('127.0.0.1') &&
      !window.location.hostname.includes('dev') &&
      !window.location.hostname.includes('staging');
  }

  private init() {
    // Skip initialization in production unless explicitly enabled
    if (this.isProduction && !window.location.search.includes('debug=true')) {
      return;
    }
    
    // Only initialize on mobile devices or when explicitly enabled
    if (this.isMobile() || window.location.search.includes('debug=true')) {
      this.createOverlay();
      
      // Add global error handler
      window.addEventListener('error', (event) => {
        this.error(`Global error: ${event.message}`, event.error);
      });
      
      // Add unhandled promise rejection handler
      window.addEventListener('unhandledrejection', (event) => {
        this.error(`Unhandled promise rejection: ${event.reason}`);
      });
      
      // Add console override (only in development)
      if (!this.isProduction) {
        const originalConsole = {
          log: console.log,
          warn: console.warn,
          error: console.error
        };
        
        console.log = (...args) => {
          originalConsole.log(...args);
          this.info(args.join(' '));
        };
        
        console.warn = (...args) => {
          originalConsole.warn(...args);
          this.warn(args.join(' '));
        };
        
        console.error = (...args) => {
          originalConsole.error(...args);
          this.error(args.join(' '));
        };
      }
      
      // Add gesture to show/hide debug overlay (triple tap)
      let tapCount = 0;
      let tapTimer: NodeJS.Timeout;
      
      document.addEventListener('touchstart', () => {
        tapCount++;
        clearTimeout(tapTimer);
        
        if (tapCount === 3) {
          this.toggleOverlay();
          tapCount = 0;
        } else {
          tapTimer = setTimeout(() => {
            tapCount = 0;
          }, 500);
        }
      });
    }
  }

  private createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.id = 'mobile-debug-overlay';
    this.overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      color: #00ff00;
      font-family: 'Courier New', monospace;
      font-size: 12px;
      padding: 20px;
      box-sizing: border-box;
      overflow-y: auto;
      z-index: 999999;
      display: none;
      white-space: pre-wrap;
    `;

    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close (Triple tap to reopen)';
    closeBtn.style.cssText = `
      position: sticky;
      top: 0;
      right: 0;
      background: #ff0000;
      color: white;
      border: none;
      padding: 10px;
      margin-bottom: 10px;
      cursor: pointer;
    `;
    closeBtn.onclick = () => this.hideOverlay();
    
    this.overlay.appendChild(closeBtn);
    document.body.appendChild(this.overlay);
  }

  public toggleOverlay() {
    if (this.isVisible) {
      this.hideOverlay();
    } else {
      this.showOverlay();
    }
  }

  public showOverlay() {
    // Create overlay if it doesn't exist (e.g., in production)
    if (!this.overlay) {
      this.createOverlay();
    }
    
    if (!this.overlay) return;
    
    this.isVisible = true;
    
    // Add diagnostic logs when overlay is first shown
    if (this.logs.length === 0) {
      this.info('Debug overlay opened');
      this.info(`Device: ${navigator.userAgent}`);
      this.info(`Viewport: ${window.innerWidth}x${window.innerHeight}`);
      this.info(`Memory: ${this.getMemoryInfo()}`);
      this.info(`Connection: ${this.getConnectionInfo()}`);
    }
    
    this.overlay.style.display = 'block';
    this.updateOverlayContent();
  }

  public hideOverlay() {
    if (!this.overlay) return;
    
    this.isVisible = false;
    this.overlay.style.display = 'none';
  }

  private updateOverlayContent() {
    if (!this.overlay) return;

    const content = document.createElement('div');
    content.innerHTML = `
<h3>🐛 Mobile Debug Console</h3>
<p><strong>Device Info:</strong></p>
<p>User Agent: ${navigator.userAgent}</p>
<p>Viewport: ${window.innerWidth}x${window.innerHeight}</p>
<p>Memory: ${this.getMemoryInfo()}</p>
<p>Connection: ${this.getConnectionInfo()}</p>
<p>Features: ${this.getFeatureSupport()}</p>

<h4>📋 Debug Logs (${this.logs.length}):</h4>
${this.logs.map(log => `
<div style="margin: 5px 0; padding: 5px; background: ${this.getLogColor(log.level)}; border-radius: 3px;">
  <strong>[${log.level.toUpperCase()}]</strong> ${log.timestamp}<br>
  ${log.message}
  ${log.error ? `<br><strong>Stack:</strong> ${log.error.stack}` : ''}
</div>`).join('')}
    `;

    // Replace content (keep close button)
    const closeBtn = this.overlay.children[0];
    this.overlay.innerHTML = '';
    this.overlay.appendChild(closeBtn);
    this.overlay.appendChild(content);
  }

  private getLogColor(level: string): string {
    switch (level) {
      case 'error': return 'rgba(255, 0, 0, 0.2)';
      case 'warn': return 'rgba(255, 255, 0, 0.2)';
      default: return 'rgba(0, 255, 0, 0.1)';
    }
  }

  private getMemoryInfo(): string {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return `Used: ${Math.round(memory.usedJSHeapSize / 1024 / 1024)}MB / Limit: ${Math.round(memory.jsHeapSizeLimit / 1024 / 1024)}MB`;
    }
    return 'Not available';
  }

  private getConnectionInfo(): string {
    if ('connection' in navigator) {
      const conn = (navigator as any).connection;
      return `${conn.effectiveType || 'unknown'} (${conn.downlink || 'unknown'}Mbps)`;
    }
    return 'Not available';
  }

  private getFeatureSupport(): string {
    const features = {
      'ES6 Modules': 'noModule' in HTMLScriptElement.prototype,
      'Fetch API': 'fetch' in window,
      'IntersectionObserver': 'IntersectionObserver' in window,
      'ResizeObserver': 'ResizeObserver' in window,
      'CSS Grid': CSS.supports('display', 'grid'),
      'CSS Flexbox': CSS.supports('display', 'flex'),
      'CSS Custom Properties': CSS.supports('color', 'var(--test)'),
      'Backdrop Filter': CSS.supports('backdrop-filter', 'blur(1px)'),
      'WebGL': !!document.createElement('canvas').getContext('webgl'),
    };

    return Object.entries(features)
      .map(([name, supported]) => `${name}: ${supported ? '✅' : '❌'}`)
      .join(', ');
  }

  public log(level: 'info' | 'warn' | 'error', message: string, error?: Error) {
    // Skip logging in production unless debug is explicitly enabled or overlay is visible
    if (this.isProduction && !window.location.search.includes('debug=true') && !this.isVisible) {
      return;
    }
    
    const debugInfo: DebugInfo = {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      viewport: { width: window.innerWidth, height: window.innerHeight },
      memory: this.getMemoryInfo(),
      message,
      error,
      level
    };

    this.logs.push(debugInfo);
    
    // Keep only last 50 logs
    if (this.logs.length > 50) {
      this.logs = this.logs.slice(-50);
    }

    // Also log to console if available
    if (console && console[level]) {
      console[level]('[Mobile Debug]', message, error);
    }

    // Update overlay if visible
    if (this.isVisible) {
      this.updateOverlayContent();
    }

    // Auto-show overlay for errors on mobile
    if (level === 'error' && this.isMobile() && !this.isVisible) {
      setTimeout(() => this.showOverlay(), 100);
    }
  }

  private isMobile(): boolean {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
  }

  public info(message: string) {
    this.log('info', message);
  }

  public warn(message: string) {
    this.log('warn', message);
  }

  public error(message: string, error?: Error) {
    this.log('error', message, error);
  }

  public getLogs(): DebugInfo[] {
    return [...this.logs];
  }

  public clearLogs() {
    this.logs = [];
    if (this.isVisible) {
      this.updateOverlayContent();
    }
  }

  // Test function to verify debugging works
  public test() {
    this.info('Debug utility initialized successfully');
    this.warn('This is a test warning');
    this.error('This is a test error', new Error('Test error for debugging'));
  }
}

// Create global instance
const mobileDebugger = new MobileDebugger();

// Export for use in other modules
export default mobileDebugger;

// Also make it globally available
(window as any).mobileDebugger = mobileDebugger;

// Auto-initialize with basic info
mobileDebugger.info('Mobile debugger initialized');
mobileDebugger.info(`Device: ${navigator.userAgent}`);
mobileDebugger.info(`Viewport: ${window.innerWidth}x${window.innerHeight}`);