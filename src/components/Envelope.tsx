import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FloatingPetals } from './FloatingPetals';
import { Heart } from 'lucide-react';

interface EnvelopeProps {
  onComplete: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onComplete }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, 800);
    }, 4500);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(30px)' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Custom Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/ChatGPT Image Jul 10, 2026, 03_31_19 AM.png" 
              alt="Envelope Background" 
              className="w-full h-full object-cover"
            />
          </div>

          <FloatingPetals />

          {/* Majestic Glow Behind Envelope */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px]"
            animate={isOpened ? { scale: 1.8, opacity: 0.1 } : { scale: 1, opacity: 0.4 }}
            transition={{ duration: 3 }}
          />

          <motion.div
            className="relative w-[340px] h-[240px] sm:w-[580px] sm:h-[400px] perspective-1500"
            initial={{ scale: 0.85, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Envelope Back Base (Premium White Texture) */}
            <div className="absolute inset-0 bg-[#ffffff] shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay opacity-[0.05]" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay opacity-10" />
              <div className="absolute inset-2 border-[1.5px] border-[#d4af37]/40 rounded-lg pointer-events-none" />
              <div className="absolute inset-3 border border-[#d4af37]/20 rounded-lg pointer-events-none" />
            </div>

            {/* Pull-out Arched Invitation Card - Modern Sri Lankan Design */}
            <motion.div
              className="absolute left-3 right-3 sm:left-5 sm:right-5 top-6 sm:top-8 bottom-2 bg-gradient-to-b from-[#f8f9fb] to-[#eef2f7] shadow-[0_0_50px_rgba(0,0,0,0.2)] rounded-t-[4rem] sm:rounded-t-[6rem] flex flex-col items-center justify-start pt-6 sm:pt-10 text-center z-10 overflow-hidden border-t-[4px] sm:border-t-[6px] border-x-[4px] sm:border-x-[6px] border-[#cccccc]/30"
              initial={{ y: "0%" }}
              animate={isOpened ? { y: "-88%", zIndex: 40, rotate: -1 } : {}}
              transition={{ delay: 1.5, duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Card Inner Arch Border */}
              <div className="absolute inset-2 border-[1.5px] border-[#cccccc]/60 rounded-t-[3.5rem] sm:rounded-t-[5.5rem] pointer-events-none" />
              <div className="absolute inset-3 border-[1px] border-[#666666]/20 rounded-t-[3.2rem] sm:rounded-t-[5.2rem] pointer-events-none" />

              {/* Kandyan border removed */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={isOpened ? { opacity: 1 } : {}}
                transition={{ delay: 2.8, duration: 1.5 }}
                className="relative z-10 w-full px-4 flex flex-col items-center h-full"
              >
                <div className="w-12 h-12 sm:w-20 sm:h-20 mb-3 sm:mb-4 flex items-center justify-center mix-blend-multiply opacity-90 drop-shadow-sm border border-brand-gold/20 rounded-full">
                  <Heart className="w-6 h-6 text-brand-gold-deep" />
                </div>

                <h2 className="text-3xl sm:text-5xl font-script text-brand-gold tracking-wide leading-[1.1] mb-2 sm:mb-3 drop-shadow-sm">
                  Dewmi <br />
                  <span className="text-xl sm:text-3xl text-brand-gold-light italic font-light my-1 block font-serif">&</span>
                  Udhara
                </h2>

                <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#cccccc] to-transparent mx-auto my-3 sm:my-5" />

                <p className="text-[8px] sm:text-[11px] font-sans tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[#5c6b8a] mb-2 sm:mb-3 font-bold leading-none">
                  Request the honor of your presence
                </p>
                <p className="text-base sm:text-2xl font-serif text-[#4a5770] tracking-[0.2em] mt-1 drop-shadow-sm leading-none font-semibold">
                  20 • 08 • 2026
                </p>
              </motion.div>

              {/* Subtle temple mural watermark inside */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#cccccc]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-4 opacity-10 w-full h-16 mix-blend-multiply" />
            </motion.div>

            {/* Envelope Flap (Top) */}
            <motion.div
              className="absolute top-0 left-0 w-full h-[65%] z-30 origin-top pointer-events-none"
              initial={{ rotateX: 0 }}
              animate={isOpened ? { rotateX: 180, zIndex: 0 } : {}}
              transition={{ delay: 0.6, duration: 1.5, ease: [0.45, 0, 0.15, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front of Flap */}
              <div
                className="absolute inset-0 drop-shadow-[0_5px_15px_rgba(0,0,0,0.08)]"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="w-full h-full bg-[#fdfdfd] overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay opacity-20" />
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] mix-blend-overlay opacity-[0.03]" />
                  {/* Gold edge trim on flap */}
                  <div className="absolute bottom-0 left-0 w-full h-full border-b-[2px] border-r-[2px] border-[#d4af37]/80 transform rotate-45 translate-y-[50%] scale-[1.42] shadow-[0_0_10px_rgba(212,175,55,0.2)]" />
                  <div className="absolute bottom-0 left-0 w-full h-full border-b-[1px] border-r-[1px] border-[#d4af37]/30 transform rotate-45 translate-y-[50%] scale-[1.42] mt-1 ml-1" />
                </div>
              </div>

              {/* Inside of Flap (Luxury White / Gold Lining) */}
              <div
                className="absolute inset-0"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="w-full h-full bg-gradient-to-t from-[#f0f0f0] to-[#ffffff] border-t-2 border-[#e5e5e5]" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] mix-blend-overlay opacity-40" />
                  {/* Inner Trim */}
                  <div className="absolute bottom-0 left-0 w-full h-full border-b-[2px] border-r-[2px] border-[#d4af37]/30 transform rotate-45 translate-y-[50%] scale-[1.42]" />
                </div>
              </div>
            </motion.div>

            {/* Envelope Front Folds */}
            <div className="absolute inset-0 z-20 pointer-events-none rounded-b-xl overflow-hidden">
              {/* Left Fold */}
              <div className="absolute inset-0 drop-shadow-[5px_0_10px_rgba(0,0,0,0.05)] pointer-events-none">
                <div className="w-full h-full bg-[#f8f8f8]" style={{ clipPath: 'polygon(0 0, 55% 50%, 0 100%)' }}>
                   <div className="absolute inset-0 bg-[#f8f8f8] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay opacity-20 w-full h-full" style={{ clipPath: 'polygon(0 0, 55% 50%, 0 100%)' }} />
                   <div className="absolute top-0 right-0 w-full h-full border-t-[1px] border-l-[1px] border-[#d4af37]/40 transform rotate-45 translate-x-[50%] translate-y-[15%] scale-[1.5]" />
                </div>
              </div>

              {/* Right Fold */}
              <div className="absolute inset-0 drop-shadow-[-5px_0_10px_rgba(0,0,0,0.05)] pointer-events-none">
                <div className="w-full h-full bg-[#f8f8f8]" style={{ clipPath: 'polygon(100% 0, 45% 50%, 100% 100%)' }}>
                   <div className="absolute inset-0 bg-[#f8f8f8] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay opacity-20 w-full h-full" style={{ clipPath: 'polygon(100% 0, 45% 50%, 100% 100%)' }} />
                   <div className="absolute top-0 left-0 w-full h-full border-t-[1px] border-r-[1px] border-[#d4af37]/40 transform -rotate-45 -translate-x-[50%] translate-y-[15%] scale-[1.5]" />
                </div>
              </div>

              {/* Bottom Fold */}
              <div className="absolute inset-0 drop-shadow-[0_-5px_15px_rgba(0,0,0,0.08)] pointer-events-none">
                <div className="w-full h-full bg-[#fcfcfc]" style={{ clipPath: 'polygon(0 100%, 50% 45%, 100% 100%)' }}>
                   <div className="absolute inset-0 bg-[#fcfcfc] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay opacity-20 w-full h-full" style={{ clipPath: 'polygon(0 100%, 50% 45%, 100% 100%)' }} />
                   <div className="absolute top-0 left-0 w-full h-full border-t-[2px] border-l-[2px] border-[#d4af37]/60 transform rotate-45 -translate-y-[48%] scale-[1.42]" />
                </div>
              </div>
            </div>

            {/* Traditional Ornamental Band/Wrap - Gold Metallic */}
            <motion.div
              className="absolute top-[50%] -translate-y-1/2 left-[-2%] w-[104%] h-[12%] bg-gradient-to-r from-[#d4af37] via-[#fdf5cc] to-[#d4af37] z-25 pointer-events-none shadow-[0_5px_15px_rgba(0,0,0,0.1)] border-y-[1.5px] border-[#fde592]/50 flex items-center justify-center overflow-hidden"
              initial={{ opacity: 1 }}
              animate={isOpened ? { opacity: 0, scale: 1.05 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="absolute inset-0 opacity-20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] mix-blend-overlay opacity-50" />
            </motion.div>

            {/* 3D Cinematic Wax Seal - Deep Rose & Gold */}
            <AnimatePresence>
              {!isOpened && (
                <motion.button
                  onClick={handleOpen}
                  className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center cursor-pointer group pointer-events-auto shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 1.5, opacity: 0, filter: 'blur(10px)' }}
                  transition={{
                    scale: { type: 'spring', stiffness: 150, damping: 15, delay: 1.5 },
                    rotate: { type: 'spring', stiffness: 150, damping: 15, delay: 1.5 },
                    exit: { duration: 0.5, ease: "easeIn" }
                  }}
                >
                  {/* Generated Wax Seal Image */}
                  <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.15)] bg-transparent flex items-center justify-center">
                    <img
                      src="/images/du_wax_seal.png"
                      alt="DU Wax Seal"
                      className="w-full h-full object-cover scale-[1.05]"
                    />
                  </div>
                  
                  {/* Outer subtle glow/ring to blend with the envelope */}
                  <div className="absolute inset-0 rounded-full border border-brand-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.1)] pointer-events-none" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Helper Text removed per user request */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
