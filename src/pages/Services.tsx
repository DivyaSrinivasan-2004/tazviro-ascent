import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Bot, Cloud, Shield, Database, Code, Palette } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';
import GlassCard from '@/components/GlassCard';
import CTASection from '@/components/sections/CTASection';

const services = [
  {
    icon: Globe,
    title: 'Website & Web Application',
    description: 'High-performance websites and enterprise-grade web platforms engineered for speed, security, and scalability.',
    features: ['Custom Web Applications', 'E-commerce Solutions', 'Progressive Web Apps', 'API Development'],
    path: '/services/web-development',
  },
  {
    icon: Smartphone,
    title: 'Mobile Application Development',
    description: 'Modern, scalable mobile applications across Android, iOS, and cross-platform frameworks.',
    features: ['Native iOS & Android', 'Cross-platform Apps', 'App Modernization', 'App Store Optimization'],
    path: '/services/mobile-apps',
  },
  {
    icon: Bot,
    title: 'AI & Automation Solutions',
    description: 'Intelligent automation and AI systems that streamline operations and drive smarter decisions.',
    features: ['Machine Learning', 'Process Automation', 'Chatbots & NLP', 'Predictive Analytics'],
    path: '/services/ai-solutions',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Seamless cloud migration and optimization strategies for enhanced scalability and efficiency.',
    features: ['Cloud Migration', 'Multi-cloud Strategy', 'DevOps & CI/CD', 'Infrastructure as Code'],
    path: '/services/cloud-services',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Security Operations'],
    path: '/services/cybersecurity',
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    features: ['Data Engineering', 'Business Intelligence', 'Data Visualization', 'Big Data Solutions'],
    path: '/services/data-analytics',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to address your unique business challenges.',
    features: ['Enterprise Software', 'System Integration', 'Legacy Modernization', 'Quality Assurance'],
    path: '/services/custom-software',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates engaging digital experiences and drives conversions.',
    features: ['User Research', 'Interface Design', 'Prototyping', 'Design Systems'],
    path: '/services/design',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <SectionLabel text="Services" className="justify-center" />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6"
            >
              Comprehensive <span className="gradient-text">Technology Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              End-to-end technology solutions that drive digital transformation and accelerate business growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.05}>
                <Link to={service.path} className="block h-full">
                  <GlassCard className="h-full group" hover3D glowOnHover>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-1 mb-4">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </GlassCard>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
