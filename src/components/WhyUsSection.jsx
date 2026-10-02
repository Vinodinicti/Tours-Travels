import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, ShieldCheck, Hotel, Headphones } from 'lucide-react';
import { WHY_US_FEATURES } from '../data/travelData';

const iconMap = {
  Sliders: Sliders,
  ShieldCheck: ShieldCheck,
  Hotel: Hotel,
  Headphones: Headphones,
};

const WhyUsSection = () => {
  return (
    <section className="py-10 bg-cream-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-coral/15 text-coral text-xs font-bold uppercase tracking-wider">
            The Aura Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-charcoal">
            Why Travel <span className="text-gradient-coral italic">With Us</span>
          </h2>
          <p className="text-charcoal-light text-base">
            We don’t just book trips; we create seamless, luxury, and worry-free travel memories that stay with you forever.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US_FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName] || ShieldCheck;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-[2rem] glass-card border border-white/80 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative Top Accent Line */}
                <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${feature.gradient} mb-8 transition-all group-hover:w-full`} />

                {/* Minimal Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-glow-coral mb-6 transition-transform group-hover:scale-110`}>
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="font-serif text-xl font-bold text-charcoal mb-3 group-hover:text-coral transition-colors">
                  {feature.title}
                </h3>

                <p className="text-charcoal-light text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;
