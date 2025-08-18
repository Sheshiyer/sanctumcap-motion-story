import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Globe, Award, Users, IndianRupee } from 'lucide-react';

const ProvenPerformance = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Advanced scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Simplified scroll animations without problematic parallax
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const stats = [
    {
      icon: IndianRupee,
      value: '50 Cr',
      label: 'Invested Capital'
    },
    {
      icon: TrendingUp,
      value: '24%',
      label: 'CAGR Returns'
    },
    {
      icon: Award,
      value: '10',
      label: 'Years Experience'
    },
    {
      icon: Users,
      value: '500',
      label: 'Global Investors'
    },
    {
      icon: Globe,
      value: '5',
      label: 'Countries'
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-8 sm:py-12 md:py-20 overflow-visible"
      style={{ opacity }}
    >
      <div className="w-full max-w-[100vw] px-[4vw] md:px-[6vw] lg:px-[8vw] mx-auto overflow-visible">
        {/* Enhanced Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-midnight mb-4 sm:mb-6 tracking-tight">
              PROVEN{' '}
              <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent font-black">
                PERFORMANCE
              </span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-midnight/85 max-w-2xl mx-auto px-4 sm:px-0">
              Track record that speaks for itself
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto px-2 sm:px-0"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80, scale: 0.8, rotateY: 45 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                    rotateY: 10,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="relative rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center group transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: '#0F1A3C',
                    y: useTransform(scrollYProgress, [0, 1], [index * 15, -index * 15]),
                    overflow: 'visible'
                  }}
                >
                  <div className="relative z-10">
                    <motion.div 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-slate-600/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:bg-slate-500/20 transition-all duration-300"
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: '#D4AF37' }} />
                    </motion.div>
                    
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-slate-300 mb-1 sm:mb-2 tracking-tight">
                       {stat.value}
                     </div>
                    
                    <div className="text-xs sm:text-sm text-white/90 font-medium uppercase tracking-wide leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
             })}
           </motion.div>
         </motion.div>
      </div>
    </motion.section>
  );
};

export default ProvenPerformance;