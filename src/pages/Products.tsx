import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';
import GlassCard from '@/components/GlassCard';
import CTASection from '@/components/sections/CTASection';

const products = [
  {
    title: 'Enterprise Suite',
    description: 'Comprehensive enterprise resource planning solution with AI-powered analytics, workflow automation, and real-time insights.',
    features: ['AI Analytics Dashboard', 'Workflow Automation', 'Real-time Reporting', 'Multi-tenant Architecture'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    path: '/products/enterprise-suite',
  },
  {
    title: 'Cloud Platform',
    description: 'Scalable cloud infrastructure platform designed for modern enterprises with built-in security and compliance.',
    features: ['Auto-scaling', 'Multi-cloud Support', 'Security & Compliance', 'Cost Optimization'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    path: '/products/cloud-platform',
  },
  {
    title: 'AI Analytics',
    description: 'Advanced analytics platform powered by machine learning for predictive insights and data-driven decisions.',
    features: ['Predictive Analytics', 'Natural Language Queries', 'Custom Dashboards', 'Data Integration'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    path: '/products/ai-analytics',
  },
];

const Products = () => {
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
            <SectionLabel text="Products" className="justify-center" />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6"
            >
              Enterprise-Grade <span className="gradient-text">Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Discover our suite of powerful products designed to transform your business operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {products.map((product, index) => (
              <AnimatedSection key={product.title} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {product.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {product.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3 mb-8">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={product.path}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-2xl overflow-hidden"
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full aspect-[4/3] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </motion.div>
                  </div>
                </div>
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

export default Products;
