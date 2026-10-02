import React from 'react';
import { Bus, MapPin, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { CLIENT_BUS_INFO, FEATURED_DESTINATIONS_PER_DAY, BUS_TOUR_PACKAGES } from '../data/busData';
import BusVideoShowcase from './BusVideoShowcase';

const HomeOverviewSection = ({ setActivePage, onOpenBookingModal }) => {
  return (
    <div className="space-y-0">
      
      {/* -------------------------------------------------------------
         SECTION 1: FLEET OVERVIEW - NEAT EDITORIAL TEXT LAYOUT
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

          {/* Clean Editorial Text Columns (No Heavy Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-slate-200 shadow-lg">
            
            <div className="space-y-3 border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-8">
              <span className="text-xs font-extrabold text-[#800000] uppercase tracking-wider block">
                VOLVO 2+1 AC SLEEPER
              </span>
              <h3 className="font-serif text-xl font-extrabold text-slate-900">
                Individual Sanitized Sleeper Berths
              </h3>
              <p className="text-gray-600 text-xs font-medium leading-relaxed">
                Spacious upper and lower berths equipped with individual reading lights, mobile charging ports, soft sanitized blankets, and individual privacy curtains for peaceful overnight travel.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 font-bold pt-1">
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

            <div className="space-y-3 md:pl-2">
              <span className="text-xs font-extrabold text-[#D97706] uppercase tracking-wider block">
                EXECUTIVE 2+2 RECLINER
              </span>
              <h3 className="font-serif text-xl font-extrabold text-slate-900">
                Deep Reclining Executive Coach
              </h3>
              <p className="text-gray-600 text-xs font-medium leading-relaxed">
                Ergonomic pushback seating with ample calf support, climate-controlled cabin AC, dual entertainment LED displays, and experienced long-distance highway captains.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 font-bold pt-1">
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
         SECTION 2: TOUR PACKAGES OVERVIEW - TEXT EDITORIAL LAYOUT
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

          {/* Editorial Text Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {BUS_TOUR_PACKAGES.slice(0, 2).map((pkg) => (
              <div key={pkg.id} className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-amber-200 shadow-md space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-[#800000] uppercase tracking-wider">
                      {pkg.defaultDays} Days / {pkg.defaultDays - 1} Nights
                    </span>
                    <span className="text-xs font-extrabold text-[#D97706] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      ₹{pkg.perDayPrice.toLocaleString()} / Day
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-extrabold text-slate-900">{pkg.name}</h3>
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

          {/* Clean List Overview */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md max-w-4xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-800 font-medium">
              {FEATURED_DESTINATIONS_PER_DAY.slice(0, 3).map((dest) => (
                <div key={dest.id} className="space-y-1.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="font-serif text-base font-extrabold text-slate-900">{dest.name}</h4>
                  <p className="text-gray-500 text-[11px] leading-snug">{dest.short}</p>
                  <div className="pt-2 flex items-center justify-between border-t border-slate-200/60">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Tariff:</span>
                    <span className="font-extrabold text-[#800000]">₹{dest.perDayPrice.toLocaleString()} / day</span>
                  </div>
                </div>
              ))}
            </div>
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

