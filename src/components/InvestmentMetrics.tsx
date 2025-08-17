
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Building, Users, Award, Globe } from 'lucide-react';
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
  },
  {
    id: 'countries',
    label: 'COUNTRIES REACHED',
    value: 15,
    suffix: '+',
    prefix: '',
    icon: Globe,
    description: 'Global market presence'
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

const InvestmentMetrics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <motion.section 
      ref={sectionRef}
      id="metrics" 
      className="py-8 relative w-full overflow-hidden min-h-[80vh] flex flex-col justify-center"
      style={{ opacity, paddingTop: '2em', paddingBottom: '2em' }}
    >
      <div className="container mx-auto px-4 relative z-10">
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
            <span className="text-slate-600 font-semibold">exceptional returns</span>{' '}
            to our investors across premium real estate developments
          </p>
        </motion.div>

        {/* Bento Grid Container */}
        <div className="relative">
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-radial from-slate-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-conic from-slate-400/15 via-transparent to-slate-500/10 rounded-full blur-2xl" />
          </div>

          <LoadingTransition isLoading={isLoading} loadingComponent={<StaggerContainer><MetricCardSkeleton /></StaggerContainer>}>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10"
              style={{ y }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                
                return (
                  <motion.div
                    key={metric.id}
                    className="group relative p-4 sm:p-6 rounded-2xl border border-slate-200/60 hover:border-slate-300/80 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/40 cursor-pointer overflow-hidden"
                     style={{ 
                       backgroundColor: '#0F1A3C',
                       transformStyle: 'preserve-3d',
                       y: useTransform(scrollYProgress, [0, 1], [index * 20, -index * 20])
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
                       transition: { duration: 0.3 }
                     }}
                  >
                    {/* Icon Container */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <motion.div 
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                        style={{ backgroundColor: '#0F1A3C' }}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          boxShadow: "0 0 15px rgba(212, 175, 55, 0.4)"
                        }}
                      >
                        <IconComponent 
                          className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300" 
                          style={{ color: '#D4AF37' }}
                        />
                      </motion.div>
                      
                      {/* Decorative Elements */}
                      <div className="flex gap-1 opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                        <div className="w-1 h-1 rounded-full bg-slate-400" />
                        <div className="w-1 h-1 rounded-full bg-slate-400/60" />
                        <div className="w-1 h-1 rounded-full bg-slate-400/30" />
                      </div>
                    </div>

                    {/* Metric Value */}
                    <motion.div className="mb-2 sm:mb-3">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1" style={{ color: '#E6E6EB' }}>
                        <AnimatedCounter 
                          value={metric.value} 
                          prefix={metric.prefix} 
                          suffix={metric.suffix}
                          duration={2000 + index * 200}
                        />
                      </div>
                      <motion.h4 
                        className="text-xs sm:text-sm font-bold tracking-wider opacity-90"
                        style={{ color: '#E6E6EB' }}
                      >
                        {metric.label}
                      </motion.h4>
                    </motion.div>

                    {/* Description */}
                    <motion.div className="text-xs sm:text-sm leading-relaxed" style={{ color: '#E6E6EB' }}>
                      {metric.description}
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                    
                    {/* Corner Accent */}
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-slate-400/30 group-hover:bg-slate-300/60 transition-colors duration-300" />
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
