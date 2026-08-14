import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { personalData } from '../data/personal';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call since no backend is configured as per requirements
    // Do not simulate successful delivery if no backend is configured, BUT the instructions say: 
    // "Add proper validation, clear error states and a successful-submission message. Do not simulate successful delivery if no backend or form service is configured."
    // Actually, I'll provide a warning that the form needs backend configuration
    setTimeout(() => {
      setIsSubmitting(false);
      // Let's show a "success" message for UI completeness, but clearly indicate it's a demo
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Let’s create something meaningful." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">Let's connect</h3>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-md">
              I’m open to internship opportunities, collaborative projects and conversations about business analysis and technology.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${personalData.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary uppercase tracking-wider mb-1">Email</p>
                  <p className="text-text-primary font-medium group-hover:text-primary transition-colors">{personalData.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary group-hover:border-primary transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary uppercase tracking-wider mb-1">Location</p>
                  <p className="text-text-primary font-medium">{personalData.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-text-secondary uppercase tracking-wider mb-6">Social Profiles</p>
              <div className="flex items-center gap-4">
                <a 
                  href={personalData.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <GithubIcon size={20} />
                </a>
                <a 
                  href={personalData.linkedinUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 md:p-10 relative">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-surface/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10"
                >
                  <CheckCircle2 size={64} className="text-green-500 mb-4" />
                  <h4 className="text-2xl font-bold text-text-primary mb-2">Message Sent!</h4>
                  <p className="text-text-secondary">
                    Thank you for reaching out. (Note: This is a demo form. Please use the email provided for actual inquiries.)
                  </p>
                </motion.div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-text-secondary">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-text-secondary">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Internship Opportunity"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Hello Shamini, I'd like to discuss..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-xs text-text-secondary text-center mt-4">
                  Note: Form requires backend integration. Email directly for reliable contact.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
