import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';

const AboutSection = () => {
  const features = [
    'Enterprise-grade architecture designed for scalability, security, and long-term performance.',
    'AI-driven automation and analytics that reduce operational complexity.',
    'Proven delivery frameworks enabling consistent execution across global programs.',
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <SectionLabel text="Our Global Impact" />
            
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 leading-tight">
                Building Intelligent, Scalable & Secure{' '}
                <span className="gradient-text">Digital Ecosystems</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-muted-foreground text-lg mb-8">
                Tazviro Technologies is a technology and consulting partner delivering intelligent, 
                AI-powered software, enterprise platforms, and scalable digital solutions. We help 
                organizations modernize systems, automate operations, and execute growth with confidence at scale.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <Link to="/about">
                <Button 
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold group"
                >
                  Explore Our Capabilities
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2">
            <AnimatedSection direction="right">
              <div className="relative">
                {/* Main Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card rounded-2xl p-8 relative z-10"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: '200+', label: 'Clients Worldwide', color: 'from-primary to-teal' },
                      { value: '9+', label: 'Years Founded & Scaling', color: 'from-teal to-secondary' },
                      { value: '500+', label: 'Projects Delivered', color: 'from-secondary to-accent' },
                      { value: '₹30Cr+', label: 'Monthly Execution Capability', color: 'from-accent to-primary' },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="text-center p-4 glass-card rounded-xl"
                      >
                        <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent/20 rounded-xl" />
                
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -left-6 glass-card rounded-lg px-4 py-2 flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm font-medium">Trusted Partner</span>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
