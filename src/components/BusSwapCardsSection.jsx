import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Layers, ChevronRight, ChevronLeft, Send, Sparkles } from 'lucide-react';
import { BUS_TOUR_PACKAGES } from '../data/busData';

const BusSwapCardsSection = ({ onOpenBookingModal }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleNextSwap = () => {
    setActiveCardIndex((prev) => (prev + 1) % BUS_TOUR_PACKAGES.length);
  };

  const handlePrevSwap = () => {
    setActiveCardIndex((prev) => (prev - 1 + BUS_TOUR_PACKAGES.length) % BUS_TOUR_PACKAGES.length);
  };

  return (
    /* Distinct Section Theme 2: Warm Sunset Rose & Maroon Background */
    <section className="py-24 bg-gradient-to-b from-[#FFF5F5] via-[#FEF2F2] to-[#FFF8F6] text-[#1E293B] relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-rose-100 text-[#800000] text-xs font-bold uppercase tracking-wider inline-block border border-rose-200">
            3D Stack Card Swapper
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1E293B] tracking-tight">
            Tamil Nadu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#800000] via-[#8B1E1E] to-[#F59E0B] italic">Bus Tour Packages</span>
          </h2>
          <p className="text-gray-600 text-base font-medium">
            Click the swap controls to cycle through our 3D stacked bus tour packages.
          </p>
        </div>

        {/* 3D Swap Card Stack Container */}
        <div className="relative h-[480px] max-w-3xl mx-auto flex items-center justify-center">
          
          <AnimatePresence mode="popLayout">
            {BUS_TOUR_PACKAGES.map((pkg, idx) => {
              const position = (idx - activeCardIndex + BUS_TOUR_PACKAGES.length) % BUS_TOUR_PACKAGES.length;
              const isFront = position === 0;
              const isSecond = position === 1;

              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{
                    opacity: isFront ? 1 : isSecond ? 0.8 : 0.5,
                    scale: isFront ? 1 : isSecond ? 0.92 : 0.84,
                    y: isFront ? 0 : isSecond ? 25 : 50,
                    zIndex: BUS_TOUR_PACKAGES.length - position,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`absolute w-full max-w-2xl rounded-[2.5rem] bg-white border-2 shadow-2xl p-6 sm:p-10 flex flex-col justify-between ${
                    isFront ? 'border-[#800000] shadow-glow-maroon' : 'border-rose-200'
                  }`}
                  style={{ top: 0 }}
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-5">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                      
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#800000] text-white text-xs font-bold shadow-md">
                        {pkg.duration}
                      </span>

                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white text-[#800000] text-xs font-extrabold shadow-md">
                        {pkg.startingFare} / Person
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#1E293B] mb-2">
                      {pkg.name}
                    </h3>

                    <p className="text-xs text-[#800000] font-extrabold mb-3 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{pkg.busDetail}</span>
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {pkg.placesCovered.map((place, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-rose-50 text-xs font-bold text-slate-800 border border-rose-200">
                          📍 {place}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-bold">
                      Package {activeCardIndex + 1} of {BUS_TOUR_PACKAGES.length}
                    </span>

                    <button
                      onClick={() => onOpenBookingModal(pkg.name)}
                      className="px-6 py-2.5 bg-gradient-maroon-gold text-white font-extrabold rounded-xl text-xs shadow-glow-maroon hover:scale-105 transition-all flex items-center space-x-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Book Tour Package</span>
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>

        </div>

        {/* Swap Controls */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={handlePrevSwap}
            className="w-12 h-12 rounded-full bg-white hover:bg-[#800000] hover:text-white border border-rose-200 flex items-center justify-center text-[#800000] transition-all shadow-md"
            aria-label="Previous 3D Card"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <span className="text-xs font-extrabold text-slate-700 tracking-wider uppercase flex items-center gap-1">
            <Layers className="w-4 h-4 text-[#800000]" /> Tap to Swap 3D Stack Cards
          </span>

          <button
            onClick={handleNextSwap}
            className="w-12 h-12 rounded-full bg-white hover:bg-[#800000] hover:text-white border border-rose-200 flex items-center justify-center text-[#800000] transition-all shadow-md"
            aria-label="Next 3D Card"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default BusSwapCardsSection;
