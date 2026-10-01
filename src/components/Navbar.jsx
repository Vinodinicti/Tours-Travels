import React, { useState, useEffect } from 'react';
import { Menu, X, Send, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activePage, setActivePage, onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'destinations', label: 'Destinations & Booking' },
    { id: 'packages', label: 'Tour Packages' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200' 
        : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Branding */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group focus:outline-none text-left"
          >
            <img 
              src="/logo.png" 
              alt="Sri Saranya Travels Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
                SRI SARANYA <span className="text-[#800000]">TRAVELS</span>
              </span>
              <span className="block text-[9px] tracking-widest uppercase font-extrabold text-[#D97706] mt-0.5">
                Luxury Bus Travels • Tamil Nadu
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-100 p-1.5 rounded-full border border-slate-200 shadow-inner">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-xs font-extrabold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#800000] text-white shadow-md border border-amber-400/50'
                      : 'text-slate-900 hover:text-[#800000] hover:bg-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Booking Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 text-xs font-extrabold text-white rounded-full bg-gradient-maroon-gold shadow-glow-maroon hover:scale-105 transition-all flex items-center space-x-2"
            >
              <Send className="w-3.5 h-3.5 text-[#FBBF24]" />
              <span>Book Ticket</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-slate-50 text-[#800000] border border-slate-200 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#800000]" /> : <Menu className="w-6 h-6 text-[#800000]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200 shadow-xl overflow-hidden mt-2"
          >
            <div className="px-6 py-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-left font-extrabold text-sm transition-all ${
                    activePage === item.id
                      ? 'bg-[#800000] text-white shadow-md'
                      : 'text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </button>
              ))}

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full py-3.5 bg-gradient-maroon-gold text-white font-extrabold rounded-2xl shadow-glow-maroon text-center flex items-center justify-center space-x-2 text-sm"
                >
                  <Send className="w-4 h-4 text-[#FBBF24]" />
                  <span>Book Bus Ticket Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
