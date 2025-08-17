
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
    <section id="investors" className="py-20" style={{ paddingTop: '2em', paddingBottom: '2em' }}>
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
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-midnight mb-6 tracking-tight">
            INVESTOR{' '}
            <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent">
              PARTNERS
            </span>
          </h3>
          <p className="text-xl text-midnight/85 max-w-4xl mx-auto leading-relaxed">
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
                y: -12, 
                scale: 1.08, 
                rotateX: 5,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              className="group relative backdrop-blur-sm rounded-3xl p-8 border border-slate-600/20 hover:border-slate-500/70 transition-all duration-700 overflow-hidden shadow-2xl hover:shadow-[0_30px_60px_-12px_rgba(100,116,139,0.5)] cursor-pointer"
              style={{backgroundColor: '#0F1A3C'}}
            >
              {/* Hover effects removed */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-sandstone/12 to-transparent rounded-full blur-2xl transform translate-x-16 translate-y-16 opacity-0 group-hover:opacity-100 transition-opacity duration-600 delay-200" />
              
              {/* Border effect removed */}
              


              {/* Enhanced Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 group-hover:text-slate-200 transition-colors duration-300 leading-tight" style={{color: '#E6E6EB'}}>
                  {investor.title}
                </h3>
                
                <p className="text-lg font-semibold bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent mb-4 group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300">
                  {investor.company}
                </p>
                
                <div className="flex items-center text-sm font-medium transition-colors duration-300" style={{color: '#E6E6EB'}}>
                  <MapPin className="w-4 h-4 mr-2 text-gold" />
                  {investor.location}
                </div>

                {/* Tier Badge */}
                <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
                  investor.tier === 'executive' 
                    ? 'bg-gold/20 text-gold' 
                    : investor.tier === 'director'
                    ? ''
                    : 'bg-slate-200/20'
                }`} style={{
                  backgroundColor: investor.tier === 'director' ? 'rgba(212, 175, 55, 0.2)' : undefined,
                  color: investor.tier === 'manager' ? '#E6E6EB' : investor.tier === 'director' ? '#D4AF37' : undefined
                }}>
                  {investor.tier.charAt(0).toUpperCase() + investor.tier.slice(1)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default InvestorPartners;
