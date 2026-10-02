import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, ShieldCheck } from 'lucide-react';
import { CLIENT_BUS_INFO } from '../data/busData';

const BusVideoShowcase = ({ onOpenBookingModal }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-6 sm:py-8 bg-gradient-to-b from-[#FAF9F5] to-white relative overflow-hidden text-[#1E293B]">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-pattern-grid pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-amber-100 text-[#800000] border border-amber-300 text-[11px] font-extrabold uppercase tracking-widest inline-block shadow-xs">
            VIRTUAL VIDEO TOUR
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight">
            Experience Our <span className="text-[#800000] italic">Luxury Bus Journey</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm font-medium">
            Watch the video to experience the comfort of our air-suspended Volvo AC sleeper berths, highway safety, and 24/7 passenger care.
          </p>
        </div>

        {/* Compact Video Player Box - Matches Section Card Sizing */}
        <div className="relative max-w-xl sm:max-w-2xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-amber-300 shadow-xl bg-slate-950 aspect-video group">
          
          <video
            ref={videoRef}
            src="/hero-bus-video.mp4"
            poster="/hero-bus.jpg"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

          {/* Top Video Badging */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center space-x-2 z-10">
            <span className="px-3 py-1 rounded-full bg-[#800000] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Volvo AC Sleeper Video</span>
            </span>
          </div>

          {/* Video Control Action Buttons */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 sm:right-6 right-4 flex items-center justify-between z-10">
            
            <div className="text-white space-y-0.5 max-w-md hidden sm:block">
              <h4 className="font-serif text-lg sm:text-xl font-extrabold text-white drop-shadow">
                {CLIENT_BUS_INFO.name} Highway Express
              </h4>
              <p className="text-xs text-amber-200 font-semibold drop-shadow">
                Punctual outstation journeys connecting Coimbatore, Chennai & Bangalore.
              </p>
            </div>

            <div className="flex items-center space-x-3 ml-auto">
              {/* Play / Pause Toggle Button */}
              <button
                onClick={togglePlay}
                className="p-3 sm:p-3.5 rounded-full bg-white/90 hover:bg-white text-[#800000] shadow-lg transition-all hover:scale-110"
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-[#800000]" /> : <Play className="w-5 h-5 fill-[#800000] ml-0.5" />}
              </button>

              {/* Mute / Unmute Toggle Button */}
              <button
                onClick={toggleMute}
                className="p-3 sm:p-3.5 rounded-full bg-white/90 hover:bg-white text-[#800000] shadow-lg transition-all hover:scale-110"
                aria-label={isMuted ? "Unmute Video" : "Mute Video"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>

          </div>

        </div>

        {/* Mobile Quick Booking CTA Below Video */}
        <div className="text-center pt-2">
          <button
            onClick={() => onOpenBookingModal("Luxury Volvo Bus Ticket")}
            className="px-8 py-3.5 bg-gradient-maroon-gold text-white font-extrabold rounded-2xl shadow-glow-maroon hover:scale-105 transition-all text-xs inline-flex items-center space-x-2"
          >
            <ShieldCheck className="w-4 h-4 text-[#FBBF24]" />
            <span>Book Your Luxury Bus Ticket Now</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default BusVideoShowcase;
