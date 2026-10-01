import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Calendar, User, MapPin, Bus, Calculator, Clock } from 'lucide-react';
import { CLIENT_BUS_INFO, FEATURED_DESTINATIONS_PER_DAY } from '../data/busData';

const BusBookingModal = ({ isOpen, onClose, initialRoute = '', initialPerDay = 2500, onAddEnquiry }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: initialRoute || 'Coimbatore & Nilgiri Gate',
    perDayRate: initialPerDay || 2500,
    startDate: '',
    numberOfDays: 3,
    passengersCount: '2 Passengers',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Auto-calculated fields
  const days = parseInt(formData.numberOfDays) || 1;
  const nights = days > 1 ? days - 1 : 0;
  const daysNightsText = `${days} Day${days > 1 ? 's' : ''} / ${nights} Night${nights !== 1 ? 's' : ''}`;
  const totalPrice = days * formData.perDayRate;

  useEffect(() => {
    if (initialRoute) {
      const found = FEATURED_DESTINATIONS_PER_DAY.find(d => d.name.toLowerCase().includes(initialRoute.toLowerCase()));
      if (found) {
        setFormData(prev => ({
          ...prev,
          destination: found.name,
          perDayRate: found.perDayPrice
        }));
      }
    }
  }, [initialRoute]);

  const handleDestinationChange = (e) => {
    const selectedName = e.target.value;
    const found = FEATURED_DESTINATIONS_PER_DAY.find(d => d.name === selectedName);
    const rate = found ? found.perDayPrice : 2500;
    setFormData(prev => ({
      ...prev,
      destination: selectedName,
      perDayRate: rate
    }));
  };

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEnquiryObj = {
      id: `enq-${Date.now()}`,
      name: formData.name,
      phone: formData.phone,
      destination: formData.destination,
      numberOfDays: days,
      perDayRate: formData.perDayRate,
      totalPrice: totalPrice,
      startDate: formData.startDate || 'Immediate',
      passengersCount: formData.passengersCount,
      message: formData.message,
      status: 'Pending'
    };
    if (onAddEnquiry) {
      onAddEnquiry(newEnquiryObj);
    }
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl border-2 border-amber-300 p-6 sm:p-8 z-10 my-8 text-[#1E293B]"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-rose-50 text-[#1E293B] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1E293B]">Tour Booking Inquiry Received!</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                Thank you <strong className="text-[#800000]">{formData.name}</strong>! Your <strong className="text-[#800000]">{daysNightsText}</strong> tour to <strong className="text-[#800000]">{formData.destination}</strong> (Est. Total: <strong className="text-[#D97706]">₹{totalPrice.toLocaleString()}</strong>) has been submitted. Our desk will call you at <strong className="text-[#800000]">{formData.phone}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#800000] text-white font-bold rounded-xl text-xs shadow-glow-maroon"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="flex items-center space-x-2 text-[#800000]">
                <Bus className="w-5 h-5 text-[#800000]" />
                <span className="text-xs font-bold uppercase tracking-wider">{CLIENT_BUS_INFO.name} Tour Booking</span>
              </div>

              <h3 className="font-serif text-2xl font-extrabold text-[#1E293B]">
                Reserve Bus Tour Package
              </h3>

              {/* AUTOMATIC CALCULATION SUMMARY BANNER */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#800000] to-[#8B1E1E] text-white shadow-lg space-y-2 border border-amber-300">
                <div className="flex items-center justify-between text-xs border-b border-white/20 pb-2">
                  <span className="flex items-center gap-1 font-bold text-[#FBBF24]">
                    <Calculator className="w-4 h-4" /> Automatic Calculator
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F59E0B] text-slate-950 font-extrabold text-[11px]">
                    {daysNightsText}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[10px] text-gray-200 uppercase block font-medium">Daily Rate:</span>
                    <span className="font-bold text-sm text-white">₹{formData.perDayRate.toLocaleString()} / Day</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-amber-200 uppercase block font-extrabold">Estimated Total Price:</span>
                    <span className="font-serif text-2xl font-black text-[#FBBF24]">₹{totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Passenger Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E293B]">Passenger Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 text-[#1E293B] font-semibold border border-slate-200 text-xs focus:ring-2 focus:ring-[#800000] focus:outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E293B]">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 9003999991"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 text-[#1E293B] font-semibold border border-slate-200 text-xs focus:ring-2 focus:ring-[#800000] focus:outline-none"
                  />
                </div>

                {/* Tour Destination */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E293B]">Select Tour Destination</label>
                  <select
                    value={formData.destination}
                    onChange={handleDestinationChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 text-[#1E293B] font-bold border border-slate-200 text-xs focus:ring-2 focus:ring-[#800000] focus:outline-none"
                  >
                    {FEATURED_DESTINATIONS_PER_DAY.map((dest) => (
                      <option key={dest.id} value={dest.name}>
                        {dest.name} ({dest.formattedPrice})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Start Date */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E293B]">Tour Start Date</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 text-[#1E293B] font-semibold border border-slate-200 text-xs focus:ring-2 focus:ring-[#800000] focus:outline-none"
                  />
                </div>

                {/* Duration */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E293B] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#800000]" /> Duration (Days)
                  </label>
                  <select
                    value={formData.numberOfDays}
                    onChange={(e) => setFormData({ ...formData, numberOfDays: parseInt(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 text-[#1E293B] font-bold border-2 border-amber-300 text-xs focus:ring-2 focus:ring-[#800000] focus:outline-none"
                  >
                    <option value={1}>1 Day (Single Day Tour)</option>
                    <option value={2}>2 Days / 1 Night</option>
                    <option value={3}>3 Days / 2 Nights (Popular)</option>
                    <option value={4}>4 Days / 3 Nights</option>
                    <option value={5}>5 Days / 4 Nights</option>
                    <option value={6}>6 Days / 5 Nights</option>
                    <option value={7}>7 Days / 6 Nights</option>
                  </select>
                </div>

                {/* Group Size */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#1E293B]">Group Size</label>
                  <select
                    value={formData.passengersCount}
                    onChange={(e) => setFormData({ ...formData, passengersCount: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 text-[#1E293B] font-semibold border border-slate-200 text-xs focus:ring-2 focus:ring-[#800000] focus:outline-none"
                  >
                    <option value="1 Passenger">1 Passenger</option>
                    <option value="2 Passengers">2 Passengers (Couple)</option>
                    <option value="3-5 Family Group">3-5 Family Group</option>
                    <option value="6+ Bus Tour Group">6+ Tour Group</option>
                  </select>
                </div>

              </div>

              {/* Special Requirements */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1E293B]">Special Tour Notes</label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hotel stay preference, pickup location..."
                  className="w-full px-4 py-2 rounded-xl bg-slate-50 text-[#1E293B] font-semibold border border-slate-200 text-xs focus:ring-2 focus:ring-[#800000] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-maroon-gold text-white font-extrabold rounded-xl shadow-glow-maroon hover:scale-[1.01] transition-all text-sm flex items-center justify-center space-x-2 mt-2"
              >
                <Send className="w-4 h-4 text-[#FBBF24]" />
                <span>Submit Tour Booking (Est. Total: ₹{totalPrice.toLocaleString()})</span>
              </button>

            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BusBookingModal;
