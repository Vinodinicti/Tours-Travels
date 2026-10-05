import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Wifi, ShieldCheck, CheckCircle2, RotateCw, ArrowRight, Sparkles, Armchair, Snowflake, Users, Bus, Zap } from 'lucide-react';
import { BUS_FLEET_3D } from '../data/busData';

const Bus3DFlipSection = ({ onOpenBookingModal }) => {
  const [flippedCards, setFlippedCards] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const timerMapRef = useRef({});

  // Toggle flip manually or programmatically, auto-flipping back after 4 seconds
  const toggleFlip = (id) => {
    setFlippedCards((prev) => {
      const isCurrentlyFlipped = !!prev[id];
      const nextState = !isCurrentlyFlipped;

      // Clear any pending timer for this card
      if (timerMapRef.current[id]) {
        clearTimeout(timerMapRef.current[id]);
        timerMapRef.current[id] = null;
      }

      // If flipping to back (true), automatically flip back to front after 4 seconds
      if (nextState) {
        timerMapRef.current[id] = setTimeout(() => {
          setFlippedCards((curr) => ({ ...curr, [id]: false }));
          timerMapRef.current[id] = null;
        }, 4000);
      }

      return { ...prev, [id]: nextState };
    });
  };

  // Automatic showcase flip sequence across cards every 4.5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      const busId = BUS_FLEET_3D[currentIndex]?.id;
      if (busId) {
        toggleFlip(busId);
      }
      currentIndex = (currentIndex + 1) % BUS_FLEET_3D.length;
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      Object.values(timerMapRef.current).forEach((t) => {
        if (t) clearTimeout(t);
      });
    };
  }, []);

  return (
    /* Distinct Section Theme: Cool Mint & Pearl Background */
    <section 
      className="py-12 bg-gradient-to-b from-[#F0FDF4] via-[#F8FAFC] to-[#F1F5F9] text-[#1E293B] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* Decorative Blob */}
      <div className="hidden md:block absolute top-10 left-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 space-y-3"
        >
          <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-block border border-emerald-200">
            PREMIUM BUS FLEET
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1E293B] tracking-tight">
            Our Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#800000] via-[#8B1E1E] to-[#F59E0B] italic">Bus Fleet</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Experience Tamil Nadu's finest Volvo & Scania coaches. Explore engineering specs, luxury amenities, air suspension, and fares. Tap any card for 3D layout specs.
          </p>
        </motion.div>

        {/* 3D Flip Cards Grid - Compact, Screen-Fitting (100% viewport visible) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BUS_FLEET_3D.map((bus) => {
            const isFlipped = flippedCards[bus.id];

            return (
              <div
                key={bus.id}
                className="perspective-1000 h-[440px] sm:h-[450px] w-full cursor-pointer group"
                onClick={() => toggleFlip(bus.id)}
              >
                <div
                  className={`relative w-full h-full duration-700 transform-preserve-3d transition-transform ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  
                  {/* FRONT OF THE 3D CARD: CLEAN, SCREEN-FITTING, 4-5 ESSENTIAL DETAILS */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl bg-white border-2 border-emerald-200/80 p-4 shadow-lg hover:shadow-2xl backface-hidden flex flex-col justify-between overflow-hidden">
                    
                    <div className="flex flex-col flex-1 min-h-0">
                      
                      {/* 1. HERO VEHICLE IMAGE: FULLY VISIBLE & UNOBSTRUCTED */}
                      <div className="relative h-44 w-full shrink-0 rounded-2xl overflow-hidden mb-2.5 border border-slate-200/80 shadow-xs group/img bg-slate-900">
                        <img
                          src={bus.image}
                          alt={bus.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Top-Left: Model Badge */}
                        <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-slate-950 sm:bg-slate-950/85 sm:backdrop-blur-md text-amber-300 border border-amber-400/40 text-[10px] font-extrabold shadow-md flex items-center gap-1">
                          <Bus className="w-3 h-3 text-[#F59E0B]" />
                          <span>{bus.badge}</span>
                        </span>
                      </div>

                      {/* 2. BUS NAME */}
                      <h3 className="font-serif text-base font-extrabold text-[#1E293B] group-hover:text-[#800000] transition-colors leading-tight mb-2 truncate shrink-0">
                        {bus.name}
                      </h3>

                      {/* 3. ESSENTIAL FARES STRIP */}
                      <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-50/90 via-slate-50 to-rose-50/80 border border-amber-200/90 mb-2.5 shrink-0 shadow-xs">
                        <div>
                          <span className="text-[8px] uppercase font-bold text-gray-500 block leading-none">Ticket Fare</span>
                          <span className="text-sm font-black text-[#800000] block mt-0.5">
                            {bus.startingFare} <span className="text-[10px] text-gray-500 font-semibold">/ Seat</span>
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[8px] uppercase font-bold text-gray-500 block leading-none">Charter Tour</span>
                          <span className="text-sm font-black text-emerald-700 block mt-0.5">{bus.perDayFare}</span>
                        </div>
                      </div>

                      {/* 4. ESSENTIAL 3 QUICK SPECS (Capacity, AC, Ride) */}
                      <div className="grid grid-cols-3 gap-1.5 mb-2 shrink-0">
                        <div className="p-1.5 rounded-xl bg-amber-50/80 border border-amber-200 text-center">
                          <span className="text-[8px] uppercase font-bold text-gray-500 block leading-none">Capacity</span>
                          <span className="text-[10px] sm:text-[11px] font-black text-[#1E293B] block mt-0.5 truncate">{bus.totalSeats}</span>
                        </div>
                        <div className="p-1.5 rounded-xl bg-sky-50/80 border border-sky-200 text-center">
                          <span className="text-[8px] uppercase font-bold text-gray-500 block leading-none">AC Climate</span>
                          <span className="text-[10px] sm:text-[11px] font-black text-sky-950 block mt-0.5 truncate">{bus.acType}</span>
                        </div>
                        <div className="p-1.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-center">
                          <span className="text-[8px] uppercase font-bold text-gray-500 block leading-none">Suspension</span>
                          <span className="text-[10px] sm:text-[11px] font-black text-emerald-900 block mt-0.5 truncate">Air ECAS</span>
                        </div>
                      </div>

                    </div>

                    {/* 5. CARD ACTION BUTTONS (Pinned to Bottom) */}
                    <div className="pt-2 border-t border-slate-100 flex items-center gap-2 mt-auto shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBookingModal(bus.name);
                        }}
                        className="flex-1 py-2 px-3 bg-gradient-maroon-gold text-white font-extrabold rounded-xl shadow-glow-maroon hover:opacity-95 transition text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shrink-0"
                      >
                        <span>Book {bus.badge}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFlip(bus.id);
                        }}
                        className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1 shrink-0 border border-slate-200 transition"
                        title="Click to view all specs"
                      >
                        <RotateCw className="w-3.5 h-3.5 text-[#800000]" />
                        <span>All Specs</span>
                      </button>
                    </div>

                  </div>

                  {/* BACK OF THE 3D CARD: ALL TECHNICAL & COMFORT DETAILS */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-[#FFF5F5] via-white to-amber-50 border-2 border-[#800000] p-4 shadow-xl backface-hidden rotate-y-180 flex flex-col justify-between overflow-hidden text-[#1E293B]">
                    
                    <div className="flex flex-col flex-1 min-h-0 space-y-1.5">
                      
                      {/* Top Header */}
                      <div className="flex items-center justify-between pb-1 border-b border-rose-200 shrink-0">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#800000] flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#F59E0B]" /> Full Specifications & Amenities
                        </span>
                        <span className="text-[9px] text-[#800000] font-extrabold bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                          Auto-flips in 4s
                        </span>
                      </div>

                      {/* Bus Model Name & Subtitle */}
                      <div className="shrink-0">
                        <h4 className="font-serif text-sm font-bold text-[#1E293B] leading-tight truncate">
                          {bus.name}
                        </h4>
                        <span className="text-[10px] text-[#800000] font-extrabold block truncate">{bus.modelCode}</span>
                      </div>

                      {/* 4 Technical Architecture Specs */}
                      <div className="grid grid-cols-2 gap-1.5 text-[10px] shrink-0">
                        <div className="p-2 rounded-xl bg-white border border-rose-200 shadow-xs">
                          <span className="text-gray-400 font-bold block text-[8px] uppercase tracking-wider">Engine & Power</span>
                          <span className="font-black text-[#800000] block text-[11px] truncate">{bus.enginePower}</span>
                          <span className="text-gray-600 block text-[9px] truncate">{bus.suspensionShort}</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white border border-rose-200 shadow-xs">
                          <span className="text-gray-400 font-bold block text-[8px] uppercase tracking-wider">Safety Systems</span>
                          <span className="font-black text-sky-800 block text-[11px] truncate">{bus.safety}</span>
                          <span className="text-gray-600 block text-[9px] truncate">GPS Fleet Telematics</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white border border-rose-200 shadow-xs">
                          <span className="text-gray-400 font-bold block text-[8px] uppercase tracking-wider">Berth Comfort</span>
                          <span className="font-black text-[#800000] block text-[11px] truncate">{bus.berthSpec}</span>
                          <span className="text-emerald-700 font-bold block text-[9px] truncate">{bus.totalSeats} Layout</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white border border-rose-200 shadow-xs">
                          <span className="text-gray-400 font-bold block text-[8px] uppercase tracking-wider">Power Outlets</span>
                          <span className="font-black text-purple-800 block text-[11px] truncate">{bus.charging}</span>
                          <span className="text-gray-600 block text-[9px] truncate">Every Berth & Row</span>
                        </div>
                      </div>

                      {/* Amenities Checklist */}
                      <div className="space-y-0.5 shrink-0">
                        <span className="text-[9px] font-bold text-gray-500 block uppercase tracking-wider">Onboard Amenities:</span>
                        <div className="grid grid-cols-2 gap-1 text-[10px] text-gray-700 font-medium">
                          {bus.amenities.slice(0, 6).map((item, i) => (
                            <div key={i} className="flex items-center space-x-1 min-w-0">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Major Route */}
                      <div className="p-1.5 rounded-xl bg-amber-50 border border-amber-200 text-[10px] text-gray-700 flex items-center justify-between shrink-0 shadow-xs">
                        <span className="font-bold text-slate-700 shrink-0 text-[9px]">Major Route:</span>
                        <span className="font-black text-[#800000] truncate ml-1 text-[10px]">{bus.popularRoute}</span>
                      </div>

                    </div>

                    {/* Book Seat CTA - Pinned Cleanly to Bottom */}
                    <div className="pt-2 border-t border-rose-200 mt-auto shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBookingModal(bus.name);
                        }}
                        className="w-full py-2 bg-gradient-maroon-gold text-white font-extrabold rounded-xl shadow-glow-maroon hover:opacity-95 transition text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
                      >
                        <span>Book {bus.badge} ({bus.startingFare})</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Bus3DFlipSection;


