import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';

import BusHeroSection from './components/BusHeroSection';
import HomeOverviewSection from './components/HomeOverviewSection';
import BusBookingModal from './components/BusBookingModal';

import AboutUsPage from './pages/AboutUsPage';
import DestinationsPage from './pages/DestinationsPage';
import TourPackagesPage from './pages/TourPackagesPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';

import { BUS_TOUR_PACKAGES } from './data/busData';

import CustomerReviewsMarquee from './components/CustomerReviewsMarquee';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialRoute, setBookingInitialRoute] = useState('');
  const [bookingInitialStartDate, setBookingInitialStartDate] = useState('');
  const [bookingInitialEndDate, setBookingInitialEndDate] = useState('');

  // Disable browser auto-scroll restoration so SPA navigation always starts at top
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Always start at the very top of the page on navigation (Desktop & Mobile)
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      const el = document.getElementById('page-top');
      if (el) el.scrollTop = 0;
    };

    scrollToTop();
    requestAnimationFrame(scrollToTop);

    const t1 = setTimeout(scrollToTop, 40);
    const t2 = setTimeout(scrollToTop, 120);
    const t3 = setTimeout(scrollToTop, 250);
    const t4 = setTimeout(scrollToTop, 400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [activePage]);

  // Central Tour Packages State (Managed by Admin)
  const [packagesList, setPackagesList] = useState(BUS_TOUR_PACKAGES);

  // Central Booking Enquiries State (Viewable in Admin Dashboard)
  const [enquiries, setEnquiries] = useState([
    {
      id: 'enq-101',
      name: 'Ramesh Kumar',
      phone: '+91 98421 55432',
      destination: 'Tamil Nadu Navagraha & Temple Bus Tour',
      numberOfDays: 3,
      nights: 2,
      durationText: '3 Days / 2 Nights',
      perDayRate: 2600,
      totalPrice: 7800,
      startDate: '2026-10-15',
      endDate: '2026-10-17',
      passengersCount: '3-5 Family Group',
      message: 'Prefer hotel near Kumbakonam temple',
      status: 'Pending'
    },
    {
      id: 'enq-102',
      name: 'Priya Sharma',
      phone: '+91 94432 10987',
      destination: 'Velankanni & East Coast Highway Bus Package',
      numberOfDays: 3,
      nights: 2,
      durationText: '3 Days / 2 Nights',
      perDayRate: 2800,
      totalPrice: 8400,
      startDate: '2026-10-20',
      endDate: '2026-10-22',
      passengersCount: '2 Passengers',
      message: 'Window sleeper berths preferred',
      status: 'Confirmed'
    },
    {
      id: 'enq-103',
      name: 'S. Murugan',
      phone: '+91 99400 88210',
      destination: 'Thiruchendur & Nagerkovil Pilgrimage Special',
      numberOfDays: 2,
      nights: 1,
      durationText: '2 Days / 1 Night',
      perDayRate: 2700,
      totalPrice: 5400,
      startDate: '2026-10-12',
      endDate: '2026-10-13',
      passengersCount: '6+ Bus Tour Group',
      message: 'Group tour for family temple trip',
      status: 'Completed'
    }
  ]);

  const handleOpenBooking = (routeName = '', startDate = '', endDate = '') => {
    setBookingInitialRoute(routeName);
    setBookingInitialStartDate(startDate);
    setBookingInitialEndDate(endDate);
    setBookingModalOpen(true);
  };

  const handleSearchBus = (searchData) => {
    handleOpenBooking(
      `${searchData.fromCity} to ${searchData.toCity} Bus Ticket`,
      searchData.startDate,
      searchData.endDate
    );
  };

  // Add new enquiry from visitor modal / contact form
  const handleAddEnquiry = (newEnq) => {
    setEnquiries(prev => [newEnq, ...prev]);
  };

  // Admin Enquiry Handlers
  const handleUpdateEnquiryStatus = (id, newStatus) => {
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status: newStatus } : e));
  };

  const handleDeleteEnquiry = (id) => {
    setEnquiries(prev => prev.filter(e => e.id !== id));
  };

  // Admin Package Handlers
  const handleAddPackage = (pkgObj) => {
    setPackagesList(prev => [pkgObj, ...prev]);
  };

  const handleDeletePackage = (id) => {
    setPackagesList(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A] font-sans selection:bg-[#800000] selection:text-white max-w-full overflow-x-hidden">
      
      {/* Top Navbar Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenEnquiry={() => handleOpenBooking('')}
      />

      {/* Main Page Body */}
      <main id="page-top" key={activePage} className="flex-grow">
        {activePage === 'home' && (
          <>
            {/* 1. Full-screen Bus Hero Section */}
            <BusHeroSection
              onSearchBus={handleSearchBus}
              onOpenBookingModal={handleOpenBooking}
            />

            {/* 2. Home Overview Sections */}
            <HomeOverviewSection
              setActivePage={setActivePage}
              onOpenBookingModal={handleOpenBooking}
              packagesList={packagesList}
            />

            {/* 3. Passenger Reviews Running Marquee Ticker (Home Page Only) */}
            <CustomerReviewsMarquee />
          </>
        )}

        {activePage === 'about' && (
          <AboutUsPage
            onOpenEnquiry={() => handleOpenBooking('About Us Bus Query')}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'destinations' && (
          <DestinationsPage
            onSelectDestination={(dest) => {
              handleOpenBooking(`${dest.from} to ${dest.to} Bus Ticket`);
            }}
          />
        )}

        {activePage === 'packages' && (
          <TourPackagesPage
            onViewPackageDetails={(pkg) => handleOpenBooking(pkg.name)}
            onOpenEnquiry={(pkgName) => handleOpenBooking(pkgName)}
            packagesList={packagesList}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage onAddEnquiry={handleAddEnquiry} />
        )}

        {activePage === 'admin' && (
          <AdminPage
            enquiries={enquiries}
            onUpdateEnquiryStatus={handleUpdateEnquiryStatus}
            onDeleteEnquiry={handleDeleteEnquiry}
            onAddPackage={handleAddPackage}
            onDeletePackage={handleDeletePackage}
            packagesList={packagesList}
          />
        )}
      </main>

      {/* Global Footer (Reduced Size) */}
      <Footer
        setActivePage={setActivePage}
        onOpenEnquiry={() => handleOpenBooking('Footer Helpline')}
      />

      {/* Floating Bottom-Right WhatsApp & Call Action Buttons */}
      <FloatingContactButtons />

      {/* Interactive Bus Ticket Booking Popup Modal */}
      <BusBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialRoute={bookingInitialRoute}
        initialStartDate={bookingInitialStartDate}
        initialEndDate={bookingInitialEndDate}
        onAddEnquiry={handleAddEnquiry}
      />

    </div>
  );
}

export default App;
