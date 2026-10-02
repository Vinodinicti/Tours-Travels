import React, { useState, useEffect, useRef } from 'react';
import { Wifi, ShieldCheck, CheckCircle2, RotateCw, ArrowRight, Sparkles } from 'lucide-react';
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
    /* Distinct Section Theme 1: Cool Mint & Pearl Background */
    <section 
      className="py-10 bg-gradient-to-b from-[#F0FDF4] via-[#F8FAFC] to-[#F1F5F9] text-[#1E293B] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* Decorative Blob */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-block border border-emerald-200">
            PREMIUM BUS FLEET
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1E293B] tracking-tight">
            Our Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#800000] via-[#8B1E1E] to-[#F59E0B] italic">Bus Fleet</span>
          </h2>
          <p className="text-gray-600 text-base font-medium">
            Click or tap any bus card below to view berth layouts & amenities — cards automatically flip back after 4s.
          </p>
        </div>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {BUS_FLEET_3D.map((bus) => {
            const isFlipped = flippedCards[bus.id];

            return (
              <div
                key={bus.id}
                className="perspective-1000 h-[390px] sm:h-[410px] w-full cursor-pointer group"
                onClick={() => toggleFlip(bus.id)}
              >
                <div
                  className={`relative w-full h-full duration-700 transform-preserve-3d transition-transform ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  
                  {/* FRONT OF THE 3D CARD */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl bg-white border-2 border-emerald-200 p-4 sm:p-5 shadow-lg hover:shadow-xl backface-hidden flex flex-col justify-between overflow-hidden">
                    
                    <div>
                      {/* Image Header */}
                      <div className="relative h-40 sm:h-44 rounded-2xl overflow-hidden mb-3">
                        <img
                          src={bus.image}
                          alt={bus.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                        
                        <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#800000] text-white text-[11px] font-bold shadow-md">
                          {bus.badge}
                        </span>

                        <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-white text-[#800000] text-[11px] font-extrabold shadow-md">
                          {bus.startingFare} / Seat
                        </span>
                      </div>

                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#1E293B] mb-1 group-hover:text-[#800000] transition-colors leading-snug">
                        {bus.name}
                      </h3>

                      <p className="text-gray-600 text-[11px] sm:text-xs leading-relaxed mb-2 font-medium line-clamp-2">
                        {bus.frontSpecs}
                      </p>
                    </div>

                    {/* Flip Trigger Button */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] sm:text-xs font-extrabold text-[#800000] flex items-center gap-1.5">
                        <RotateCw className="w-3.5 h-3.5 animate-spin-slow text-[#F59E0B]" />
                        Click to View Specs
                      </span>
                      <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#800000]">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                  </div>

                  {/* BACK OF THE 3D CARD (FLIPPED 180 DEGREE) */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-[#FFF5F5] via-white to-amber-50 border-2 border-[#800000] p-4 sm:p-5 shadow-xl backface-hidden rotate-y-180 flex flex-col justify-between overflow-hidden text-[#1E293B]">
                    
                    <div className="space-y-2.5">
                      
                      <div className="flex items-center justify-between pb-2 border-b border-rose-200">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#800000] flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" /> Amenities & Layout
                        </span>
                        <span className="text-[10px] text-[#800000] font-extrabold bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                          Auto-flips back in 4s
                        </span>
                      </div>

                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#1E293B]">
                        {bus.name}
                      </h4>

                      <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] space-y-0.5">
                        <span className="font-bold text-[#800000] block text-[11px]">Layout:</span>
                        <p className="text-gray-700 font-medium">{bus.seatLayout}</p>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-[#1E293B] block">Onboard Amenities:</span>
                        <div className="grid grid-cols-2 gap-1.5 text-[11px] text-gray-700 font-medium">
                          {bus.amenities.map((item, i) => (
                            <div key={i} className="flex items-center space-x-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Book Seat CTA */}
                    <div className="pt-3 border-t border-rose-200">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBookingModal(bus.name);
                        }}
                        className="w-full py-2.5 bg-gradient-maroon-gold text-white font-extrabold rounded-xl shadow-glow-maroon text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
                      >
                        <span>Book {bus.badge} Seat</span>
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
