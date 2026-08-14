import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { achievements } from '../data/achievements';
import { Award, ExternalLink } from 'lucide-react';

const Achievements = () => {
  if (achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-20 relative bg-surface/20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Certifications & Achievements" 
          subtitle="Recognition of my skills, continuous learning, and project success." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image Section */}
              <div className="h-48 relative overflow-hidden bg-surface">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x300/131b2f/0ea5e9?text=Certificate";
                  }}
                />
                
                {item.link && (
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-primary text-white font-medium rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      View Credential <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="shrink-0 p-2 bg-primary/10 rounded-full text-primary">
                    <Award size={18} />
                  </div>
                </div>
                
                <p className="text-text-secondary font-medium mb-1">{item.issuer}</p>
                <p className="text-text-secondary/60 text-sm mb-4">{item.date} • {item.category}</p>
                
                <p className="text-text-secondary text-sm mt-auto">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
