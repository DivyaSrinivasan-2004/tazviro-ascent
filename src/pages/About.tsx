import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';
import GlassCard from '@/components/GlassCard';
import CTASection from '@/components/sections/CTASection';
import { Target, Eye, Lightbulb, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower businesses with intelligent technology solutions that drive growth, efficiency, and innovation.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the most trusted technology partner for enterprises seeking digital transformation excellence.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously pushing boundaries with cutting-edge technologies and creative problem-solving.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building lasting partnerships through transparent communication and shared success.',
    },
  ];

  const stats = [
    { value: '200+', label: 'Global Clients' },
    { value: '500+', label: 'Projects Delivered' },
    { value: '50+', label: 'Expert Team Members' },
    { value: '15+', label: 'Countries Served' },
  ];

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
            <SectionLabel text="About Us" className="justify-center" />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6"
            >
              Pioneering <span className="gradient-text">Digital Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Tazviro Technologies is a global technology company delivering AI-powered solutions, 
              enterprise platforms, and digital transformation services to businesses worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <GlassCard className="h-full text-center" glowOnHover>
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="stat-value">{stat.value}</div>
                  <div className="text-muted-foreground mt-2">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <SectionLabel text="Our Story" />
              <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6">
                A Journey of <span className="gradient-text">Innovation</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Founded with a vision to bridge the gap between technology and business success, 
                Tazviro Technologies has grown from a small team of passionate engineers to a 
                global technology partner trusted by hundreds of enterprises.
              </p>
              <p className="text-muted-foreground mb-4">
                Our journey has been defined by our commitment to excellence, continuous learning, 
                and an unwavering focus on delivering value to our clients.
              </p>
              <p className="text-muted-foreground">
                Today, we stand as a leader in AI-powered solutions, cloud transformation, and 
                digital innovation, helping businesses across industries achieve their full potential.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                <GlassCard className="p-6">
                  <Globe className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Global Reach</h4>
                  <p className="text-sm text-muted-foreground">Serving clients across 15+ countries</p>
                </GlassCard>
                <GlassCard className="p-6">
                  <Award className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Award Winning</h4>
                  <p className="text-sm text-muted-foreground">Recognized for excellence</p>
                </GlassCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
