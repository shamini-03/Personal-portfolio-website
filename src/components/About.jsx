import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { personalData, interests, whatIBring } from '../data/personal';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="About Me" 
          subtitle="Turning ideas and business needs into practical solutions." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-text-secondary">
              {personalData.about}
            </p>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-6 text-text-primary">What I bring to the table</h3>
              <ul className="space-y-4">
                {whatIBring.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span className="text-text-secondary">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-text-primary">Key Interests</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-5 group flex items-center justify-between cursor-default"
                >
                  <span className="font-medium text-text-secondary group-hover:text-primary transition-colors">
                    {interest}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></div>
                </motion.div>
              ))}
            </div>

            {/* Abstract decorative element for Business/Tech connection */}
            <div className="mt-12 p-6 rounded-2xl bg-surface/30 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="text-sm uppercase tracking-wider text-text-secondary block mb-1">Domain</span>
                  <span className="font-bold text-text-primary">Business Strategy</span>
                </div>
                <div className="flex-1 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent relative my-4 sm:my-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary glow-effect"></div>
                </div>
                <div className="text-center sm:text-right">
                  <span className="text-sm uppercase tracking-wider text-text-secondary block mb-1">Execution</span>
                  <span className="font-bold text-text-primary">Digital Technology</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
