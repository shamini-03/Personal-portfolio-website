import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-text-primary flex flex-col">
      <SplashCursor
        RAINBOW_MODE={false}
        COLOR="#00d2ff"
        BACK_COLOR={{ r: 0.024, g: 0.043, b: 0.075 }}
        DENSITY_DISSIPATION={4}
        VELOCITY_DISSIPATION={2.5}
        SPLAT_RADIUS={0.18}
        SPLAT_FORCE={5000}
        CURL={25}
      />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Achievements />
        <ResumeCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
