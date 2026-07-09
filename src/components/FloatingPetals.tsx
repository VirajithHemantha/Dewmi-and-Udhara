import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

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

  useEffect(() => {
    // Array of beautiful gold hues
    const colors = ['#D4AF37', '#F3E5AB', '#B8860B', '#FDE592', '#8A6811'];
    const shapes: ('circle' | 'rect' | 'tall-rect')[] = ['circle', 'rect', 'tall-rect'];
    
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 6 + 6, // 6px to 12px
      rotation: Math.random() * 360,
      duration: Math.random() * 10 + 10, // 10s to 20s fall time
      delay: Math.random() * 15,
      color: colors[Math.floor(Math.random() * colors.length)],
      drift: Math.random() * 40 - 20, // Swaying left/right
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{ 
            backgroundColor: particle.color,
            width: `${particle.size}px`,
            height: particle.shape === 'tall-rect' ? `${particle.size * 1.5}px` : `${particle.size}px`,
            borderRadius: particle.shape === 'circle' ? '50%' : '2px',
            boxShadow: `0 0 8px ${particle.color}80` // Soft gold glow
          }}
          initial={{
            x: `${particle.x}vw`,
            y: '-10vh',
            rotate: particle.rotation,
            opacity: 0,
            rotateX: 0,
            rotateY: 0
          }}
          animate={{
            y: '110vh',
            x: `${particle.x + particle.drift}vw`,
            rotate: particle.rotation + 720,
            rotateX: 1080,
            rotateY: 720,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};
