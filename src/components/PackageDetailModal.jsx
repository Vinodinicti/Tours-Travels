import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, MapPin, CheckCircle2, Hotel, Car, Send, Star, ShieldCheck } from 'lucide-react';

const PackageDetailModal = ({ isOpen, onClose, packageData, onOpenEnquiry }) => {
  if (!isOpen || !packageData) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal/70 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl border border-peach/30 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Image Bar */}
          <div className="relative h-64 sm:h-72 w-full shrink-0">
            <img
              src={packageData.image}
              alt={packageData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-cream">
                <MapPin className="w-4 h-4 text-coral" />
                <span>{packageData.destination}</span>
                <span>•</span>
                <Clock className="w-4 h-4 text-peach" />
                <span>{packageData.duration}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white">
                {packageData.name}
              </h2>
            </div>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-10 space-y-8 overflow-y-auto">
            
            {/* Price & Summary */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-coral/10 via-peach/15 to-cream/20 border border-peach/30">
              <div>
                <span className="text-xs uppercase font-bold text-charcoal-light block">Starting Price Per Person</span>
                <span className="font-serif text-3xl font-extrabold text-coral">{packageData.startingPrice}</span>
                <span className="text-xs text-charcoal-light block mt-0.5">*Taxes & Breakfast Included</span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiry(packageData.name);
                }}
                className="px-8 py-3.5 bg-gradient-coral-peach text-white font-extrabold rounded-2xl shadow-glow-coral hover:shadow-glow-peach hover:scale-105 transition-all text-sm flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Book / Enquire Package</span>
              </button>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-bold text-charcoal">Package Overview</h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                {packageData.shortDescription}
              </p>
            </div>

            {/* Inclusions & Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="space-y-3 p-5 rounded-2xl bg-cream-soft border border-peach/20">
                <h4 className="font-bold text-sm text-charcoal flex items-center gap-1.5">
                  <Hotel className="w-4 h-4 text-coral" /> Accommodation & Stays
                </h4>
                <p className="text-xs text-charcoal-light">{packageData.accommodation}</p>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-cream-soft border border-peach/20">
                <h4 className="font-bold text-sm text-charcoal flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-coral" /> Transfers & Transport
                </h4>
                <p className="text-xs text-charcoal-light">{packageData.transportation}</p>
              </div>

            </div>

            {/* Day-Wise Itinerary */}
            {packageData.itinerary && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-charcoal">Day-Wise Itinerary Breakdown</h3>
                <div className="space-y-3">
                  {packageData.itinerary.map((day, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white border border-peach/30 shadow-xs flex items-start space-x-4">
                      <span className="px-3 py-1 rounded-xl bg-gradient-coral-peach text-white text-xs font-bold shrink-0">
                        {day.day}
                      </span>
                      <div>
                        <h5 className="font-bold text-sm text-charcoal">{day.title}</h5>
                        <p className="text-xs text-charcoal-light leading-relaxed mt-0.5">{day.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Guarantee Callout */}
            <div className="flex items-center space-x-3 text-xs text-charcoal-light pt-4 border-t border-peach/20">
              <ShieldCheck className="w-5 h-5 text-coral shrink-0" />
              <span>Free cancellation up to 15 days before travel date. 100% price match guarantee.</span>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PackageDetailModal;
