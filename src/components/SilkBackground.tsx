import React, { useEffect, useRef } from 'react';

interface SilkBackgroundProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
  className?: string;
}

const SilkBackground: React.FC<SilkBackgroundProps> = ({
  speed = 5,
  scale = 1,
  color = '#D4AF37',
  noiseIntensity = 1.5,
  rotation = 0,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Convert hex color to RGB
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 212, g: 175, b: 55 }; // Default gold
    };

    const rgb = hexToRgb(color);

    // Noise function (simplified Perlin-like noise)
    const noise = (x: number, y: number, time: number) => {
      const frequency = 0.01 * scale;
      const amplitude = noiseIntensity;
      
      const n1 = Math.sin(x * frequency + time * 0.001 * speed) * amplitude;
      const n2 = Math.cos(y * frequency + time * 0.0015 * speed) * amplitude;
      const n3 = Math.sin((x + y) * frequency * 0.5 + time * 0.002 * speed) * amplitude * 0.5;
      
      return (n1 + n2 + n3) / 3;
    };

    const animate = (currentTime: number) => {
      timeRef.current = currentTime;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create silk-like flowing pattern
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let x = 0; x < canvas.width; x += 2) {
        for (let y = 0; y < canvas.height; y += 2) {
          // Apply rotation
          const rotatedX = x * Math.cos(rotation) - y * Math.sin(rotation);
          const rotatedY = x * Math.sin(rotation) + y * Math.cos(rotation);
          
          // Generate noise value
          const noiseValue = noise(rotatedX, rotatedY, currentTime);
          
          // Create silk-like flowing effect
          const flow = Math.sin(noiseValue * Math.PI * 2) * 0.5 + 0.5;
          const intensity = Math.pow(flow, 2) * 0.3;
          
          // Calculate pixel index
          const index = (y * canvas.width + x) * 4;
          
          if (index < data.length - 3) {
            data[index] = rgb.r * intensity;     // Red
            data[index + 1] = rgb.g * intensity; // Green
            data[index + 2] = rgb.b * intensity; // Blue
            data[index + 3] = intensity * 255 * 0.4; // Alpha
          }
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      
      // Add flowing silk threads
      ctx.globalCompositeOperation = 'screen';
      
      for (let i = 0; i < 8; i++) {
        const threadX = (Math.sin(currentTime * 0.001 * speed + i) * 0.5 + 0.5) * canvas.width;
        const threadY = (Math.cos(currentTime * 0.0015 * speed + i * 0.5) * 0.5 + 0.5) * canvas.height;
        
        const gradient = ctx.createRadialGradient(
          threadX, threadY, 0,
          threadX, threadY, 100 * scale
        );
        
        gradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`);
        gradient.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`);
        gradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(threadX, threadY, 100 * scale, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.globalCompositeOperation = 'source-over';
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, scale, color, noiseIntensity, rotation]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{
        zIndex: -1,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default SilkBackground;