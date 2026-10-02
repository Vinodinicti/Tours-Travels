import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, CheckCircle, Sparkles, ArrowRight, Eye, Send } from 'lucide-react';
import { TOUR_PACKAGES } from '../data/travelData';

const FeaturedPackagesSection = ({ onViewPackageDetails, onOpenEnquiry, setActivePage }) => {
  return (
    <section className="py-10 bg-gradient-to-b from-white via-cream-soft to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-peach/20 text-coral text-xs font-bold uppercase tracking-wider">
            All-Inclusive Holidays
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-charcoal">
            Featured Tour <span className="text-gradient-coral italic">Packages</span>
          </h2>
          <p className="text-charcoal-light text-base">
            Expertly crafted tour itineraries complete with luxury stays, guided sightseeing, private transfers, and delicious authentic dining.
          </p>
        </div>

        {/* Package Cards with Alternating Coral-Peach and Cream Gradients */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TOUR_PACKAGES.map((pkg, idx) => {
            const isCoralBg = pkg.bgType === 'coral-peach';

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-[2.5rem] p-6 sm:p-8 border shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${
                  isCoralBg
                    ? 'bg-gradient-to-br from-coral/10 via-peach/15 to-cream/30 border-peach/40'
                    : 'bg-gradient-to-br from-cream/40 via-white to-peach/10 border-cream-dark/40'
                }`}
              >
                <div>
                  {/* Top Image + Badges */}
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6 group">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-charcoal/70 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-peach" />
                        {pkg.duration}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs text-cream font-medium uppercase tracking-wider flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-coral" />
                        {pkg.destination}
                      </span>
                    </div>
                  </div>

                  {/* Title & Price Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <h3 className="font-serif text-2xl font-bold text-charcoal">
                      {pkg.name}
                    </h3>
                    <div className="sm:text-right shrink-0">
                      <span className="text-[10px] uppercase font-bold text-charcoal-light block">Starting From</span>
                      <span className="font-serif text-2xl font-extrabold text-coral">
                        {pkg.startingPrice}
                      </span>
                    </div>
                  </div>

                  <p className="text-charcoal-light text-sm mb-5 leading-relaxed">
                    {pkg.shortDescription}
                  </p>

                  {/* Places Covered */}
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal block mb-2">
                      Places Covered:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {pkg.placesCovered.map((place, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-white/80 border border-peach/30 text-charcoal text-xs font-semibold shadow-xs"
                        >
                          📍 {place}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-6 border-t border-charcoal/10 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onViewPackageDetails(pkg)}
                    className="flex-1 py-3.5 px-4 rounded-2xl bg-white border border-peach/40 text-charcoal font-bold text-sm hover:bg-cream-soft transition-all flex items-center justify-center space-x-2 shadow-sm"
                  >
                    <Eye className="w-4 h-4 text-coral" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(pkg.name)}
                    className="flex-1 py-3.5 px-4 rounded-2xl bg-gradient-coral-peach text-white font-bold text-sm shadow-glow-coral hover:shadow-glow-peach hover:scale-105 transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enquire Now</span>
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* View All Packages Footer */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              setActivePage('packages');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl bg-charcoal text-white font-bold hover:bg-coral transition-all text-sm shadow-lg group"
          >
            <span>Explore All 40+ Tour Packages</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedPackagesSection;
