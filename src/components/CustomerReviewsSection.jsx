import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/travelData';

const CustomerReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentReview = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-cream-soft to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-peach/20 text-coral text-xs font-bold uppercase tracking-wider">
            Traveler Voices
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-charcoal">
            Customer <span className="text-gradient-coral italic">Reviews</span>
          </h2>
          <p className="text-charcoal-light text-base">
            Read real stories from delighted travelers who explored the world with Aura Journeys.
          </p>
        </div>

        {/* Testimonial Slider Container */}
        <div className="relative glass-card p-8 sm:p-14 rounded-[3rem] border border-peach/30 shadow-2xl bg-gradient-to-br from-cream-soft via-white to-peach/10">
          <Quote className="absolute top-8 left-8 w-20 h-20 text-peach/20 pointer-events-none" />

          <div className="relative z-10 min-h-[260px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="font-serif text-lg sm:text-2xl text-charcoal font-medium leading-relaxed italic">
                  "{currentReview.review}"
                </p>

                {/* Customer Info Card */}
                <div className="flex items-center space-x-4 pt-4 border-t border-peach/20">
                  <img
                    src={currentReview.avatar}
                    alt={currentReview.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-coral shadow-md"
                  />
                  <div>
                    <h4 className="font-serif text-lg font-bold text-charcoal">
                      {currentReview.name}
                    </h4>
                    <span className="text-xs text-coral font-semibold flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {currentReview.destination}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex items-center justify-between pt-8">
              {/* Dots */}
              <div className="flex space-x-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentIndex === idx
                        ? 'w-8 bg-coral shadow-glow-coral'
                        : 'w-2.5 bg-peach/40 hover:bg-peach'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-white border border-peach/30 flex items-center justify-center text-charcoal hover:bg-coral hover:text-white transition-all shadow-md"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-white border border-peach/30 flex items-center justify-center text-charcoal hover:bg-coral hover:text-white transition-all shadow-md"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CustomerReviewsSection;
