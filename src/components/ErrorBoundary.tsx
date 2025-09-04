import React, { Component, ErrorInfo, ReactNode } from 'react';
import mobileDebugger from '../utils/debug';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Log to mobile debugger with detailed context
    mobileDebugger.error(
      `React Error Boundary: ${error.message}`,
      error
    );
    
    // Log component stack for debugging
    mobileDebugger.error(
      `Component Stack: ${errorInfo.componentStack}`,
      new Error('Component Stack Trace')
    );
    
    // Log additional context
    mobileDebugger.info(`Error occurred at: ${new Date().toISOString()}`);
    mobileDebugger.info(`User Agent: ${navigator.userAgent}`);
    mobileDebugger.info(`URL: ${window.location.href}`);
  }

  public render() {
    if (this.state.hasError) {
      // Render custom fallback UI or default error message
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors mr-3"
              >
                Refresh Page
              </button>
              <button
                onClick={() => {
                  if ((window as any).mobileDebugger) {
                    (window as any).mobileDebugger.showOverlay();
                  }
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Show Debug Info
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-4 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;