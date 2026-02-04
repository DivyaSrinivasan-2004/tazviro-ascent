import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';
import GlassCard from '@/components/GlassCard';

const Careers = () => {
  // Currently no openings
  const openings: any[] = [];

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <SectionLabel text="Careers" className="justify-center" />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6"
            >
              Join Our <span className="gradient-text">Team</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Be part of a team that's shaping the future of technology. We're always looking for passionate individuals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { title: 'Innovation First', description: 'We encourage creative thinking and experimentation.' },
              { title: 'Work-Life Balance', description: 'Flexible schedules and remote work options.' },
              { title: 'Growth Opportunities', description: 'Continuous learning and career advancement.' },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <GlassCard className="text-center" glowOnHover>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

          {/* Openings */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">Current Openings</h2>
            
            {openings.length > 0 ? (
              <div className="space-y-4">
                {openings.map((job, index) => (
                  <AnimatedSection key={job.title} delay={index * 0.1}>
                    <GlassCard className="flex items-center justify-between" glowOnHover>
                      <div>
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" /> {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" /> {job.type}
                          </span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 text-primary font-medium"
                      >
                        Apply <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </GlassCard>
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <AnimatedSection>
                <GlassCard className="text-center py-16">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Briefcase className="w-16 h-16 mx-auto text-primary/50 mb-6" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-semibold mb-4"
                  >
                    <span className="inline-block overflow-hidden">
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        className="inline-block whitespace-nowrap overflow-hidden border-r-2 border-primary"
                        style={{ borderRightColor: 'hsl(var(--primary))' }}
                      >
                        Currently, there are no openings.
                      </motion.span>
                    </span>
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="text-muted-foreground"
                  >
                    We're always looking for talented individuals. Send your resume to{' '}
                    <a href="mailto:careers@tazviro.com" className="text-primary hover:underline">
                      careers@tazviro.com
                    </a>
                  </motion.p>
                </GlassCard>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
