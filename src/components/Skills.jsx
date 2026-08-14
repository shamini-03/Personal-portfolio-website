import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skills } from '../data/skills';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 bg-surface/20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="A comprehensive toolkit spanning business analysis, development, and system integration."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="glass-card p-6 h-full flex flex-col group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                    {category.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.items.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx} 
                      className="px-3 py-1.5 text-sm font-medium bg-background text-text-secondary rounded-lg border border-white/5 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
