import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover3D?: boolean;
  glowOnHover?: boolean;
}

const GlassCard = ({ 
  children, 
  className = '', 
  hover3D = false,
  glowOnHover = false 
}: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hover3D ? { 
        rotateX: 5, 
        rotateY: -5, 
        translateZ: 20,
        transition: { duration: 0.3 }
      } : {}}
      className={`glass-card rounded-xl p-6 ${
        glowOnHover ? 'hover:shadow-glow transition-shadow duration-300' : ''
      } ${className}`}
      style={hover3D ? { transformStyle: 'preserve-3d' } : {}}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
