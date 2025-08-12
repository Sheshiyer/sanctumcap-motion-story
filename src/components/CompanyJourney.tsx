
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineItems = [
  {
    id: '2005-2007',
    year: '2005 – 2007',
    title: 'Initial foray',
    description: '₹50L invested, Exited with ₹1.5 Cr',
    metric: '₹50L → ₹1.5 Cr',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop'
  },
  {
    id: '2014-2017',
    year: '2014 – 2017',
    title: 'Professional Management',
    description: 'Professionally managed investments worth ₹6.5 Cr, Exited with ₹11 Cr',
    metric: '₹6.5 Cr → ₹11 Cr',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
  },
  {
    id: '2018-2021',
    year: '2018 – 2021',
    title: 'Strategic Growth',
    description: 'Invested ~₹5 Cr, Exited ~₹8 Cr',
    metric: '₹5 Cr → ₹8 Cr',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop'
  },
  {
    id: '2022-2025',
    year: '2022 – 2025',
    title: 'Accelerated Returns',
    description: 'Invested ₹6.5 Cr, Exited ₹14 Cr',
    metric: '₹6.5 Cr → ₹14 Cr',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop'
  },
  {
    id: 'ongoing',
    year: 'Ongoing',
    title: 'Ongoing Investments',
    description: '~₹25 Cr invested, Valued currently at ~₹30 Cr+',
    metric: '₹25 Cr → ₹30 Cr+',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop'
  }
];

const CompanyJourney = () => {
  return (
    <section id="journey" className="py-20" style={{ paddingTop: '2em', paddingBottom: '2em' }}>
      <div className="w-full max-w-[100vw] px-[4vw] md:px-[6vw] lg:px-[8vw] mx-auto overflow-x-hidden">
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
            🚀 Company Timeline
          </motion.div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-platinum mb-6 leading-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent">
              Journey
            </span>
          </h3>
          <p className="text-xl text-platinum/85 max-w-4xl mx-auto leading-relaxed">
            A decade of{' '}
            <span className="text-gold font-semibold">growth, innovation</span>, and delivering 
            exceptional real estate investments across Bengaluru
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold/30 hidden lg:block">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="w-full bg-gold"
            />
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-100px" });

              return (
                <motion.div
                  key={item.id}
                  ref={ref}
                  initial={{ 
                    opacity: 0, 
                    x: isEven ? -100 : 100,
                    scale: 0.9
                  }}
                  animate={isInView ? { 
                    opacity: 1, 
                    x: 0,
                    scale: 1
                  } : {}}
                  transition={{ 
                    duration: 0.8, 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 15,
                    delay: index * 0.2
                  }}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-0 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold rounded-full border-4 border-midnight z-10 hidden lg:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 300 }}
                      className="w-full h-full bg-gold rounded-full"
                    />
                  </div>

                  {/* Enhanced Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="bg-gradient-to-br from-midnight/90 to-midnight/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gold/20 hover:border-gold/40 transition-all duration-500 shadow-2xl hover:shadow-gold/10 relative overflow-hidden group"
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gold to-gold-400 bg-clip-text text-transparent sm:mr-4 mb-2 sm:mb-0">
                            {item.year}
                          </div>
                          <div className="text-xl sm:text-2xl font-semibold text-gold">
                            {item.metric}
                          </div>
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-platinum mb-4 sm:mb-6 leading-tight group-hover:text-gold transition-colors duration-300">
                          {item.title}
                        </h3>
                        
                        <p className="text-platinum/85 text-base sm:text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Enhanced Image */}
                  <div className={`w-full lg:w-5/12 mt-6 sm:mt-8 lg:mt-0 ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                      whileHover={{ scale: 1.03, y: -8 }}
                      className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-video shadow-2xl group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent" />
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20">
                        <div className="text-gold font-semibold text-xs sm:text-sm mb-1 sm:mb-2">{item.year}</div>
                        <div className="text-platinum font-bold text-base sm:text-lg">{item.title}</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyJourney;
