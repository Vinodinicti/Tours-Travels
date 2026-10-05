import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Building2, Car, Navigation, Sparkles, Users, Heart, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/travelData';

const iconMap = {
  Plane: Plane,
  Building2: Building2,
  Car: Car,
  Navigation: Navigation,
  Sparkles: Sparkles,
  Users: Users,
  Heart: Heart,
  Shield: Shield,
};

const ServicesPage = ({ onOpenEnquiry }) => {
  return (
    <div className="pt-20 sm:pt-28 pb-14 sm:pb-24 bg-gradient-warm-soft min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-4">
          <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-peach/20 text-coral text-[10px] sm:text-xs font-bold uppercase tracking-wider inline-block">
            End-To-End Concierge
          </span>
          <h1 className="font-serif text-3xl sm:text-6xl font-extrabold text-charcoal tracking-tight leading-tight">
            Our Premium Travel <span className="text-gradient-coral italic">Services</span>
          </h1>
          <p className="text-charcoal-light text-xs sm:text-lg">
            From seamless flight bookings and handpicked luxury resorts to private chauffeured transfers and 24/7 concierge assistance.
          </p>
        </div>

        {/* 8 Modern Animated Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((srv, idx) => {
            const IconComponent = iconMap[srv.iconName] || Sparkles;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group glass-card rounded-[2rem] p-8 border border-white/80 shadow-md hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-coral-peach flex items-center justify-center text-white shadow-glow-coral mb-6 transition-transform group-hover:scale-110">
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-charcoal mb-2 group-hover:text-coral transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-charcoal-light text-xs leading-relaxed mb-6">
                    {srv.short}
                  </p>

                  <ul className="space-y-2 pt-4 border-t border-peach/20 text-xs text-charcoal font-medium">
                    {srv.features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onOpenEnquiry(srv.title)}
                    className="w-full py-3 px-4 rounded-xl bg-white border border-peach/40 text-charcoal font-bold text-xs hover:bg-gradient-coral-peach hover:text-white hover:border-transparent transition-all flex items-center justify-center space-x-1.5 shadow-xs"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Custom Service Callout */}
        <div className="glass-panel p-8 sm:p-12 rounded-[3rem] border border-peach/30 text-center max-w-4xl mx-auto space-y-4 bg-gradient-to-r from-coral/10 via-peach/15 to-cream/20 shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
            Need a Custom Bespoke Travel Arrangement?
          </h3>
          <p className="text-charcoal-light text-sm max-w-xl mx-auto">
            Have special requirements for private charters, helicopter transfers, luxury wedding groups, or corporate retreats? We handle it all.
          </p>
          <button
            onClick={() => onOpenEnquiry("Custom Bespoke Travel Arrangement")}
            className="px-8 py-3.5 bg-gradient-coral-peach text-white font-extrabold rounded-2xl shadow-glow-coral hover:shadow-glow-peach hover:scale-105 transition-all text-sm inline-flex items-center space-x-2"
          >
            <span>Discuss Custom Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
