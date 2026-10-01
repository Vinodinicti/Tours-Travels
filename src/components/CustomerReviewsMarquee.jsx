import React from 'react';
import { Star, Quote, MessageSquare, CheckCircle2 } from 'lucide-react';

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Ramesh Kumar & Family',
    location: 'Coimbatore Hub',
    rating: 5,
    tour: 'Navagraha & Temple Tour',
    comment: 'We booked the 3-day Navagraha temple tour from Coimbatore. The Golden Volvo AC coach was exceptionally clean and comfortable for elders. Driver was very polite and punctual!',
    avatarBg: 'bg-[#800000] text-white',
    initials: 'RK'
  },
  {
    id: 2,
    name: 'Anitha Sundaram',
    location: 'Chennai Central',
    rating: 5,
    tour: 'Velankanni & Pondicherry Express',
    comment: 'Travelled on Sri Saranya Travels sleeper coach to Velankanni. Smooth air-suspension ride, live WhatsApp tracking, and safe night driving. 10/10 recommended for pilgrims!',
    avatarBg: 'bg-[#F59E0B] text-slate-950',
    initials: 'AS'
  },
  {
    id: 3,
    name: 'Dr. K. Vijayaraghavan',
    location: 'Bangalore Boarding',
    rating: 5,
    tour: 'Coimbatore ⇄ Bangalore Route',
    comment: 'Outstanding punctuality! Berth curtains, USB charging, and sanitized blankets made our interstate journey completely hassle-free.',
    avatarBg: 'bg-[#800000] text-white',
    initials: 'KV'
  },
  {
    id: 4,
    name: 'Senthil Nathan',
    location: 'Madurai Hub',
    rating: 5,
    tour: 'Chettinad Heritage Package',
    comment: 'Very professional tour leaders. Chettinad Palace visit was well organized and the bus arrived right on schedule at every stop.',
    avatarBg: 'bg-[#D97706] text-white',
    initials: 'SN'
  },
  {
    id: 5,
    name: 'Meenakshi & Friends',
    location: 'Salem Hub',
    rating: 5,
    tour: 'Ooty Hill Station Special',
    comment: 'Extremely safe driving up the Nilgiri hills! Recliner seats were so comfortable and 24/7 helpline support was very responsive.',
    avatarBg: 'bg-[#800000] text-white',
    initials: 'MF'
  },
  {
    id: 6,
    name: 'Ganesh Perumal',
    location: 'Tirunelveli',
    rating: 5,
    tour: 'Thiruchendur Pilgrimage Special',
    comment: 'Best luxury bus service in Tamil Nadu. Reasonable per-day tariff, neat berths, and courteous team. Will definitely book again!',
    avatarBg: 'bg-[#F59E0B] text-slate-950',
    initials: 'GP'
  }
];

const CustomerReviewsMarquee = () => {
  // Duplicate array for infinite seamless ticker loop
  const marqueeItems = [...REVIEWS_DATA, ...REVIEWS_DATA];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#FFFBF5] to-white relative overflow-hidden border-t border-slate-200 text-[#1E293B]">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-pattern-grid pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 text-center space-y-3">
        <span className="px-4 py-1.5 rounded-full bg-amber-100 text-[#800000] border border-amber-300 text-xs font-extrabold uppercase tracking-wider inline-block shadow-xs">
          💬 Passenger Testimonials
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1E293B] tracking-tight">
          What Our <span className="text-[#800000] italic">Pilgrims & Tourists Say</span>
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
          Over 50,000+ satisfied passengers travel across Tamil Nadu & South India with Sri Saranya Travels every year.
        </p>
      </div>

      {/* Running Marquee Carousel Container */}
      <div className="relative w-full overflow-hidden py-4 group">
        
        {/* Left & Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Running Ticker Track */}
        <div className="flex space-x-6 animate-marquee group-hover:[animation-play-state:paused] w-max">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[300px] sm:w-[380px] bg-white rounded-3xl p-6 border-2 border-amber-200/80 shadow-md hover:shadow-xl hover:border-[#800000] transition-all flex flex-col justify-between shrink-0 space-y-4"
            >
              <div className="space-y-3">
                {/* Header: Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-300" />
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Passenger Info & Tour Tag */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-9 h-9 rounded-full ${item.avatarBg} font-extrabold text-xs flex items-center justify-center shadow-xs shrink-0`}>
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-extrabold text-[#1E293B] flex items-center gap-1">
                      <span>{item.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    </h4>
                    <span className="text-[10px] font-bold text-gray-400 block">{item.location}</span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-amber-50 text-[#800000] text-[10px] font-extrabold border border-amber-200 shrink-0">
                  {item.tour}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default CustomerReviewsMarquee;
