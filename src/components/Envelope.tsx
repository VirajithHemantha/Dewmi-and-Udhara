import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FloatingPetals } from './FloatingPetals';
import { Heart } from 'lucide-react';
import { useIsMobile, usePrefersReducedMotion } from '../hooks/useMobile';

interface EnvelopeProps {
  onComplete: () => void;
  onOpen?: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onComplete, onOpen }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  const handleOpen = useCallback(() => {
    if (isOpened) return;
    setIsOpened(true);
    onOpen?.();

    const doneDelay = reducedMotion ? 800 : isMobile ? 2500 : 4500;
    const completeDelay = reducedMotion ? 300 : 800;

    setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, completeDelay);
    }, doneDelay);
  }, [isOpened, onOpen, onComplete, isMobile, reducedMotion]);

  const entranceDuration = reducedMotion ? 0.4 : isMobile ? 0.8 : 1.5;
  const sealDelay = reducedMotion ? 0 : isMobile ? 0.5 : 1.5;

  const searchParams = new URLSearchParams(window.location.search);
  const prefix = searchParams.get('prefix');
  const name = searchParams.get('name');
  const guestName = (prefix && name) ? `${prefix} ${name}` : null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden touch-manipulation"
          exit={{ opacity: 0, scale: reducedMotion ? 1 : 1.05 }}
          transition={{ duration: reducedMotion ? 0.4 : 1, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/images/ChatGPT Image Jul 10, 2026, 03_31_19 AM.png"
              alt="Envelope Background"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>

          {!isMobile && <FloatingPetals />}

          <AnimatePresence>
            {!isOpened && guestName && (
              <motion.div
                className="absolute top-[8%] sm:top-[12%] left-0 right-0 text-center z-50 pointer-events-none px-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                <p className="text-stone-800 font-serif text-lg sm:text-2xl italic mb-2 sm:mb-4 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                  We cordially invite
                </p>
                <h1 className="text-[#D4AF37] font-script text-5xl sm:text-7xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] [text-shadow:0_0_20px_rgba(212,175,55,0.4)]">
                  {guestName}
                </h1>
              </motion.div>
            )}
          </AnimatePresence>

          {!isMobile && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"
              animate={isOpened ? { scale: 1.8, opacity: 0.1 } : { scale: 1, opacity: 0.4 }}
              transition={{ duration: 3 }}
            />
          )}

          {/* Envelope wrapper — seal lives OUTSIDE the 3D perspective context for iOS touch */}
          <div className="relative w-[min(340px,90vw)] h-[min(240px,62vw)] sm:w-[580px] sm:h-[400px]">
            <motion.div
              className="absolute inset-0 perspective-1500"
              initial={{ scale: 0.85, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: entranceDuration, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 bg-[#ffffff] shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden">
                <div className="absolute inset-2 border-[1.5px] border-[#d4af37]/40 rounded-lg pointer-events-none" />
                <div className="absolute inset-3 border border-[#d4af37]/20 rounded-lg pointer-events-none" />
              </div>

              <motion.div
                className="absolute left-3 right-3 sm:left-5 sm:right-5 top-6 sm:top-8 bottom-2 bg-gradient-to-b from-[#f8f9fb] to-[#eef2f7] shadow-[0_0_50px_rgba(0,0,0,0.2)] rounded-t-[4rem] sm:rounded-t-[6rem] flex flex-col items-center justify-start pt-6 sm:pt-10 text-center z-10 overflow-hidden border-t-[4px] sm:border-t-[6px] border-x-[4px] sm:border-x-[6px] border-[#cccccc]/30"
                initial={{ y: '0%' }}
                animate={isOpened ? { y: '-88%', zIndex: 40, rotate: -1 } : {}}
                transition={{
                  delay: reducedMotion ? 0.2 : isMobile ? 0.8 : 1.5,
                  duration: reducedMotion ? 0.6 : isMobile ? 1.5 : 2.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="absolute inset-2 border-[1.5px] border-[#cccccc]/60 rounded-t-[3.5rem] sm:rounded-t-[5.5rem] pointer-events-none" />
                <div className="absolute inset-3 border-[1px] border-[#666666]/20 rounded-t-[3.2rem] sm:rounded-t-[5.2rem] pointer-events-none" />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isOpened ? { opacity: 1 } : {}}
                  transition={{ delay: reducedMotion ? 0.3 : isMobile ? 1.2 : 2.8, duration: 1 }}
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
              </motion.div>

              <motion.div
                className="absolute top-0 left-0 w-full h-[65%] z-30 origin-top pointer-events-none"
                initial={{ rotateX: 0 }}
                animate={isOpened ? { rotateX: 180, zIndex: 0 } : {}}
                transition={{
                  delay: reducedMotion ? 0.1 : isMobile ? 0.3 : 0.6,
                  duration: reducedMotion ? 0.4 : 1.5,
                  ease: [0.45, 0, 0.15, 1],
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="absolute inset-0 drop-shadow-[0_5px_15px_rgba(0,0,0,0.08)]"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="w-full h-full bg-[#fdfdfd] overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}>
                    <div className="absolute bottom-0 left-0 w-full h-full border-b-[2px] border-r-[2px] border-[#d4af37]/80 transform rotate-45 translate-y-[50%] scale-[1.42]" />
                  </div>
                </div>
                <div
                  className="absolute inset-0"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-[#f0f0f0] to-[#ffffff] border-t-2 border-[#e5e5e5]" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
                </div>
              </motion.div>

              <div className="absolute inset-0 z-20 pointer-events-none rounded-b-xl overflow-hidden">
                <div className="absolute inset-0">
                  <div className="w-full h-full bg-[#f8f8f8]" style={{ clipPath: 'polygon(0 0, 55% 50%, 0 100%)' }} />
                </div>
                <div className="absolute inset-0">
                  <div className="w-full h-full bg-[#f8f8f8]" style={{ clipPath: 'polygon(100% 0, 45% 50%, 100% 100%)' }} />
                </div>
                <div className="absolute inset-0">
                  <div className="w-full h-full bg-[#fcfcfc]" style={{ clipPath: 'polygon(0 100%, 50% 45%, 100% 100%)' }} />
                </div>
              </div>

              <motion.div
                className="absolute top-[50%] -translate-y-1/2 left-[-2%] w-[104%] h-[12%] bg-gradient-to-r from-[#d4af37] via-[#fdf5cc] to-[#d4af37] z-25 pointer-events-none shadow-[0_5px_15px_rgba(0,0,0,0.1)] border-y-[1.5px] border-[#fde592]/50"
                initial={{ opacity: 1 }}
                animate={isOpened ? { opacity: 0, scale: 1.05 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </motion.div>

            {/* Wax seal — outside 3D perspective so iOS Safari registers taps */}
            <AnimatePresence>
              {!isOpened && (
                <motion.button
                  type="button"
                  onClick={handleOpen}
                  aria-label="Open invitation"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-32 h-32 sm:w-36 sm:h-36 rounded-full flex items-center justify-center cursor-pointer touch-manipulation select-none"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  whileTap={{ scale: 0.92 }}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 1.3, opacity: 0 }}
                  transition={{
                    scale: { type: 'spring', stiffness: 200, damping: 18, delay: sealDelay },
                    rotate: { type: 'spring', stiffness: 200, damping: 18, delay: sealDelay },
                    exit: { duration: 0.4, ease: 'easeIn' },
                  }}
                >
                  <img
                    src="/images/du_wax_seal.png"
                    alt="Tap to open"
                    className="w-28 h-28 sm:w-32 sm:h-32 object-cover pointer-events-none"
                    draggable={false}
                  />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {!isOpened && (
            <motion.p
              className="absolute bottom-10 left-0 right-0 text-center text-white/80 text-sm font-serif tracking-widest pointer-events-none sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: sealDelay + 0.5 }}
            >
              Tap the seal to open
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
