import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import DepthCarousel from './DepthCarousel';
import { GithubIcon } from './BrandIcons';
import { projects } from '../data/projects';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const carouselItems = useMemo(() => projects.map(project => ({
    image: project.image,
    alt: `${project.title} project preview`
  })), []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(14,165,233,0.08),transparent_36%)] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative">
        <SectionHeading title="Featured Projects" subtitle="A selection of work demonstrating my ability to bridge business requirements and technical implementation." />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} className="h-[360px] sm:h-[420px] lg:h-[500px] relative">
            <DepthCarousel
              items={carouselItems}
              cardWidth={460}
              cardHeight={350}
              depth={200}
              spread={76}
              tilt={18}
              visibleCards={3}
              autoplay
              autoplayDelay={4800}
              onChange={index => setActiveIndex(index)}
            />
          </motion.div>

          <div className="min-h-[430px] flex items-center" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.id}
                initial={{ opacity: 0, x: 28, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -18, y: -6 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="w-full glass rounded-2xl border border-white/10 p-6 sm:p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-5xl font-bold text-white/10">{activeProject.id}</span>
                  <span className="text-primary font-semibold tracking-widest text-xs uppercase">{activeProject.category}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-text-primary mb-5 leading-tight"><span className="text-primary">{activeProject.title}</span></h3>
                <p className="text-text-secondary leading-relaxed mb-6">{activeProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-8" aria-label="Technologies used">
                  {activeProject.technologies.map(technology => <span key={technology} className="px-3 py-1.5 text-xs font-medium bg-primary/10 rounded-full text-primary border border-primary/20">{technology}</span>)}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={activeProject.liveUrl || activeProject.image} target="_blank" rel="noreferrer" aria-label={`View ${activeProject.title} project`} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-semibold hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(14,165,233,0.28)] transition-all duration-300">
                    View Project <ExternalLink size={17} />
                  </a>
                  {activeProject.githubUrl ? (
                    <a href={activeProject.githubUrl} target="_blank" rel="noreferrer" aria-label={`Open ${activeProject.title} GitHub repository`} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-text-primary font-semibold hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300">
                      <GithubIcon size={18} /> GitHub
                    </a>
                  ) : (
                    <button type="button" disabled aria-label={`GitHub repository for ${activeProject.title} is not public`} title="Repository is not public" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-text-secondary/40 cursor-not-allowed">
                      <GithubIcon size={18} /> GitHub
                    </button>
                  )}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
