import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Compass, Phone, User, Mail, Calendar, MapPin } from 'lucide-react';

const EnquiryModal = ({ isOpen, onClose, initialPackage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    packageName: initialPackage || 'Customised Holiday Package',
    travelDate: '',
    travellers: '2 Travellers',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
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
          className="fixed inset-0 bg-charcoal/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl border border-peach/40 p-8 z-10 my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-cream-soft hover:bg-peach/20 text-charcoal transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal">Enquiry Submitted!</h3>
              <p className="text-xs text-charcoal-light leading-relaxed">
                Thank you <strong className="text-coral">{formData.name}</strong>. Our trip expert will contact you at <strong className="text-coral">{formData.phone}</strong> with pricing & options.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-coral text-white font-bold rounded-xl text-xs"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="flex items-center space-x-2 text-coral mb-1">
                <Compass className="w-5 h-5 animate-spin-slow" />
                <span className="text-xs font-bold uppercase tracking-wider">Quick Trip Request</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-charcoal">
                Plan Your Vacation
              </h3>

              {initialPackage && (
                <div className="p-3 rounded-xl bg-peach/15 border border-peach/30 text-xs font-semibold text-charcoal">
                  Selected Interest: <span className="text-coral font-bold">{initialPackage}</span>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-charcoal">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-cream-soft text-charcoal font-semibold border border-peach/30 text-xs focus:ring-2 focus:ring-coral focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-charcoal">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 9876543210"
                  className="w-full px-4 py-3 rounded-xl bg-cream-soft text-charcoal font-semibold border border-peach/30 text-xs focus:ring-2 focus:ring-coral focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-charcoal">Travel Date</label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-cream-soft text-charcoal font-semibold border border-peach/30 text-xs focus:ring-2 focus:ring-coral focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-charcoal">Travellers</label>
                  <select
                    value={formData.travellers}
                    onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-cream-soft text-charcoal font-semibold border border-peach/30 text-xs focus:ring-2 focus:ring-coral focus:outline-none"
                  >
                    <option value="1 Solo">1 Solo</option>
                    <option value="2 Travellers">2 Travellers</option>
                    <option value="3-5 Travellers">3-5 Travellers</option>
                    <option value="6+ Group">6+ Group</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-charcoal">Special Requirements / Notes</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Budget range, hotel type, flights needed..."
                  className="w-full px-4 py-3 rounded-xl bg-cream-soft text-charcoal font-semibold border border-peach/30 text-xs focus:ring-2 focus:ring-coral focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-coral-peach text-white font-extrabold rounded-xl shadow-glow-coral hover:shadow-glow-peach hover:scale-[1.01] transition-all text-sm flex items-center justify-center space-x-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quick Inquiry</span>
              </button>

            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EnquiryModal;
