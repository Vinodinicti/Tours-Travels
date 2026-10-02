import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Layers, ChevronRight, ChevronLeft, Send } from 'lucide-react';
import { BUS_TOUR_PACKAGES } from '../data/busData';

const BusSwapCardsSection = ({ onOpenBookingModal, packagesList = BUS_TOUR_PACKAGES }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const list = packagesList && packagesList.length > 0 ? packagesList : BUS_TOUR_PACKAGES;

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % list.length);
    }, 1600);

    return () => clearInterval(timer);
  }, [isPaused, list.length]);

  const handleNextSwap = () => {
    setActiveCardIndex((prev) => (prev + 1) % list.length);
  };

  const handlePrevSwap = () => {
    setActiveCardIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  return (
    /* Compact Distinct Section Theme: Warm Sunset Rose & Maroon Background */
    <section className="py-6 sm:py-8 bg-gradient-to-b from-[#FFF5F5] via-[#FEF2F2] to-[#FFF8F6] text-[#1E293B] relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5 space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-rose-100 text-[#800000] text-[11px] font-extrabold uppercase tracking-wider inline-block border border-rose-200 shadow-xs">
            FEATURED TOUR PACKAGES
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Tamil Nadu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#800000] via-[#8B1E1E] to-[#F59E0B] italic">Bus Tour Packages</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm font-medium">
            Explore our handcrafted bus tour itineraries across Tamil Nadu.
          </p>
        </div>

        {/* Compact 3D Swap Card Stack Container */}
        <div 
          className="relative h-[390px] sm:h-[410px] max-w-xl mx-auto flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          <AnimatePresence mode="popLayout">
            {list.map((pkg, idx) => {
              const position = (idx - activeCardIndex + list.length) % list.length;
              const isFront = position === 0;
              const isSecond = position === 1;

              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, scale: 0.85, y: 35 }}
                  animate={{
                    opacity: isFront ? 1 : isSecond ? 0.8 : 0.45,
                    scale: isFront ? 1 : isSecond ? 0.93 : 0.86,
                    y: isFront ? 0 : isSecond ? 18 : 36,
                    zIndex: list.length - position,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`absolute w-full max-w-lg rounded-3xl bg-white border-2 shadow-xl p-4 sm:p-5 flex flex-col justify-between ${
                    isFront ? 'border-[#800000] shadow-glow-maroon' : 'border-rose-200'
                  }`}
                  style={{ top: 0 }}
                >
                  <div>
                    {/* Compact Image Header */}
                    <div className="relative h-40 sm:h-44 rounded-2xl overflow-hidden mb-3.5">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                      
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#800000] text-white text-[11px] font-extrabold shadow-md">
                        {pkg.duration}
                      </span>

                      <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-white text-[#800000] text-[11px] font-extrabold shadow-md">
                        {pkg.startingFare} / Person
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-extrabold text-[#1E293B] mb-1 leading-snug">
                      {pkg.name}
                    </h3>

                    <p className="text-[11px] text-[#800000] font-extrabold mb-2.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{pkg.busDetail}</span>
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {pkg.placesCovered.map((place, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-rose-50 text-[11px] font-bold text-slate-800 border border-rose-200">
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-gray-500 font-extrabold">
                      Package {activeCardIndex + 1} of {list.length}
                    </span>

                    <button
                      onClick={() => onOpenBookingModal(pkg.name)}
                      className="px-5 py-2 bg-gradient-maroon-gold text-white font-extrabold rounded-xl text-[11px] shadow-glow-maroon hover:scale-105 transition-all flex items-center space-x-1.5"
                    >
                      <Send className="w-3 h-3 text-[#FBBF24]" />
                      <span>Book Tour Package</span>
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>

        </div>

        {/* Swap Controls with Indicators */}
        <div className="flex flex-col items-center justify-center space-y-2 mt-4">
          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={handlePrevSwap}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#800000] hover:text-white border border-rose-200 flex items-center justify-center text-[#800000] transition-all shadow-md active:scale-95"
              aria-label="Previous Package"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-rose-200 shadow-xs">
              {list.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveCardIndex(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeCardIndex === dotIdx ? 'w-6 bg-[#800000]' : 'w-2 bg-rose-200 hover:bg-rose-400'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNextSwap}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#800000] hover:text-white border border-rose-200 flex items-center justify-center text-[#800000] transition-all shadow-md active:scale-95"
              aria-label="Next Package"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <span className="text-[11px] font-extrabold text-slate-500 tracking-wider uppercase flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#800000]" /> Tap or Hover to Explore Packages
          </span>
        </div>

      </div>
    </section>
  );
};

export default BusSwapCardsSection;
