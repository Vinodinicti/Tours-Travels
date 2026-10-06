import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Sparkles } from 'lucide-react';
import { CLIENT_BUS_INFO } from '../data/busData';

const BusHeroSection = ({ onSearchBus, onOpenBookingModal }) => {
  const [fromCity, setFromCity] = useState('Coimbatore');
  const [toCity, setToCity] = useState('Chennai');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchBus({ fromCity, toCity, startDate, endDate });
  };

  return (
    <div>
      {/* -------------------------------------------------------------
         1. HERO BANNER - 100% SCREEN VIEWPORT FIT BUS VIDEO & TITLE
         ------------------------------------------------------------- */}
      <div className="relative min-h-[75vh] sm:min-h-screen pt-24 pb-14 sm:pt-32 sm:pb-24 overflow-hidden text-white flex flex-col items-center justify-center">
        {/* BUS VIDEO BACKGROUND */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-bus.webp"
            className="w-full h-full object-cover scale-105 filter brightness-[0.85] contrast-[1.05]"
          >
            <source src="/hero-bus-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-2.5 sm:space-y-4">
          
          {/* Neat Professional Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <span className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/70 sm:bg-black/40 sm:backdrop-blur-md text-amber-300 border border-amber-400/40 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest inline-block shadow-lg">
              {CLIENT_BUS_INFO.name} • LUXURY BUS OPERATOR
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl leading-tight"
          >
            Your Journey. <span className="text-[#FBBF24] italic">Our Responsibility.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-100 text-xs sm:text-base max-w-2xl mx-auto font-semibold drop-shadow"
          >
            Premium Volvo AC Sleeper & Semi-Sleeper Bus Services Across Tamil Nadu
          </motion.p>
        </div>
      </div>

      {/* -------------------------------------------------------------
         2. BUS SEARCH BAR CARD LOCATED COMPLETELY OUT / BELOW HERO SECTION
         ------------------------------------------------------------- */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 -mt-4 sm:-mt-7 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full bg-white border-2 border-[#F59E0B] shadow-2xl rounded-2xl sm:rounded-full p-3 sm:p-4 text-[#1E293B]"
        >
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-2 items-center">
            
            {/* From City */}
            <div className="lg:col-span-3 px-3 py-1">
              <label className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#800000] flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#800000]" /> FROM CITY
              </label>
              <select
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                className="w-full bg-slate-50 font-extrabold text-xs text-[#1E293B] border border-slate-200 rounded-full px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#800000] cursor-pointer"
              >
                {CLIENT_BUS_INFO.locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* To City */}
            <div className="lg:col-span-3 px-3 py-1 border-t sm:border-t-0 sm:border-l border-slate-200">
              <label className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#800000] flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#D97706]" /> TO CITY
              </label>
              <select
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                className="w-full bg-slate-50 font-extrabold text-xs text-[#1E293B] border border-slate-200 rounded-full px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#800000] cursor-pointer"
              >
                {CLIENT_BUS_INFO.locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Start Date */}
            <div className="lg:col-span-2 px-3 py-1 border-t sm:border-t-0 lg:border-l border-slate-200">
              <label className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#800000] flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#800000]" /> START DATE
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => {
                  const val = e.target.value;
                  setStartDate(val);
                  if (!endDate || endDate < val) {
                    setEndDate(val);
                  }
                }}
                className="w-full bg-slate-50 font-extrabold text-xs text-[#1E293B] border border-slate-200 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#800000]"
              />
            </div>

            {/* End Date */}
            <div className="lg:col-span-2 px-3 py-1 border-t sm:border-t-0 sm:border-l border-slate-200">
              <label className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#800000] flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#D97706]" /> END DATE
              </label>
              <input
                type="date"
                min={startDate}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full bg-slate-50 font-extrabold text-xs text-[#1E293B] border border-slate-200 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#800000]"
              />
            </div>

            {/* Search Bus Tours Button */}
            <div className="lg:col-span-2 sm:col-span-2 border-t lg:border-t-0 pt-2 lg:pt-0">
              <button
                type="submit"
                className="w-full py-3.5 px-3 bg-gradient-maroon-gold text-white font-extrabold rounded-full shadow-glow-maroon hover:scale-[1.02] transition-all text-xs flex items-center justify-center space-x-1.5"
              >
                <Search className="w-3.5 h-3.5 text-[#FBBF24]" />
                <span>Search Tours</span>
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BusHeroSection;
