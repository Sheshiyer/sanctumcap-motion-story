import React from 'react';
import { motion } from 'framer-motion';
import globalMapImage from '@/assets/global-map.png';

const GlobalInvestorMap = () => {
  const investorCountries = [
    { 
      name: 'USA', 
      flag: '🇺🇸',
      investors: '25+',
      description: 'Leading institutional investors'
    },
    { 
      name: 'Ireland', 
      flag: '🇮🇪',
      investors: '15+',
      description: 'European investment partners'
    },
    { 
      name: 'India', 
      flag: '🇮🇳',
      investors: '40+',
      description: 'Domestic market leaders'
    },
    { 
      name: 'Japan', 
      flag: '🇯🇵',
      investors: '12+',
      description: 'Asian Pacific investors'
    },
    { 
      name: 'Singapore', 
      flag: '🇸🇬',
      investors: '18+',
      description: 'Southeast Asian hub'
    }
  ];

  return (
    <section className="relative py-20 w-full max-w-[100vw] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
      
      <div className="w-full max-w-[100vw] px-[4vw] md:px-[6vw] lg:px-[8vw] mx-auto relative z-10 overflow-x-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-platinum mb-6 tracking-tight">
            GLOBAL{' '}
            <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent font-black">
              INVESTOR
            </span>{' '}
            NETWORK
          </h2>
          <p className="text-lg md:text-xl text-platinum/70 max-w-3xl mx-auto leading-relaxed">
            Trusted by investors across five countries, building wealth through strategic real estate investments
          </p>
        </motion.div>

        {/* Map Background Container */}
        <div className="relative w-full mb-16">
          {/* Background Map */}
          <div className="absolute inset-0 w-full h-full opacity-20 rounded-2xl overflow-hidden">
            <img 
              src={globalMapImage} 
              alt="World Map Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Country Bento Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            {investorCountries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-gradient-to-br from-midnight/80 via-charcoal/70 to-primary-900/60 backdrop-blur-sm rounded-xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
              >
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.3)_0%,transparent_50%)] group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px]" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Flag and Country */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{country.flag}</div>
                    <div>
                      <h3 className="text-xl font-bold text-platinum group-hover:text-gold transition-colors duration-300">
                        {country.name}
                      </h3>
                      <p className="text-sm text-platinum/60">{country.description}</p>
                    </div>
                  </div>
                  
                  {/* Investor Count */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black text-gold mb-1">{country.investors}</div>
                      <div className="text-xs text-platinum/70 uppercase tracking-wider">Investors</div>
                    </div>
                    
                    {/* Decorative Element */}
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-2 h-2 bg-gold rounded-full" />
                    </motion.div>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  initial={false}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-platinum/80 mb-6">
            Join our global community of successful real estate investors
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-gold to-gold-600 text-midnight font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Investment Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalInvestorMap;