import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { CLIENT_BUS_INFO, FEATURED_DESTINATIONS_PER_DAY } from '../data/busData';

const DestinationsPage = ({ onSelectDestination }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDestinations = useMemo(() => {
    return FEATURED_DESTINATIONS_PER_DAY.filter((d) => {
      const query = searchTerm.toLowerCase();
      return d.name.toLowerCase().includes(query) ||
             d.location.toLowerCase().includes(query) ||
             d.highlights.some(h => h.toLowerCase().includes(query));
    });
  }, [searchTerm]);

  return (
    <div className="bg-uiverse-gradient min-h-screen text-[#1E293B] relative overflow-hidden">
      
      {/* -------------------------------------------------------------
         UIVERSE ANIMATED CUBE SVG BACKGROUND PATTERN
         ------------------------------------------------------------- */}
      <svg className="cube-pattern-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
        <defs>
          <pattern id="cubeGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z" fill="none" stroke="#800000" strokeWidth="1" opacity="0.4" />
            <path d="M30 0 L30 60 M0 15 L60 45 M60 15 L0 45" stroke="#F59E0B" strokeWidth="0.75" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cubeGrid)" />
      </svg>

      {/* Ambient Glows */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* -------------------------------------------------------------
         PAGE HERO BANNER: SAME SPACIOUS SIZE & VISIBLE IMAGE AS HOME HERO
         ------------------------------------------------------------- */}
      <div className="relative min-h-[50vh] flex items-center justify-center pt-20 pb-12 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1920&q=80"
            alt="Tamil Nadu Famous Tour Destinations"
            className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
          />
          {/* Minimal 20% overlay - image is 100% bright & visible */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-white/95 text-[#800000] border border-amber-300 text-xs font-extrabold uppercase tracking-widest inline-block shadow-lg">
            Tamil Nadu Tour Destinations & Tariff
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-2xl">
            Destinations & <span className="text-[#FBBF24] italic">Tour Booking</span>
          </h1>
          <p className="text-gray-100 text-sm sm:text-base max-w-2xl mx-auto font-semibold drop-shadow">
            Explore top Tamil Nadu destinations with clear per-day bus tour pricing and automatic cost calculation.
          </p>
        </div>
      </div>

      {/* Main Content Area - White Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 relative z-10">

        {/* Search Input Bar */}
        <div className="max-w-3xl mx-auto relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search destination (e.g. Coimbatore, Chennai, Madurai, Ooty, Velankanni)..."
            className="w-full px-6 py-4 pl-14 rounded-2xl bg-white text-[#1E293B] font-bold border-2 border-amber-300 focus:outline-none focus:ring-2 focus:ring-[#800000] shadow-md text-sm"
          />
          <Search className="w-5 h-5 text-[#800000] absolute left-5 top-1/2 -translate-y-1/2" />
        </div>

        {/* 7 Destinations White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-[2.5rem] bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:border-amber-300 hover:-translate-y-2 transition-all space-y-4 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="relative h-56 rounded-t-[2.5rem] overflow-hidden">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#800000] text-white text-xs font-bold shadow-md">
                    📍 {dest.location}
                  </span>

                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#F59E0B] text-slate-950 text-xs font-extrabold shadow-md">
                    {dest.formattedPrice}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-2xl font-extrabold text-[#1E293B]">{dest.name}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed font-medium">{dest.short}</p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {dest.highlights.map((hl, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-md bg-amber-50 text-[#800000] text-xs font-semibold border border-amber-200">
                        ✓ {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Rate / Day</span>
                  <span className="font-serif text-xl font-extrabold text-[#800000]">₹{dest.perDayPrice.toLocaleString()}</span>
                </div>

                <button
                  onClick={() => onSelectDestination(dest)}
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
    </div>
  );
};

export default DestinationsPage;
