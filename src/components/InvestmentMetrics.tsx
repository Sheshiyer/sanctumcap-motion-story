
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Building, Users, Award } from 'lucide-react';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      let startTime: number;
      const startValue = 0;
      const endValue = value;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (endValue - startValue) * easeOutQuart;

        setCount(Math.floor(currentValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration, isVisible]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const InvestmentMetrics = () => {
  return (
    <section id="metrics" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-midnight/60 to-charcoal/40 relative">
      <div className="w-full max-w-[100vw] px-[4vw] md:px-[6vw] lg:px-[8vw] mx-auto overflow-x-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-sm md:text-base font-medium mb-4 md:mb-6"
          >
            📊 Performance Metrics
          </motion.div>
          <h2 
            className="font-black text-platinum mb-4 md:mb-6 leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Investment{' '}
            <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent">
              Performance
            </span>
          </h2>
          <p 
            className="text-platinum/70 max-w-4xl mx-auto leading-relaxed px-4"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
          >
            Track record of delivering{' '}
            <span className="text-gold font-semibold">exceptional returns</span>{' '}
            to our investors across premium real estate developments
          </p>
        </motion.div>

        {/* Bento Grid Container */}
        <div className="relative w-full">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.15)_0%,transparent_70%)] rounded-3xl" />
          <div className="absolute inset-0 opacity-5 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(212,175,55,0.1)_0deg,transparent_60deg,rgba(212,175,55,0.05)_120deg,transparent_180deg)] rounded-3xl" />
          
          {/* Metrics Bento Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 p-8">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <motion.div
                  key={metric.id}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  className="group relative bg-gradient-to-br from-midnight/90 via-charcoal/80 to-primary-900/70 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gold/25 hover:border-gold/60 transition-all duration-500 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(212,175,55,0.25)] overflow-hidden min-h-[260px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[320px] flex flex-col justify-between transform-gpu"
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Enhanced Texture Overlays */}
                  <div className="absolute inset-0 opacity-8 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.4)_0%,transparent_60%)] group-hover:opacity-15 transition-opacity duration-500" />
                  <div className="absolute inset-0 opacity-3 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.15)_75%)] bg-[length:24px_24px] group-hover:opacity-8 transition-opacity duration-500" />
                  <div className="absolute inset-0 opacity-5 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(212,175,55,0.1)_0deg,transparent_90deg,rgba(212,175,55,0.05)_180deg,transparent_270deg)] group-hover:opacity-12 transition-opacity duration-500" />
                  
                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(45deg, rgba(212,175,55,0.2), transparent, rgba(212,175,55,0.1), transparent)',
                      backgroundSize: '200% 200%'
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Enhanced Icon Section */}
                    <div className="flex items-center justify-center mb-6 md:mb-8">
                      <motion.div
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1
                        }}
                        transition={{ 
                          duration: 0.8,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 bg-gradient-to-br from-gold/25 to-gold/5 border-2 border-gold/40 rounded-2xl flex items-center justify-center group-hover:from-gold/40 group-hover:to-gold/15 group-hover:border-gold/70 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-gold/20"
                      >
                        {/* Icon Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 text-gold group-hover:text-gold-300 transition-colors duration-300 drop-shadow-lg" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Enhanced Value and Label Section */}
                    <div className="text-center mb-6 md:mb-8 flex-grow flex flex-col justify-center">
                      <motion.div 
                        className="font-black mb-3 md:mb-4 leading-tight relative"
                        style={{ 
                          fontSize: 'clamp(1.4rem, 4vw, 2.8rem)',
                          background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4BC 50%, #D4AF37 100%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          color: 'transparent',
                          textShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
                        }}
                        whileHover={{
                          scale: 1.05,
                          textShadow: '0 0 40px rgba(212, 175, 55, 0.5)'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <AnimatedCounter
                          value={metric.value}
                          prefix={metric.prefix}
                          suffix={metric.suffix}
                        />
                        
                        {/* Shimmer Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                          animate={{
                            x: ['-100%', '100%']
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                            transform: 'skewX(-20deg)'
                          }}
                        />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-platinum/90 font-bold group-hover:text-gold-200 transition-colors duration-500 leading-tight uppercase tracking-[0.15em] px-2 relative"
                        style={{ fontSize: 'clamp(0.9rem, 2vw, 1.25rem)' }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {metric.label}
                        
                        {/* Underline Effect */}
                        <motion.div
                          className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-gold/50 to-gold-400/50 opacity-0 group-hover:opacity-100"
                          initial={{ width: 0, x: '-50%' }}
                          whileHover={{ width: '80%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.h3>
                    </div>

                    {/* Enhanced Description Section */}
                    <div className="mt-auto">
                      <motion.p 
                        className="text-platinum/70 leading-relaxed group-hover:text-platinum/90 transition-colors duration-500 text-center font-medium"
                        style={{ fontSize: 'clamp(0.7rem, 1.3vw, 0.85rem)' }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {metric.description}
                      </motion.p>
                    </div>
                    
                    {/* Enhanced Decorative Element */}
                    <div className="flex justify-center mt-4 md:mt-6">
                      <motion.div
                        className="relative w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-gold/25 to-gold/5 border-2 border-gold/40 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-gold/20"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.2
                        }}
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{
                          rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          },
                          scale: {
                            duration: 1,
                            type: "spring",
                            stiffness: 200
                          }
                        }}
                      >
                        {/* Pulsing Core */}
                        <motion.div 
                          className="w-2 h-2 md:w-2.5 md:h-2.5 bg-gradient-to-br from-gold to-gold-400 rounded-full"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Orbital Ring */}
                        <motion.div
                          className="absolute inset-0 border border-gold/30 rounded-full"
                          animate={{
                            rotate: [0, -360]
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          <div className="absolute top-0 left-1/2 w-1 h-1 bg-gold rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    initial={false}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentMetrics;
