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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUS_FLEET_3D.map((bus) => {
            const isFlipped = flippedCards[bus.id];

            return (
              <div
                key={bus.id}
                className="perspective-1000 h-[480px] w-full cursor-pointer group"
                onClick={() => toggleFlip(bus.id)}
              >
                <div
                  className={`relative w-full h-full duration-700 transform-preserve-3d transition-transform ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  
                  {/* FRONT OF THE 3D CARD */}
                  <div className="absolute inset-0 w-full h-full rounded-[2.5rem] bg-white border-2 border-emerald-200 p-6 shadow-xl hover:shadow-2xl backface-hidden flex flex-col justify-between overflow-hidden">
                    
                    <div>
                      {/* Image Header */}
                      <div className="relative h-56 rounded-2xl overflow-hidden mb-5">
                        <img
                          src={bus.image}
                          alt={bus.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                        
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#800000] text-white text-xs font-bold shadow-md">
                          {bus.badge}
                        </span>

                        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white text-[#800000] text-xs font-extrabold shadow-md">
                          {bus.startingFare} / Seat
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-[#1E293B] mb-2 group-hover:text-[#800000] transition-colors">
                        {bus.name}
                      </h3>

                      <p className="text-gray-600 text-xs leading-relaxed mb-4 font-medium">
                        {bus.frontSpecs}
                      </p>
                    </div>

                    {/* Flip Trigger Button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-extrabold text-[#800000] flex items-center gap-1.5">
                        <RotateCw className="w-4 h-4 animate-spin-slow text-[#F59E0B]" />
                        Click to View Specifications
                      </span>
                      <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#800000]">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                  </div>

                  {/* BACK OF THE 3D CARD (FLIPPED 180 DEGREE) */}
                  <div className="absolute inset-0 w-full h-full rounded-[2.5rem] bg-gradient-to-br from-[#FFF5F5] via-white to-amber-50 border-2 border-[#800000] p-6 shadow-2xl backface-hidden rotate-y-180 flex flex-col justify-between overflow-hidden text-[#1E293B]">
                    
                    <div className="space-y-4">
                      
                      <div className="flex items-center justify-between pb-3 border-b border-rose-200">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#800000] flex items-center gap-1">
                          <Sparkles className="w-4 h-4 text-[#F59E0B]" /> Amenities & Layout
                        </span>
                        <span className="text-[11px] text-[#800000] font-extrabold bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                          Auto-flips back in 4s
                        </span>
                      </div>

                      <h4 className="font-serif text-lg font-bold text-[#1E293B]">
                        {bus.name}
                      </h4>

                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs space-y-1">
                        <span className="font-bold text-[#800000] block">Layout:</span>
                        <p className="text-gray-700 font-medium">{bus.seatLayout}</p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs font-bold text-[#1E293B] block">Onboard Amenities:</span>
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 font-medium">
                          {bus.amenities.map((item, i) => (
                            <div key={i} className="flex items-center space-x-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Book Seat CTA */}
                    <div className="pt-4 border-t border-rose-200">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBookingModal(bus.name);
                        }}
                        className="w-full py-3 bg-gradient-maroon-gold text-white font-extrabold rounded-xl shadow-glow-maroon text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
                      >
                        <span>Book {bus.badge} Seat</span>
                        <ArrowRight className="w-4 h-4" />
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
