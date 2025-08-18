
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investment: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', investment: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative" style={{ paddingTop: '2em', paddingBottom: '2em' }}>
      <div className="w-full max-w-[100vw] px-[4vw] md:px-[6vw] lg:px-[8vw] mx-auto overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-midnight mb-6 tracking-tight">
            START YOUR INVESTMENT JOURNEY
          </h3>
          <p className="text-xl text-midnight/85 max-w-3xl mx-auto">
            Connect with our investment experts to explore high-alpha real estate opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/90 backdrop-blur-sm border-gold/20 p-8">
              <h3 className="text-2xl font-bold text-midnight mb-6">
                GET IN TOUCH
              </h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6"
                >
                  <p className="text-green-400 font-medium">
                    Thank you! We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(255, 215, 0, 0.2)"
                    }}
                    whileHover={{ 
                      scale: 1.01
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Input
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/90 border-gold/30 text-midnight placeholder:text-midnight/65 focus:border-gold text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(255, 215, 0, 0.2)"
                    }}
                    whileHover={{ 
                      scale: 1.01
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/90 border-gold/30 text-midnight placeholder:text-midnight/50 focus:border-gold text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(255, 215, 0, 0.2)"
                    }}
                    whileHover={{ 
                      scale: 1.01
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/90 border-gold/30 text-midnight placeholder:text-midnight/50 focus:border-gold text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(255, 215, 0, 0.2)"
                    }}
                    whileHover={{ 
                      scale: 1.01
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <select
                      name="investment"
                      value={formData.investment}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/90 border border-gold/30 rounded-md text-midnight focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 text-sm sm:text-base"
                    >
                      <option value="">Investment Interest</option>
                      <option value="residential">Residential Properties</option>
                      <option value="commercial">Commercial Properties</option>
                      <option value="pre-launch">Pre-Launch Projects</option>
                      <option value="villa">Villa Plotting</option>
                      <option value="consultation">Investment Consultation</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(255, 215, 0, 0.2)"
                  }}
                  whileHover={{ 
                    scale: 1.01
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <textarea
                    name="message"
                    placeholder="Tell us about your investment goals..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/90 border border-gold/30 rounded-md text-midnight placeholder:text-midnight/65 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 text-sm sm:text-base resize-none"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 20px 40px rgba(255, 215, 0, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-600 text-midnight font-semibold py-3 sm:py-4 px-6 sm:px-8 flex items-center justify-center space-x-2 text-sm sm:text-base relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-200 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center space-x-2">
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-midnight/30 border-t-midnight rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300"
                style={{backgroundColor: '#0F1A3C'}}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-platinum">Email Us</h4>
                    <p className="text-platinum/85">info@sanctumcap.in</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300"
                style={{backgroundColor: '#0F1A3C'}}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-platinum">Call Us</h4>
                    <p className="text-platinum/85">+91 9876543210</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300"
                style={{backgroundColor: '#0F1A3C'}}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-platinum">Visit Us</h4>
                    <p className="text-platinum/85">
                      Bengaluru, Karnataka<br />
                      India
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
