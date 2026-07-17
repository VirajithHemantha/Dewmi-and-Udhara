import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useIsMobile, usePrefersReducedMotion } from '../hooks/useMobile';

interface ConfettiParticle {
  id: number;
  x: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  color: string;
  drift: number;
  shape: 'circle' | 'rect' | 'tall-rect';
}

export const FloatingPetals: React.FC = () => {
  const [particles, setParticles] = useState<ConfettiParticle[]>([]);
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const colors = ['#D4AF37', '#F3E5AB', '#B8860B', '#FDE592', '#8A6811'];
    const shapes: ('circle' | 'rect' | 'tall-rect')[] = ['circle', 'rect', 'tall-rect'];
    const count = isMobile ? 12 : 40;

    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 5 + 5,
      rotation: Math.random() * 360,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      drift: Math.random() * 30 - 15,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));
    setParticles(newParticles);
  }, [isMobile, reducedMotion]);

  if (reducedMotion || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]" aria-hidden="true">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute will-change-transform"
          style={{
            backgroundColor: particle.color,
            width: `${particle.size}px`,
            height: particle.shape === 'tall-rect' ? `${particle.size * 1.5}px` : `${particle.size}px`,
            borderRadius: particle.shape === 'circle' ? '50%' : '2px',
          }}
          initial={{
            x: `${particle.x}vw`,
            y: '-10vh',
            rotate: particle.rotation,
            opacity: 0,
          }}
          animate={{
            y: '110vh',
            x: `${particle.x + particle.drift}vw`,
            rotate: particle.rotation + (isMobile ? 360 : 720),
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};
