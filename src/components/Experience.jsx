import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { experience } from '../data/experience';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Experience & Leadership" 
          subtitle="Roles where I've contributed, learned, and led." 
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative border-l border-white/10 ml-6 md:ml-8 space-y-12 pb-8">
            {experience.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[21px] md:-left-[25px] top-1 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center">
                  <Briefcase size={20} className="text-primary/70" />
                </div>

                <div className="glass-card p-6 md:p-8 relative group hover:border-primary/30 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-lg text-text-secondary font-medium mt-1">
                        {item.organization}
                      </p>
                      <span className="inline-block mt-2 text-xs uppercase tracking-wider font-semibold text-primary/80 bg-primary/10 px-2 py-1 rounded">
                        {item.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-surface px-3 py-1 rounded-full border border-white/5 text-sm text-text-secondary/80 shrink-0 h-fit">
                      <Calendar size={14} />
                      {item.period}
                    </div>
                  </div>
                  
                  {item.description && (
                    <p className="text-text-secondary mb-4 italic text-sm">
                      {item.description}
                    </p>
                  )}

                  {item.responsibilities && item.responsibilities.length > 0 && (
                    <ul className="mt-4 space-y-2 text-text-secondary/90 text-sm md:text-base list-disc list-inside">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="leading-relaxed pl-2">
                          <span className="-ml-2">{resp}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
