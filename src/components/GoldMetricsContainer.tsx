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
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        if (progress < 1) {
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(startValue + (value - startValue) * easeOutQuart);
          setCount(currentValue);
          requestAnimationFrame(animate);
        } else {
          setCount(value);
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

const GoldMetricsContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <motion.section 
      id="metrics"
      ref={sectionRef}
      className="py-8 relative w-full overflow-visible min-h-[80vh] flex flex-col justify-center"
      style={{ opacity, paddingTop: '2em', paddingBottom: '2em' }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-midnight mb-6 tracking-tight">
            INVESTMENT{' '}
            <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent font-black">PERFORMANCE</span>
          </h3>
          <p 
            className="text-midnight/85 max-w-3xl mx-auto leading-relaxed px-4"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
          >
            Track record of delivering{' '}
            <span className="text-gold font-semibold">exceptional returns</span>{' '}
            to our investors across premium real estate developments
          </p>
        </motion.div>

        {/* Metrics Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >

            <LoadingTransition isLoading={isLoading} loadingComponent={<StaggerContainer><MetricCardSkeleton /></StaggerContainer>}>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 relative z-10"
                style={{ y, overflow: 'visible' }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.5
                    }
                  }
                }}
              >
                {metrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  
                  return (
                    <motion.div
                      key={metric.id}
                      className="group relative p-6 sm:p-8 rounded-2xl border border-slate-200/60 hover:border-slate-200/80 transition-all duration-500 cursor-pointer overflow-visible"
                      style={{ 
                        backgroundColor: '#0F1A3C',
                        transformStyle: 'preserve-3d',
                        boxShadow: '0 12px 40px rgba(15, 26, 60, 0.3)'
                      }}
                      variants={{
                        hidden: { 
                          opacity: 0, 
                          y: 60,
                          scale: 0.8,
                          rotateX: -15
                        },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          scale: 1,
                          rotateX: 0,
                          transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            duration: 0.8
                          }
                        }
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        y: -8,
                        boxShadow: '0 20px 60px rgba(15, 26, 60, 0.4)',
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Icon Container */}
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <motion.div 
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300"
                          style={{ 
                            backgroundColor: 'rgba(212, 175, 55, 0.15)',
                            border: '1px solid rgba(212, 175, 55, 0.3)'
                          }}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5,
                            boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)"
                          }}
                        >
                          <IconComponent 
                            className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300" 
                            style={{ color: '#D4AF37' }}
                          />
                        </motion.div>
                        
                        {/* Gold Decorative Elements */}
                        <div className="flex gap-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                          <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                          <div className="w-1.5 h-1.5 rounded-full bg-gold/20" />
                        </div>
                      </div>

                      {/* Metric Value */}
                      <motion.div className="mb-3 sm:mb-4">
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2" style={{ color: '#E6E6EB' }}>
                          <AnimatedCounter 
                            value={metric.value} 
                            prefix={metric.prefix} 
                            suffix={metric.suffix}
                            duration={2000 + index * 200}
                          />
                        </div>
                        <motion.h4 
                          className="text-sm sm:text-base font-bold tracking-wider opacity-90"
                          style={{ color: '#D4AF37' }}
                        >
                          {metric.label}
                        </motion.h4>
                      </motion.div>

                      {/* Description */}
                      <motion.div className="text-sm sm:text-base leading-relaxed opacity-85" style={{ color: '#E6E6EB' }}>
                        {metric.description}
                      </motion.div>

                      {/* Subtle Blue Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-600/5 via-transparent to-slate-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                      
                      {/* Blue Corner Accent */}
                      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-slate-400/40 group-hover:bg-slate-300/70 transition-colors duration-300" />
                      
                      {/* Blue Border Glow */}
                      <div className="absolute inset-0 rounded-2xl border border-slate-300/10 group-hover:border-slate-200/30 transition-colors duration-500 pointer-events-none" />
                    </motion.div>
                  );
                })}
              </motion.div>
            </LoadingTransition>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GoldMetricsContainer;