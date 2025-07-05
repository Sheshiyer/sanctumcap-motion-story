
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Building, Users, Award } from 'lucide-react';

const metrics = [
  {
    id: 'capital',
    label: 'Total Invested Capital',
    value: 50,
    suffix: '+ Crores',
    prefix: '₹',
    icon: TrendingUp,
    description: 'North of 50 crores invested'
  },
  {
    id: 'cagr',
    label: 'Best Performing CAGR',
    value: 32,
    suffix: '%+',
    prefix: '',
    icon: Award,
    description: 'Exceptional returns achieved'
  },
  {
    id: 'experience',
    label: 'Investing Experience',
    value: 10,
    suffix: '+ Years',
    prefix: '',
    icon: Building,
    description: 'Proven track record'
  },
  {
    id: 'investors',
    label: 'Global Investors',
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
    <section id="metrics" className="py-24 bg-gradient-to-b from-midnight/60 to-charcoal/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-sm font-medium mb-6"
          >
            📊 Performance Metrics
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-6 leading-tight">
            Investment{' '}
            <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent">
              Performance
            </span>
          </h2>
          <p className="text-xl text-platinum/70 max-w-4xl mx-auto leading-relaxed">
            Track record of delivering{' '}
            <span className="text-gold font-semibold">exceptional returns</span>{' '}
            to our investors across premium real estate developments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.06, 
                  y: -12,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 backdrop-blur-sm rounded-3xl p-8 text-center border border-gold/20 hover:border-gold/50 transition-all duration-500 group shadow-2xl hover:shadow-gold/10 relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Enhanced Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:from-gold/30 group-hover:to-gold/20 transition-all duration-500 shadow-lg relative z-10"
                >
                  <IconComponent className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />
                </motion.div>

                {/* Enhanced Value with Counter Animation */}
                <div className="mb-6 relative z-10">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-gold-400 bg-clip-text text-transparent mb-3 group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-300">
                    <AnimatedCounter
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                    />
                  </div>
                  <h3 className="text-sm text-platinum/70 uppercase tracking-wider font-semibold group-hover:text-platinum/90 transition-colors duration-300">
                    {metric.label}
                  </h3>
                </div>

                {/* Enhanced Description */}
                <p className="text-platinum/70 text-sm leading-relaxed group-hover:text-platinum/90 transition-colors duration-300 relative z-10">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InvestmentMetrics;
