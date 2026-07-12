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



        <div className="text-center mb-6">
          <h2 className="text-4xl sm:text-5xl font-display text-stone-800 mb-4 tracking-tight drop-shadow-sm">Dewmi & Udhara</h2>
          <div className="text-xs sm:text-sm tracking-[0.4em] text-brand-gold-deep uppercase font-bold flex items-center justify-center gap-3">
            <span>Forever and Always</span>
          </div>
        </div>
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
