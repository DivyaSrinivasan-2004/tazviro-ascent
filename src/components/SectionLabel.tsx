import { motion } from 'framer-motion';

interface SectionLabelProps {
  text: string;
  className?: string;
}

const SectionLabel = ({ text, className = '' }: SectionLabelProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`section-label ${className}`}
    >
      {text}
    </motion.div>
  );
};

export default SectionLabel;
