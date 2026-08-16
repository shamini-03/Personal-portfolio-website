import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalData } from '../data/personal';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-[100px]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl border border-white/5 rounded-full border-dashed animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            className="flex flex-col space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <p className="text-primary font-medium tracking-wide mb-2 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-primary"></span>
                Hello, I’m
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-tight mb-2">
                {personalData.name.split(' ')[0]} <br/>
                <span className="text-gradient">{personalData.name.split(' ')[1]}</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-xl md:text-2xl text-text-secondary font-medium">
                {personalData.primaryTitle}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-text-secondary/80 max-w-lg leading-relaxed text-lg">
                {personalData.shortIntro}
              </p>
            </motion.div>

            {/* Subtle connection concept */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 text-xs font-medium text-text-secondary/60 uppercase tracking-widest mt-2 mb-4">
              <span>Business Needs</span>
              <ArrowRight size={12} className="text-primary" />
              <span>Analysis</span>
              <ArrowRight size={12} className="text-primary" />
              <span className="text-primary/80">Digital Solutions</span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all flex items-center gap-2 group"
              >
                Explore My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href={personalData.cvUrl} 
                className="px-8 py-3 bg-surface border border-white/10 text-text-primary rounded-full font-medium hover:border-primary/50 hover:bg-surface-hover transition-all flex items-center gap-2"
                download
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-6">
              <a href={personalData.githubUrl} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-primary transition-colors hover:-translate-y-1 transform duration-300" aria-label="GitHub">
                <GithubIcon size={24} />
              </a>
              <a href={personalData.linkedinUrl} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-primary transition-colors hover:-translate-y-1 transform duration-300" aria-label="LinkedIn">
                <LinkedinIcon size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image Frame - Creative Blob & Zoom */}
          <motion.div 
            className="hidden lg:flex justify-end relative items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          >
            <div className="relative w-80 h-80 md:w-[26rem] md:h-[26rem]">
              
              {/* Background Glows for the Blob */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-cyan-300 blob-shape opacity-20 blur-2xl animate-morph" style={{ animationDelay: '1s' }}></div>
              <div className="absolute inset-0 border-2 border-primary/50 blob-shape animate-morph" style={{ animationDelay: '0.5s', transform: 'scale(1.05)' }}></div>
              
              {/* Image container with Blob shape */}
              <div className="absolute inset-0 bg-surface blob-shape overflow-hidden border-2 border-primary/20 z-10 group shadow-[0_0_40px_rgba(0,210,255,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-primary/15 to-cyan-300/10 z-10 pointer-events-none mix-blend-color transition-opacity duration-700 group-hover:opacity-40"></div>
                <img 
                  src={personalData.photoUrl} 
                  alt={personalData.name} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.42] group-hover:rotate-1 scale-[1.35] origin-[50%_25%] saturate-75 contrast-110 brightness-90 group-hover:saturate-100 group-hover:brightness-100"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x500/0f172a/00d2ff?text=SD";
                  }}
                />
              </div>
              
              {/* Floating decorative elements */}
              <motion.div 
                className="absolute -bottom-4 -left-8 glass-card p-4 rounded-xl z-20 hidden md:block border border-primary/20 shadow-[0_0_20px_rgba(0,210,255,0.15)]"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">BS</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary">Business Strategy</p>
                    <p className="text-xs text-text-secondary">& Tech Integration</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hidden md:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase writing-mode-vertical">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-text-secondary to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
