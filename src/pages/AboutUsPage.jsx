import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { CLIENT_BUS_INFO } from '../data/busData';
import Bus3DFlipSection from '../components/Bus3DFlipSection';

const AboutUsPage = ({ onOpenEnquiry, setActivePage }) => {
  return (
    <div className="bg-[#FFFBF5] min-h-screen text-[#1E293B] relative overflow-hidden">
      
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-pattern-dots pointer-events-none opacity-50" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* -------------------------------------------------------------
         PAGE HERO BANNER: 100% SCREEN VIEWPORT FIT IMAGE & PERFECT ALIGNMENT
         ------------------------------------------------------------- */}
      <div className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80"
            alt="Sri Saranya Travels Scenic Journey Landscape"
            className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-amber-300 border border-amber-400/40 text-xs font-extrabold uppercase tracking-widest inline-block shadow-lg">
            ABOUT SRI SARANYA TRAVELS
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl">
            Tamil Nadu's Premier <span className="text-[#FBBF24] italic">Luxury Bus Operator</span>
          </h1>

          <p className="text-gray-100 text-sm sm:text-base max-w-2xl mx-auto font-semibold drop-shadow">
            "{CLIENT_BUS_INFO.slogan}" — Delivering reliable, safe, and punctual Volvo sleeper bus travel across Tamil Nadu for over a decade.
          </p>
        </div>
      </div>

      {/* Story Content & Full Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative h-[380px] sm:h-[440px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
            <img
              src="/about-bus-15years.jpg"
              alt="Sri Saranya Travels 15+ Years Highway Travel Experience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-[#1E293B] shadow-lg border border-amber-200">
              <span className="font-serif text-2xl font-extrabold text-[#800000]">15+ Years Experience</span>
              <span className="text-xs font-bold block text-slate-700">Punctual Bus Tour Operations Across Tamil Nadu</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl font-extrabold text-[#1E293B]">
              Why Passengers Choose Sri Saranya Travels
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              We connect major hubs like Chennai, Coimbatore, Madurai, Trichy, and Salem with coastal and pilgrimage centers like Thiruchendur, Velankanni, and Kumbakonam.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Volvo AC Multi-Axle Sleeper Buses",
                "Clean Sanitized Berths & Pillows",
                "24/7 GPS Live Bus Tracking",
                "Punctual Boarding & Drop Timings",
                "Experienced Highway Bus Captains",
                "Dedicated Helpline Support"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-bold text-[#1E293B] bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#800000] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="px-8 py-3.5 bg-gradient-maroon-gold text-white font-extrabold rounded-2xl shadow-glow-maroon hover:scale-105 transition-all text-sm inline-flex items-center space-x-2"
              >
                <span>Book Your Bus Tour Package</span>
                <ArrowRight className="w-4 h-4 text-[#FBBF24]" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* -------------------------------------------------------------
         3D INTERACTIVE FLIP CARDS SECTION (FULL FLEET DETAILS ON ABOUT PAGE)
         ------------------------------------------------------------- */}
      <Bus3DFlipSection onOpenBookingModal={onOpenEnquiry} />

    </div>
  );
};

export default AboutUsPage;
