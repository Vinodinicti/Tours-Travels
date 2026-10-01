import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { CLIENT_BUS_INFO } from '../data/busData';

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end">
      
      {/* Floating WhatsApp Quick Action */}
      <a
        href={`https://wa.me/${CLIENT_BUS_INFO.rawPhones[0]}?text=Hi%20Sri%20Saranya%20Travels!%20I%20want%20to%20enquire%20about%20bus%20tours.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl border-2 border-white transition-transform hover:scale-110"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-extrabold px-3 py-1 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* Floating Call Quick Action */}
      <a
        href={`tel:${CLIENT_BUS_INFO.rawPhones[0]}`}
        aria-label="Call Helpline"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#800000] hover:bg-[#8B1E1E] text-white shadow-2xl border-2 border-white transition-transform hover:scale-110"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-extrabold px-3 py-1 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
          Call Helpline
        </span>
      </a>

    </div>
  );
};

export default FloatingContactButtons;
