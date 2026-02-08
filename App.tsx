
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
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-primary/30 selection:text-white relative">
      <FloatingDock />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#18181b',
            color: '#fafafa',
            border: '1px solid rgba(255,255,255,0.08)',
          },
        }}
      />
      
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
