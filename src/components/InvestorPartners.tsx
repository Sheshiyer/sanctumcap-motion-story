
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const investors = [
  {
    id: 'nomura',
    title: 'Executive Director',
    company: 'Nomura Securities',
    location: 'Tokyo, Japan',
    tier: 'executive'
  },
  {
    id: 'broadcom',
    title: 'Engineering Manager',
    company: 'Broadcom',
    location: 'Bengaluru',
    tier: 'manager'
  },
  {
    id: 'ireland-railways',
    title: 'Design Manager',
    company: 'Ireland Railways',
    location: 'Dublin, Ireland',
    tier: 'manager'
  },
  {
    id: 'vmware',
    title: 'Senior Manager',
    company: 'VMware',
    location: 'Bengaluru',
    tier: 'manager'
  },
  {
    id: 'micron',
    title: 'Director',
    company: 'Micron',
    location: 'Idaho, USA',
    tier: 'director'
  },
  {
    id: 'intel',
    title: 'Architect',
    company: 'Intel',
    location: 'Bengaluru',
    tier: 'executive'
  },
  {
    id: 'cisco',
    title: 'Senior Biz Dev Mgr',
    company: 'Cisco',
    location: 'Bengaluru',
    tier: 'manager'
  },
  {
    id: 'pega',
    title: 'Technology Leader',
    company: 'Pega',
    location: 'Charlotte, USA',
    tier: 'director'
  },
  {
    id: 'google',
    title: 'Engineering Manager',
    company: 'Google',
    location: 'Bengaluru',
    tier: 'manager'
  }
];

const InvestorPartners = () => {
  return (
    <section id="investors" className="py-20 bg-charcoal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-platinum mb-4">
            Investor Partner Profiles
          </h2>
          <p className="text-xl text-platinum/70 max-w-3xl mx-auto">
            Trusted by executives and leaders from top global companies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investors.map((investor, index) => (
            <motion.div
              key={investor.id}
              initial={{ 
                opacity: 0, 
                y: 40, 
                rotateX: -15 
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0 
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02, 
                rotateX: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              className="group relative bg-midnight/80 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Company Logo Placeholder */}
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                <div className="w-6 h-6 bg-gold rounded-lg" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-platinum mb-2 group-hover:text-gold transition-colors">
                  {investor.title}
                </h3>
                
                <p className="text-gold font-medium mb-3">
                  {investor.company}
                </p>
                
                <div className="flex items-center text-platinum/60 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {investor.location}
                </div>

                {/* Tier Badge */}
                <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
                  investor.tier === 'executive' 
                    ? 'bg-gold/20 text-gold' 
                    : investor.tier === 'director'
                    ? 'bg-primary/20 text-primary-300'
                    : 'bg-platinum/20 text-platinum'
                }`}>
                  {investor.tier.charAt(0).toUpperCase() + investor.tier.slice(1)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-midnight/60 rounded-2xl p-6">
              <div className="text-3xl font-bold text-gold mb-2">5</div>
              <div className="text-platinum/70">Countries</div>
            </div>
            <div className="bg-midnight/60 rounded-2xl p-6">
              <div className="text-3xl font-bold text-gold mb-2">9+</div>
              <div className="text-platinum/70">Global Companies</div>
            </div>
            <div className="bg-midnight/60 rounded-2xl p-6">
              <div className="text-3xl font-bold text-gold mb-2">100%</div>
              <div className="text-platinum/70">Trust Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorPartners;
