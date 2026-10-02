import React from 'react';
import { motion } from 'framer-motion';
import { Bus, CheckCircle2, Send } from 'lucide-react';
import { BUS_TOUR_PACKAGES } from '../data/busData';
import BusSwapCardsSection from '../components/BusSwapCardsSection';

const TourPackagesPage = ({ onViewPackageDetails, onOpenEnquiry }) => {
  return (
    <div className="bg-uiverse-dots min-h-screen text-[#1E293B] relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-[#800000]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* -------------------------------------------------------------
         PAGE HERO BANNER: 100% SCREEN VIEWPORT FIT IMAGE
         ------------------------------------------------------------- */}
      <div className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/bus-7.png"
            alt="Sri Saranya Travels Luxury Bus Fleet"
            className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
          />
          {/* Minimal 20% overlay - image is 100% bright & visible */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-white/95 text-[#800000] border border-amber-300 text-xs font-extrabold uppercase tracking-widest inline-block shadow-lg">
            Special Bus Tour Packages
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-2xl">
            Tamil Nadu Bus Tour <span className="text-[#FBBF24] italic">Packages</span>
          </h1>
          <p className="text-gray-100 text-sm sm:text-base max-w-2xl mx-auto font-semibold drop-shadow">
            Explore divine temples, scenic hill stations, and coastal shrines with our luxury bus tour packages.
          </p>
        </div>
      </div>

      {/* -------------------------------------------------------------
         3D INTERACTIVE STACKED SWAP CARDS SECTION (FOR TOUR PACKAGES)
         ------------------------------------------------------------- */}
      <BusSwapCardsSection onOpenBookingModal={onOpenEnquiry} />

      {/* Full Detailed Package Breakdown Cards List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8 bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-amber-200 shadow-sm">
          <h2 className="font-serif text-3xl font-extrabold text-[#1E293B]">
            All Tour Package Details & Tariff
          </h2>
          <p className="text-xs text-gray-600 font-medium">
            Complete day-by-day itineraries and automatic tariff calculator for groups and families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 uiverse-cards-grid">
          {BUS_TOUR_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="uiverse-card-item rounded-[2.5rem] bg-white border border-slate-200 p-6 shadow-md hover:shadow-2xl hover:border-amber-300 transition-all space-y-4 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="relative h-52 rounded-2xl overflow-hidden mb-4">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#800000] text-white text-xs font-bold shadow-md">
                    {pkg.defaultDays} Days / {pkg.defaultDays - 1} Nights
                  </span>
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#F59E0B] text-slate-950 text-xs font-extrabold shadow-md">
                    ₹{pkg.perDayPrice.toLocaleString()} / Day
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1E293B] mb-2">{pkg.name}</h3>
                
                <p className="text-xs text-[#800000] font-extrabold mb-3 flex items-center gap-1">
                  <Bus className="w-3.5 h-3.5 text-[#F59E0B]" /> {pkg.busDetail}
                </p>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-[#D97706] mb-3 flex items-center justify-between">
                  <span>3 Days Est. Total:</span>
                  <span className="text-sm font-extrabold text-[#800000]">₹{(pkg.perDayPrice * 3).toLocaleString()}</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  {pkg.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start space-x-1.5 text-xs text-gray-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenEnquiry(pkg.name, pkg.perDayPrice)}
                  className="w-full py-3.5 bg-gradient-maroon-gold text-white font-extrabold rounded-2xl shadow-glow-maroon hover:scale-[1.02] transition-all text-xs flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-[#FBBF24]" />
                  <span>Enquire & Auto-Calculate Tour</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TourPackagesPage;
