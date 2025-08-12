
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Building, Users, Award } from 'lucide-react';
import { MetricCardSkeleton, StaggerContainer, LoadingItem } from './LoadingStates';
import { SmoothReveal, LoadingTransition } from './PageTransition';

const metrics = [
  {
    id: 'capital',
    label: 'TOTAL INVESTED CAPITAL',
    value: 50,
    suffix: '+ Crores',
    prefix: '₹',
    icon: TrendingUp,
    description: 'North of 50 crores invested'
  },
  {
    id: 'cagr',
    label: 'BEST PERFORMING CAGR',
    value: 32,
    suffix: '%+',
    prefix: '',
    icon: Award,
    description: 'Exceptional returns achieved'
  },
  {
    id: 'experience',
    label: 'INVESTING EXPERIENCE',
    value: 10,
    suffix: '+ Years',
    prefix: '',
    icon: Building,
    description: 'Proven track record'
  },
  {
    id: 'investors',
    label: 'GLOBAL INVESTORS',
    value: 100,
    suffix: '+',
    prefix: '',
    icon: Users,
    description: 'Trusted by investors worldwide'
  }
];

const AnimatedCounter = ({ value, prefix = '', suffix = '', duration = 2000 }: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      let startTime: number;
      let startValue = 0;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (value - startValue) * easeOutQuart);
        
        setCount(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration, isVisible]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const InvestmentMetrics = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [metricsLoaded, setMetricsLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Simulate loading metrics data
  useEffect(() => {
    const timer = setTimeout(() => {
      setMetricsLoaded(true);
      setTimeout(() => setIsLoading(false), 300);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.section 
      ref={sectionRef}
      id="metrics" 
      className="py-8 relative w-full overflow-hidden min-h-screen flex flex-col justify-center"
      style={{ opacity, paddingTop: '2em', paddingBottom: '2em' }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-6 md:mb-8"
        >

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-platinum mb-6 tracking-tight">
            INVESTMENT{' '}
            <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent">
              PERFORMANCE
            </span>
          </h3>
          <p 
            className="text-platinum/85 max-w-3xl mx-auto leading-relaxed px-4"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
          >
            Track record of delivering{' '}
            <span className="text-gold font-semibold">exceptional returns</span>{' '}
            to our investors across premium real estate developments
          </p>
        </motion.div>

        {/* Bento Grid Container */}
        <div className="relative">
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-radial from-gold/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-conic from-sandstone/15 via-transparent to-gold/10 rounded-full blur-2xl" />
          </div>
          
          <LoadingTransition
            isLoading={isLoading}
            loadingComponent={
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                {Array.from({ length: 4 }).map((_, index) => (
                  <MetricCardSkeleton key={index} />
                ))}
              </div>
            }
          >
            <motion.div 
              className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6"
              style={{ scale }}
            >
              {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={metric.id}
                  initial={{ opacity: 0, y: 100, scale: 0.8, rotateX: 45 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    rotateX: 0,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -12,
                    rotateY: 8,
                    rotateX: -5,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative bg-gradient-to-br from-midnight/90 via-charcoal/80 to-primary-900/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border border-gold/25 hover:border-gold/60 transition-all duration-500 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(212,175,55,0.25)] min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] flex flex-col transform-gpu cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d',
                    y: useTransform(scrollYProgress, [0, 1], [index * 20, -index * 20])
                  }}
                >
                  {/* Icon Container */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <motion.div 
                      className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-gold/20 to-sandstone/20 border border-gold/30 group-hover:from-gold/30 group-hover:to-sandstone/30 group-hover:border-gold/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-gold group-hover:text-gold-400 transition-colors duration-300" />
                    </motion.div>
                    
                    {/* Decorative Elements */}
                    <div className="flex gap-1 opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                      <div className="w-1 h-1 rounded-full bg-gold" />
                      <div className="w-1 h-1 rounded-full bg-gold/60" />
                      <div className="w-1 h-1 rounded-full bg-gold/30" />
                    </div>
                  </div>

                  {/* Metric Value */}
                  <div className="flex-1 flex flex-col justify-center">
                    <motion.div 
                      className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 sm:mb-2"
                      style={{
                        background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4BC 50%, #D4AF37 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 2px 4px rgba(212, 175, 55, 0.3))'
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <AnimatedCounter 
                        value={metric.value} 
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                        duration={2000 + index * 200}
                      />
                    </motion.div>
                    
                    {/* Metric Label */}
                    <motion.h4 
                      className="text-xs sm:text-sm font-bold text-platinum/90 mb-2 sm:mb-3 tracking-wider leading-tight group-hover:text-platinum transition-colors duration-300"
                      whileHover={{ 
                        y: -2,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                    >
                      {metric.label}
                      <motion.div 
                        className="h-0.5 bg-gradient-to-r from-gold to-sandstone mt-1 origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                      />
                    </motion.h4>
                    
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-platinum/70 group-hover:text-platinum/85 transition-colors duration-300 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold/5 to-sandstone/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Corner Accent */}
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gold/30 group-hover:bg-gold/60 transition-colors duration-300" />
                </motion.div>
              );
            })}
            </motion.div>
          </LoadingTransition>
        </div>
      </div>
    </motion.section>
  );
};

export default InvestmentMetrics;
