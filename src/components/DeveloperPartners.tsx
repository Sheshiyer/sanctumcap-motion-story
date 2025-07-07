
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Home, MapPin, Calendar } from 'lucide-react';

const developerData = [
  {
    id: 'communities',
    title: 'Exclusive Gated Communities',
    projects: [
      {
        title: 'Premium Residential Projects',
        metric: '1 Million+',
        unit: 'Sq Ft Delivered',
        description: 'Delivered over 1 million square feet of exclusive gated residential communities.'
      },
      {
        title: 'High-Value Developments',
        metric: '₹1000+',
        unit: 'Crores Worth',
        description: 'Developed residential projects worth 1000 crores.'
      },
      {
        title: 'Villa Projects',
        metric: '500+',
        unit: 'Villas',
        description: 'Currently developing villa projects with over 500 villas across multiple locations.'
      },
      {
        title: 'Pipeline Projects',
        metric: '1 Million+',
        unit: 'Sq Ft Planned',
        description: 'Another 1 million square feet in the pipeline.'
      }
    ]
  },
  {
    id: 'villas',
    title: 'Villa & Land Investments',
    projects: [
      {
        title: 'Villa Plotting Ventures',
        metric: '100+',
        unit: 'Acres Developed',
        description: 'Developed over 100 acres of villa plotting ventures.'
      },
      {
        title: 'Land Acquisition',
        metric: '1000+',
        unit: 'Acres Assisted',
        description: 'Assisted partners in acquiring over 1000 acres.'
      },
      {
        title: 'Premium Locations',
        metric: '2',
        unit: 'Prime Areas',
        description: 'Delivered premium residential projects in high-demand locations like Kundalahalli and CV Raman Nagar.'
      },
      {
        title: 'Current Development',
        metric: '50+',
        unit: 'Acre Project',
        description: 'Currently developing a 50+ acre plotting venture.'
      }
    ]
  }
];

const DeveloperPartners = () => {
  const [activeTab, setActiveTab] = useState('communities');

  return (
    <section id="developers" className="py-24 bg-gradient-to-b from-charcoal/30 to-charcoal/60">
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
            🏗️ Our Development Partners
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-6 leading-tight">
            Developer Partner{' '}
            <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent">
              Profiles
            </span>
          </h2>
          <p className="text-xl text-platinum/70 max-w-4xl mx-auto leading-relaxed">
            Strategic partnerships with proven developers delivering exceptional real estate 
            developments across <span className="text-gold font-semibold">premium locations</span> in Bengaluru
          </p>
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center mb-16"
        >
          <div className="bg-midnight/80 backdrop-blur-sm rounded-2xl p-3 inline-flex border border-gold/20 shadow-2xl">
            {developerData.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-gold to-gold-600 text-midnight shadow-xl'
                    : 'text-platinum hover:text-gold hover:bg-gold/10'
                }`}
              >
                {activeTab === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-gold to-gold-600 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 text-sm md:text-base">
                  {category.title}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Tab Content */}
        <div className="relative min-h-[600px] mb-16">
          {developerData.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeTab === category.id ? 1 : 0,
                y: activeTab === category.id ? 0 : 20
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`absolute inset-0 ${
                activeTab === category.id ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      scale: 1.03, 
                      y: -8,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="bg-gradient-to-br from-midnight/90 to-midnight/70 backdrop-blur-sm rounded-3xl p-8 border border-gold/20 hover:border-gold/50 transition-all duration-500 group shadow-2xl hover:shadow-gold/10"
                  >
                    {/* Enhanced Icon */}
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl mb-8 group-hover:from-gold/30 group-hover:to-gold/20 transition-all duration-500 shadow-lg">
                      {category.id === 'communities' ? (
                        <Building className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />
                      ) : (
                        <Home className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />
                      )}
                    </div>

                    {/* Enhanced Metric */}
                    <motion.div 
                      className="mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gold to-gold-400 bg-clip-text text-transparent mb-2">
                        {project.metric}
                      </div>
                      <div className="text-platinum/60 text-sm font-medium">
                        {project.unit}
                      </div>
                    </motion.div>

                    {/* Enhanced Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-platinum mb-4 group-hover:text-gold transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>

                    {/* Enhanced Description */}
                    <p className="text-platinum/70 leading-relaxed text-base">
                      {project.description}
                    </p>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default DeveloperPartners;
