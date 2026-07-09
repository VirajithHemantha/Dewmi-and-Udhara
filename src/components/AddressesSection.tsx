import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export const AddressesSection: React.FC = () => {
  
  const handleGetDirections = (url: string) => {
    window.open(url, '_blank');
  };

  const addressesData = {
    poruwa: {
      title: 'Poruwa & Reception',
      name: 'Grandeeza',
      address: 'Negombo',
      url: 'https://maps.app.goo.gl/6eXKkdxZxEyrx8rF6'
    }
  };

  return (
    <div className="w-full flex justify-center py-16 sm:py-32 bg-brand-ivory relative overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-gold/10 to-transparent rounded-tl-full" />

      <div className="w-full max-w-4xl px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full bg-white/70 backdrop-blur-xl border border-brand-gold/30 shadow-[0_20px_50px_rgba(212,175,55,0.1)] rounded-[3rem] p-10 sm:p-16 flex flex-col items-center relative overflow-hidden group"
        >
          {/* Subtle background image watermark */}
          <div className="absolute inset-0 z-0 opacity-20 transition-transform duration-1000 group-hover:scale-105 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800"
              alt="Mansion Dining Room Backdrop"
              className="w-full h-full object-cover filter mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Light gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90 z-0 pointer-events-none" />

          {/* Top Decorative Line */}
          <div className="z-10 flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-brand-gold/60" />
            <div className="w-2 h-2 rotate-45 bg-brand-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-brand-gold/60" />
          </div>

          {/* Section Heading */}
          <div className="text-center mb-12 z-10 relative">
            <h2 className="font-display font-medium text-4xl sm:text-5xl text-stone-800 tracking-[0.15em] uppercase drop-shadow-sm mb-2">
              The Venue
            </h2>
            <p className="font-serif italic text-stone-500 text-lg sm:text-xl">
              Where our forever begins
            </p>
          </div>

          {/* Addresses list with delicate sparkles and elegant diamond line connectors */}
          <div className="w-full px-4 sm:px-12 max-w-2xl space-y-8 z-10 relative">
            
            {/* Item 1: Poruwa */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex gap-6 relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-brand-gold rotate-45 flex-shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
              </div>
              
              <div className="text-left flex-1 -mt-2 pb-2">
                <span className="font-serif italic text-2xl text-brand-gold font-medium block mb-1">
                  {addressesData.poruwa.title}
                </span>
                <strong className="font-display text-xl block text-stone-800 tracking-wide font-medium">
                  {addressesData.poruwa.name}
                </strong>
                <p className="font-sans text-sm leading-relaxed text-stone-500 mt-2 font-light uppercase tracking-widest">
                  {addressesData.poruwa.address}
                </p>
                
                <button
                  onClick={() => handleGetDirections(addressesData.poruwa.url)}
                  className="mt-6 flex items-center gap-2 px-6 py-2 rounded-full border border-brand-gold/40 text-[10px] uppercase font-sans tracking-[0.2em] text-stone-600 hover:text-brand-gold hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300 font-semibold cursor-pointer group/btn"
                >
                  <Navigation className="w-3.5 h-3.5 text-brand-gold transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  Get Directions
                </button>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};
