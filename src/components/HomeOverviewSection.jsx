import React from 'react';
import { Bus, MapPin, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { CLIENT_BUS_INFO, FEATURED_DESTINATIONS_PER_DAY, BUS_TOUR_PACKAGES } from '../data/busData';
import BusVideoShowcase from './BusVideoShowcase';

const HomeOverviewSection = ({ setActivePage, onOpenBookingModal }) => {
  return (
    <div className="space-y-0">
      
      {/* -------------------------------------------------------------
         SECTION 1: FLEET OVERVIEW - CARDS WITH VEHICLE IMAGES
         ------------------------------------------------------------- */}
      <section className="py-14 bg-uiverse-rain relative overflow-hidden text-[#1E293B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold text-[#800000] uppercase tracking-widest border-b-2 border-amber-400 pb-1 inline-block">
              OUR FLEET SPECIFICATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E293B]">
              Luxury Volvo AC Multi-Axle Coaches
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Sri Saranya Travels operates premium Volvo 2+1 AC Sleeper and 2+2 Executive Recliner coaches across all major South Indian highways with smooth air-suspension and 24/7 GPS safety tracking.
            </p>
          </div>

          {/* Fleet Specifications Cards with Bus Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-slate-200 shadow-lg space-y-4 hover:shadow-xl transition-all">
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <img src="/bus-1.jpg" alt="Volvo 2+1 AC Sleeper Coach" className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#800000] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                  VOLVO 2+1 AC SLEEPER
                </span>
              </div>
              <h3 className="font-serif text-xl font-extrabold text-slate-900">
                Individual Sanitized Sleeper Berths
              </h3>
              <p className="text-gray-600 text-xs font-medium leading-relaxed">
                Spacious upper and lower berths equipped with individual reading lights, mobile charging ports, soft blankets, and privacy curtains.
              </p>
              <ul className="space-y-1 text-xs text-slate-700 font-bold pt-1">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#800000]" />
                  <span>Air-Suspension Highway Comfort</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#800000]" />
                  <span>24/7 Live WhatsApp GPS Link</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-slate-200 shadow-lg space-y-4 hover:shadow-xl transition-all">
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <img src="/bus-2.jpg" alt="Executive 2+2 Recliner Coach" className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#D97706] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                  EXECUTIVE 2+2 RECLINER
                </span>
              </div>
              <h3 className="font-serif text-xl font-extrabold text-slate-900">
                Deep Reclining Executive Coach
              </h3>
              <p className="text-gray-600 text-xs font-medium leading-relaxed">
                Ergonomic pushback seating with ample calf support, climate-controlled cabin AC, dual LED displays, and experienced highway captains.
              </p>
              <ul className="space-y-1 text-xs text-slate-700 font-bold pt-1">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                  <span>Punctual Station Boarding</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                  <span>Daily Sanitized Passenger Cabins</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setActivePage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-gradient-maroon-gold text-white font-extrabold rounded-xl shadow-glow-maroon hover:scale-105 transition-all text-xs inline-flex items-center space-x-2"
            >
              <span>Read Full Company & Fleet Specifications</span>
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
         SECTION 2: TOUR PACKAGES OVERVIEW - CARDS WITH DESTINATION IMAGES
         ------------------------------------------------------------- */}
      <section className="py-14 relative overflow-hidden text-[#1E293B] bg-[#FFF8F6]">
        <div className="bg-uiverse-paper-maroon-overlay" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold text-[#800000] uppercase tracking-widest border-b-2 border-amber-400 pb-1 inline-block">
              SPECIAL TOUR PACKAGES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E293B]">
              Handcrafted Bus Tour Itineraries
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              From Navagraha pilgrimage circuits to coastal shrines and heritage palaces, Sri Saranya Travels designs all-inclusive bus tour packages with transparent per-day pricing.
            </p>
          </div>

          {/* Handcrafted Bus Tour Itineraries with Destination Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {BUS_TOUR_PACKAGES.slice(0, 2).map((pkg) => (
              <div key={pkg.id} className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-amber-200 shadow-lg space-y-4 hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-3">
                    <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#800000] text-white text-xs font-bold shadow-md">
                      {pkg.defaultDays} Days / {pkg.defaultDays - 1} Nights
                    </span>
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#F59E0B] text-slate-950 text-xs font-extrabold shadow-md">
                      ₹{pkg.perDayPrice.toLocaleString()} / Day
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-extrabold text-slate-900 mb-1">{pkg.name}</h3>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    {pkg.placesCovered.join(' • ')}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-500">Estimated 3-Day Package:</span>
                  <span className="font-serif text-base font-extrabold text-[#800000]">
                    ₹{(pkg.perDayPrice * 3).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setActivePage('packages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-gradient-maroon-gold text-white font-extrabold rounded-xl shadow-glow-maroon hover:scale-105 transition-all text-xs inline-flex items-center space-x-2"
            >
              <span>Explore All Tour Packages & Detailed Itineraries</span>
              <ArrowRight className="w-4 h-4 text-[#FBBF24]" />
            </button>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------
         SECTION 3: TOP TRAVEL HUBS OVERVIEW - TEXT EDITORIAL LAYOUT
         ------------------------------------------------------------- */}
      <section className="py-14 bg-uiverse-light-sparkles relative overflow-hidden text-[#1E293B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold text-[#800000] uppercase tracking-widest border-b-2 border-amber-400 pb-1 inline-block">
              DESTINATIONS & TARIFF
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E293B]">
              Top Tamil Nadu Travel Hubs
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Connecting major boarding hubs with daily Volvo AC bus tours across South India.
            </p>
          </div>

          {/* gharsh11032000 Uiverse Hover Card Grid (Maroon & Gold Theme) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto py-2">
            {FEATURED_DESTINATIONS_PER_DAY.slice(0, 3).map((dest) => (
              <div key={dest.id} className="gharsh-card group">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-extrabold text-slate-900 group-hover:text-white transition-colors duration-300 leading-snug">{dest.name}</h3>
                  <p className="text-gray-600 text-xs font-medium group-hover:text-amber-100/90 transition-colors duration-300 leading-relaxed">{dest.short}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 group-hover:border-white/25 flex items-center justify-between transition-colors duration-300">
                  <span className="text-[11px] font-extrabold text-gray-400 group-hover:text-amber-200 uppercase tracking-wider transition-colors duration-300">TARIFF:</span>
                  <span className="font-serif text-base font-extrabold text-[#800000] group-hover:text-[#FBBF24] transition-colors duration-300">₹{dest.perDayPrice.toLocaleString()} / day</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setActivePage('destinations');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-gradient-maroon-gold text-white font-extrabold rounded-xl shadow-glow-maroon hover:scale-105 transition-all text-xs inline-flex items-center space-x-2"
            >
              <span>View All 7 Destinations & Booking Tariff</span>
              <ArrowRight className="w-4 h-4 text-[#FBBF24]" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomeOverviewSection;


