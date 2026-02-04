import { motion } from 'framer-motion';
import { Shield, Zap, Users, Award, Clock, Headphones } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';
import GlassCard from '@/components/GlassCard';

const reasons = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and compliance certifications.',
  },
  {
    icon: Zap,
    title: 'Rapid Delivery',
    description: 'Agile methodologies ensuring faster time-to-market without compromising quality.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Seasoned professionals with deep expertise across multiple technology domains.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: '500+ successful projects delivered across diverse industries globally.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support ensuring your systems run smoothly.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Partnership',
    description: 'Long-term collaboration focused on your business growth and success.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Main Visual */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="w-[400px] h-[400px] mx-auto relative"
              >
                {/* Orbit Rings */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full" />
                <div className="absolute inset-8 border-2 border-secondary/20 rounded-full" />
                <div className="absolute inset-16 border-2 border-accent/20 rounded-full" />
                
                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-4xl font-bold text-primary-foreground">TZ</span>
                  </div>
                </div>

                {/* Orbiting Elements */}
                {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                  <motion.div
                    key={angle}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${angle}deg) translateX(180px) rotate(-${angle}deg)`,
                    }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      delay: index * 0.3,
                      repeat: Infinity 
                    }}
                  >
                    <div className="w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 -left-4 glass-card rounded-lg px-4 py-3"
              >
                <div className="text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-xs text-muted-foreground">Uptime SLA</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-10 -right-4 glass-card rounded-lg px-4 py-3"
              >
                <div className="text-2xl font-bold gradient-text">4.9/5</div>
                <div className="text-xs text-muted-foreground">Client Rating</div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <div>
            <SectionLabel text="Why Choose Us" />
            
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6">
                Your Trusted Technology{' '}
                <span className="gradient-text">Partner</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-muted-foreground text-lg mb-10">
                We combine deep technical expertise with industry knowledge to deliver 
                solutions that drive real business outcomes.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <AnimatedSection key={reason.title} delay={0.2 + index * 0.1}>
                  <GlassCard className="p-4" glowOnHover>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                        <reason.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{reason.title}</h4>
                        <p className="text-sm text-muted-foreground">{reason.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
