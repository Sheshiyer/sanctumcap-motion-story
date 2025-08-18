import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Shield, TrendingUp, Search } from 'lucide-react';
import { LoadingTransition, SmoothReveal } from './PageTransition';

const trustFactors = [
  {
    id: 'legal-vetting',
    title: 'Legal Vetting',
    subheadline: 'Comprehensive Legal Verification',
    description: 'Every project undergoes thorough legal checks and documentation verification before being introduced to our investors, ensuring complete transparency and compliance.',
    icon: Shield,
    delay: 0
  },
  {
    id: 'financial-assessment',
    title: 'Financial Assessment',
    subheadline: 'Rigorous Financial Analysis',
    description: 'Our expert team conducts detailed financial soundness evaluations and long-term viability assessments to guarantee sustainable investment opportunities.',
    icon: TrendingUp,
    delay: 0.2
  },
  {
    id: 'property-diligence',
    title: 'Property Due Diligence',
    subheadline: 'Personal Property Verification',
    description: 'Sanctum personally vets each property through on-site inspections and quality assessments, ensuring security and excellence before investor connections.',
    icon: Search,
    delay: 0.4
  }
];

const TrustFactors = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsLoading(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <motion.section 
      id="trust"
      ref={sectionRef}
      className="py-8 relative w-full overflow-visible min-h-[80vh] flex flex-col justify-center"
      style={{ opacity, paddingTop: '2em', paddingBottom: '2em' }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-sm font-medium mb-6"
            style={{ color: '#0F1A3C' }}
          >
            🛡️ Trust & Credibility
          </motion.div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-midnight mb-6 tracking-tight">
            WHY TRUST{' '}
            <span className="bg-gradient-to-r from-gold via-gold-400 to-sandstone bg-clip-text text-transparent font-black">SANCTUM CAP</span>
          </h3>
          <p 
            className="text-midnight/85 max-w-3xl mx-auto leading-relaxed px-4"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
          >
            Our commitment to{' '}
            <span className="text-slate-600 font-semibold">transparency and excellence</span>{' '}
            ensures every investment opportunity meets the highest standards of quality and security
          </p>
        </motion.div>

        {/* Trust Factors Grid */}
        <div className="relative">
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-radial from-slate-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-conic from-slate-400/15 via-transparent to-slate-500/10 rounded-full blur-2xl" />
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10"
            style={{ y, overflow: 'visible' }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {trustFactors.map((factor, index) => {
              const IconComponent = factor.icon;
              
              return (
                <motion.div
                  key={factor.id}
                  className="group relative p-6 sm:p-8 rounded-2xl border border-slate-200/60 hover:border-slate-300/80 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/40 cursor-pointer overflow-visible"
                  style={{ 
                    backgroundColor: '#0F1A3C',
                    transformStyle: 'preserve-3d'
                  }}
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      y: 60,
                      scale: 0.8,
                      rotateX: -15
                    },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      scale: 1,
                      rotateX: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        duration: 0.8,
                        delay: factor.delay
                      }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Icon Container */}
                  <div className="flex items-center justify-center mb-6">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)"
                      }}
                    >
                      <IconComponent 
                        className="w-8 h-8 transition-all duration-300" 
                        style={{ color: '#D4AF37' }}
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    {/* Title */}
                    <motion.h4 
                      className="text-xl sm:text-2xl font-bold mb-3 tracking-tight"
                      style={{ color: '#E6E6EB' }}
                    >
                      {factor.title}
                    </motion.h4>

                    {/* Subheadline */}
                    <motion.h5 
                      className="text-sm sm:text-base font-semibold mb-4 opacity-90"
                      style={{ color: '#D4AF37' }}
                    >
                      {factor.subheadline}
                    </motion.h5>

                    {/* Description */}
                    <motion.p 
                      className="text-sm sm:text-base leading-relaxed opacity-85"
                      style={{ color: '#E6E6EB' }}
                    >
                      {factor.description}
                    </motion.p>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
                  
                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-slate-400/30 group-hover:bg-gold/60 transition-colors duration-300" />
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TrustFactors;