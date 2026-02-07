import React from 'react';
import { Github, Linkedin, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-neutral-500 text-sm text-center md:text-left">
          <p>© {new Date().getFullYear()} Khalid Ghalib. All rights reserved.</p>
          <p className="mt-1">khalidghalib001@gmail.com | +93 790289842</p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/khalidghalib404" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/khalid-ghalib-a3619b288/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="https://khalidgh.netlify.app" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors"><Globe size={20} /></a>
        </div>
      </div>
    </footer>
  );
};
