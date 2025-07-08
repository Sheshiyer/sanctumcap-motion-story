
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
    <section id="investors" className="py-24">
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
            🤝 Global Network
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-6 leading-tight">
            Investor{' '}
            <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="text-xl text-platinum/70 max-w-4xl mx-auto leading-relaxed">
            Trusted by{' '}
            <span className="text-gold font-semibold">leading investors and institutions</span>{' '}
            worldwide, building lasting partnerships for mutual growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                y: -10, 
                scale: 1.03, 
                rotateX: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-midnight/90 to-midnight/70 backdrop-blur-sm rounded-3xl p-8 border border-gold/20 hover:border-gold/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-gold/10"
            >
              {/* Enhanced Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl transform -translate-x-16 -translate-y-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Enhanced Company Logo Placeholder */}
              <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-gold/30 group-hover:to-gold/20 transition-all duration-500 shadow-lg relative z-10">
                <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-400 rounded-xl group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Enhanced Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-platinum mb-3 group-hover:text-gold transition-colors duration-300 leading-tight">
                  {investor.title}
                </h3>
                
                <p className="text-lg font-semibold bg-gradient-to-r from-gold to-gold-400 bg-clip-text text-transparent mb-4 group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-300">
                  {investor.company}
                </p>
                
                <div className="flex items-center text-platinum/70 text-sm font-medium group-hover:text-platinum/90 transition-colors duration-300">
                  <MapPin className="w-4 h-4 mr-2 text-gold" />
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

        {/* Enhanced Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-gradient-to-br from-midnight/90 to-midnight/70 backdrop-blur-sm rounded-3xl p-10 border border-gold/30 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-sm font-medium mb-4">
                  📊 Network Stats
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-platinum mb-4">
                  Global{' '}
                  <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent">
                    Partnership Network
                  </span>
                </h3>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { value: '5', label: 'Countries', icon: '🌍' },
                  { value: '9+', label: 'Global Companies', icon: '🏢' },
                  { value: '100%', label: 'Trust Rate', icon: '🤝' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-gold-400 bg-clip-text text-transparent mb-3 group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-300">
                      {stat.value}
                    </div>
                    <div className="text-platinum/70 font-medium group-hover:text-platinum/90 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorPartners;
