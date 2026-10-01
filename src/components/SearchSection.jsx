import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Compass, ArrowRight, Car } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchSection = ({ onSearchSubmit }) => {
  const [activeTab, setActiveTab] = useState('destinations');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [vehicleType, setVehicleType] = useState('Innova Crysta (6+1 SUV)');
  const [tripType, setTripType] = useState('Daily Inter-City Trip');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit({ activeTab, destination, travelDate, vehicleType, tripType });
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 z-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6 sm:p-10 rounded-[2.5rem] shadow-2xl border border-white/80 bg-gradient-to-br from-white/95 via-cream-soft/90 to-peach/20 relative"
      >
        {/* Header Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-peach/20">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal flex items-center gap-2">
              <span>Book Cab / Search Daily Route</span>
              <Compass className="w-6 h-6 text-coral animate-spin-slow" />
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-light mt-1">
              Swift Dzire • Innova Crysta • Tempo Traveller • Force Urbania VIP
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-cream-soft p-1.5 rounded-2xl border border-peach/30">
            {[
              { id: 'destinations', label: 'Daily Routes' },
              { id: 'packages', label: 'Tour Packages' },
              { id: 'customized', label: 'Fleet Rental' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-coral-peach text-white shadow-glow-coral'
                    : 'text-charcoal-light hover:text-coral'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Form Grid */}
        <form onSubmit={handleSubmit} className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
          
          {/* Destination / Route */}
          <div className="lg:col-span-3 space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-coral" />
              <span>Route / Destination</span>
            </label>
            <div className="relative">
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl bg-white text-charcoal font-semibold border border-peach/30 focus:outline-none focus:ring-2 focus:ring-coral text-sm shadow-sm cursor-pointer appearance-none"
              >
                <option value="">Select Route / City</option>
                <option value="Coimbatore">Coimbatore (Daily)</option>
                <option value="Chennai">Chennai (Daily)</option>
                <option value="Bangalore">Bangalore (Daily)</option>
                <option value="Hyderabad">Hyderabad (Daily)</option>
                <option value="Thiruchendur">Thiruchendur Temple</option>
                <option value="Velankanni">Velankanni Basilica</option>
                <option value="Kumbakonam">Kumbakonam Navagraha</option>
                <option value="Chidambaram">Chidambaram</option>
                <option value="Pondicherry">Pondicherry</option>
                <option value="Ooty">Ooty & Kodaikanal</option>
              </select>
              <Search className="w-4 h-4 text-charcoal-light absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Travel Date */}
          <div className="lg:col-span-3 space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-coral" />
              <span>Travel Date</span>
            </label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl bg-white text-charcoal font-semibold border border-peach/30 focus:outline-none focus:ring-2 focus:ring-coral text-sm shadow-sm"
            />
          </div>

          {/* Vehicle Type */}
          <div className="lg:col-span-2 space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-coral" />
              <span>Vehicle Preference</span>
            </label>
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl bg-white text-charcoal font-semibold border border-peach/30 focus:outline-none focus:ring-2 focus:ring-coral text-sm shadow-sm cursor-pointer"
            >
              <option value="Swift Dzire (4 Sedan)">Swift Dzire (4 Sedan)</option>
              <option value="Innova Crysta (6+1 SUV)">Innova Crysta (6+1 SUV)</option>
              <option value="Tempo Traveller (12-17)">Tempo Traveller (12-17)</option>
              <option value="Force Urbania VIP">Force Urbania VIP</option>
              <option value="Bus / Coach">Luxury Bus Coach</option>
            </select>
          </div>

          {/* Trip Category */}
          <div className="lg:col-span-2 space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-coral" />
              <span>Service Type</span>
            </label>
            <select
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl bg-white text-charcoal font-semibold border border-peach/30 focus:outline-none focus:ring-2 focus:ring-coral text-sm shadow-sm cursor-pointer"
            >
              <option value="Daily Inter-City Trip">Daily Inter-City Drop</option>
              <option value="Pilgrimage Temple Tour">Pilgrimage Temple Tour</option>
              <option value="Outstation Family Vacation">Outstation Family Vacation</option>
              <option value="Wedding / Event Transport">Wedding / Event Transport</option>
            </select>
          </div>

          {/* Action Button */}
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-coral-peach text-white font-extrabold rounded-2xl shadow-glow-coral hover:shadow-glow-peach hover:scale-[1.02] transition-all text-sm flex items-center justify-center space-x-2 group"
            >
              <span>Check Cab Fare</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </form>
      </motion.div>
    </div>
  );
};

export default SearchSection;
