import React, { useState, useEffect } from 'react';
import mobileDebugger from '../utils/debug';
import bundleAnalyzer from '../utils/bundle-analyzer';
import iOSCompatibilityTester from '../utils/ios-compatibility';

const DebugPage: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<string>('');
  const [deviceInfo, setDeviceInfo] = useState<any>(null);

  useEffect(() => {
    // Gather device information
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      screen: `${screen.width}x${screen.height}`,
      devicePixelRatio: window.devicePixelRatio,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      memory: (performance as any).memory ? {
        limit: Math.round((performance as any).memory.jsHeapSizeLimit / 1024 / 1024),
        used: Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024),
        total: Math.round((performance as any).memory.totalJSHeapSize / 1024 / 1024)
      } : null,
      connection: (navigator as any).connection ? {
        effectiveType: (navigator as any).connection.effectiveType,
        downlink: (navigator as any).connection.downlink,
        rtt: (navigator as any).connection.rtt
      } : null
    };
    setDeviceInfo(info);
  }, []);

  const runAllTests = async () => {
    setIsRunning(true);
    setResults('Running comprehensive debugging tests...\n\n');
    
    try {
      // Device info
      let report = '📱 DEVICE INFORMATION\n';
      report += '===================\n';
      report += `User Agent: ${deviceInfo?.userAgent}\n`;
      report += `Platform: ${deviceInfo?.platform}\n`;
      report += `Language: ${deviceInfo?.language}\n`;
      report += `Viewport: ${deviceInfo?.viewport}\n`;
      report += `Screen: ${deviceInfo?.screen}\n`;
      report += `Device Pixel Ratio: ${deviceInfo?.devicePixelRatio}\n`;
      report += `Cookies Enabled: ${deviceInfo?.cookieEnabled}\n`;
      report += `Online: ${deviceInfo?.onLine}\n`;
      
      if (deviceInfo?.memory) {
        report += `Memory Limit: ${deviceInfo.memory.limit}MB\n`;
        report += `Memory Used: ${deviceInfo.memory.used}MB\n`;
        report += `Memory Total: ${deviceInfo.memory.total}MB\n`;
      }
      
      if (deviceInfo?.connection) {
        report += `Connection Type: ${deviceInfo.connection.effectiveType}\n`;
        report += `Downlink: ${deviceInfo.connection.downlink}Mbps\n`;
        report += `RTT: ${deviceInfo.connection.rtt}ms\n`;
      }
      
      report += '\n';
      setResults(report);
      
      // Bundle analysis
      report += '📦 BUNDLE ANALYSIS\n';
      report += '=================\n';
      const bundleReport = bundleAnalyzer.generateReport();
      report += bundleReport + '\n\n';
      setResults(report);
      
      // iOS compatibility tests
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        report += '🧪 iOS COMPATIBILITY TESTS\n';
        report += '=========================\n';
        await iOSCompatibilityTester.runAllTests();
        const compatReport = iOSCompatibilityTester.generateCompatibilityReport();
        report += compatReport + '\n\n';
        setResults(report);
        
        // iOS version check
        const iosVersion = iOSCompatibilityTester.checkiOSVersion();
        const safariVersion = iOSCompatibilityTester.checkSafariVersion();
        
        report += '📱 iOS VERSION INFO\n';
        report += '==================\n';
        report += `iOS Version: ${iosVersion.version || 'Unknown'}\n`;
        report += `iOS Supported: ${iosVersion.isSupported ? 'Yes' : 'No'}\n`;
        report += `Safari Version: ${safariVersion.version || 'Unknown'}\n`;
        report += `Safari Supported: ${safariVersion.isSupported ? 'Yes' : 'No'}\n\n`;
        setResults(report);
      }
      
      // JavaScript error test
      report += '⚠️ ERROR HANDLING TEST\n';
      report += '=====================\n';
      try {
        // Test if error boundary catches errors
        throw new Error('Test error for debugging');
      } catch (error) {
        report += `Error caught successfully: ${(error as Error).message}\n`;
        mobileDebugger.error('Test error', error as Error);
      }
      
      report += '\n✅ All tests completed successfully!';
      setResults(report);
      
    } catch (error) {
      const errorReport = `\n❌ Test failed with error: ${(error as Error).message}\n`;
      setResults(prev => prev + errorReport);
      mobileDebugger.error('Debug test failed', error as Error);
    } finally {
      setIsRunning(false);
    }
  };

  const clearResults = () => {
    setResults('');
  };

  const showDebugOverlay = () => {
    (mobileDebugger as any).showOverlay();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">🔧 Debug & Compatibility Test</h1>
        
        <div className="mb-6 text-center space-x-4">
          <button
            onClick={runAllTests}
            disabled={isRunning}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            {isRunning ? '🔄 Running Tests...' : '🚀 Run All Tests'}
          </button>
          
          <button
            onClick={showDebugOverlay}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            📱 Show Debug Overlay
          </button>
          
          <button
            onClick={clearResults}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            🗑️ Clear Results
          </button>
        </div>
        
        {deviceInfo && (
          <div className="mb-6 bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">📱 Quick Device Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div>Platform: {deviceInfo.platform}</div>
              <div>Viewport: {deviceInfo.viewport}</div>
              <div>Online: {deviceInfo.onLine ? 'Yes' : 'No'}</div>
              <div>Pixel Ratio: {deviceInfo.devicePixelRatio}</div>
              {deviceInfo.memory && (
                <div>Memory: {deviceInfo.memory.used}/{deviceInfo.memory.limit}MB</div>
              )}
              {deviceInfo.connection && (
                <div>Connection: {deviceInfo.connection.effectiveType}</div>
              )}
            </div>
          </div>
        )}
        
        {results && (
          <div className="bg-black p-4 rounded-lg overflow-auto max-h-96">
            <h2 className="text-xl font-semibold mb-3">📊 Test Results</h2>
            <pre className="text-sm whitespace-pre-wrap font-mono">{results}</pre>
          </div>
        )}
        
        <div className="mt-8 text-center text-gray-400">
          <p>This page helps debug iOS Safari compatibility issues.</p>
          <p>Triple-tap anywhere to show/hide the mobile debug overlay.</p>
        </div>
      </div>
    </div>
  );
};

export default DebugPage;