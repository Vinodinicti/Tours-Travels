import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, CheckCircle2, Calculator, MapPin, Navigation } from 'lucide-react';
import { CLIENT_BUS_INFO, FEATURED_DESTINATIONS_PER_DAY } from '../data/busData';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Coimbatore & Nilgiri Gate',
    perDayRate: 2200,
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FEFCE8] min-h-screen text-[#1E293B] relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* -------------------------------------------------------------
         PAGE HERO BANNER: 100% SCREEN VIEWPORT FIT IMAGE & PERFECT ALIGNMENT
         ------------------------------------------------------------- */}
      <div className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80"
            alt="Sri Saranya Travels 24/7 Helpline & Contact"
            className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-amber-300 border border-amber-400/40 text-xs font-extrabold uppercase tracking-widest inline-block shadow-lg">
            SRI SARANYA TRAVELS • 24/7 HELPLINE
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-2xl">
            Contact Us & <span className="text-[#FBBF24] italic">Tour Reservation</span>
          </h1>

          <p className="text-gray-100 text-sm sm:text-base max-w-2xl mx-auto font-semibold drop-shadow">
            "{CLIENT_BUS_INFO.slogan}" — Get in touch for instant automatic tour price estimation and bus booking.
          </p>
        </div>
      </div>

      {/* Main Form & Contact Grid - Golden Tinted Background & White Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info White Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#1E293B]">
                Helpline & Reservation
              </h3>

              <div className="space-y-4 text-xs font-bold text-slate-700">
                
                <div>
                  <h5 className="font-bold text-[#1E293B] text-sm">Phone Hotlines</h5>
                  <div className="space-y-1.5 mt-2">
                    {CLIENT_BUS_INFO.phones.map((p, i) => (
                      <a key={i} href={`tel:${CLIENT_BUS_INFO.rawPhones[i]}`} className="block hover:text-[#800000] transition-colors font-extrabold text-sm tracking-wide">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-3 pt-3 border-t border-slate-100">
                  <Mail className="w-4 h-4 text-[#800000] shrink-0" />
                  <div>
                    <h5 className="font-bold text-[#1E293B]">Email Contact</h5>
                    <a href={`mailto:${CLIENT_BUS_INFO.email}`} className="text-xs text-[#800000] font-extrabold hover:underline">
                      {CLIENT_BUS_INFO.email}
                    </a>
                  </div>
                </div>

              </div>

              {/* WhatsApp Button */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${CLIENT_BUS_INFO.rawPhones[0]}?text=Hi%20Sri%20Saranya%20Travels!%20I%20want%20to%20book%20a%20bus%20tour.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-md transition-all text-xs flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Chat (+91 90039 99991)</span>
                </a>
              </div>

            </div>

            <div className="p-6 rounded-3xl bg-gradient-maroon-gold text-white shadow-xl space-y-2">
              <h4 className="font-serif text-lg font-bold">24 Hours Travel Support</h4>
              <p className="text-xs text-amber-100 font-medium">
                Our tour leaders and boarding coordinators are available 24/7 across Tamil Nadu to manage your journey.
              </p>
            </div>

          </div>

          {/* Right Form with Auto Calculation - White Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1E293B]">Tour Booking Received!</h3>
                  <p className="text-xs text-gray-600 font-medium">
                    Thank you <strong className="text-[#800000]">{formData.name}</strong>! Your <strong className="text-[#800000]">{daysNightsText}</strong> tour to <strong className="text-[#800000]">{formData.destination}</strong> (Est. Total: <strong className="text-[#D97706]">₹{totalPrice.toLocaleString()}</strong>) has been received. Sri Saranya Travels will call you at <strong className="text-[#800000]">{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#800000] text-white font-bold rounded-xl text-xs shadow-glow-maroon"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <h3 className="font-serif text-2xl font-bold text-[#1E293B]">
                    Tour Booking & Price Calculation Form
                  </h3>

                  {/* AUTOMATIC CALCULATION DISPLAY BOX */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#800000] to-[#8B1E1E] text-white shadow-lg space-y-2 border border-amber-300">
                    <div className="flex items-center justify-between text-xs border-b border-white/20 pb-2">
                      <span className="flex items-center gap-1 font-bold text-[#FBBF24]">
                        <Calculator className="w-4 h-4" /> Automatic Price & Days Calculator
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F59E0B] text-slate-950 font-extrabold text-[11px]">
                        {daysNightsText}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="text-[10px] text-gray-200 uppercase block font-medium">Per Day Rate:</span>
                        <span className="font-bold text-sm text-white">₹{formData.perDayRate.toLocaleString()} / Day</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-amber-200 uppercase block font-extrabold">Calculated Total Price:</span>
                        <span className="font-serif text-2xl font-black text-[#FBBF24]">₹{totalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#1E293B]">Passenger Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-[#1E293B] focus:ring-2 focus:ring-[#800000] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#1E293B]">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 9003999991"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-[#1E293B] focus:ring-2 focus:ring-[#800000] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#1E293B]">Select Destination</label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleDestinationChange}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E293B] focus:ring-2 focus:ring-[#800000] focus:outline-none"
                      >
                        {FEATURED_DESTINATIONS_PER_DAY.map((d) => (
                          <option key={d.id} value={d.name}>{d.name} ({d.formattedPrice})</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#1E293B]">Tour Start Date</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-[#1E293B] focus:ring-2 focus:ring-[#800000] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#1E293B]">Number of Days (Auto Calculates)</label>
                      <select
                        name="numberOfDays"
                        value={formData.numberOfDays}
                        onChange={(e) => setFormData({ ...formData, numberOfDays: parseInt(e.target.value) })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border-2 border-amber-300 text-xs font-bold text-[#1E293B] focus:ring-2 focus:ring-[#800000] focus:outline-none"
                      >
                        <option value={1}>1 Day (Single Day Tour)</option>
                        <option value={2}>2 Days / 1 Night</option>
                        <option value={3}>3 Days / 2 Nights</option>
                        <option value={4}>4 Days / 3 Nights</option>
                        <option value={5}>5 Days / 4 Nights</option>
                        <option value={6}>6 Days / 5 Nights</option>
                        <option value={7}>7 Days / 6 Nights</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#1E293B]">Group Size</label>
                      <select
                        name="passengersCount"
                        value={formData.passengersCount}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-[#1E293B] focus:ring-2 focus:ring-[#800000] focus:outline-none"
                      >
                        <option value="1 Passenger">1 Passenger</option>
                        <option value="2 Passengers">2 Passengers</option>
                        <option value="3-5 Family Group">3-5 Family Group</option>
                        <option value="6+ Bus Tour Group">6+ Bus Tour Group</option>
                      </select>
                    </div>

                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#1E293B]">Special Tour Notes</label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify hotel preferences, pickup point details..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-[#1E293B] focus:ring-2 focus:ring-[#800000] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-maroon-gold text-white font-extrabold rounded-2xl shadow-glow-maroon hover:scale-[1.01] transition-all text-xs flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 text-[#FBBF24]" />
                    <span>Submit Tour Reservation (Est. Total: ₹{totalPrice.toLocaleString()})</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* -------------------------------------------------------------
           GOOGLE MAP LOCATION SECTION
           ------------------------------------------------------------- */}
        <div className="mt-8 bg-white rounded-[2.5rem] p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-[#800000] text-[11px] font-extrabold uppercase tracking-wider inline-block mb-1">
                Head Office & Bus Depot Location
              </span>
              <h3 className="font-serif text-2xl font-extrabold text-[#1E293B]">
                Visit Our Office in Coimbatore
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                Main Bus Depot & Booking Office, Opp. Central Bus Stand, Gandhipuram, Coimbatore, Tamil Nadu 641012
              </p>
            </div>
            
            <a
              href="https://maps.google.com/?q=Gandhipuram+Coimbatore+Bus+Stand"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#800000] text-white font-extrabold text-xs rounded-xl shadow-glow-maroon hover:scale-105 transition-all shrink-0 inline-flex items-center justify-center space-x-2"
            >
              <Navigation className="w-4 h-4 text-[#FBBF24]" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>

          {/* Embedded Google Map Iframe */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative">
            <iframe
              title="Sri Saranya Travels Google Map Location"
              src="https://maps.google.com/maps?q=Gandhipuram,Coimbatore,Tamil%20Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter contrast-[1.05]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;

