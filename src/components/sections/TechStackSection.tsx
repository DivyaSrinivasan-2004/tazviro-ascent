import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';

const techLogos = [
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Go', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'Flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'TensorFlow', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
];

const TechStackSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionLabel text="Our Digital Capabilities" className="justify-center" />
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-bold mt-4">
              Platforms & Tools We Trust to Build{' '}
              <span className="gradient-text">World-Class Solutions</span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Infinite Scroll Logos */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card/50 to-transparent z-10" />

          {/* First Row - Left to Right */}
          <div className="flex overflow-hidden mb-8">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-12 shrink-0"
            >
              {[...techLogos, ...techLogos].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="w-20 h-20 glass-card rounded-xl flex items-center justify-center p-4 shrink-0 hover:scale-110 transition-transform"
                >
                  <img
                    src={tech.url}
                    alt={tech.name}
                    className="w-10 h-10 object-contain filter brightness-90 hover:brightness-110 transition-all"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [-1920, 0] }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex gap-12 shrink-0"
            >
              {[...techLogos.reverse(), ...techLogos].map((tech, index) => (
                <div
                  key={`${tech.name}-rev-${index}`}
                  className="w-20 h-20 glass-card rounded-xl flex items-center justify-center p-4 shrink-0 hover:scale-110 transition-transform"
                >
                  <img
                    src={tech.url}
                    alt={tech.name}
                    className="w-10 h-10 object-contain filter brightness-90 hover:brightness-110 transition-all"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
