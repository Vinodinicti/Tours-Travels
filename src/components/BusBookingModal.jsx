import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Calendar, User, MapPin, Bus, Calculator, Clock } from 'lucide-react';
import { CLIENT_BUS_INFO, FEATURED_DESTINATIONS_PER_DAY } from '../data/busData';

const BusBookingModal = ({
  isOpen,
  onClose,
  initialRoute = '',
  initialPerDay = 2500,
  initialStartDate = '',
  initialEndDate = '',
  onAddEnquiry
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: initialRoute || 'Coimbatore & Nilgiri Gate',
    perDayRate: initialPerDay || 2500,
    startDate: initialStartDate || '',
    endDate: initialEndDate || initialStartDate || '',
    passengersCount: '2 Passengers',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Auto-calculate days and nights based on Start Date and End Date
  const calculateDuration = (startStr, endStr) => {
    if (!startStr) return { days: 1, nights: 0, text: '1 Day / 0 Nights' };
    if (!endStr) return { days: 1, nights: 0, text: '1 Day / 0 Nights' };
    const [y1, m1, d1] = startStr.split('-').map(Number);
    const [y2, m2, d2] = endStr.split('-').map(Number);
    const start = new Date(y1, m1 - 1, d1);
    const end = new Date(y2, m2 - 1, d2);
    if (isNaN(start.getTime()) || isNaN(end.getTime()) || end < start) {
      return { days: 1, nights: 0, text: '1 Day / 0 Nights' };
    }
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    const calcDays = diffDays + 1;
    const calcNights = diffDays;
    return {
      days: calcDays,
      nights: calcNights,
      text: `${calcDays} Day${calcDays > 1 ? 's' : ''} / ${calcNights} Night${calcNights !== 1 ? 's' : ''}`
    };
  };

  const duration = calculateDuration(formData.startDate, formData.endDate);
  const daysNightsText = duration.text;
  const totalPrice = duration.days * formData.perDayRate;

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
    if (initialStartDate) {
      setFormData(prev => ({
        ...prev,
        startDate: initialStartDate,
        endDate: initialEndDate || initialStartDate
      }));
    }
  }, [initialRoute, initialStartDate, initialEndDate]);

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
      numberOfDays: duration.days,
      nights: duration.nights,
      durationText: duration.text,
      perDayRate: formData.perDayRate,
      totalPrice: totalPrice,
      startDate: formData.startDate || 'Immediate',
      endDate: formData.endDate || formData.startDate || '',
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Compact Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-amber-300 p-4 sm:p-6 z-10 my-4 text-[#1E293B] max-h-[92vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-rose-50 text-[#1E293B] transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-4 h-4" />
          </button>

          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1E293B]">Tour Booking Inquiry Received!</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium max-w-md mx-auto">
                Thank you <strong className="text-[#800000]">{formData.name}</strong>! Your <strong className="text-[#800000]">{daysNightsText}</strong> tour to <strong className="text-[#800000]">{formData.destination}</strong> (Est. Total: <strong className="text-[#D97706]">₹{totalPrice.toLocaleString()}</strong>) has been submitted. Our desk will call you at <strong className="text-[#800000]">{formData.phone}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2 bg-[#800000] text-white font-bold rounded-xl text-xs shadow-glow-maroon"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              <div className="flex items-center space-x-2 text-[#800000]">
                <Bus className="w-4 h-4 text-[#800000]" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider">{CLIENT_BUS_INFO.name} Tour Booking</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#1E293B] leading-tight">
                Reserve Bus Tour Package
              </h3>

              {/* AUTOMATIC CALCULATION SUMMARY BANNER */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#800000] to-[#8B1E1E] text-white shadow-md space-y-2 border border-amber-300">
                <div className="flex items-center justify-between text-xs border-b border-white/20 pb-1.5">
                  <span className="flex items-center gap-1 font-extrabold text-[#FBBF24] text-[11px]">
                    <Calculator className="w-3.5 h-3.5" /> Tour Estimate
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F59E0B] text-slate-950 font-extrabold text-[11px]">
                    {daysNightsText}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-0.5">
                  <div>
                    <span className="text-[10px] text-gray-200 uppercase block font-medium">Daily Rate:</span>
                    <span className="font-bold text-xs sm:text-sm text-white">₹{formData.perDayRate.toLocaleString()} / Day</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-amber-200 uppercase block font-extrabold">Estimated Total Price:</span>
                    <span className="font-serif text-xl sm:text-2xl font-black text-[#FBBF24]">₹{totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Passenger Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold text-[#1E293B]">Passenger Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter name"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 text-[#1E293B] font-semibold border border-slate-200 text-xs focus:ring-2 focus:ring-[#800000] focus:outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold text-[#1E293B]">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 9003999991"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 text-[#1E293B] font-semibold border border-slate-200 text-xs focus:ring-2 focus:ring-[#800000] focus:outline-none"
                  />
                </div>

                {/* Tour Destination */}
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-extrabold text-[#1E293B]">Select Tour Destination</label>
                  <select
                    value={formData.destination}
                    onChange={handleDestinationChange}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 text-[#1E293B] font-bold border border-slate-200 text-xs focus:ring-2 focus:ring-[#800000] focus:outline-none"
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
                  <label className="text-[11px] font-extrabold text-[#1E293B] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#800000]" /> Tour Start Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) => {
                      const val = e.target.value;
                      setFormData(prev => ({
                        ...prev,
                        startDate: val,
                        endDate: (!prev.endDate || prev.endDate < val) ? val : prev.endDate
                      }));
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 text-[#1E293B] font-semibold border border-slate-200 text-xs focus:ring-2 focus:ring-[#800000] focus:outline-none"
                  />
                </div>

                {/* End Date */}
                <div className="space-y-1">
                  <label className="text-[11px] font-extrabold text-[#1E293B] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#D97706]" /> Tour End Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={formData.startDate}
                    value={formData.endDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 text-[#1E293B] font-semibold border border-slate-200 text-xs focus:ring-2 focus:ring-[#800000] focus:outline-none"
                  />
                </div>

                {/* Duration Banner */}
                <div className="sm:col-span-2 p-2.5 rounded-xl bg-amber-50/90 border border-amber-300 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-[#800000]">
                    <Clock className="w-4 h-4 text-[#D97706]" />
                    <span>No. of Days / Nights:</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#800000] text-[#FBBF24] font-black text-xs shadow-xs tracking-wide">
                    {daysNightsText}
                  </span>
                </div>

                {/* Group Size */}
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-[11px] font-extrabold text-[#1E293B]">Group Size</label>
                  <select
                    value={formData.passengersCount}
                    onChange={(e) => setFormData({ ...formData, passengersCount: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 text-[#1E293B] font-semibold border border-slate-200 text-xs focus:ring-2 focus:ring-[#800000] focus:outline-none"
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
                <label className="text-[11px] font-extrabold text-[#1E293B]">Special Tour Notes</label>
                <textarea
                  rows="2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hotel stay preference, pickup location..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 text-[#1E293B] font-semibold border border-slate-200 text-xs focus:ring-2 focus:ring-[#800000] focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-maroon-gold text-white font-extrabold rounded-xl shadow-glow-maroon hover:scale-[1.01] transition-all text-xs flex items-center justify-center space-x-2"
              >
                <Send className="w-3.5 h-3.5 text-[#FBBF24]" />
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
