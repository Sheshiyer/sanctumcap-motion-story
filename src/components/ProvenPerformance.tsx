import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Award, Users } from 'lucide-react';

const ProvenPerformance = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '32%+',
      label: 'CAGR Returns'
    },
    {
      icon: Globe,
      value: '5',
      label: 'Countries'
    },
    {
      icon: Award,
      value: '18+',
      label: 'Years Experience'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Global Investors'
    }
  ];

  return (
    <section className="relative py-20">
      <div className="w-full max-w-[100vw] px-[4vw] md:px-[6vw] lg:px-[8vw] mx-auto overflow-x-hidden">
        {/* Clean Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-black text-platinum mb-4 tracking-tight">
              PROVEN{' '}
              <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent font-black">
                PERFORMANCE
              </span>
            </h3>
            <p className="text-platinum/70 max-w-2xl mx-auto text-lg">
              Track record that speaks for itself
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + index * 0.1
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="relative bg-midnight/20 backdrop-blur-sm rounded-xl p-6 text-center group hover:bg-midnight/30 transition-all duration-300"
                >
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all duration-300"
                    >
                      <IconComponent className="w-6 h-6 text-gold" />
                    </motion.div>
                    
                    <div className="text-3xl md:text-4xl font-black text-gold mb-2 tracking-tight">
                      {stat.value}
                    </div>
                    
                    <div className="text-sm text-platinum/80 font-medium uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProvenPerformance;