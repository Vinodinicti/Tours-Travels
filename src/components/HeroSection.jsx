import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Car, Compass, MapPin, Navigation, ArrowRight, ShieldCheck } from 'lucide-react';
import { CLIENT_INFO } from '../data/travelData';

const HeroSection = ({ activePage, setActivePage, onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'packages', label: 'Tours' },
    { id: 'services', label: 'Vehicles' },
    { id: 'destinations', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen h-screen w-full overflow-hidden bg-[#202A36] text-white flex flex-col">
      
      {/* -------------------------------------------------------------
         1. CINEMATIC SCENIC TRAVEL VIDEO BACKGROUND
         ------------------------------------------------------------- */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-[0.85] contrast-[1.05]"
        >
          {/* High-quality cinematic driving video on scenic mountain/highway road */}
          <source
            src="https://cdn.coverr.co/videos/coverr-driving-on-a-scenic-mountain-road-5444/1080p.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video cannot load */}
          <img
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2000&q=85"
            alt="Sri Saranya Tours Travel"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Subtle Dark Gradient Overlay for perfect typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#202A36] via-[#202A36]/50 to-[#202A36]/65 z-1" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#202A36]/80 via-transparent to-[#202A36]/90 z-1" />
      </div>

      {/* -------------------------------------------------------------
         2. NAVIGATION BAR
         ------------------------------------------------------------- */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none group flex items-center space-x-3"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-coral-peach flex items-center justify-center shadow-glow-coral group-hover:scale-105 transition-transform">
              <span className="font-serif text-2xl font-black text-white italic">S</span>
            </div>
            <div>
              <span className="text-2xl font-semibold tracking-tight text-white block">
                Sri Saranya Tours
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors duration-200 hover:text-[#E99A7F] ${
                  activePage === link.id ? 'text-[#D86859] font-bold border-b-2 border-[#D86859] pb-0.5' : 'text-gray-200'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Phone Helpline CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${CLIENT_INFO.rawPhones[0]}`}
              className="text-xs font-semibold text-white/90 hover:text-[#E99A7F] transition-colors"
            >
              📞 {CLIENT_INFO.phones[0]}
            </a>
          </div>

          {/* Mobile Hamburger Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-white/20 text-white backdrop-blur-md hover:bg-white/30 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D86859]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-4 bg-white/95 backdrop-blur-xl text-[#202A36] rounded-3xl p-6 shadow-2xl border border-white/80 space-y-3"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                    activePage === link.id
                      ? 'bg-gradient-coral-peach text-white shadow-glow-coral'
                      : 'text-[#202A36] hover:bg-[#FAF8EB]'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-3 border-t border-gray-200 space-y-2">
                <a
                  href={`tel:${CLIENT_INFO.rawPhones[0]}`}
                  className="w-full py-3 bg-[#FAF8EB] text-[#202A36] font-bold rounded-2xl text-center block text-xs"
                >
                  📞 Call Hotline: {CLIENT_INFO.phones[0]}
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full py-3.5 bg-gradient-coral-peach text-white font-bold rounded-2xl text-center text-xs shadow-glow-coral"
                >
                  Plan Your Trip
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* -------------------------------------------------------------
         3. HERO MAIN CONTENT (CENTERED)
         ------------------------------------------------------------- */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto my-auto space-y-6">
        
        {/* Animated Moving Route Path Graphic */}
        <div className="absolute inset-0 pointer-events-none opacity-30 flex items-center justify-center">
          <svg className="w-full h-64" viewBox="0 0 1000 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 50 100 Q 250 20, 500 100 T 950 100"
              stroke="url(#routeGradient)"
              strokeWidth="3"
              strokeDasharray="10 10"
              className="animate-dash-move"
            />
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D86859" />
                <stop offset="50%" stopColor="#E99A7F" />
                <stop offset="100%" stopColor="#E8E3AC" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 text-sm font-semibold tracking-wider uppercase text-gray-300 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15"
        >
          <Compass className="w-4 h-4 text-[#E99A7F] animate-spin-slow" />
          <span>TRAVEL • TOURS • EXPERIENCES</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-0"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter text-white/80">
            Your Journey.
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tighter text-white -mt-2 md:-mt-4 lg:-mt-6 drop-shadow-md">
            Our Responsibility.
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-normal leading-relaxed mb-6"
        >
          Comfortable journeys, memorable destinations, and travel made simple.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          {/* Button 1: Explore Tours */}
          <button
            onClick={() => {
              setActivePage('packages');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-full bg-[#FAF8EB] text-[#202A36] font-semibold text-sm hover:bg-white hover:scale-105 transition-all shadow-lg flex items-center space-x-2"
          >
            <span>Explore Tours</span>
            <ArrowRight className="w-4 h-4 text-[#D86859]" />
          </button>

          {/* Button 2: Plan Your Trip */}
          <button
            onClick={onOpenEnquiry}
            className="px-5 py-2.5 rounded-full bg-[#202A36] border border-white/30 text-white font-semibold text-sm hover:bg-gray-800 transition-colors shadow-lg flex items-center space-x-2"
          >
            <Compass className="w-4 h-4 text-[#E99A7F]" />
            <span>Plan Your Trip</span>
          </button>
        </motion.div>

      </div>

      {/* -------------------------------------------------------------
         4. FLOATING GLASSMORPHISM CARDS (RESPONSIVE POSITIONS)
         ------------------------------------------------------------- */}
      
      {/* Floating Card 1: Lower-Right (Travel With Comfort) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden md:flex absolute bottom-10 right-8 z-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/80 items-center space-x-3 text-[#202A36] animate-float-slow"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-coral-peach flex items-center justify-center text-white shadow-glow-coral">
          <Car className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-[#202A36]">Travel With Comfort</h4>
          <p className="text-xs text-gray-600 font-medium">Cars • Tours • Group Travel</p>
        </div>
      </motion.div>

      {/* Floating Card 2: Lower-Left (Ready to Explore?) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:flex absolute bottom-12 left-8 z-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/80 items-center space-x-3 text-[#202A36] animate-float-reverse"
      >
        <div className="w-10 h-10 rounded-xl bg-[#202A36] text-[#E99A7F] flex items-center justify-center shadow-md">
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-[#202A36]">Ready to Explore?</h4>
          <p className="text-xs text-gray-600 font-medium">India • Outstation • Custom Trips</p>
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
