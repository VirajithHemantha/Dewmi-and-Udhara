import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, Heart, Sparkles, MapPin, Crown, Utensils, Music, Car } from 'lucide-react';

export const PoruwaEvent: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-poruwa-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-radial from-poruwa-light/30 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >


              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display text-brand-gold mb-8 leading-[1.1] drop-shadow-sm">
                Poruwa & <span className="italic font-light">Reception</span>
              </h2>

              <p className="text-stone-500/90 font-serif text-lg sm:text-xl leading-relaxed mb-16 max-w-lg">
                A celebration of tradition and love. Join us for a beautiful afternoon ceremony followed by an evening of dining and dancing.
              </p>

              <div className="relative space-y-10 ml-10 sm:ml-12 border-l-[1.5px] border-poruwa-primary/40 pl-10 sm:pl-12 py-4">
                
                {/* Event Location & Date */}
                <div className="relative group">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-poruwa-primary/30 shadow-sm flex items-center justify-center group-hover:border-poruwa-primary transition-all duration-500">
                    <Calendar className="w-5 h-5 text-poruwa-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-1 group-hover:text-poruwa-primary transition-colors duration-500">Thursday, September 3</h4>
                    <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold">Grandeeza, Negombo</p>
                  </div>
                </div>

                {/* Timeline Items */}
                <div className="relative group">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border-2 border-brand-gold/60 shadow-[0_4px_10px_rgba(212,175,55,0.15)] flex items-center justify-center transform group-hover:scale-110 group-hover:border-brand-gold transition-all duration-500 overflow-hidden">
                    <img src="/icons/poruwa.png" alt="Poruwa" className="w-7 h-7 object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-stone-800 mb-1 group-hover:text-brand-gold transition-colors duration-500">Poruwa ceremony</h4>
                    <p className="text-stone-500/80 text-[11px] sm:text-[13px] uppercase tracking-[0.1em] font-bold">5.00pm</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border-2 border-brand-gold/60 shadow-[0_4px_10px_rgba(212,175,55,0.15)] flex items-center justify-center transform group-hover:scale-110 group-hover:border-brand-gold transition-all duration-500 overflow-hidden">
                    <img src="/icons/entrance.png" alt="Entrance" className="w-7 h-7 object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-stone-800 mb-1 group-hover:text-brand-gold transition-colors duration-500">Grand Entrance</h4>
                    <p className="text-stone-500/80 text-[11px] sm:text-[13px] uppercase tracking-[0.1em] font-bold">7.00pm</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border-2 border-brand-gold/60 shadow-[0_4px_10px_rgba(212,175,55,0.15)] flex items-center justify-center transform group-hover:scale-110 group-hover:border-brand-gold transition-all duration-500 overflow-hidden">
                    <img src="/icons/buffet.png" alt="Buffet" className="w-7 h-7 object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-stone-800 mb-1 group-hover:text-brand-gold transition-colors duration-500">Buffet Time</h4>
                    <p className="text-stone-500/80 text-[11px] sm:text-[13px] uppercase tracking-[0.1em] font-bold">8.00pm</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border-2 border-brand-gold/60 shadow-[0_4px_10px_rgba(212,175,55,0.15)] flex items-center justify-center transform group-hover:scale-110 group-hover:border-brand-gold transition-all duration-500 overflow-hidden">
                    <img src="/icons/party.png" alt="Party" className="w-7 h-7 object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-stone-800 mb-1 group-hover:text-brand-gold transition-colors duration-500">Lets party</h4>
                    <p className="text-stone-500/80 text-[11px] sm:text-[13px] uppercase tracking-[0.1em] font-bold">9.30pm</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border-2 border-brand-gold/60 shadow-[0_4px_10px_rgba(212,175,55,0.15)] flex items-center justify-center transform group-hover:scale-110 group-hover:border-brand-gold transition-all duration-500 overflow-hidden">
                    <img src="/icons/car.png" alt="Car" className="w-7 h-7 object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-stone-800 mb-1 group-hover:text-brand-gold transition-colors duration-500">Going away</h4>
                    <p className="text-stone-500/80 text-[11px] sm:text-[13px] uppercase tracking-[0.1em] font-bold">11.52 pm</p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full relative mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 sm:-inset-6 border-[2px] border-poruwa-light/60 rounded-[3rem] -z-10 -translate-x-4 sm:-translate-x-8 translate-y-4 sm:translate-y-8" />
              
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[3rem] overflow-hidden border-[6px] sm:border-[8px] border-white shadow-xl bg-poruwa-bg group flex items-center justify-center">
                <img 
                  src="/images/9.jpeg" 
                  alt="Poruwa Ceremony" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-poruwa-primary/20 to-transparent mix-blend-overlay opacity-60 group-hover:opacity-30 transition-opacity duration-1000" />
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
