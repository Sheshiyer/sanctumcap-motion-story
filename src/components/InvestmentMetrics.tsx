
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
    <section className="py-20 bg-charcoal/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-platinum mb-4">
            Investment Performance
          </h2>
          <p className="text-xl text-platinum/70 max-w-3xl mx-auto">
            Delivering exceptional returns through strategic real estate investments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true }}
                className="bg-midnight/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-gold/20 hover:border-gold/40 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/30 transition-colors"
                >
                  <IconComponent className="w-8 h-8 text-gold" />
                </motion.div>

                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </div>

                <h3 className="text-lg font-semibold text-platinum mb-2">
                  {metric.label}
                </h3>

                <p className="text-platinum/60 text-sm">
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
