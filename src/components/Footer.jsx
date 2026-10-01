import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Youtube, Twitter, ShieldCheck, Bus, X, FileText, MessageCircle } from 'lucide-react';
import { CLIENT_BUS_INFO } from '../data/busData';

const Footer = ({ setActivePage, onOpenEnquiry }) => {
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [policyType, setPolicyType] = useState('privacy'); // 'privacy' or 'cancellation'

  const openPolicy = (type) => {
    setPolicyType(type);
    setShowPolicyModal(true);
  };

  const socialAndContactLinks = [
    { 
      name: 'WhatsApp Us', 
      icon: MessageCircle, 
      href: `https://wa.me/${CLIENT_BUS_INFO.rawPhones[0]}?text=Hi%20Sri%20Saranya%20Travels!%20I%20want%20to%20enquire%20about%20bus%20tours.`,
      isExternal: true
    },
    { 
      name: 'Phone Call', 
      icon: Phone, 
      href: `tel:${CLIENT_BUS_INFO.rawPhones[0]}`,
      isExternal: false
    },
    { 
      name: 'Email Us', 
      icon: Mail, 
      href: `mailto:${CLIENT_BUS_INFO.email}`,
      isExternal: false
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://instagram.com',
      isExternal: true
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://facebook.com',
      isExternal: true
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      href: 'https://youtube.com',
      isExternal: true
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: 'https://x.com',
      isExternal: true
    }
  ];

  return (
    <footer className="bg-white text-slate-800 pt-10 pb-6 border-t-2 border-slate-200 relative overflow-hidden">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-pattern-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-200">
          
          {/* Brand Info with Official Logo */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Sri Saranya Travels Logo" 
                className="h-10 sm:h-11 w-auto object-contain"
              />
              <div>
                <span className="font-serif text-xl font-extrabold text-slate-900 block tracking-tight">
                  SRI SARANYA <span className="text-[#800000]">TRAVELS</span>
                </span>
                <span className="text-[9px] text-[#D97706] font-extrabold uppercase tracking-widest block -mt-0.5">
                  {CLIENT_BUS_INFO.tagline}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 text-xs leading-relaxed font-medium">
              "{CLIENT_BUS_INFO.slogan}" — Premium Volvo AC Sleeper & Semi-Sleeper bus tours connecting pilgrims and tourists across Tamil Nadu & South India with safety & punctuality.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              {socialAndContactLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    title={item.name}
                    className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#800000] hover:text-white hover:border-[#800000] transition-all shadow-xs"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
              
              {/* Maroon Bus Symbol (Social Media Icon Size) for Admin Login */}
              <button
                onClick={() => {
                  setActivePage('admin');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-8 h-8 rounded-xl bg-amber-50 border-2 border-amber-400 flex items-center justify-center text-[#800000] hover:bg-[#800000] hover:text-white hover:border-[#800000] transition-all shadow-sm"
                title="Admin Portal Login"
              >
                <Bus className="w-4 h-4 text-[#800000]" />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-extrabold text-slate-900 border-b border-amber-300 pb-1.5 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-bold text-gray-700">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Destinations & Booking', id: 'destinations' },
                { name: 'Tour Packages', id: 'packages' },
                { name: 'Contact Us', id: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      setActivePage(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#800000] transition-colors flex items-center space-x-1"
                  >
                    <span className="text-[#800000] text-xs">›</span>
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Boarding Locations */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-extrabold text-slate-900 border-b border-amber-300 pb-1.5 inline-block">
              Top Locations
            </h4>
            <ul className="space-y-1 text-xs font-semibold text-gray-600">
              {CLIENT_BUS_INFO.locations.slice(0, 6).map((loc) => (
                <li key={loc} className="flex items-center space-x-1">
                  <span className="text-[#800000]">📍</span>
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Helplines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-extrabold text-slate-900 border-b border-amber-300 pb-1.5 inline-block">
              24/7 Helpline
            </h4>
            <div className="space-y-2 text-xs text-slate-700 font-medium">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-[#800000] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  {CLIENT_BUS_INFO.phones.map((p, i) => (
                    <a key={i} href={`tel:${CLIENT_BUS_INFO.rawPhones[i]}`} className="block hover:text-[#800000] transition-colors font-extrabold text-slate-900 text-xs">
                      📞 {p}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-0.5">
                <Mail className="w-3.5 h-3.5 text-[#800000] shrink-0" />
                <a href={`mailto:${CLIENT_BUS_INFO.email}`} className="hover:text-[#800000] transition-colors font-bold text-slate-800 text-[11px]">
                  {CLIENT_BUS_INFO.email}
                </a>
              </div>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="mt-2 w-full py-2.5 bg-gradient-maroon-gold text-white font-extrabold rounded-xl transition-all text-xs uppercase shadow-glow-maroon hover:scale-[1.02]"
            >
              Book Bus Ticket Now
            </button>
          </div>

        </div>

        {/* Compact Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-medium space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <p>© {new Date().getFullYear()} {CLIENT_BUS_INFO.name}. All rights reserved.</p>
            
            {/* Social Media Icon Sized Maroon Bus Icon for Admin Portal Login */}
            <button
              onClick={() => {
                setActivePage('admin');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center text-[#800000] hover:bg-[#800000] hover:text-white transition-all shadow-xs"
              title="Admin Portal Login"
            >
              <Bus className="w-4 h-4 text-[#800000]" />
            </button>
          </div>

          <div className="flex items-center space-x-5 text-xs">
            <button 
              onClick={() => openPolicy('cancellation')} 
              className="hover:text-[#800000] transition-colors underline font-semibold"
            >
              Bus Cancellation Terms
            </button>
            <button 
              onClick={() => openPolicy('privacy')} 
              className="hover:text-[#800000] transition-colors underline font-semibold"
            >
              Privacy Policy
            </button>
          </div>
        </div>

      </div>

      {/* -------------------------------------------------------------
         INTERACTIVE PRIVACY POLICY & CANCELLATION MODAL WITH CLOSE BUTTON
         ------------------------------------------------------------- */}
      {showPolicyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] p-8 border-2 border-amber-300 shadow-2xl text-[#1E293B] space-y-4 max-h-[85vh] overflow-y-auto">
            
            <button
              onClick={() => setShowPolicyModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 border-b border-slate-200 pb-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-maroon-gold text-white flex items-center justify-center shadow-md">
                <FileText className="w-5 h-5 text-[#FBBF24]" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-extrabold text-[#1E293B]">
                  {policyType === 'privacy' ? 'Privacy & Data Protection Policy' : 'Bus Tour Cancellation & Refund Terms'}
                </h3>
                <span className="text-xs text-[#D97706] font-bold uppercase">{CLIENT_BUS_INFO.name}</span>
              </div>
            </div>

            {policyType === 'privacy' ? (
              <div className="space-y-3 text-xs text-slate-700 font-medium leading-relaxed">
                <h4 className="font-bold text-sm text-[#800000]">1. Passenger Information Privacy</h4>
                <p>
                  Sri Saranya Travels respects passenger confidentiality. Contact details (Name, Phone number, Email, Pickup location) provided during tour enquiry or ticket reservation are strictly used for trip confirmation, SMS/WhatsApp boarding updates, and hotline customer service.
                </p>

                <h4 className="font-bold text-sm text-[#800000]">2. Data Security & Storage</h4>
                <p>
                  All passenger booking records are secured using standard encryption protocols. We do not sell, rent, or share customer data with unauthorized third parties.
                </p>

                <h4 className="font-bold text-sm text-[#800000]">3. GPS & Live Bus Tracking</h4>
                <p>
                  Live GPS bus tracking coordinates are shared exclusively with confirmed tour passengers for safety and boarding coordination across Tamil Nadu.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-xs text-slate-700 font-medium leading-relaxed">
                <h4 className="font-bold text-sm text-[#800000]">1. Tour Booking Cancellation Timeline</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>24+ Hours Before Departure:</strong> 90% Refund (10% service processing fee applies).</li>
                  <li><strong>12 to 24 Hours Before Departure:</strong> 50% Refund.</li>
                  <li><strong>Less than 12 Hours Before Departure:</strong> No refund applicable.</li>
                </ul>

                <h4 className="font-bold text-sm text-[#800000]">2. Tour Rescheduling & Date Changes</h4>
                <p>
                  Tour date modifications can be requested up to 24 hours before journey departure by calling our 24/7 hotline desk at <strong>+91 99769 88885</strong>, subject to bus berth availability.
                </p>

                <h4 className="font-bold text-sm text-[#800000]">3. Weather & Road Safety Exceptions</h4>
                <p>
                  In cases of extreme natural weather disruptions, full refund or free trip rescheduling will be offered.
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowPolicyModal(false)}
                className="px-6 py-2.5 bg-[#800000] text-white font-extrabold rounded-xl text-xs shadow-glow-maroon hover:scale-105 transition-all"
              >
                Close Policy Window
              </button>
            </div>

          </div>
        </div>
      )}

    </footer>
  );
};

export default Footer;
