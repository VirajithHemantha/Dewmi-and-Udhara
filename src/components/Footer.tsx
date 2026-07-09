import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-ivory border-t border-brand-gold/30 pt-24 pb-12 text-center relative overflow-hidden">

      {/* Soft gradient bottom edge glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-gold/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Elegant Framed Photo */}
        <div className="relative w-full max-w-xl mx-auto mb-16 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(212,175,55,0.15)] border-[8px] sm:border-[12px] border-white group">
          <img src="/images/6.jpeg" alt="Dewmi & Udhara" className="w-full h-auto object-contain transform transition-transform duration-[4s] ease-out group-hover:scale-105" />
          {/* Inner shadow for depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.15)] pointer-events-none" />
        </div>

        {/* Eye-catching Animated Spinning Seal */}
        <div className="relative w-48 h-48 mx-auto mb-16 group cursor-pointer flex items-center justify-center">

          {/* Animated decorative rings */}
          <div className="absolute inset-0 rounded-full border border-brand-gold/40 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border-[1.5px] border-dashed border-brand-gold/60 animate-[spin_25s_linear_infinite_reverse]" />

          {/* SVG Spinning Typographic Ring */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_30s_linear_infinite] opacity-80 group-hover:opacity-100 transition-opacity duration-700">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text>
              <textPath href="#circlePath" className="text-[7.5px] uppercase tracking-[0.18em] fill-brand-gold-deep font-sans font-bold">
                DEWMI & UDHARA • FOREVER AND ALWAYS • 
              </textPath>
            </text>
          </svg>

          {/* Central Logo Disk */}
          <div className="absolute inset-[2.75rem] bg-white rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.15)] flex flex-col items-center justify-center border-[4px] sm:border-[5px] border-brand-gold/30 group-hover:scale-110 group-hover:border-brand-gold/60 transition-all duration-700 ease-out z-10">
            <Heart className="w-4 h-4 text-brand-gold mb-0.5 fill-brand-gold/20 animate-pulse" />
            <span className="font-display text-3xl text-brand-gold-deep drop-shadow-sm leading-none tracking-tighter mt-0.5">D<span className="text-lg font-serif italic mx-0.5 text-brand-gold/70">&</span>U</span>
          </div>

          {/* Interactive ambient hover glow */}
          <div className="absolute inset-0 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-gold/20 transition-colors duration-700 -z-10" />
        </div>

        <h2 className="text-4xl sm:text-5xl font-display text-stone-800 mb-6 tracking-tight drop-shadow-sm">Dewmi & Udhara</h2>
        <p className="text-stone-500 font-serif italic text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-16">
          "A journey of a thousand miles begins with a single step, and we're so incredibly happy to take it together."
        </p>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent mb-12" />



        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-[10px] sm:text-xs text-stone-400 font-bold uppercase tracking-[0.3em]">
            With all our love 💕
          </div>
          <div className="text-[9px] text-stone-300 tracking-widest uppercase font-medium">
            © 2026 Dewmi & Udhara Wedding
          </div>
        </div>
      </div>
    </footer>
  );
};
