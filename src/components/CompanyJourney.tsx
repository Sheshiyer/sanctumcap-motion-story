
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineItems = [
  {
    id: '2005',
    year: '2005',
    title: 'Initial Investment',
    description: 'Started with an initial investment of ₹50 Lakhs, laying the foundation for our real estate investment journey.',
    metric: '₹50 Lakhs',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop'
  },
  {
    id: '2021',
    year: '2021',
    title: 'Strong Market Growth',
    description: 'Achieved significant portfolio expansion with assets worth ₹20 Cr+ through strategic market positioning and careful selection.',
    metric: '₹20 Cr+',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
  },
  {
    id: '2025',
    year: '2025',
    title: 'Continued Excellence',
    description: 'Reached new heights with portfolio valuation of ₹50 Cr+, demonstrating sustained growth in the real estate sector.',
    metric: '₹50 Cr+',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop'
  }
];

const CompanyJourney = () => {
  return (
    <section id="company" className="py-20 bg-midnight/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-platinum mb-4">
            Investment Growth Over Time
          </h2>
          <p className="text-xl text-platinum/70 max-w-3xl mx-auto">
            Our journey of consistent growth and strategic investments in the real estate sector
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

          <div className="space-y-16 lg:space-y-24">
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
                  className={`relative flex flex-col lg:flex-row items-center ${
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

                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-charcoal/80 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="text-3xl font-bold text-gold mr-4">
                          {item.year}
                        </div>
                        <div className="text-2xl font-semibold text-gold">
                          {item.metric}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-platinum mb-4">
                        {item.title}
                      </h3>
                      
                      <p className="text-platinum/70 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Image */}
                  <div className={`w-full lg:w-5/12 mt-8 lg:mt-0 ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                      className="relative rounded-2xl overflow-hidden aspect-video"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
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
