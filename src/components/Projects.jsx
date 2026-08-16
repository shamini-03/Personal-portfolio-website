import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of work demonstrating my ability to bridge business requirements and technical implementation."
        />

        <div className="space-y-24 md:space-y-32 mt-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isSpecial = project.accentColor === 'electric';
            
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className={`absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5 ${isSpecial ? 'bg-cyan-500/20' : ''}`}></div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface aspect-[4/3] w-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/800x600/131b2f/0ea5e9?text=Project+Screenshot";
                      }}
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white text-background flex items-center justify-center hover:scale-110 transition-transform">
                          <GithubIcon size={20} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold text-white/5">{project.id}</span>
                    <span className="text-primary font-medium tracking-wider text-sm uppercase">{project.category}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="glass p-6 rounded-xl mb-6 relative">
                    {isSpecial && <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl"></div>}
                    <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                      <strong className="text-text-primary block mb-1">Problem:</strong>
                      {project.problem}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      <strong className="text-text-primary block mb-1">Solution:</strong>
                      {project.solution}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-text-primary font-semibold mb-2 text-sm">Key Contribution:</h4>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary list-disc list-inside">
                      {project.contribution.slice(0, 4).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                      {project.contribution.length > 4 && <li>...and more</li>}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-surface rounded-full text-text-secondary border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {project.githubUrl ? (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-white transition-colors p-2">
                        <GithubIcon size={20} />
                      </a>
                    ) : (
                      <span className="text-text-secondary/30 p-2 cursor-not-allowed" title="Repository not public">
                        <GithubIcon size={20} />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
