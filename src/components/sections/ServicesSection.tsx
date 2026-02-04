import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Bot, Cloud, Shield, Database } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';
import GlassCard from '@/components/GlassCard';

const services = [
  {
    icon: Globe,
    title: 'Website & Web Application',
    description: 'High-performance websites and enterprise-grade web platforms engineered for speed, security, and scalability.',
    path: '/services/web-development',
    gradient: 'from-primary to-teal',
  },
  {
    icon: Smartphone,
    title: 'Mobile Application Development',
    description: 'Modern, scalable mobile applications across Android, iOS, and cross-platform frameworks.',
    path: '/services/mobile-apps',
    gradient: 'from-teal to-secondary',
  },
  {
    icon: Bot,
    title: 'AI & Automation Solutions',
    description: 'Intelligent automation and AI systems that streamline operations and drive smarter decisions.',
    path: '/services/ai-solutions',
    gradient: 'from-secondary to-accent',
  },
  {
    icon: Cloud,
    title: 'Cloud Transformation',
    description: 'Seamless cloud migration and optimization strategies for enhanced scalability and efficiency.',
    path: '/services/cloud-services',
    gradient: 'from-accent to-purple',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    path: '/services/cybersecurity',
    gradient: 'from-purple to-primary',
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    path: '/services/data-analytics',
    gradient: 'from-primary to-secondary',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel text="Services" className="justify-center" />
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6">
              Transforming Businesses Through{' '}
              <span className="gradient-text">Engineering Excellence</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg">
              We deliver end-to-end technology solutions that drive digital transformation 
              and accelerate business growth across industries.
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={0.1 * index}>
              <Link to={service.path} className="block h-full">
                <GlassCard 
                  className="h-full group hover:border-primary/40 transition-all duration-300"
                  hover3D
                  glowOnHover
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center text-primary font-medium">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </GlassCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* View All CTA */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mt-12">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
