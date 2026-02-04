import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Animated Gradient Mesh */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(at 40% 20%, hsl(190 100% 50% / 0.2) 0px, transparent 50%),
            radial-gradient(at 80% 0%, hsl(270 91% 65% / 0.15) 0px, transparent 50%),
            radial-gradient(at 0% 50%, hsl(193 100% 42% / 0.2) 0px, transparent 50%),
            radial-gradient(at 80% 50%, hsl(190 100% 50% / 0.15) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsl(270 91% 65% / 0.2) 0px, transparent 50%)
          `,
          backgroundSize: '200% 200%',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <AnimatedSection>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Ready to Transform?</span>
            </motion.div>
          </AnimatedSection>

          {/* Heading */}
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
              Let's Build Something{' '}
              <span className="gradient-text">Extraordinary</span>{' '}
              Together
            </h2>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Partner with Tazviro Technologies and unlock the full potential of your business 
              with cutting-edge technology solutions.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/consultation">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-10 py-7 text-lg hover:shadow-glow transition-all duration-300 group"
                >
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/50 text-foreground hover:bg-primary/10 px-10 py-7 text-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          {/* Trust Indicators */}
          <AnimatedSection delay={0.4}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-sm">No Hidden Costs</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default CTASection;
