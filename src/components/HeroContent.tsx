import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { CornerFlowers } from './CornerFlowers';

export const HeroContent: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const prefix = searchParams.get('prefix');
  const name = searchParams.get('name');
  
  const invitationText = (prefix && name)
    ? `We cordially invite ${prefix} ${name}`
    : `Together with our families, we joyfully invite you to join us`;

  return (
    <section className="relative min-h-screen pt-12 pb-24 sm:py-32 flex items-start sm:items-center justify-center overflow-hidden">
      <CornerFlowers position="top-right" opacity={0.8} scale={1.5} />
      <CornerFlowers position="bottom-left" opacity={0.8} scale={1.5} />
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 bg-brand-ivory overflow-hidden">
        <img
          src="/images/2.jpeg"
          alt="Dewmi and Udhara"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Soft wash to make text readable but keep image colors */}
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/30" />
        
        {/* Gold particles effect */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-color-dodge" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center w-full"
        >
          {/* Subtle top decoration with Gold Heart */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-l from-[#D4AF37] to-transparent opacity-80" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FDF5E6] via-[#D4AF37] to-[#8A6811] flex items-center justify-center shadow-[0_2px_10px_rgba(212,175,55,0.5)]">
              <Heart className="w-4 h-4 text-white fill-white drop-shadow-sm" />
            </div>
            <div className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-r from-[#D4AF37] to-transparent opacity-80" />
          </div>

          <span className="text-[#D4AF37] uppercase tracking-[0.4em] sm:tracking-[0.6em] text-[10px] sm:text-xs font-bold mb-4 block font-sans">
            The Celebration of Love
          </span>

          {/* Ornate Divider under text */}
          <div className="flex items-center justify-center gap-2 mb-24 sm:mb-32">
            <div className="h-[1.5px] w-10 sm:w-16 bg-gradient-to-l from-[#D4AF37] to-transparent opacity-80" />
            <div className="w-4 h-4 rotate-45 border-2 border-[#D4AF37] opacity-80 flex items-center justify-center">
               <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
            </div>
            <div className="h-[1.5px] w-10 sm:w-16 bg-gradient-to-r from-[#D4AF37] to-transparent opacity-80" />
          </div>

          {/* Stacked Names */}
          <div className="relative mb-12 w-full flex flex-col items-center justify-center gap-2 sm:gap-4">
            <h1 className="py-4 text-[5rem] sm:text-[7rem] lg:text-[9rem] font-script tracking-wide leading-[1.2] text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] via-[#D4AF37] to-[#8A6811] drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] [text-shadow:0_0_20px_rgba(212,175,55,0.5)]">
              Dewmi
            </h1>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] via-[#D4AF37] to-[#8A6811] font-serif italic font-light text-5xl sm:text-6xl lg:text-[7rem] drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)] [text-shadow:0_0_30px_rgba(212,175,55,0.6),2px_2px_3px_rgba(255,255,255,0.3)] leading-[1.2] px-4 -my-8 sm:-my-12 z-10 py-4">
              &
            </span>
            <h1 className="py-4 text-[5rem] sm:text-[7rem] lg:text-[9rem] font-script tracking-wide leading-[1.2] text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] via-[#D4AF37] to-[#8A6811] drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] [text-shadow:0_0_20px_rgba(212,175,55,0.5)]">
              Udhara
            </h1>
          </div>

          <p className="text-xl sm:text-3xl font-serif italic text-[#e6d089] tracking-wide px-4 text-center max-w-2xl leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:0_2px_4px_rgba(0,0,0,1)] font-medium mb-12">
            {invitationText}
          </p>

          {/* Enhanced Date pill with vintage gold frame effect */}
          <div className="inline-block relative group mt-20 sm:mt-28">
            <div className="relative px-8 sm:px-16 py-4 sm:py-5 bg-gradient-to-br from-[#ffffff] to-[#f4ebd0] rounded-[2rem] border-2 border-[#D4AF37] shadow-[0_15px_40px_rgba(0,0,0,0.4)] flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-wall-3-o.png')] opacity-30 mix-blend-overlay" />
               <div className="absolute inset-[6px] border border-[#D4AF37]/50 rounded-[1.6rem] pointer-events-none" />
               
               {/* Decorative corners inside the pill */}
               <div className="absolute top-2 left-2 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-[#D4AF37] rounded-tl-md pointer-events-none" />
               <div className="absolute top-2 right-2 w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-[#D4AF37] rounded-tr-md pointer-events-none" />
               <div className="absolute bottom-2 left-2 w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-[#D4AF37] rounded-bl-md pointer-events-none" />
               <div className="absolute bottom-2 right-2 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-[#D4AF37] rounded-br-md pointer-events-none" />

               <span className="relative z-10 text-xl sm:text-3xl font-serif text-[#8A6811] tracking-[0.2em] sm:tracking-[0.3em] font-bold drop-shadow-sm flex items-center gap-3 sm:gap-5 whitespace-nowrap pt-1">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                03 . 09 . 2026
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
