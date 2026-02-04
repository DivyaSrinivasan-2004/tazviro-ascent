import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Layers, Zap, Shield, BarChart3, Workflow } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';

const solutions = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'AI-driven capabilities engineered to give your business a competitive edge.',
    path: '/solutions/ai',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
  {
    icon: Layers,
    title: 'Legacy Modernization',
    description: 'Transform outdated systems into modern, scalable architectures.',
    path: '/solutions/modernization',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Enterprise-grade security solutions protecting your digital assets.',
    path: '/solutions/security',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description: 'Turn raw data into actionable insights with advanced analytics.',
    path: '/solutions/analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    icon: Zap,
    title: 'Product Engineering',
    description: 'End-to-end product development from ideation to market launch.',
    path: '/solutions/product',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    icon: Workflow,
    title: 'Cloud Transformation',
    description: 'Seamless cloud migration and multi-cloud optimization strategies.',
    path: '/solutions/cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel text="Solutions" className="justify-center" />
          
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6">
              Powering Businesses Through{' '}
              <span className="gradient-text">Smart Engineering</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Comprehensive solutions designed to solve complex business challenges 
              and drive digital transformation at scale.
            </p>
          </AnimatedSection>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <AnimatedSection key={solution.title} delay={0.1 * index}>
              <Link to={solution.path} className="block group">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative rounded-2xl overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] relative">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <solution.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {solution.description}
                    </p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
