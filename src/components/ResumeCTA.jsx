import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { personalData } from '../data/personal';

const ResumeCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card max-w-4xl mx-auto p-10 md:p-16 rounded-3xl text-center border-primary/20 relative overflow-hidden group"
        >
          {/* Subtle animated border line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Want to know more about my journey?
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Download my CV to explore my education, technical knowledge, projects and achievements in detail.
          </p>
          
          <motion.a 
            href={personalData.cvUrl}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all"
          >
            <Download size={24} />
            Download My CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeCTA;
