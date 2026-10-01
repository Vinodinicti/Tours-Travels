import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Compass, Sun, Globe, UserCheck, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data/travelData';

const iconMap = {
  Heart: Heart,
  Users: Users,
  Compass: Compass,
  Sun: Sun,
  Globe: Globe,
  UserCheck: UserCheck,
};

const TravelExperiencesSection = ({ setActivePage }) => {
  return (
    <section className="py-20 bg-cream-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-coral/15 text-coral text-xs font-bold uppercase tracking-wider">
            Tailored Vacation Styles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal">
            Unforgettable <span className="text-gradient-coral italic">Travel Experiences</span>
          </h2>
          <p className="text-charcoal-light text-sm">
            Whether you seek romantic beach retreats, thrill-seeking mountain treks, or family fun, we have the ideal journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, idx) => {
            const IconComponent = iconMap[exp.iconName] || Compass;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => {
                  setActivePage('packages');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative rounded-3xl p-6 glass-card border border-white/80 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-between"
              >
                {/* Background Image Accent on Hover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundImage: `url(${exp.image})` }}
                />

                <div className="flex items-center space-x-4 relative z-10">
                  {/* Icon with Coral/Peach Gradient Background */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white shadow-glow-coral transition-transform group-hover:scale-110`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-coral transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-charcoal-light mt-0.5">
                      {exp.subtitle}
                    </p>
                    <span className="inline-block mt-2 text-[11px] font-bold text-coral bg-peach/15 px-2.5 py-0.5 rounded-md">
                      {exp.count}
                    </span>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-white border border-peach/30 flex items-center justify-center text-charcoal group-hover:bg-coral group-hover:text-white transition-all shadow-sm">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TravelExperiencesSection;
