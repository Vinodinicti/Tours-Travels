import React from 'react';
import { motion } from 'framer-motion';
import { Send, PhoneCall, Plane, Sparkles, Compass } from 'lucide-react';

const FinalCTASection = ({ onOpenEnquiry, setActivePage }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-coral-peach text-white">
      
      {/* Decorative animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-coral-dark/30 via-transparent to-peach-dark/30" />
      
      {/* Floating travel line graphics */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none animate-float-slow">
        <Plane className="w-24 h-24 text-white transform -rotate-45" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 pointer-events-none animate-float-reverse">
        <Compass className="w-32 h-32 text-cream" />
      </div>

      {/* Curved SVG Travel Trail Line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 100 200 Q 400 50 800 250 T 1500 100"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeDasharray="8 8"
        />
      </svg>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest border border-white/30">
            <Sparkles className="w-4 h-4 text-cream animate-spin-slow" />
            <span>Ready For Adventure?</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Your Next Journey <br className="hidden sm:inline" />
            <span className="italic text-cream drop-shadow-md">Starts Here</span>
          </h2>

          <p className="text-cream-soft text-lg sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            Tell us where you want to go, and we'll help you plan the journey. Tailor-made itineraries, 24/7 expert support, and unbeatable prices.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-10 py-4.5 bg-white text-coral font-extrabold rounded-2xl shadow-2xl hover:bg-cream-soft hover:scale-105 transition-all text-base flex items-center justify-center space-x-3 group"
          >
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            <span>Plan My Trip</span>
          </button>

          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-10 py-4.5 bg-charcoal/40 backdrop-blur-md border border-white/40 text-white font-extrabold rounded-2xl hover:bg-charcoal transition-all text-base flex items-center justify-center space-x-3"
          >
            <PhoneCall className="w-5 h-5 text-peach" />
            <span>Contact Us</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTASection;
