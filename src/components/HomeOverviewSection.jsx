import React from 'react';
import { motion } from 'framer-motion';
import { Bus, MapPin, ArrowRight } from 'lucide-react';
import { CLIENT_BUS_INFO, FEATURED_DESTINATIONS_PER_DAY, BUS_TOUR_PACKAGES } from '../data/busData';
import BusVideoShowcase from './BusVideoShowcase';

const HomeOverviewSection = ({ setActivePage, onOpenBookingModal }) => {
  // Overview Data: Pick only top 2-3 items for home overview
  const overviewDestinations = FEATURED_DESTINATIONS_PER_DAY.slice(0, 3);
  const overviewPackages = BUS_TOUR_PACKAGES.slice(0, 2);

  return (
    <div className="space-y-0">
      
      {/* -------------------------------------------------------------
         SECTION 1: FLEET OVERVIEW TEASER
         Uses Uiverse Animated Rain Background (by kish_3691)
         ------------------------------------------------------------- */}
      <section className="pt-28 pb-20 bg-uiverse-rain relative overflow-hidden text-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-white text-[#800000] border border-amber-300 text-xs font-extrabold uppercase tracking-wider inline-block shadow-sm">
              Our Fleet Overview
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E293B]">
              Luxury Volvo AC Coaches
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-medium">
              Enjoy comfortable berth layouts, climate control AC, and onboard entertainment for all Tamil Nadu routes.
            </p>
          </div>

          {/* Overview Cards (2 Items Only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-6 border border-slate-200 shadow-md space-y-4 hover:shadow-xl transition-all">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img src="/bus-1.jpg" alt="Volvo AC Sleeper Coach" className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#800000] text-white text-xs font-extrabold">
                  Luxury Sleeper Coach
                </span>
              </div>
              <h3 className="font-serif text-xl font-extrabold text-[#1E293B]">Volvo Multi-Axle 2+1 Sleeper</h3>
              <p className="text-gray-600 text-xs font-medium">
                Sanitized individual berths, charging ports, soft blankets, and smooth highway air suspension.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-6 border border-slate-200 shadow-md space-y-4 hover:shadow-xl transition-all">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img src="/bus-2.jpg" alt="Executive Semi-Sleeper" className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#F59E0B] text-slate-950 text-xs font-extrabold">
                  Executive Semi-Sleeper
                </span>
              </div>
              <h3 className="font-serif text-xl font-extrabold text-[#1E293B]">Premium Recliner 2+2 Coach</h3>
              <p className="text-gray-600 text-xs font-medium">
                Deep reclining seats, ample legroom, dual TV screens, and experienced highway captains.
              </p>
            </div>

          </div>

          {/* View Full Fleet CTA Button */}
          <div className="text-center pt-4">
            <button
              onClick={() => {
                setActivePage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-gradient-maroon-gold text-white font-extrabold rounded-2xl shadow-glow-maroon hover:scale-105 transition-all text-xs inline-flex items-center space-x-2"
            >
              <span>Explore Complete Fleet Specifications & Story</span>
              <ArrowRight className="w-4 h-4 text-[#FBBF24]" />
            </button>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
         VIDEO TOUR SHOWCASE SECTION
         ------------------------------------------------------------- */}
      <BusVideoShowcase onOpenBookingModal={onOpenBookingModal} />

      {/* -------------------------------------------------------------
         SECTION 2: TOUR PACKAGES OVERVIEW TEASER ("Handcrafted Bus Tour Itineraries")
         Uses Uiverse Geometric Paper Maroon Background (by AatreyuShau)
         ------------------------------------------------------------- */}
      <section className="py-20 relative overflow-hidden text-[#1E293B] bg-[#FFF8F6]">
        {/* Uiverse Geometric Paper Maroon Pattern Overlay */}
        <div className="bg-uiverse-paper-maroon-overlay" />
        <div className="absolute inset-0 bg-pattern-dots pointer-events-none opacity-30 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-white text-[#800000] border border-amber-300 text-xs font-extrabold uppercase tracking-wider inline-block shadow-sm">
              Tour Packages Overview
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E293B]">
              Handcrafted Bus Tour Itineraries
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-medium">
              Explore coastal pilgrimage shrines, Navagraha temples, and Chettinad heritage palaces.
            </p>
          </div>

          {/* Overview Cards (2 Items Only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {overviewPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-6 border-2 border-amber-200 shadow-xl space-y-4 hover:shadow-2xl transition-all flex flex-col justify-between">
                <div>
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                    <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#800000] text-white text-xs font-bold">
                      {pkg.defaultDays} Days / {pkg.defaultDays - 1} Nights
                    </span>
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#F59E0B] text-slate-950 text-xs font-extrabold">
                      ₹{pkg.perDayPrice.toLocaleString()} / Day
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-extrabold text-[#1E293B] mb-2">{pkg.name}</h3>
                  <p className="text-xs text-[#800000] font-extrabold flex items-center gap-1">
                    <Bus className="w-3.5 h-3.5 text-[#F59E0B]" /> {pkg.busDetail}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500">Est. 3 Days Rate</span>
                  <span className="font-serif text-lg font-extrabold text-[#800000]">₹{(pkg.perDayPrice * 3).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>

          {/* View All Tour Packages CTA Button */}
          <div className="text-center pt-4">
            <button
              onClick={() => {
                setActivePage('packages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-gradient-maroon-gold text-white font-extrabold rounded-2xl shadow-glow-maroon hover:scale-105 transition-all text-xs inline-flex items-center space-x-2"
            >
              <span>View All Tour Packages & 3D Interactive Cards</span>
              <ArrowRight className="w-4 h-4 text-[#FBBF24]" />
            </button>
          </div>

        </div>
      </section>


      {/* -------------------------------------------------------------
         SECTION 3: TOP TAMIL NADU TRAVEL HUBS (LIGHT THEME FLOATING SPARKLE ANIMATION)
         ------------------------------------------------------------- */}
      <section className="py-20 bg-uiverse-light-sparkles relative overflow-hidden text-[#1E293B]">
        <div className="absolute inset-0 bg-pattern-grid pointer-events-none opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-white text-[#800000] border border-amber-300 text-xs font-extrabold uppercase tracking-wider inline-block shadow-sm">
              Featured Destinations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E293B]">
              Top Tamil Nadu Travel Hubs
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-medium">
              Daily bus tours connecting Coimbatore, Chennai, Velankanni, Kumbakonam & Thiruchendur.
            </p>
          </div>

          {/* Overview Cards (3 Items Only) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {overviewDestinations.map((dest) => (
              <div key={dest.id} className="bg-white rounded-[2.5rem] border border-slate-200 shadow-md hover:shadow-2xl transition-all space-y-4 overflow-hidden flex flex-col justify-between text-[#1E293B]">
                <div>
                  <div className="relative h-48 rounded-t-[2.5rem] overflow-hidden">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#800000] text-white text-xs font-bold shadow-md">
                      📍 {dest.location}
                    </span>
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#F59E0B] text-slate-950 text-xs font-extrabold shadow-md">
                      {dest.formattedPrice}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-extrabold text-[#1E293B]">{dest.name}</h3>
                    <p className="text-gray-600 text-xs font-medium line-clamp-2">{dest.short}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between">
                  <span className="font-serif text-lg font-extrabold text-[#800000]">₹{dest.perDayPrice.toLocaleString()} / day</span>
                  <button
                    onClick={() => onOpenBookingModal(`${dest.from} to ${dest.to} Bus Ticket`)}
                    className="px-4 py-2 rounded-xl bg-gradient-maroon-gold text-white font-extrabold text-xs shadow-glow-maroon hover:scale-105 transition-all"
                  >
                    Book Tour
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Destinations CTA Button */}
          <div className="text-center pt-4">
            <button
              onClick={() => {
                setActivePage('destinations');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-gradient-maroon-gold text-white font-extrabold rounded-2xl shadow-glow-maroon hover:scale-105 transition-all text-xs inline-flex items-center space-x-2"
            >
              <span>View All 7 Tamil Nadu Destinations & Per-Day Tariff</span>
              <ArrowRight className="w-4 h-4 text-[#FBBF24]" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomeOverviewSection;
