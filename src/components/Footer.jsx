import { personalData } from '../data/personal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface/50 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-6">
            Let’s turn business challenges into digital opportunities.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-text-secondary gap-4">
          <p>
            © {currentYear} {personalData.name}. Designed and developed with care.
          </p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
