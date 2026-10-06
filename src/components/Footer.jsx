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
    <footer className="bg-white text-slate-800 pt-0 pb-4 sm:pb-6 border-t-2 border-slate-200 relative overflow-hidden">
      
      {/* Moving Bus on Road Animation Banner at Top of Footer */}
      <div className="w-full bg-[#0F172A] border-b-2 border-amber-400 relative overflow-hidden h-10 sm:h-14 flex items-center shadow-md mb-4 sm:mb-8">
        {/* Road Asphalt Pattern */}
        <div className="absolute inset-0 bg-slate-900 opacity-90" />
        
        {/* Animated Dashed Center Line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-dashed-road opacity-80 pointer-events-none" />

        {/* Road Curb Lines */}
        <div className="absolute inset-x-0 top-0 h-1 bg-amber-500 opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-slate-700 opacity-80" />

        {/* Moving Luxury Bus Container */}
        <div className="animate-bus-drive absolute left-0 bottom-1 flex items-center z-10 pointer-events-none">
          {/* Headlight Beam Cone */}
          <div className="absolute left-[110px] sm:left-[145px] top-1.5 sm:top-2 w-14 sm:w-20 h-5 sm:h-7 bg-gradient-to-r from-amber-300/40 via-amber-200/20 to-transparent blur-[1px] rounded-r-full pointer-events-none" />

          {/* Detailed SVG Volvo Luxury Bus */}
          <div className="animate-bus-bounce relative flex items-center">
            <svg className="w-28 sm:w-36 h-8 sm:h-11 drop-shadow-lg" viewBox="0 0 170 50" fill="none">
              {/* Main Maroon Bus Chassis */}
              <path d="M 12 14 Q 12 8 22 8 L 148 8 Q 160 8 164 18 L 167 32 Q 169 40 160 42 L 12 42 Z" fill="url(#footerBusGrad)" />
              {/* Roof AC Unit */}
              <rect x="55" y="4" width="45" height="4" rx="2" fill="#D97706" />
              {/* Windows */}
              <rect x="22" y="13" width="22" height="12" rx="2" fill="#38BDF8" opacity="0.85" />
              <rect x="48" y="13" width="22" height="12" rx="2" fill="#38BDF8" opacity="0.85" />
              <rect x="74" y="13" width="22" height="12" rx="2" fill="#38BDF8" opacity="0.85" />
              <rect x="100" y="13" width="22" height="12" rx="2" fill="#38BDF8" opacity="0.85" />
              {/* Front Windshield */}
              <path d="M 126 13 L 148 13 Q 155 13 158 20 L 158 27 L 126 27 Z" fill="#E0F2FE" opacity="0.95" />
              {/* Gold Accent Stripe */}
              <rect x="12" y="29" width="150" height="4" fill="#F59E0B" />
              <text x="52" y="38" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.8">SRI SARANYA LUXURY</text>
              {/* Headlight */}
              <circle cx="162" cy="35" r="3" fill="#FEF08A" />
              {/* Taillight */}
              <rect x="12" y="32" width="3" height="6" fill="#EF4444" rx="1" />
              {/* Spinning Wheels */}
              <circle cx="36" cy="42" r="6.5" fill="#0F172A" stroke="#CBD5E1" strokeWidth="2" />
              <circle cx="36" cy="42" r="2.5" fill="#F59E0B" />
              <circle cx="132" cy="42" r="6.5" fill="#0F172A" stroke="#CBD5E1" strokeWidth="2" />
              <circle cx="132" cy="42" r="2.5" fill="#F59E0B" />

              <defs>
                <linearGradient id="footerBusGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#800000" />
                  <stop offset="60%" stopColor="#990000" />
                  <stop offset="100%" stopColor="#B30000" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-pattern-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Main Footer Content - 2 columns on mobile for quick nav + locations */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-5 md:gap-8 pb-5 md:pb-8 border-b border-slate-200">
          
          {/* Brand Info with Official Logo */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4 space-y-2.5">
            <div className="flex items-center space-x-2.5">
              <img 
                src="/logo.png" 
                alt="Sri Saranya Travels Logo" 
                className="h-8 sm:h-11 w-auto object-contain"
              />
              <div>
                <span className="font-serif text-lg sm:text-xl font-extrabold text-slate-900 block tracking-tight">
                  SRI SARANYA <span className="text-[#800000]">TRAVELS</span>
                </span>
                <span className="text-[8.5px] sm:text-[9px] text-[#D97706] font-extrabold uppercase tracking-widest block -mt-0.5">
                  {CLIENT_BUS_INFO.tagline}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 text-xs leading-relaxed font-medium">
              "{CLIENT_BUS_INFO.slogan}" — Premium Volvo AC Sleeper & Semi-Sleeper bus tours connecting pilgrims and tourists across Tamil Nadu & South India.
            </p>

            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              {socialAndContactLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    title={item.name}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#800000] hover:text-white hover:border-[#800000] transition-all shadow-xs"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
              
              {/* Maroon Bus Symbol (Social Media Icon Size) for Admin Login */}
              <button
                onClick={() => {
                  setActivePage('admin');
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                }}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-amber-50 border-2 border-amber-400 flex items-center justify-center text-[#800000] hover:bg-[#800000] hover:text-white hover:border-[#800000] transition-all shadow-sm"
                title="Admin Portal Login"
              >
                <Bus className="w-3.5 h-3.5 text-[#800000]" />
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 space-y-2">
            <h4 className="font-serif text-xs sm:text-sm font-extrabold text-slate-900 border-b border-amber-300 pb-1 inline-block">
              Quick Nav
            </h4>
            <ul className="space-y-1.5 text-[11px] sm:text-xs font-bold text-gray-700">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Destinations', id: 'destinations' },
                { name: 'Tour Packages', id: 'packages' },
                { name: 'Contact Us', id: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      setActivePage(item.id);
                      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
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
          <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-2">
            <h4 className="font-serif text-xs sm:text-sm font-extrabold text-slate-900 border-b border-amber-300 pb-1 inline-block">
              Top Locations
            </h4>
            <ul className="space-y-1 text-[11px] sm:text-xs font-semibold text-slate-700">
              {CLIENT_BUS_INFO.locations.slice(0, 5).map((loc) => (
                <li key={loc} className="flex items-center space-x-1 hover:text-[#800000] transition-colors">
                  <span className="text-[#800000] text-xs font-extrabold">›</span>
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Helplines */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3 space-y-2.5">
            <div className="flex items-center space-x-2 border-b border-amber-300 pb-1 inline-flex">
              <Phone className="w-3.5 h-3.5 text-[#800000]" />
              <h4 className="font-serif text-xs sm:text-sm font-extrabold text-slate-900">
                24/7 Hotline & Help
              </h4>
            </div>
            <div className="grid grid-cols-2 sm:block gap-2 text-xs text-slate-700 font-medium">
              <div className="space-y-1">
                {CLIENT_BUS_INFO.phones.map((p, i) => (
                  <a 
                    key={i} 
                    href={`tel:${CLIENT_BUS_INFO.rawPhones[i]}`} 
                    className="block hover:text-[#800000] transition-colors font-extrabold text-slate-900 text-[11px] sm:text-xs tracking-wide"
                  >
                    {p}
                  </a>
                ))}
              </div>

              <div className="flex items-center space-x-1.5 pt-0.5 sm:pt-1 sm:border-t sm:border-slate-100">
                <Mail className="w-3.5 h-3.5 text-[#800000] shrink-0" />
                <a href={`mailto:${CLIENT_BUS_INFO.email}`} className="hover:text-[#800000] transition-colors font-bold text-slate-800 text-[10px] sm:text-[11px] truncate">
                  {CLIENT_BUS_INFO.email}
                </a>
              </div>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="mt-1 w-full py-2 sm:py-2.5 bg-gradient-maroon-gold text-white font-extrabold rounded-xl transition-all text-xs uppercase shadow-glow-maroon hover:scale-[1.02]"
            >
              Book Bus Ticket Now
            </button>
          </div>

        </div>

        {/* Compact Bottom Bar */}
        <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-gray-500 font-medium gap-2 sm:gap-0">
          <div className="flex items-center space-x-2.5">
            <p>© {new Date().getFullYear()} {CLIENT_BUS_INFO.name}.</p>
            
            {/* Social Media Icon Sized Maroon Bus Icon for Admin Portal Login */}
            <button
              onClick={() => {
                setActivePage('admin');
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center text-[#800000] hover:bg-[#800000] hover:text-white transition-all shadow-xs"
              title="Admin Portal Login"
            >
              <Bus className="w-3.5 h-3.5 text-[#800000]" />
            </button>
          </div>

          <div className="flex items-center space-x-4 text-[11px] sm:text-xs">
            <button 
              onClick={() => openPolicy('cancellation')} 
              className="hover:text-[#800000] transition-colors underline font-semibold"
            >
              Cancellation Terms
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
