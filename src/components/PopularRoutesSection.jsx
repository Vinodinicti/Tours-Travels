import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight, Sparkles, Navigation, DollarSign } from 'lucide-react';
import { FEATURED_DESTINATIONS_PER_DAY, CLIENT_BUS_INFO } from '../data/busData';

const PopularRoutesSection = ({ onOpenBookingModal }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFDF5] via-[#FFFBEB] to-[#F8FAFC] text-[#1E293B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-amber-100 text-[#D97706] text-xs font-bold uppercase tracking-wider inline-block border border-amber-200">
            Featured Tour Destinations & Per-Day Tariff
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1E293B] tracking-tight">
            Tamil Nadu Tour <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#800000] via-[#8B1E1E] to-[#F59E0B] italic">Destinations</span>
          </h2>
          <p className="text-gray-600 text-base font-medium">
            Explore 7 iconic destinations with clear per-day bus tour pricing, luxury stays, and guided sightseeing.
          </p>
        </div>

        {/* Featured Destinations Grid (7 Destinations with Per Day Pricing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_DESTINATIONS_PER_DAY.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-[2.5rem] bg-white border-2 border-amber-200/80 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Header with Uploaded Bus Images */}
                <div className="relative h-56 rounded-t-[2.5rem] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#800000] text-white text-xs font-bold shadow-md">
                    📍 {dest.location}
                  </span>

                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#F59E0B] text-slate-950 text-xs font-extrabold shadow-md">
                    {dest.formattedPrice}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-2xl font-extrabold text-[#1E293B] group-hover:text-[#800000] transition-colors">
                    {dest.name}
                  </h3>

                  <p className="text-gray-600 text-xs leading-relaxed font-medium">
                    {dest.short}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {dest.highlights.map((hl, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-md bg-amber-50 text-[#800000] text-xs font-semibold border border-amber-200">
                        ✓ {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Rate / Day</span>
                  <span className="font-serif text-xl font-extrabold text-[#800000]">₹{dest.perDayPrice.toLocaleString()}</span>
                </div>

                <button
                  onClick={() => onOpenBookingModal(dest.name, dest.perDayPrice)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-maroon-gold text-white font-extrabold text-xs shadow-glow-maroon hover:scale-105 transition-all flex items-center space-x-1.5"
                >
                  <span>Book Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularRoutesSection;
