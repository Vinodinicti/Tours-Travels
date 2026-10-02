import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Compass, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

const BITE_CARDS_DATA = [
  {
    id: 1,
    tag: "Outstation Cabs",
    title: "Inter-City Luxury Escapes",
    subtitle: "Dzire • Crysta • Urbania • Traveller",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    gradientBloom: "from-coral via-peach to-amber-400",
    flagText: "Daily 24/7",
    flagBg: "bg-coral",
    route: "Coimbatore • Chennai • Bangalore"
  },
  {
    id: 2,
    tag: "Temple Yatras",
    title: "Sacred Heritage Pilgrimage",
    subtitle: "Thiruchendur • Velankanni • Kumbakonam",
    image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&w=800&q=80",
    gradientBloom: "from-peach via-amber-400 to-coral-light",
    flagText: "Holy Circuits",
    flagBg: "bg-peach-dark",
    route: "Chidambaram • Karaikudi • Devakottai"
  },
  {
    id: 3,
    tag: "Hill & Tour Packages",
    title: "Mountain & Scenic Retreats",
    subtitle: "Ooty • Kodaikanal • Kerala • Dubai",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    gradientBloom: "from-coral-dark via-peach to-cream",
    flagText: "Custom Tours",
    flagBg: "bg-dark",
    route: "Complete Stay & Travel Assistance"
  }
];

const BiteCardsSection = ({ setActivePage, onOpenEnquiry }) => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-10 bg-gradient-to-b from-[#FAF8EB] via-white to-[#FAF8EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-peach/20 text-coral text-xs font-bold uppercase tracking-wider inline-block">
            Bespoke Travel Choices
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-dark tracking-tight">
            Designed For <span className="text-gradient-coral italic">Comfort & Exploration</span>
          </h2>
          <p className="text-dark/70 text-base">
            Hover over any experience card below to ignite its visual glow and explore our signature outstation routes, temple packages, and vehicle fleet.
          </p>
        </div>

        {/* 3-Card Rail Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {BITE_CARDS_DATA.map((card) => {
            const isHovered = hoveredId === card.id;
            const isAnyHovered = hoveredId !== null;
            const isDimmed = isAnyHovered && !isHovered;

            return (
              <div
                key={card.id}
                tabIndex={0}
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setHoveredId(card.id)}
                onBlur={() => setHoveredId(null)}
                onClick={() => {
                  setActivePage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`group relative bite-card rounded-[2.5rem] bg-dark overflow-hidden cursor-pointer outline-none focus:ring-4 focus:ring-coral/40 shadow-2xl transition-all duration-700 ease-out ${
                  isHovered
                    ? '-translate-y-4 scale-[1.04] z-20 shadow-glow-coral'
                    : isDimmed
                    ? 'opacity-60 scale-[0.96] z-10'
                    : 'opacity-100 scale-100 z-10'
                }`}
                style={{ minHeight: '460px' }}
              >
                
                {/* 1. ART LAYER (Grayscale at rest -> Saturated on hover) */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover bite-card-art"
                  />
                  {/* Subtle Base Dark Gradient Overlay for Typography Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-85" />
                </div>

                {/* 2. BLOOM LAYER (Screen blend mode gradient glow ignition on hover) */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradientBloom} bite-card-bloom pointer-events-none`}
                />

                {/* 3. RIBBON FLAG (Pinned to top-right, notched tail) */}
                <div className={`absolute top-0 right-6 px-3.5 py-2.5 ${card.flagBg} text-white font-bold text-[11px] uppercase tracking-wider bite-card-flag z-30 shadow-lg`}>
                  {card.flagText}
                </div>

                {/* Card Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 text-white">
                  
                  {/* Top Badge */}
                  <div>
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-cream text-xs font-bold uppercase tracking-wider border border-white/30">
                      <Compass className="w-3.5 h-3.5 text-coral" />
                      <span>{card.tag}</span>
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-peach uppercase tracking-widest block">
                      {card.route}
                    </span>

                    <h3 className="font-serif text-2xl font-bold text-white leading-tight group-hover:text-cream transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-xs text-cream-soft/90 leading-relaxed font-medium">
                      {card.subtitle}
                    </p>

                    <div className="pt-4 flex items-center justify-between border-t border-white/20">
                      <span className="text-xs font-bold text-white group-hover:text-coral transition-colors flex items-center gap-1">
                        Explore Route & Fleet <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-coral backdrop-blur-md flex items-center justify-center text-white transition-all shadow-md">
                        <Car className="w-4 h-4" />
                      </div>
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

export default BiteCardsSection;
