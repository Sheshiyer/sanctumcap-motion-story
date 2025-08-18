
import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const gdpData = [
  { year: 2008, value: 1, label: '$1 Trillion' },
  { year: 2015, value: 2, label: '$2 Trillion' },
  { year: 2022, value: 3, label: '$3 Trillion' },
  { year: 2025, value: 4, label: '$4 Trillion (Expected)', projected: true },
  { year: 2047, value: 31, label: '$29-33 Trillion (Projected)', projected: true }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white/95 backdrop-blur-sm border border-gold/30 rounded-lg p-3 shadow-lg">
        <p className="font-semibold" style={{ color: '#0F1A3C' }}>{label}</p>
        <p className="text-gold">{data.label}</p>
      </div>
    );
  }
  return null;
};

const GDPGrowthChart = () => {
  return (
    <section id="growth" className="py-20 bg-midnight" style={{ paddingTop: '2em', paddingBottom: '2em' }}>
      <div className="w-full max-w-[100vw] px-[4vw] md:px-[6vw] lg:px-[8vw] mx-auto overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            THE SMARTER WAY TO INVEST IN INDIA'S GROWTH
          </h3>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
            India's GDP is on a rapid growth trajectory, offering unparalleled opportunities for investors. 
            Bengaluru stands out with its stable real estate market, making it a preferred choice.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 mb-12"
        >
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={gdpData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="gdpGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1C1C2D" opacity={0.4} />
                <XAxis 
                  dataKey="year" 
                  stroke="#0F1A3C" 
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis 
                  stroke="#0F1A3C" 
                  fontSize={12}
                  tickLine={false}
                  tickFormatter={(value) => `$${value}T`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#D4AF37"
                  strokeWidth={3}
                  fill="url(#gdpGradient)"
                  dot={{ fill: '#D4AF37', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, fill: '#D4AF37', stroke: '#0F1A3C', strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default GDPGrowthChart;
