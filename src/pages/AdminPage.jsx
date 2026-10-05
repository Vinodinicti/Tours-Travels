import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, User, LogOut, CheckCircle2, Clock, Trash2, Plus, Edit3, MessageSquare, Phone, Bus, Search, Filter, Calendar, DollarSign, Layers } from 'lucide-react';
import { CLIENT_BUS_INFO, BUS_TOUR_PACKAGES, FEATURED_DESTINATIONS_PER_DAY } from '../data/busData';

const AdminPage = ({ enquiries, onUpdateEnquiryStatus, onDeleteEnquiry, onAddPackage, onDeletePackage, packagesList }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  
  const [activeTab, setActiveTab] = useState('bookings'); // 'bookings' or 'packages'
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // New Package Modal State
  const [showAddPackageModal, setShowAddPackageModal] = useState(false);
  const [newPackage, setNewPackage] = useState({
    name: '',
    defaultDays: 3,
    perDayPrice: 2800,
    busDetail: 'Golden Volvo AC Luxury Coach',
    placesCovered: '',
    highlights: ''
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Strictly validate username = 'admin' and password = 'admin123'
    if (loginForm.username === 'admin' && loginForm.password === 'admin123') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid Username or Password! (Hint: admin / admin123)');
    }
  };

  const handleCreatePackage = (e) => {
    e.preventDefault();
    const pkgObj = {
      id: `bus-pkg-${Date.now()}`,
      name: newPackage.name,
      defaultDays: parseInt(newPackage.defaultDays) || 3,
      duration: `${newPackage.defaultDays} Days / ${parseInt(newPackage.defaultDays) - 1} Nights`,
      startingFare: `₹${parseInt(newPackage.perDayPrice).toLocaleString()}`,
      perDayPrice: parseInt(newPackage.perDayPrice) || 2800,
      image: '/bus-1.webp',
      placesCovered: newPackage.placesCovered.split(',').map(s => s.trim()).filter(Boolean),
      busDetail: newPackage.busDetail,
      highlights: newPackage.highlights.split(',').map(s => s.trim()).filter(Boolean)
    };
    onAddPackage(pkgObj);
    setShowAddPackageModal(false);
    setNewPackage({
      name: '',
      defaultDays: 3,
      perDayPrice: 2800,
      busDetail: 'Golden Volvo AC Luxury Coach',
      placesCovered: '',
      highlights: ''
    });
  };

  const filteredEnquiries = enquiries.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.phone.includes(searchTerm) ||
                          item.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // ------------------------------------------------------------------
  // 1. UN-AUTHENTICATED SECURE LOGIN VIEW
  // ------------------------------------------------------------------
  if (!isLoggedIn) {
    return (
      <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-20 px-4 flex items-center justify-center relative overflow-hidden text-[#1E293B]">
        <div className="absolute inset-0 bg-pattern-grid pointer-events-none opacity-40" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="w-full max-w-md bg-white border-2 border-amber-300 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-2xl relative z-10 space-y-6"
        >
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-3xl bg-gradient-maroon-gold text-white flex items-center justify-center mx-auto shadow-glow-maroon mb-3">
              <ShieldCheck className="w-8 h-8 text-[#FBBF24]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1E293B]">Admin Portal Login</h2>
            <p className="text-xs text-gray-500 font-semibold">
              Sri Saranya Travels Management Desk
            </p>
          </div>

          {loginError && (
            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-300 text-rose-700 text-xs font-bold text-center">
              ⚠️ {loginError}
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            
            {/* Username Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#1E293B] flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#800000]" /> Username
              </label>
              <input
                type="text"
                required
                value={loginForm.username}
                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                placeholder="Enter username"
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-[#1E293B] focus:ring-2 focus:ring-[#800000] focus:outline-none"
              />
            </div>

            {/* Password Input (Hidden type="password") */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#1E293B] flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[#800000]" /> Password (Hidden)
              </label>
              <input
                type="password"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-[#1E293B] focus:ring-2 focus:ring-[#800000] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-maroon-gold text-white font-extrabold rounded-2xl shadow-glow-maroon hover:scale-[1.02] transition-all text-xs uppercase tracking-wider mt-2"
            >
              Sign In to Admin Dashboard
            </button>

          </form>
        </motion.div>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // 2. AUTHENTICATED ADMIN MANAGEMENT DASHBOARD
  // ------------------------------------------------------------------
  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-24 sm:pt-28 pb-20 text-[#1E293B] relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-grid pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">
        
        {/* Top Header Controls Bar */}
        <div className="bg-white border-2 border-amber-300 p-4 sm:p-8 rounded-3xl sm:rounded-[2.5rem] shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
            <img src="/logo.png" alt="Logo" className="h-10 sm:h-12 w-auto object-contain shrink-0" />
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-serif text-lg sm:text-3xl font-extrabold text-[#1E293B] leading-tight">Admin Control Panel</h1>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-500 font-bold truncate">Manage Tour Packages & Customer Booking Enquiries</p>
            </div>
          </div>

          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full sm:w-auto px-4 py-2 sm:py-2.5 bg-rose-50 text-rose-700 border border-rose-200 font-extrabold rounded-xl sm:rounded-2xl hover:bg-rose-100 transition-all text-xs flex items-center justify-center space-x-2 shrink-0"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout Admin</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center space-x-2 ${
                activeTab === 'bookings'
                  ? 'bg-[#800000] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100 bg-slate-50'
              }`}
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Booking Enquiries ({enquiries.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('packages')}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center space-x-2 ${
                activeTab === 'packages'
                  ? 'bg-[#800000] text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-100 bg-slate-50'
              }`}
            >
              <Bus className="w-4 h-4 shrink-0" />
              <span>Manage Tour Packages ({packagesList.length})</span>
            </button>
          </div>

          {activeTab === 'packages' && (
            <button
              onClick={() => setShowAddPackageModal(true)}
              className="w-full sm:w-auto px-5 py-2.5 bg-gradient-maroon-gold text-white font-extrabold rounded-xl text-xs shadow-glow-maroon hover:scale-105 transition-all flex items-center justify-center space-x-1.5"
            >
              <Plus className="w-4 h-4 text-[#FBBF24]" />
              <span>Add New Package</span>
            </button>
          )}
        </div>

        {/* -------------------------------------------------------------
           TAB 1: ENQUIRY BOOKINGS (EXTENDED TEXTS ON MOBILE & DESKTOP)
           ------------------------------------------------------------- */}
        {activeTab === 'bookings' && (
          <div className="space-y-4 sm:space-y-6">
            
            {/* Search & Status Filters */}
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search passenger, phone or route..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E293B] focus:ring-2 focus:ring-[#800000] focus:outline-none"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] font-bold text-gray-500 mr-1">Status:</span>
                {['all', 'Pending', 'Confirmed', 'Completed'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                      statusFilter === st
                        ? 'bg-[#800000] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* 1A. MOBILE VIEW: EXTENDED ENQUIRY CARDS (Full Extended Details, No Truncation) */}
            <div className="block lg:hidden space-y-4">
              {filteredEnquiries.length === 0 ? (
                <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-gray-400 font-bold text-xs">
                  No booking enquiries found.
                </div>
              ) : (
                filteredEnquiries.map((enq) => (
                  <div
                    key={enq.id}
                    className="bg-white border-2 border-slate-200 rounded-2xl p-4 sm:p-5 shadow-md space-y-3.5 transition-all hover:border-amber-300"
                  >
                    {/* Top Card Header: Name, Status & Price */}
                    <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-extrabold text-[#1E293B] text-base leading-snug">{enq.name}</span>
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase shadow-xs ${
                            enq.status === 'Confirmed'
                              ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                              : enq.status === 'Completed'
                              ? 'bg-blue-100 text-blue-700 border border-blue-300'
                              : 'bg-amber-100 text-amber-800 border border-amber-300'
                          }`}>
                            {enq.status}
                          </span>
                        </div>
                        <a
                          href={`tel:${enq.phone.replace(/[^0-9+]/g, '')}`}
                          className="text-gray-500 text-xs font-semibold hover:text-[#800000] inline-flex items-center gap-1 mt-0.5"
                        >
                          <Phone className="w-3 h-3 text-[#800000]" />
                          <span>{enq.phone}</span>
                        </a>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-[10px] text-gray-400 uppercase font-bold block">Total Fare</span>
                        <span className="font-serif text-base sm:text-lg font-extrabold text-[#D97706]">
                          ₹{(enq.totalPrice || (enq.numberOfDays * (enq.perDayRate || 2500))).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Tour Destination - Extended Full Text */}
                    <div className="bg-rose-50/70 border border-rose-200/80 rounded-xl p-3">
                      <span className="text-[10px] text-[#800000] font-extrabold uppercase tracking-wider block mb-0.5">
                        Tour Package / Route
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#1E293B] block leading-snug">
                        {enq.destination}
                      </span>
                    </div>

                    {/* Duration, Dates & Passengers Info Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                        <span className="text-[10px] text-gray-400 uppercase font-bold block">Duration</span>
                        <span className="font-extrabold text-slate-800 text-xs block">{enq.numberOfDays} Days Tour</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                        <span className="text-[10px] text-gray-400 uppercase font-bold block">Travel Date</span>
                        <span className="font-extrabold text-slate-800 text-xs block">{enq.startDate || 'Immediate / Flexible'}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 col-span-2">
                        <span className="text-[10px] text-gray-400 uppercase font-bold block">Passengers Group</span>
                        <span className="font-extrabold text-slate-800 text-xs block">{enq.passengersCount || '1-2 Passengers'}</span>
                      </div>
                    </div>

                    {/* EXTENDED CUSTOMER SPECIAL REQUEST / MESSAGE (Full Text, No Truncation) */}
                    {enq.message && (
                      <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200">
                        <div className="flex items-center gap-1.5 mb-1 text-[11px] font-extrabold text-[#800000]">
                          <MessageSquare className="w-3.5 h-3.5 text-[#F59E0B]" />
                          <span>Customer Special Request / Note:</span>
                        </div>
                        <p className="text-xs font-semibold text-gray-800 whitespace-normal break-words leading-relaxed">
                          "{enq.message}"
                        </p>
                      </div>
                    )}

                    {/* Mobile Action Controls: WhatsApp, Status Changer, Delete */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                        {/* WhatsApp Direct Chat */}
                        <a
                          href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(enq.name)},%20Sri%20Saranya%20Travels%20here%20regarding%20your%20${encodeURIComponent(enq.destination)}%20tour.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all text-xs font-bold inline-flex items-center justify-center gap-1.5 shadow-xs"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>

                        {/* Change Status Dropdown */}
                        <select
                          value={enq.status}
                          onChange={(e) => onUpdateEnquiryStatus(enq.id, e.target.value)}
                          className="flex-1 px-3 py-2 rounded-xl bg-slate-100 text-slate-800 font-bold border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#800000]"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </div>

                      <button
                        onClick={() => onDeleteEnquiry(enq.id)}
                        className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl border border-rose-200 transition-colors shrink-0"
                        title="Delete Enquiry"
                        aria-label="Delete Enquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                ))
              )}
            </div>

            {/* 1B. DESKTOP VIEW: DATA TABLE (With Extended Full Texts, No Truncation) */}
            <div className="hidden lg:block bg-white border-2 border-slate-200 rounded-[2rem] shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#FFF5F5] border-b border-rose-200 text-[#800000] font-extrabold uppercase tracking-wider text-[11px]">
                      <th className="p-4">Passenger Info</th>
                      <th className="p-4">Tour Destination & Special Requests</th>
                      <th className="p-4">Duration & Dates</th>
                      <th className="p-4">Total Fare</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-semibold">
                    {filteredEnquiries.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="p-8 text-center text-gray-400 font-bold">
                          No booking enquiries found.
                        </td>
                      </tr>
                    ) : (
                      filteredEnquiries.map((enq) => (
                        <tr key={enq.id} className="hover:bg-amber-50/50 transition-colors">
                          <td className="p-4 align-top">
                            <span className="font-extrabold text-[#1E293B] block text-sm">{enq.name}</span>
                            <a href={`tel:${enq.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-500 text-[11px] block hover:text-[#800000]">
                              {enq.phone}
                            </a>
                            <span className="text-[10px] text-gray-400 block mt-0.5">{enq.passengersCount}</span>
                          </td>
                          <td className="p-4 align-top max-w-sm">
                            <span className="font-bold text-[#800000] block text-xs leading-snug">{enq.destination}</span>
                            {enq.message && (
                              <div className="mt-1.5 p-2 rounded-lg bg-amber-50/80 border border-amber-200/70 text-[11px] text-gray-700 whitespace-normal break-words leading-relaxed font-medium">
                                <span className="font-bold text-[#800000]">Request: </span>"{enq.message}"
                              </div>
                            )}
                          </td>
                          <td className="p-4 align-top whitespace-nowrap">
                            <span className="font-bold block text-slate-800">{enq.numberOfDays} Days Tour</span>
                            <span className="text-[11px] text-gray-500 block">Start: {enq.startDate || 'Immediate'}</span>
                          </td>
                          <td className="p-4 align-top whitespace-nowrap">
                            <span className="font-serif text-base font-extrabold text-[#D97706] block">
                              ₹{(enq.totalPrice || (enq.numberOfDays * (enq.perDayRate || 2500))).toLocaleString()}
                            </span>
                            <span className="text-[10px] text-gray-400 block font-normal">₹{enq.perDayRate || 2500}/day</span>
                          </td>
                          <td className="p-4 align-top">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase shadow-xs whitespace-nowrap ${
                              enq.status === 'Confirmed'
                                ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                                : enq.status === 'Completed'
                                ? 'bg-blue-100 text-blue-700 border border-blue-300'
                                : 'bg-amber-100 text-amber-800 border border-amber-300'
                            }`}>
                              {enq.status}
                            </span>
                          </td>
                          <td className="p-4 align-top text-right space-x-2 whitespace-nowrap">
                            <a
                              href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(enq.name)},%20Sri%20Saranya%20Travels%20here%20regarding%20your%20${encodeURIComponent(enq.destination)}%20tour.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all text-[11px] font-bold inline-flex items-center gap-1 shadow-xs"
                            >
                              <MessageSquare className="w-3 h-3" />
                              <span>WhatsApp</span>
                            </a>

                            <select
                              value={enq.status}
                              onChange={(e) => onUpdateEnquiryStatus(enq.id, e.target.value)}
                              className="px-2 py-1 rounded-lg bg-slate-100 text-slate-800 font-bold border border-slate-300 text-[11px] focus:ring-1 focus:ring-[#800000]"
                            >
                              <option value="Pending">Set Pending</option>
                              <option value="Confirmed">Set Confirmed</option>
                              <option value="Completed">Set Completed</option>
                            </select>

                            <button
                              onClick={() => onDeleteEnquiry(enq.id)}
                              className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors inline-block"
                              title="Delete Enquiry"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* -------------------------------------------------------------
           TAB 2: MANAGE TOUR PACKAGES LIST (EXTENDED TEXTS ON ALL DEVICES)
           ------------------------------------------------------------- */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {packagesList.map((pkg) => (
              <div key={pkg.id} className="bg-white border-2 border-slate-200 rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-6 shadow-xl flex flex-col justify-between space-y-4">
                <div>
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-3">
                    <img src={pkg.image} alt={pkg.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#800000] text-white text-xs font-extrabold shadow-md">
                      {pkg.duration || `${pkg.defaultDays} Days`}
                    </span>
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#F59E0B] text-slate-950 text-xs font-extrabold shadow-md">
                      ₹{pkg.perDayPrice.toLocaleString()} / Day
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-extrabold text-[#1E293B] mb-1.5 leading-snug">{pkg.name}</h3>
                  <p className="text-xs text-[#800000] font-extrabold mb-3">🚌 {pkg.busDetail}</p>

                  {/* Extended Places Covered */}
                  <div className="space-y-1.5 mb-3">
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">Places Covered:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.placesCovered.map((pl, i) => (
                        <span key={i} className="px-2 py-1 rounded-lg bg-amber-50 text-[#800000] text-[11px] font-bold border border-amber-200">
                          📍 {pl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Extended Package Highlights */}
                  {pkg.highlights && pkg.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">Package Highlights:</span>
                      <div className="space-y-1">
                        {pkg.highlights.map((hl, idx) => (
                          <div key={idx} className="text-xs text-gray-700 flex items-start gap-1.5 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    <span>Active Package</span>
                  </span>
                  <button
                    onClick={() => onDeletePackage(pkg.id)}
                    className="px-3.5 py-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all border border-rose-200"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* ADD NEW PACKAGE MODAL */}
      {showAddPackageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 max-w-lg w-full border-2 border-amber-300 shadow-2xl space-y-4 max-h-[92vh] overflow-y-auto">
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#1E293B]">Add New Bus Tour Package</h3>
            
            <form onSubmit={handleCreatePackage} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700">Package Name *</label>
                <input
                  type="text"
                  required
                  value={newPackage.name}
                  onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
                  placeholder="e.g. Rameshwaram & Kanyakumari Special"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E293B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700">Duration (Days) *</label>
                  <input
                    type="number"
                    required
                    min={1}
                    value={newPackage.defaultDays}
                    onChange={(e) => setNewPackage({ ...newPackage, defaultDays: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E293B]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700">Per Day Rate (₹) *</label>
                  <input
                    type="number"
                    required
                    value={newPackage.perDayPrice}
                    onChange={(e) => setNewPackage({ ...newPackage, perDayPrice: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E293B]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700">Bus Coach Detail *</label>
                <input
                  type="text"
                  required
                  value={newPackage.busDetail}
                  onChange={(e) => setNewPackage({ ...newPackage, busDetail: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E293B]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700">Places Covered (Comma separated) *</label>
                <input
                  type="text"
                  required
                  value={newPackage.placesCovered}
                  onChange={(e) => setNewPackage({ ...newPackage, placesCovered: e.target.value })}
                  placeholder="Kumbakonam, Chidambaram, Thanjavur"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E293B]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700">Package Highlights (Comma separated)</label>
                <input
                  type="text"
                  value={newPackage.highlights}
                  onChange={(e) => setNewPackage({ ...newPackage, highlights: e.target.value })}
                  placeholder="VIP Darshan, Hotel Stay Included"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#1E293B]"
                />
              </div>

              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddPackageModal(false)}
                  className="w-1/2 py-2.5 bg-slate-100 text-slate-700 font-bold rounded-xl text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2.5 bg-[#800000] text-white font-extrabold rounded-xl text-xs shadow-glow-maroon"
                >
                  Save Package
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminPage;
