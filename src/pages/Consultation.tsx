import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection from '@/components/AnimatedSection';
import SectionLabel from '@/components/SectionLabel';
import GlassCard from '@/components/GlassCard';

const Consultation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const benefits = [
    'Expert consultation with our technical team',
    'Custom solution recommendations',
    'Project timeline and cost estimation',
    'Technology stack guidance',
    'No obligation, completely free',
  ];

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <SectionLabel text="Free Consultation" className="justify-center" />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6"
            >
              Schedule Your <span className="gradient-text">Free Consultation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Get expert advice on your next technology project. Our team is ready to help you succeed.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Benefits */}
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold mb-8">What You'll Get</h2>
              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="grid sm:grid-cols-2 gap-4">
                <GlassCard className="text-center p-6">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold">Flexible Scheduling</h4>
                  <p className="text-sm text-muted-foreground mt-1">Choose a time that works for you</p>
                </GlassCard>
                <GlassCard className="text-center p-6">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold">30-60 Minutes</h4>
                  <p className="text-sm text-muted-foreground mt-1">Comprehensive discussion</p>
                </GlassCard>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right">
              <GlassCard className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4">Consultation Scheduled!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for your interest. Our team will contact you within 24 hours to confirm your consultation.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-primary/50"
                    >
                      Schedule Another
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-6">Book Your Session</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Full Name *</label>
                          <Input
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="bg-background/50 border-border focus:border-primary"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email *</label>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="bg-background/50 border-border focus:border-primary"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Company</label>
                          <Input
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="bg-background/50 border-border focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone</label>
                          <Input
                            type="tel"
                            placeholder="+1 234 567 890"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="bg-background/50 border-border focus:border-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Project Type *</label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 focus:border-primary focus:outline-none transition-colors"
                          required
                        >
                          <option value="">Select project type</option>
                          <option value="web">Web Development</option>
                          <option value="mobile">Mobile App</option>
                          <option value="ai">AI/ML Solution</option>
                          <option value="cloud">Cloud Services</option>
                          <option value="enterprise">Enterprise Software</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Tell us about your project</label>
                        <Textarea
                          placeholder="Describe your project requirements, timeline, and any specific challenges..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-background/50 border-border focus:border-primary min-h-[120px]"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold py-6 hover:shadow-glow transition-shadow group"
                      >
                        Schedule Consultation
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </>
                )}
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;
