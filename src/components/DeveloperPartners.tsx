
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Building2, MapPin, Calendar } from 'lucide-react';

const developerData = [
  {
    id: 'bmrda',
    title: 'BMRDA Past Projects',
    projects: [
      {
        title: 'BMRDA Apartment Complex (2018-2020)',
        metric: '₹1 Cr',
        unit: 'Investment',
        area: '2 Acres',
        units: '200 Apartments',
        investment: '₹1 Cr',
        exit: '₹2 Cr',
        description: 'Successfully completed premium apartment complex spanning 2 acres with 200 units, delivered 100% returns on investment.'
      },
      {
        title: 'BMRDA Villa Development (2017-2021)',
        metric: '₹6.5 Cr',
        unit: 'Investment',
        area: '10 Acres',
        units: '180 Villas',
        investment: '₹6.5 Cr',
        exit: '₹14 Cr',
        description: 'Completed expansive villa development across 10 acres featuring 180 luxury villas with exceptional 115% ROI.'
      }
    ]
  },
  {
    id: 'bda',
    title: 'BDA Past Projects',
    projects: [
      {
        title: 'BDA Villa Community (2019-2022)',
        metric: '₹3 Cr',
        unit: 'Investment',
        area: '5 Acres',
        units: '65 Villas',
        investment: '₹3 Cr',
        exit: '₹6 Cr',
        description: 'Successfully delivered premium villa community spread across 5 acres with 65 exclusive villas, doubled investment value.'
      },
      {
        title: 'BDA Apartment Project (2020-2023)',
        metric: '₹1 Cr',
        unit: 'Investment',
        area: '1 Acre',
        units: '70 Apartments',
        investment: '₹1 Cr',
        exit: '₹1.7 Cr',
        description: 'Completed compact yet profitable apartment project on 1 acre with 70 units, delivered solid 70% returns.'
      }
    ]
  }
];

const DeveloperPartners = () => {
  const [activeTab, setActiveTab] = useState('bmrda');

  return (
    <section id="developers" className="py-20" style={{ paddingTop: '2em', paddingBottom: '2em' }}>
      <div className="w-full max-w-[100vw] px-[4vw] md:px-[6vw] lg:px-[8vw] mx-auto overflow-visible">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-sm font-medium mb-6"
          >
            🏆 Past Project Showcase
          </motion.div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight" style={{color: '#0F1A3C'}}>
            COMPLETED{' '}
            <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h3>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{color: '#0F1A3C'}}>
            Successful real estate investments with proven track record of delivering exceptional returns across{' '}
            <span className="text-gold font-semibold">BMRDA and BDA approved</span> developments in Bengaluru
          </p>
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center mb-12 sm:mb-16"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 inline-flex border border-gold/20 shadow-2xl">
            {developerData.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 20 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-8 py-2 sm:py-4 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden text-sm sm:text-base ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-gold to-gold-600 shadow-xl'
                    : 'hover:text-gold hover:bg-gold/10'
                }`}
                style={{color: activeTab === category.id ? '#1a1a2e' : '#0F1A3C'}}
              >
                {activeTab === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-gold to-gold-600 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 text-xs sm:text-sm md:text-base">
                  {category.id === 'bmrda' ? 'BMRDA Past Projects' : 'BDA Past Projects'}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Tab Content */}
        <div className="mb-12">
          {developerData.map((category) => (
            activeTab === category.id && (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {category.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{
                      opacity: activeTab === category.id ? 1 : 0,
                      y: activeTab === category.id ? 0 : 40,
                      scale: activeTab === category.id ? 1 : 0.95
                    }}
                    transition={{ 
                      duration: 0.7, 
                      delay: activeTab === category.id ? index * 0.15 : 0,
                      type: "spring",
                      stiffness: 100,
                      damping: 20
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -12,
                      rotateY: 3,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-midnight/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-600/20 hover:border-slate-500/50 transition-all duration-500 group shadow-2xl hover:shadow-slate-500/10 cursor-pointer"
                  >
                    {/* Enhanced Icon */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-slate-600/30 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 lg:mb-8 group-hover:bg-slate-500/40 transition-all duration-500 shadow-lg">
                      {category.id === 'communities' ? (
                        <Building className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-slate-300 group-hover:scale-110 transition-transform duration-300" />
                      ) : (
                        <Building2 className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-slate-300 group-hover:scale-110 transition-transform duration-300" />
                      )}
                    </div>

                    {/* Enhanced Title */}
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-slate-200 transition-colors duration-300 leading-tight" style={{color: category.id === 'bmrda' ? '#E6E6EB' : '#0F1A3C'}}>
                      {project.title}
                    </h3>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gold/5 rounded-lg p-2 border border-gold/10">
                        <div className="text-xs mb-1" style={{color: category.id === 'bmrda' ? '#E6E6EB' : '#0F1A3C'}}>Area</div>
                        <div className="text-sm font-semibold text-gold">{project.area}</div>
                      </div>
                      <div className="bg-gold/5 rounded-lg p-2 border border-gold/10">
                        <div className="text-xs mb-1" style={{color: category.id === 'bmrda' ? '#E6E6EB' : '#0F1A3C'}}>Units</div>
                        <div className="text-sm font-semibold text-gold">{project.units}</div>
                      </div>
                    </div>

                    {/* Investment & Exit */}
                    <motion.div 
                      className="mb-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="flex justify-between items-center bg-gradient-to-r from-gold/10 to-gold/5 rounded-lg p-3 border border-gold/20">
                        <div>
                          <div className="text-xs mb-1" style={{color: category.id === 'bmrda' ? '#E6E6EB' : '#0F1A3C'}}>Investment</div>
                          <div className="text-lg font-bold" style={{color: category.id === 'bmrda' ? '#E6E6EB' : '#0F1A3C'}}>{project.investment}</div>
                        </div>
                        <div className="text-gold/60">→</div>
                        <div>
                          <div className="text-xs mb-1" style={{color: category.id === 'bmrda' ? '#E6E6EB' : '#0F1A3C'}}>Exit Value</div>
                          <div className="text-lg font-bold bg-gradient-to-r from-gold to-gold-400 bg-clip-text text-transparent">{project.exit}</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Enhanced Description */}
                    <p className="text-sm sm:text-base leading-relaxed" style={{color: category.id === 'bmrda' ? '#E6E6EB' : '#0F1A3C'}}>
                      {project.description}
                    </p>
                    
                    {/* Hover Effect Overlay - Removed */}
                    
                    {/* Floating Particles Effect */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={false}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-slate-400/30 rounded-full"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${30 + i * 20}%`
                          }}
                          animate={{
                            y: [-10, -20, -10],
                            opacity: [0, 1, 0],
                            scale: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              </motion.div>
            )
          ))}
        </div>


      </div>
    </section>
  );
};

export default DeveloperPartners;
