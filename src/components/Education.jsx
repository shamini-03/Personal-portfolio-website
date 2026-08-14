import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { education } from '../data/education';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-surface/20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Education" 
          subtitle="My academic journey and continuous learning path." 
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative border-l border-white/10 ml-6 md:ml-8 space-y-12 pb-8">
            {education.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[21px] md:-left-[25px] top-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center glow-effect shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                  <GraduationCap size={20} className="text-primary" />
                </div>

                <div className="glass-card p-6 md:p-8 relative group hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-lg text-text-secondary font-medium mt-1">
                        {item.institution}
                      </p>
                      {item.department && (
                        <p className="text-sm text-text-secondary/80 mt-1">
                          {item.department}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-2 shrink-0 md:items-end text-sm text-text-secondary/80 font-medium">
                      <div className="flex items-center gap-2 bg-surface px-3 py-1 rounded-full border border-white/5">
                        <Calendar size={14} />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1">
                        <span className={`w-2 h-2 rounded-full ${item.status === 'Completed' ? 'bg-green-500' : 'bg-primary animate-pulse'}`}></span>
                        {item.status}
                        {item.expectedGraduation && ` (Expected ${item.expectedGraduation})`}
                      </div>
                    </div>
                  </div>

                  {item.coursework && item.coursework.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <h4 className="text-sm font-semibold text-text-primary mb-3">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.coursework.map((course, i) => (
                          <span key={i} className="text-xs bg-background/50 border border-white/5 text-text-secondary px-2.5 py-1 rounded-md">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
