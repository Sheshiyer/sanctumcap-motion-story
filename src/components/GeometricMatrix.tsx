import React, { useEffect, useRef } from 'react';

interface GeometricMatrixProps {
  className?: string;
}

const GeometricMatrix: React.FC<GeometricMatrixProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const dotsRef = useRef<Array<{
    x: number;
    y: number;
    pulse: number;
    delay: number;
    lastPulse: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    const initializeDots = () => {
      const gridSpacing = 120;
      const dots: typeof dotsRef.current = [];
      
      for (let x = gridSpacing; x < canvas.clientWidth; x += gridSpacing) {
        for (let y = gridSpacing; y < canvas.clientHeight; y += gridSpacing) {
          dots.push({
            x,
            y,
            pulse: 0,
            delay: Math.random() * 2000, // Reduced delay 0-2 seconds for faster animation
            lastPulse: Date.now() + Math.random() * 2000
          });
        }
      }
      dotsRef.current = dots;
    };

    const drawGrid = () => {
      const gridSpacing = 120;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      
      // Perspective settings for depth
      const vanishingPointX = width * 0.5;
      const vanishingPointY = height * 0.3;
      const perspectiveStrength = 0.8;
      
      // Draw perspective grid with depth
      for (let x = gridSpacing; x < width; x += gridSpacing) {
        for (let y = gridSpacing; y < height; y += gridSpacing) {
          // Calculate distance from vanishing point for depth effect
          const distanceFromVanishing = Math.sqrt(
            Math.pow(x - vanishingPointX, 2) + Math.pow(y - vanishingPointY, 2)
          );
          const maxDistance = Math.sqrt(width * width + height * height);
          const depthRatio = Math.min(distanceFromVanishing / maxDistance, 1);
          
          // Vary opacity and thickness based on depth
          const baseOpacity = 0.15;
          const opacity = baseOpacity * (0.3 + 0.7 * depthRatio); // Closer lines are more visible
          const lineWidth = 0.5 + (1.5 * depthRatio); // Closer lines are thicker
          
          ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
          ctx.lineWidth = lineWidth;
          
          // Draw vertical line with perspective taper
          if (x < width) {
            ctx.beginPath();
            const topX = x + (vanishingPointX - x) * perspectiveStrength * (y / height);
            const bottomX = x;
            ctx.moveTo(topX, 0);
            ctx.lineTo(bottomX, height);
            ctx.stroke();
          }
          
          // Draw horizontal line with perspective taper
          if (y < height) {
            ctx.beginPath();
            const leftY = y + (vanishingPointY - y) * perspectiveStrength * (x / width);
            const rightY = y;
            ctx.moveTo(0, leftY);
            ctx.lineTo(width, rightY);
            ctx.stroke();
          }
        }
      }
      
      // Add subtle radial gradient overlay for enhanced depth
      const gradient = ctx.createRadialGradient(
        vanishingPointX, vanishingPointY, 0,
        vanishingPointX, vanishingPointY, Math.max(width, height)
      );
      gradient.addColorStop(0, 'rgba(212, 175, 55, 0.05)');
      gradient.addColorStop(0.6, 'rgba(212, 175, 55, 0.02)');
      gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const drawBaseDots = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const vanishingPointX = width * 0.5;
      const vanishingPointY = height * 0.3;
      
      // Always visible base dots at intersections with depth
      dotsRef.current.forEach(dot => {
        // Calculate depth based on distance from vanishing point
        const distanceFromVanishing = Math.sqrt(
          Math.pow(dot.x - vanishingPointX, 2) + Math.pow(dot.y - vanishingPointY, 2)
        );
        const maxDistance = Math.sqrt(width * width + height * height);
        const depthRatio = Math.min(distanceFromVanishing / maxDistance, 1);
        
        // Scale size and opacity based on depth
        const baseRadius = 2 + (3 * depthRatio); // Closer dots are larger
        const baseOpacity = 0.1 + (0.15 * depthRatio); // Closer dots are more visible
        
        const gradient = ctx.createRadialGradient(
          dot.x, dot.y, 0,
          dot.x, dot.y, baseRadius * 1.5
        );
        gradient.addColorStop(0, `rgba(212, 175, 55, ${baseOpacity})`);
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, baseRadius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawDots = () => {
      const currentTime = Date.now();
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const vanishingPointX = width * 0.5;
      const vanishingPointY = height * 0.3;
      
      dotsRef.current.forEach(dot => {
        // Check if it's time for this dot to pulse
        if (currentTime - dot.lastPulse > dot.delay + 1500) { // Reduced to 1.5 second pulse cycle
          dot.lastPulse = currentTime;
          dot.delay = Math.random() * 1000; // Reduced random delay for next pulse
        }
        
        // Calculate pulse intensity
        const timeSincePulse = currentTime - dot.lastPulse;
        const pulseProgress = Math.min(timeSincePulse / 600, 1); // Faster 0.6 second pulse duration
        
        if (pulseProgress < 1) {
          // Calculate depth for perspective effect
          const distanceFromVanishing = Math.sqrt(
            Math.pow(dot.x - vanishingPointX, 2) + Math.pow(dot.y - vanishingPointY, 2)
          );
          const maxDistance = Math.sqrt(width * width + height * height);
          const depthRatio = Math.min(distanceFromVanishing / maxDistance, 1);
          
          // Smooth pulse animation (ease-in-out) with depth scaling
          const easeInOut = 0.5 - 0.5 * Math.cos(pulseProgress * Math.PI);
          const baseIntensity = 0.4 + (0.4 * depthRatio); // Closer dots pulse brighter
          const intensity = easeInOut * baseIntensity;
          const pulseRadius = 4 + (8 * depthRatio); // Closer dots have larger pulse radius
          
          const gradient = ctx.createRadialGradient(
            dot.x, dot.y, 0,
            dot.x, dot.y, pulseRadius
          );
          gradient.addColorStop(0, `rgba(212, 175, 55, ${intensity})`);
          gradient.addColorStop(0.7, `rgba(212, 175, 55, ${intensity * 0.3})`);
          gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, pulseRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      // drawGrid(); // Removed grid lines
      // drawBaseDots(); // Removed base dots
      // drawDots(); // Removed pulsing dots
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      initializeDots();
    };

    resizeCanvas();
    initializeDots();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};

export default GeometricMatrix;