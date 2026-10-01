import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowRight, Sparkles } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';

const ExploreDestinationsSection = ({ onSelectDestination, setActivePage }) => {
  const featuredDestinations = DESTINATIONS.slice(0, 6);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-warm-soft">
      {/* Background blobs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-peach/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-cream/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-peach/20 text-coral text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>World Class Wonders</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
              Explore Featured <span className="text-gradient-coral italic">Destinations</span>
            </h2>
            <p className="text-charcoal-light text-base max-w-xl">
              From tropical islands to snow-capped mountain peaks, discover handpicked global hot-spots designed for lifelong memories.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('destinations');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-white text-coral font-bold border border-peach/40 shadow-sm hover:shadow-glow-peach hover:scale-105 transition-all text-sm group shrink-0"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden bg-white border border-peach/20 shadow-lg hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Zoom & Gradient */}
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Region Tag */}
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-charcoal text-xs font-bold shadow-md">
                  {dest.region}
                </span>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-charcoal/60 backdrop-blur-md text-white text-xs font-bold flex items-center space-x-1 border border-white/20">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>{dest.rating}</span>
                </div>

                {/* Title overlay over image */}
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs text-cream-light font-semibold uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-coral" />
                    {dest.location}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-gradient-to-b from-white to-cream-soft/40">
                <p className="text-charcoal-light text-sm line-clamp-2 leading-relaxed">
                  {dest.shortDescription}
                </p>

                <div className="pt-4 border-t border-peach/20 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-charcoal-light font-bold block">
                      Starting From
                    </span>
                    <span className="font-serif text-xl font-extrabold text-coral">
                      {dest.startingPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectDestination(dest)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-coral-peach text-white font-bold text-xs shadow-glow-coral hover:shadow-glow-peach hover:scale-105 transition-all flex items-center space-x-1.5"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExploreDestinationsSection;
