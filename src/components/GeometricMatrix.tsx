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
            delay: Math.random() * 5000, // Random delay 0-5 seconds
            lastPulse: Date.now() + Math.random() * 5000
          });
        }
      }
      dotsRef.current = dots;
    };

    const drawGrid = () => {
      const gridSpacing = 120;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.1)'; // Increased to 10% opacity
      ctx.lineWidth = 0.8; // Slightly thicker for better visibility
      
      // Vertical lines
      for (let x = gridSpacing; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = gridSpacing; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const drawBaseDots = () => {
      // Always visible base dots at intersections
      dotsRef.current.forEach(dot => {
        const gradient = ctx.createRadialGradient(
          dot.x, dot.y, 0,
          dot.x, dot.y, 4
        );
        gradient.addColorStop(0, 'rgba(212, 175, 55, 0.15)'); // Always visible base glow
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawDots = () => {
      const currentTime = Date.now();
      
      dotsRef.current.forEach(dot => {
        // Check if it's time for this dot to pulse
        if (currentTime - dot.lastPulse > dot.delay + 3000) { // 3 second pulse cycle
          dot.lastPulse = currentTime;
          dot.delay = Math.random() * 2000; // Random delay for next pulse
        }
        
        // Calculate pulse intensity
        const timeSincePulse = currentTime - dot.lastPulse;
        const pulseProgress = Math.min(timeSincePulse / 1000, 1); // 1 second pulse duration
        
        if (pulseProgress < 1) {
          // Smooth pulse animation (ease-in-out)
          const easeInOut = 0.5 - 0.5 * Math.cos(pulseProgress * Math.PI);
          const intensity = easeInOut * 0.6; // Max opacity 60%
          
          const gradient = ctx.createRadialGradient(
            dot.x, dot.y, 0,
            dot.x, dot.y, 8
          );
          gradient.addColorStop(0, `rgba(212, 175, 55, ${intensity})`);
          gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, 8, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      drawGrid();
      drawBaseDots(); // Always visible base dots
      drawDots(); // Pulsing animation dots
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