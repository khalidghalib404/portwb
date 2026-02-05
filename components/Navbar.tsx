
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GradientText } from './ui/GradientText';
import { NAV_ITEMS } from '../constants';
import { cn } from './ui/Spotlight';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => item.href.replace('#', ''));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 lg:px-12 pointer-events-none"
    >
      <div className="pointer-events-auto">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          <GradientText animationSpeed={5} colors={["#fff", "#7042f8", "#fff"]}>
            KHALID GHALIB
          </GradientText>
        </a>
      </div>
      
      <div className="hidden lg:flex gap-2 items-center pointer-events-auto bg-black/50 backdrop-blur-xl px-2 py-2 rounded-full border border-white/10 shadow-2xl">
         {NAV_ITEMS.map((item) => {
           const isActive = activeSection === item.href.replace('#', '');
           return (
             <a 
               key={item.name} 
               href={item.href}
               onClick={(e) => handleNavClick(e, item.href)}
               className={cn(
                 "text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all relative group",
                 isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"
               )}
             >
               {item.name}
               {isActive && (
                 <motion.span 
                   layoutId="navActiveUnderline"
                   className="absolute inset-0 bg-white/10 rounded-full -z-10" 
                 />
               )}
             </a>
           );
         })}
      </div>
      
      <div className="hidden lg:flex gap-6 pointer-events-auto">
         <a href="mailto:khalidghalib001@gmail.com" className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95 shadow-xl">
           Hire Me
         </a>
      </div>
    </motion.nav>
  );
};
