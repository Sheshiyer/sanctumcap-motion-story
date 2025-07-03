
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
    <section id="developers" className="py-20 bg-charcoal/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-platinum mb-4">
            Developer Partner Profiles
          </h2>
          <p className="text-xl text-platinum/70 max-w-3xl mx-auto">
            Strategic partnerships delivering exceptional real estate developments
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12">
          <div className="bg-midnight/60 rounded-xl p-2 inline-flex">
            {developerData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gold text-midnight shadow-lg'
                    : 'text-platinum hover:text-gold'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[500px]">
          {developerData.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeTab === category.id ? 1 : 0,
                y: activeTab === category.id ? 0 : 20
              }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 ${
                activeTab === category.id ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{
                      opacity: activeTab === category.id ? 1 : 0,
                      y: activeTab === category.id ? 0 : 30,
                      scale: activeTab === category.id ? 1 : 0.95
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: activeTab === category.id ? index * 0.1 : 0,
                      type: "spring",
                      stiffness: 120,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="bg-midnight/80 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300 group"
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                      {category.id === 'communities' ? (
                        <Building className="w-8 h-8 text-gold" />
                      ) : (
                        <Home className="w-8 h-8 text-gold" />
                      )}
                    </div>

                    {/* Metric */}
                    <div className="mb-4">
                      <div className="text-3xl md:text-4xl font-bold text-gold mb-1">
                        {project.metric}
                      </div>
                      <div className="text-platinum/60 text-sm font-medium">
                        {project.unit}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-platinum mb-3 group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-platinum/70 leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-midnight/60 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-platinum mb-6">
            Why Choose SanctumCap?
          </h3>
          <p className="text-lg text-platinum/70 mb-8 max-w-4xl mx-auto">
            SanctumCap has been delivering consistent real estate investment success in Bengaluru since 2014. 
            With ₹14 Cr+ investor returns and 32%+ CAGR in select projects, our expertise ensures high-value investments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-charcoal/60 rounded-xl p-6">
              <div className="text-4xl font-bold text-gold mb-2">₹14 Cr+</div>
              <div className="text-platinum/70">Returns</div>
              <div className="text-sm text-platinum/50 mt-1">
                Investor earnings from SanctumCap's projects
              </div>
            </div>
            <div className="bg-charcoal/60 rounded-xl p-6">
              <div className="text-4xl font-bold text-gold mb-2">32%+</div>
              <div className="text-platinum/70">CAGR</div>
              <div className="text-sm text-platinum/50 mt-1">
                Strong capital growth in top projects
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperPartners;
