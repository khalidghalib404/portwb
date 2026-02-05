
import React from 'react';
import { FloatingDock } from './components/ui/FloatingDock';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Quote } from './components/Quote';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-primary/30 selection:text-white relative">
      <FloatingDock />
      
      <Hero />
      <Quote />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
